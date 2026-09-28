// 2D editor: floors, rooms (rectangles and free shapes), snapping, undo, background template.

import { css, html, LitElement, nothing, svg, type PropertyValues, type TemplateResult } from "lit";
import { fetchImage, storeImage } from "../api.ts";
import { areaEntities, autoPlace, entityName, isPlaceable, kindOf } from "../devices.ts";
import { generateWalls, type Wall } from "../geometry/walls.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import { iconPath } from "../icons.ts";
import {
  bounds,
  centroid,
  FLOOR_MATERIALS,
  isAxisRect,
  newFloor,
  pointInPolygon,
  polygonArea,
  uid,
  type Building,
  type Floor,
  type Room,
  type Vec2,
} from "../model.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

type Tool = "select" | "rect" | "polygon";

type Drag =
  | { kind: "pan"; last: [number, number] }
  | { kind: "vertex"; roomId: string; index: number; base: Building; moved: boolean }
  | { kind: "device"; entityId: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "room"; roomId: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "rect"; start: Vec2; end: Vec2 }
  | { kind: "tap"; startScreen: [number, number]; last: [number, number]; panning: boolean };

interface Guides {
  point?: Vec2;
  x?: number;
  z?: number;
}

const HISTORY = 100;
const SNAP_PX = 10;
const round = (v: number) => Math.round(v * 1000) / 1000;

export class Fp3dEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    narrow: { type: Boolean },
    _doc: { state: true },
    _floorId: { state: true },
    _roomId: { state: true },
    _vertex: { state: true },
    _tool: { state: true },
    _draft: { state: true },
    _cursor: { state: true },
    _guides: { state: true },
    _view: { state: true },
    _size: { state: true },
    _images: { state: true },
    _canUndo: { state: true },
    _canRedo: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building;
  declare narrow: boolean;
  private declare _doc: Building;
  private declare _floorId: string | null;
  private declare _roomId: string | null;
  private declare _vertex: number | null;
  private declare _tool: Tool;
  private declare _draft: Vec2[];
  private declare _cursor: Vec2 | null;
  private declare _guides: Guides;
  private declare _view: { scale: number; ox: number; oy: number };
  private declare _size: { w: number; h: number };
  private declare _images: Record<string, { url: string; aspect: number }>;
  private declare _canUndo: boolean;
  private declare _canRedo: boolean;

  private past: string[] = [];
  private future: string[] = [];
  private drag: Drag | null = null;
  private pointers = new Map<number, [number, number]>();
  private pinch: { dist: number; mid: [number, number] } | null = null;
  private fitted = false;
  private resizeObserver?: ResizeObserver;
  private loadingImages = new Set<string>();

  constructor() {
    super();
    this.narrow = false;
    this._floorId = null;
    this._roomId = null;
    this._vertex = null;
    this._tool = "select";
    this._draft = [];
    this._cursor = null;
    this._guides = {};
    this._view = { scale: 50, ox: 40, oy: 40 };
    this._size = { w: 800, h: 600 };
    this._images = {};
    this._canUndo = false;
    this._canRedo = false;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  // ------------------------------------------------------------------ lifecycle

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
    this.resizeObserver?.disconnect();
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("building") && this.building !== this._doc) {
      this._doc = this.building;
      if (!this._doc.floors.some((f) => f.id === this._floorId)) this._floorId = this._doc.floors[0]?.id ?? null;
      if (!this.floor?.rooms.some((r) => r.id === this._roomId)) this._roomId = null;
    }
  }

  protected firstUpdated(): void {
    const stage = this.renderRoot.querySelector(".fp3d-canvas-wrap") as HTMLElement;
    this.resizeObserver = new ResizeObserver(() => {
      this._size = { w: stage.clientWidth, h: stage.clientHeight };
      if (!this.fitted && this._size.w > 0) {
        this.fitted = true;
        this.fit();
      }
    });
    this.resizeObserver.observe(stage);
  }

  protected updated(): void {
    const bg = this.floor?.background;
    if (bg && !this._images[bg.image_id] && !this.loadingImages.has(bg.image_id)) void this.loadImage(bg.image_id);
  }

  // ------------------------------------------------------------------ document helpers

  private get floor(): Floor | undefined {
    return this._doc?.floors.find((f) => f.id === this._floorId);
  }

  private get room(): Room | undefined {
    return this.floor?.rooms.find((r) => r.id === this._roomId);
  }

  private get isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? true;
  }

  /** Replace the document; `base` (the state before the change) goes into the undo history. */
  private setDoc(next: Building, base: Building | null = this._doc): void {
    if (base) {
      this.past.push(JSON.stringify(base));
      if (this.past.length > HISTORY) this.past.shift();
      this.future = [];
    }
    this._doc = next;
    this._canUndo = this.past.length > 0;
    this._canRedo = this.future.length > 0;
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: next }, bubbles: true, composed: true }));
  }

  /** Apply a change to a copy of the document (or of `base`) and store it. */
  private change(mutate: (doc: Building, floor: Floor) => void, base: Building = this._doc, history = true): void {
    const next = structuredClone(base);
    const floor = next.floors.find((f) => f.id === this._floorId);
    if (!floor && this._floorId) return;
    mutate(next, floor as Floor);
    this.setDoc(next, history ? base : null);
  }

  private undo(): void {
    const prev = this.past.pop();
    if (!prev) return;
    this.future.push(JSON.stringify(this._doc));
    this.restore(JSON.parse(prev));
  }

  private redo(): void {
    const next = this.future.pop();
    if (!next) return;
    this.past.push(JSON.stringify(this._doc));
    this.restore(JSON.parse(next));
  }

  private restore(doc: Building): void {
    this._doc = doc;
    if (!doc.floors.some((f) => f.id === this._floorId)) this._floorId = doc.floors[0]?.id ?? null;
    if (!this.floor?.rooms.some((r) => r.id === this._roomId)) this._roomId = null;
    this._vertex = null;
    this._canUndo = this.past.length > 0;
    this._canRedo = this.future.length > 0;
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: doc }, bubbles: true, composed: true }));
  }

  // ------------------------------------------------------------------ view transform

  private toScreen(p: Vec2): [number, number] {
    const { scale, ox, oy } = this._view;
    return [p[0] * scale + ox, p[1] * scale + oy];
  }

  private toWorld(sx: number, sy: number): Vec2 {
    const { scale, ox, oy } = this._view;
    return [(sx - ox) / scale, (sy - oy) / scale];
  }

  private localPoint(e: PointerEvent | WheelEvent): [number, number] {
    const rect = (this.renderRoot.querySelector("svg") as SVGSVGElement).getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  private fit(): void {
    const pts = this.floor?.rooms.flatMap((r) => r.points) ?? [];
    const b = pts.length ? bounds(pts) : { x0: 0, z0: 0, x1: 10, z1: 8 };
    const margin = 1.5;
    const w = b.x1 - b.x0 + 2 * margin;
    const h = b.z1 - b.z0 + 2 * margin;
    const scale = Math.max(8, Math.min(400, Math.min(this._size.w / w, this._size.h / h)));
    this._view = {
      scale,
      ox: this._size.w / 2 - ((b.x0 + b.x1) / 2) * scale,
      oy: this._size.h / 2 - ((b.z0 + b.z1) / 2) * scale,
    };
  }

  private zoomAt(factor: number, sx: number, sy: number): void {
    const { scale, ox, oy } = this._view;
    const next = Math.max(8, Math.min(600, scale * factor));
    const k = next / scale;
    this._view = { scale: next, ox: sx - (sx - ox) * k, oy: sy - (sy - oy) * k };
  }

  // ------------------------------------------------------------------ snapping

  private snap(p: Vec2, skip?: { roomId: string; index?: number }, free = false): Vec2 {
    this._guides = {};
    if (free) return p;
    const thr = SNAP_PX / this._view.scale;
    const rooms = this.floor?.rooms ?? [];
    const others: Vec2[] = [];
    for (const r of rooms) {
      r.points.forEach((q, i) => {
        if (skip && r.id === skip.roomId && (skip.index === undefined || skip.index === i)) return;
        others.push(q);
      });
    }
    // 1. corners of rooms
    let best: Vec2 | null = null;
    let bestD = thr;
    for (const q of others) {
      const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
      if (d < bestD) {
        bestD = d;
        best = q;
      }
    }
    if (best) {
      this._guides = { point: best };
      return [best[0], best[1]];
    }
    // 2. edges of other rooms (so walls can meet in a T)
    for (const r of rooms) {
      if (skip && r.id === skip.roomId) continue;
      for (let i = 0; i < r.points.length; i++) {
        const a = r.points[i];
        const b = r.points[(i + 1) % r.points.length];
        const dx = b[0] - a[0];
        const dz = b[1] - a[1];
        const l2 = dx * dx + dz * dz;
        if (l2 < 1e-9) continue;
        const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2;
        if (t <= 0 || t >= 1) continue;
        const q: Vec2 = [a[0] + t * dx, a[1] + t * dz];
        const d = Math.hypot(q[0] - p[0], q[1] - p[1]);
        const g = this._doc.settings.grid;
        if (Math.abs(dz) < 1e-9) q[0] = Math.min(Math.max(Math.round(q[0] / g) * g, Math.min(a[0], b[0])), Math.max(a[0], b[0]));
        if (Math.abs(dx) < 1e-9) q[1] = Math.min(Math.max(Math.round(q[1] / g) * g, Math.min(a[1], b[1])), Math.max(a[1], b[1]));
        if (d < bestD) {
          bestD = d;
          best = q;
        }
      }
    }
    if (best) {
      this._guides = { point: best };
      return [round(best[0]), round(best[1])];
    }
    // 3. grid, with alignment to other corners per axis
    const g = this._doc.settings.grid;
    const out: Vec2 = [round(Math.round(p[0] / g) * g), round(Math.round(p[1] / g) * g)];
    let ax = thr;
    let az = thr;
    const guides: Guides = {};
    for (const q of others) {
      if (Math.abs(q[0] - p[0]) < ax) {
        ax = Math.abs(q[0] - p[0]);
        out[0] = q[0];
        guides.x = q[0];
      }
      if (Math.abs(q[1] - p[1]) < az) {
        az = Math.abs(q[1] - p[1]);
        out[1] = q[1];
        guides.z = q[1];
      }
    }
    this._guides = guides;
    return out;
  }

  // ------------------------------------------------------------------ pointer input

  private onPointerDown(e: PointerEvent): void {
    const svgEl = e.currentTarget as SVGSVGElement;
    svgEl.setPointerCapture(e.pointerId);
    const local = this.localPoint(e);
    this.pointers.set(e.pointerId, local);
    if (this.pointers.size === 2) {
      // second finger: cancel the current gesture and pinch instead
      if (this.drag && (this.drag.kind === "vertex" || this.drag.kind === "room" || this.drag.kind === "device") && this.drag.moved) this.restoreLive(this.drag.base);
      this.drag = null;
      this.pinch = this.pinchState();
      return;
    }
    if (this.pointers.size > 2) return;
    if (e.button === 1 || e.button === 2 || !this.floor) {
      this.drag = { kind: "pan", last: local };
      return;
    }
    const world = this.toWorld(...local);
    const target = e.target as Element;
    if (this._tool === "rect") {
      const start = this.snap(world, undefined, e.altKey);
      this.drag = { kind: "rect", start, end: start };
      return;
    }
    if (this._tool === "polygon") {
      this.drag = { kind: "tap", startScreen: local, last: local, panning: false };
      return;
    }
    const deviceEl = target.closest("[data-device]");
    if (deviceEl && this.isAdmin) {
      this.drag = { kind: "device", entityId: deviceEl.getAttribute("data-device")!, start: world, startScreen: local, base: this._doc, moved: false };
      return;
    }
    const vertexEl = target.closest("[data-vertex]");
    const midEl = target.closest("[data-mid]");
    if (vertexEl && this.room && this.isAdmin) {
      this._vertex = Number(vertexEl.getAttribute("data-vertex"));
      this.drag = { kind: "vertex", roomId: this.room.id, index: this._vertex, base: this._doc, moved: false };
      return;
    }
    if (midEl && this.room && this.isAdmin) {
      const i = Number(midEl.getAttribute("data-mid"));
      const pts = this.room.points;
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      const mid: Vec2 = [round((a[0] + b[0]) / 2), round((a[1] + b[1]) / 2)];
      const base = this._doc;
      const roomId = this.room.id;
      // no history here: the pointer-up records the state before the insert
      this.change((_, floor) => floor.rooms.find((r) => r.id === roomId)!.points.splice(i + 1, 0, mid), base, false);
      this._vertex = i + 1;
      this.drag = { kind: "vertex", roomId, index: i + 1, base, moved: true };
      return;
    }
    const roomId = target.closest("[data-room]")?.getAttribute("data-room") ?? this.roomAt(world);
    if (roomId) {
      if (roomId !== this._roomId) this._vertex = null;
      this._roomId = roomId;
      this.drag = this.isAdmin
        ? { kind: "room", roomId, start: world, startScreen: local, base: this._doc, moved: false }
        : { kind: "pan", last: local };
      return;
    }
    this._roomId = null;
    this._vertex = null;
    this.drag = { kind: "pan", last: local };
  }

  private onPointerMove(e: PointerEvent): void {
    const local = this.localPoint(e);
    if (this.pointers.has(e.pointerId)) this.pointers.set(e.pointerId, local);
    if (this.pinch) {
      const now = this.pinchState();
      if (now) {
        this.zoomAt(now.dist / Math.max(1, this.pinch.dist), ...now.mid);
        this._view = { ...this._view, ox: this._view.ox + now.mid[0] - this.pinch.mid[0], oy: this._view.oy + now.mid[1] - this.pinch.mid[1] };
        this.pinch = now;
      }
      return;
    }
    const world = this.toWorld(...local);
    const drag = this.drag;
    if (!drag) {
      if (this._tool !== "select" && this.floor) this._cursor = this.snap(world, undefined, e.altKey);
      return;
    }
    switch (drag.kind) {
      case "pan":
        this._view = { ...this._view, ox: this._view.ox + local[0] - drag.last[0], oy: this._view.oy + local[1] - drag.last[1] };
        drag.last = local;
        break;
      case "tap":
        if (drag.panning || Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) > 6) {
          drag.panning = true;
          this._view = { ...this._view, ox: this._view.ox + local[0] - drag.last[0], oy: this._view.oy + local[1] - drag.last[1] };
        }
        drag.last = local;
        break;
      case "rect":
        drag.end = this.snap(world, undefined, e.altKey);
        this.requestUpdate();
        break;
      case "vertex": {
        const p = this.snap(world, { roomId: drag.roomId, index: drag.index }, e.altKey);
        drag.moved = true;
        this.change(
          (_, floor) => {
            floor.rooms.find((r) => r.id === drag.roomId)!.points[drag.index] = p;
          },
          drag.base,
          false,
        );
        break;
      }
      case "room": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const room = drag.base.floors.find((f) => f.id === this._floorId)?.rooms.find((r) => r.id === drag.roomId);
        if (!room) return;
        const delta = this.roomDelta(room, [world[0] - drag.start[0], world[1] - drag.start[1]], e.altKey);
        const baseFloor = drag.base.floors.find((f) => f.id === this._floorId)!;
        // devices inside the room move with it
        const inside = new Set(baseFloor.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id));
        this.change(
          (_, floor) => {
            const r = floor.rooms.find((x) => x.id === drag.roomId)!;
            r.points = room.points.map(([x, z]) => [round(x + delta[0]), round(z + delta[1])]);
            floor.placements = baseFloor.placements.map((pl) =>
              inside.has(pl.entity_id) ? { ...pl, x: round(pl.x + delta[0]), z: round(pl.z + delta[1]) } : pl,
            );
          },
          drag.base,
          false,
        );
        break;
      }
      case "device": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const pl = drag.base.floors.find((f) => f.id === this._floorId)?.placements.find((x) => x.entity_id === drag.entityId);
        if (!pl) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const x = round(Math.round((pl.x + world[0] - drag.start[0]) / g) * g);
        const z = round(Math.round((pl.z + world[1] - drag.start[1]) / g) * g);
        this.change((_, floor) => Object.assign(floor.placements.find((q) => q.entity_id === drag.entityId)!, { x, z }), drag.base, false);
        break;
      }
    }
  }

  private onPointerUp(e: PointerEvent): void {
    this.pointers.delete(e.pointerId);
    if (this.pinch) {
      if (this.pointers.size < 2) this.pinch = null;
      return;
    }
    const drag = this.drag;
    this.drag = null;
    if (!drag || e.type === "pointercancel") {
      if (drag && (drag.kind === "vertex" || drag.kind === "room" || drag.kind === "device") && drag.moved) this.restoreLive(drag.base);
      return;
    }
    const local = this.localPoint(e);
    switch (drag.kind) {
      case "rect": {
        const [x0, z0] = drag.start;
        const [x1, z1] = drag.end;
        if (Math.abs(x1 - x0) >= 0.2 && Math.abs(z1 - z0) >= 0.2) {
          const lo: Vec2 = [Math.min(x0, x1), Math.min(z0, z1)];
          const hi: Vec2 = [Math.max(x0, x1), Math.max(z0, z1)];
          this.addRoom([lo, [hi[0], lo[1]], hi, [lo[0], hi[1]]]);
        }
        this._guides = {};
        break;
      }
      case "tap":
        if (!drag.panning) this.addDraftPoint(this.snap(this.toWorld(...local), undefined, e.altKey), local);
        break;
      case "device":
        if (drag.moved) this.pushHistory(drag.base);
        else {
          // a tap on a device selects the room it stands in
          const pl = this.floor?.placements.find((x) => x.entity_id === drag.entityId);
          const roomId = pl ? this.roomAt([pl.x, pl.z]) : null;
          if (roomId) this._roomId = roomId;
        }
        break;
      case "vertex":
      case "room":
        // the drag already changed the document without history; record the state before the drag
        if (drag.moved) this.pushHistory(drag.base);
        this._guides = {};
        break;
      default:
        break;
    }
  }

  private onWheel(e: WheelEvent): void {
    e.preventDefault();
    const [sx, sy] = this.localPoint(e);
    this.zoomAt(Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0015)), sx, sy);
  }

  private pinchState(): { dist: number; mid: [number, number] } | null {
    const pts = [...this.pointers.values()];
    if (pts.length < 2) return null;
    const [a, b] = pts;
    return { dist: Math.hypot(a[0] - b[0], a[1] - b[1]), mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] };
  }

  private pushHistory(base: Building): void {
    this.past.push(JSON.stringify(base));
    if (this.past.length > HISTORY) this.past.shift();
    this.future = [];
    this._canUndo = true;
    this._canRedo = false;
  }

  private restoreLive(base: Building): void {
    this._doc = base;
    this.dispatchEvent(new CustomEvent("building-changed", { detail: { building: base }, bubbles: true, composed: true }));
  }

  /** Movement of a whole room: grid steps, pulled onto nearby corners of other rooms. */
  private roomDelta(room: Room, raw: Vec2, free: boolean): Vec2 {
    if (free) return raw;
    const g = this._doc.settings.grid;
    let delta: Vec2 = [Math.round(raw[0] / g) * g, Math.round(raw[1] / g) * g];
    const thr = SNAP_PX / this._view.scale;
    let best = thr;
    this._guides = {};
    for (const other of this.floor?.rooms ?? []) {
      if (other.id === room.id) continue;
      for (const q of other.points) {
        for (const p of room.points) {
          const d = Math.hypot(p[0] + raw[0] - q[0], p[1] + raw[1] - q[1]);
          if (d < best) {
            best = d;
            delta = [q[0] - p[0], q[1] - p[1]];
            this._guides = { point: q };
          }
        }
      }
    }
    return delta;
  }

  private roomAt(p: Vec2): string | null {
    const rooms = this.floor?.rooms ?? [];
    // smallest room first so nested rooms stay reachable
    const hits = rooms.filter((r) => pointInPolygon(p, r.points)).sort((a, b) => polygonArea(a.points) - polygonArea(b.points));
    return hits[0]?.id ?? null;
  }

  private addDraftPoint(p: Vec2, screen: [number, number]): void {
    const draft = this._draft;
    if (draft.length >= 3) {
      const [fx, fy] = this.toScreen(draft[0]);
      if (Math.hypot(fx - screen[0], fy - screen[1]) < 14) {
        this.closeDraft();
        return;
      }
    }
    const last = draft[draft.length - 1];
    if (last && Math.hypot(last[0] - p[0], last[1] - p[1]) < 1e-6) return;
    this._draft = [...draft, p];
  }

  private closeDraft(): void {
    if (this._draft.length >= 3 && polygonArea(this._draft) > 0.05) this.addRoom(this._draft);
    this._draft = [];
    this._cursor = null;
    this._guides = {};
  }

  private addRoom(points: Vec2[]): void {
    if (!this.floor) return;
    const id = uid("room");
    const n = this.floor.rooms.length + 1;
    this.change((_, floor) =>
      floor.rooms.push({ id, name: this.t("new_room", { n }), area_id: null, points: points.map(([x, z]) => [round(x), round(z)]), floor_material: "wood" }),
    );
    this._roomId = id;
    this._vertex = null;
    this._tool = "select";
  }

  // ------------------------------------------------------------------ keyboard

  private readonly onKey = (e: KeyboardEvent) => {
    const path = e.composedPath();
    if (path.some((el) => el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) return;
    if (!this.isConnected || !this.offsetParent) return;
    const mod = e.ctrlKey || e.metaKey;
    if (mod && e.key.toLowerCase() === "z") {
      e.preventDefault();
      if (e.shiftKey) this.redo();
      else this.undo();
    } else if (mod && e.key.toLowerCase() === "y") {
      e.preventDefault();
      this.redo();
    } else if (mod && e.key.toLowerCase() === "d") {
      e.preventDefault();
      this.duplicateRoom();
    } else if (e.key === "Delete" || (e.key === "Backspace" && this._tool === "select")) {
      if (this._vertex !== null) this.deleteVertex(this._vertex);
      else this.deleteRoom();
    } else if (e.key === "Backspace" && this._tool === "polygon") {
      this._draft = this._draft.slice(0, -1);
    } else if (e.key === "Enter" && this._tool === "polygon") {
      this.closeDraft();
    } else if (e.key === "Escape") {
      if (this._draft.length) this._draft = [];
      else if (this._tool !== "select") this._tool = "select";
      else {
        this._roomId = null;
        this._vertex = null;
      }
      this._cursor = null;
    }
  };

  // ------------------------------------------------------------------ actions

  private addFloor(): void {
    const floors = this._doc.floors;
    const top = floors[floors.length - 1];
    const id = uid("floor");
    const name = floors.length === 0 ? this.t("default_floor") : this.t("new_floor", { n: floors.length });
    const elevation = top ? round(top.elevation + top.height + 0.25) : 0;
    const next = structuredClone(this._doc);
    next.floors.push(newFloor(id, name, elevation));
    this.setDoc(next);
    this._floorId = id;
    this._roomId = null;
  }

  private moveFloor(dir: -1 | 1): void {
    const i = this._doc.floors.findIndex((f) => f.id === this._floorId);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= this._doc.floors.length) return;
    const next = structuredClone(this._doc);
    [next.floors[i], next.floors[j]] = [next.floors[j], next.floors[i]];
    this.setDoc(next);
  }

  private deleteFloor(): void {
    const floor = this.floor;
    if (!floor || !confirm(this.t("delete_floor_confirm", { name: floor.name }))) return;
    const next = structuredClone(this._doc);
    next.floors = next.floors.filter((f) => f.id !== floor.id);
    this.setDoc(next);
    this._floorId = next.floors[0]?.id ?? null;
    this._roomId = null;
  }

  private deleteRoom(): void {
    const id = this._roomId;
    if (!id || !this.isAdmin) return;
    this.change((_, floor) => {
      const room = floor.rooms.find((r) => r.id === id);
      floor.rooms = floor.rooms.filter((r) => r.id !== id);
      floor.openings = floor.openings.filter((o) => o.room_id !== id);
      if (room) floor.placements = floor.placements.filter((pl) => !pointInPolygon([pl.x, pl.z], room.points));
    });
    this._roomId = null;
    this._vertex = null;
  }

  private duplicateRoom(): void {
    const room = this.room;
    if (!room || !this.isAdmin) return;
    const id = uid("room");
    this.change((_, floor) => floor.rooms.push({ ...structuredClone(room), id, points: room.points.map(([x, z]) => [round(x + 0.5), round(z + 0.5)]) }));
    this._roomId = id;
  }

  /** Place entities in the selected room; an entity already placed elsewhere moves here. */
  private placeDevices(entityIds: string[]): void {
    const room = this.room;
    if (!room || !entityIds.length || !this.isAdmin) return;
    const ids = new Set(entityIds);
    this.change((doc, floor) => {
      for (const f of doc.floors) f.placements = f.placements.filter((pl) => !ids.has(pl.entity_id));
      floor.placements.push(...autoPlace(room, entityIds, floor.placements.map((pl) => [pl.x, pl.z] as Vec2)));
    });
  }

  private removeDevice(entityId: string): void {
    this.change((doc) => {
      for (const f of doc.floors) f.placements = f.placements.filter((pl) => pl.entity_id !== entityId);
    });
  }

  private deleteVertex(index: number): void {
    const room = this.room;
    if (!room || room.points.length <= 3) return;
    this.change((_, floor) => floor.rooms.find((r) => r.id === room.id)!.points.splice(index, 1));
    this._vertex = null;
  }

  private updateFloor(patch: Partial<Floor>): void {
    this.change((_, floor) => Object.assign(floor, patch));
  }

  private updateRoom(patch: Partial<Room>): void {
    const id = this._roomId;
    this.change((_, floor) => Object.assign(floor.rooms.find((r) => r.id === id)!, patch));
  }

  private setArea(areaId: string): void {
    const room = this.room;
    if (!room) return;
    const area = areaId ? this.hass?.areas?.[areaId] : undefined;
    const generic = !room.name || /^(Raum|Room) \d+$/.test(room.name) || Object.values(this.hass?.areas ?? {}).some((a) => a.name === room.name);
    this.updateRoom({ area_id: areaId || null, ...(area && generic ? { name: area.name } : {}) });
  }

  private setRect(field: "x" | "z" | "w" | "d", value: number): void {
    const room = this.room;
    if (!room || !Number.isFinite(value)) return;
    const b = bounds(room.points);
    let { x0, z0, x1, z1 } = b;
    if (field === "x") [x0, x1] = [value, value + (x1 - x0)];
    if (field === "z") [z0, z1] = [value, value + (z1 - z0)];
    if (field === "w" && value > 0.05) x1 = x0 + value;
    if (field === "d" && value > 0.05) z1 = z0 + value;
    this.updateRoom({ points: [[round(x0), round(z0)], [round(x1), round(z0)], [round(x1), round(z1)], [round(x0), round(z1)]] });
  }

  private setPoint(index: number, axis: 0 | 1, value: number): void {
    const room = this.room;
    if (!room || !Number.isFinite(value)) return;
    const points = room.points.map((p) => [...p] as Vec2);
    points[index][axis] = round(value);
    this.updateRoom({ points });
  }

  private async loadImage(imageId: string): Promise<void> {
    this.loadingImages.add(imageId);
    try {
      const url = await fetchImage(this.hass, imageId);
      const img = new Image();
      img.src = url;
      await img.decode();
      this._images = { ...this._images, [imageId]: { url, aspect: img.naturalHeight / img.naturalWidth } };
    } catch {
      // image missing (e.g. removed): the background stays empty
    }
  }

  private async uploadBackground(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    const bitmap = await createImageBitmap(file);
    const k = Math.min(1, 2048 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * k);
    canvas.height = Math.round(bitmap.height * k);
    canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL("image/jpeg", 0.85);
    const imageId = uid("img");
    await storeImage(this.hass, imageId, data);
    this._images = { ...this._images, [imageId]: { url: data, aspect: canvas.height / canvas.width } };
    const b = this.floor?.rooms.length ? bounds(this.floor.rooms.flatMap((r) => r.points)) : null;
    this.updateFloor({ background: { image_id: imageId, x: b ? b.x0 : 0, z: b ? b.z0 : 0, width: b ? Math.max(4, round(b.x1 - b.x0)) : 12, opacity: 0.5 } });
  }

  // ------------------------------------------------------------------ rendering

  protected render(): TemplateResult {
    const floor = this.floor;
    const walls = floor ? generateWalls(floor.rooms, { exterior: this._doc.settings.wall_exterior, interior: this._doc.settings.wall_interior }) : null;
    return html`
      <div class="fp3d-editor ${this.narrow ? "fp3d-narrow" : ""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${(["select", "rect", "polygon"] as Tool[]).map(
                (tool) => html`<button
                  aria-pressed=${this._tool === tool}
                  ?disabled=${!floor || (!this.isAdmin && tool !== "select")}
                  @click=${() => {
                    this._tool = tool;
                    this._draft = [];
                    this._cursor = null;
                  }}
                >
                  ${this.t(`tool_${tool}` as I18nKey)}
                </button>`,
              )}
            </div>
            <div class="fp3d-seg">
              <button ?disabled=${!this._canUndo} @click=${() => this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${() => this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${() => this.fit()}>${this.t("fit")}</button>
            </div>
            ${walls?.warnings.length ? html`<span class="fp3d-warn">${this.t("overlap_warning")}</span>` : nothing}
          </div>
          <div class="fp3d-canvas-wrap">
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${() => {
                if (!this.drag) this._cursor = null;
              }}
              @wheel=${this.onWheel}
              @contextmenu=${(e: Event) => e.preventDefault()}
            >
              ${this.renderBackground(floor)} ${this.renderGrid()} ${this.renderGhost()} ${walls ? this.renderWalls(walls.walls) : nothing}
              ${floor ? this.renderRooms(floor) : nothing} ${floor && this._tool === "select" ? this.renderDevices(floor) : nothing}
              ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            <p class="fp3d-hint">${!floor ? this.t("hint_empty") : this.t(`hint_${this._tool}` as I18nKey)}</p>
          </div>
        </div>
        <aside class="fp3d-side">${this.renderSide(floor)}</aside>
      </div>
    `;
  }

  private renderBackground(floor: Floor | undefined) {
    const bg = floor?.background;
    const img = bg ? this._images[bg.image_id] : undefined;
    if (!bg || !img) return nothing;
    const [x, y] = this.toScreen([bg.x, bg.z]);
    const w = bg.width * this._view.scale;
    return svg`<image href=${img.url} x=${x} y=${y} width=${w} height=${w * img.aspect} opacity=${bg.opacity} preserveAspectRatio="none" pointer-events="none" />`;
  }

  private renderGrid() {
    const { scale } = this._view;
    const { w, h } = this._size;
    const minor = scale >= 90 ? 0.1 : scale >= 30 ? 0.5 : 1;
    const major = scale >= 20 ? 1 : 5;
    const [x0, z0] = this.toWorld(0, 0);
    const [x1, z1] = this.toWorld(w, h);
    const lines: ReturnType<typeof svg>[] = [];
    const push = (step: number, cls: string) => {
      for (let x = Math.ceil(x0 / step) * step; x <= x1; x += step) {
        const sx = this.toScreen([x, 0])[0];
        lines.push(svg`<line class=${cls} x1=${sx} y1="0" x2=${sx} y2=${h} />`);
      }
      for (let z = Math.ceil(z0 / step) * step; z <= z1; z += step) {
        const sy = this.toScreen([0, z])[1];
        lines.push(svg`<line class=${cls} x1="0" y1=${sy} x2=${w} y2=${sy} />`);
      }
    };
    if (minor < major) push(minor, "fp3d-grid-minor");
    push(major, "fp3d-grid-major");
    const [ox, oy] = this.toScreen([0, 0]);
    lines.push(svg`<circle class="fp3d-origin" cx=${ox} cy=${oy} r="3" />`);
    return svg`<g pointer-events="none">${lines}</g>`;
  }

  /** Rooms of the floor below, as orientation. */
  private renderGhost() {
    const i = this._doc?.floors.findIndex((f) => f.id === this._floorId) ?? -1;
    const below = i > 0 ? this._doc.floors[i - 1] : undefined;
    if (!below) return nothing;
    return svg`<g pointer-events="none">${below.rooms.map(
      (r) => svg`<polygon class="fp3d-ghost" points=${r.points.map((p) => this.toScreen(p).join(",")).join(" ")} />`,
    )}</g>`;
  }

  private renderWalls(walls: Wall[]) {
    return svg`<g pointer-events="none">${walls.map(
      (w) => svg`<polygon class=${w.exterior ? "fp3d-wall fp3d-wall-ext" : "fp3d-wall"} points=${w.footprint.map((p) => this.toScreen(p).join(",")).join(" ")} />`,
    )}</g>`;
  }

  private renderRooms(floor: Floor) {
    const selected = this.room;
    return svg`
      <g>${floor.rooms.map((r) => {
        const pts = r.points.map((p) => this.toScreen(p).join(",")).join(" ");
        return svg`<polygon data-room=${r.id} class=${r.id === this._roomId ? "fp3d-room fp3d-room-sel" : "fp3d-room"} points=${pts} />`;
      })}</g>
      <g pointer-events="none">${floor.rooms.map((r) => {
        const [cx, cy] = this.toScreen(centroid(r.points));
        return svg`<text class="fp3d-room-name" x=${cx} y=${cy - 2}>${r.name}</text>
          <text class="fp3d-room-area" x=${cx} y=${cy + 14}>${this.t("area_m2", { a: formatNumber(this.hass, polygonArea(r.points), 1) })}</text>`;
      })}</g>
      ${selected && this.isAdmin ? this.renderHandles(selected) : nothing}
    `;
  }

  private renderDevices(floor: Floor) {
    return svg`<g>${floor.placements.map((pl) => {
      const kind = kindOf(pl.entity_id);
      if (!kind) return nothing;
      const [x, y] = this.toScreen([pl.x, pl.z]);
      const on = this.hass?.states[pl.entity_id]?.state === "on";
      return svg`<g data-device=${pl.entity_id} class=${on ? "fp3d-device fp3d-device-on" : "fp3d-device"} transform="translate(${x} ${y})">
        <title>${entityName(this.hass, pl.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${iconPath(kind)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`;
    })}</g>`;
  }

  private renderHandles(room: Room) {
    const pts = room.points;
    const n = pts.length;
    const edges = pts.map((a, i) => {
      const b = pts[(i + 1) % n];
      const [ax, ay] = this.toScreen(a);
      const [bx, by] = this.toScreen(b);
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const mx = (ax + bx) / 2;
      const my = (ay + by) / 2;
      // label outside the room: offset along the edge normal away from the centroid
      const [cx, cy] = this.toScreen(centroid(pts));
      let nx = -(by - ay);
      let ny = bx - ax;
      const nl = Math.hypot(nx, ny) || 1;
      nx /= nl;
      ny /= nl;
      if (nx * (mx - cx) + ny * (my - cy) < 0) {
        nx = -nx;
        ny = -ny;
      }
      const screenLen = Math.hypot(bx - ax, by - ay);
      return svg`
        ${screenLen > 50 ? svg`<text class="fp3d-dim" x=${mx + nx * 16} y=${my + ny * 16 + 4}>${formatNumber(this.hass, len, 2)} m</text>` : nothing}
        ${screenLen > 36 ? svg`<g data-mid=${i} class="fp3d-mid"><circle cx=${mx} cy=${my} r="14" class="fp3d-hit" /><circle cx=${mx} cy=${my} r="6" /><path d="M${mx - 3} ${my}h6M${mx} ${my - 3}v6" /></g>` : nothing}
      `;
    });
    const vertices = pts.map((p, i) => {
      const [x, y] = this.toScreen(p);
      return svg`<g data-vertex=${i} class=${i === this._vertex ? "fp3d-vertex fp3d-vertex-sel" : "fp3d-vertex"}><circle cx=${x} cy=${y} r="16" class="fp3d-hit" /><circle cx=${x} cy=${y} r="6" /></g>`;
    });
    return svg`<g>${edges}${vertices}</g>`;
  }

  private renderDraft() {
    const drag = this.drag;
    if (drag?.kind === "rect") {
      const [x0, y0] = this.toScreen(drag.start);
      const [x1, y1] = this.toScreen(drag.end);
      const w = Math.abs(drag.end[0] - drag.start[0]);
      const d = Math.abs(drag.end[1] - drag.start[1]);
      return svg`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(x0, x1)} y=${Math.min(y0, y1)} width=${Math.abs(x1 - x0)} height=${Math.abs(y1 - y0)} />
        <text class="fp3d-dim" x=${(x0 + x1) / 2} y=${Math.min(y0, y1) - 8}>${formatNumber(this.hass, w, 2)} × ${formatNumber(this.hass, d, 2)} m</text>
      </g>`;
    }
    if (this._tool !== "polygon") return nothing;
    const pts = [...this._draft, ...(this._cursor ? [this._cursor] : [])].map((p) => this.toScreen(p));
    return svg`<g pointer-events="none">
      ${pts.length > 1 ? svg`<polyline class="fp3d-draft" points=${pts.map((p) => p.join(",")).join(" ")} />` : nothing}
      ${this._draft.map((p, i) => {
        const [x, y] = this.toScreen(p);
        return svg`<circle class=${i === 0 && this._draft.length >= 3 ? "fp3d-draft-pt fp3d-draft-first" : "fp3d-draft-pt"} cx=${x} cy=${y} r=${i === 0 && this._draft.length >= 3 ? 9 : 5} />`;
      })}
      ${this._cursor ? svg`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />` : nothing}
    </g>`;
  }

  private renderGuides() {
    const g = this._guides;
    const { w, h } = this._size;
    return svg`<g pointer-events="none">
      ${g.x !== undefined ? svg`<line class="fp3d-guide" x1=${this.toScreen([g.x, 0])[0]} y1="0" x2=${this.toScreen([g.x, 0])[0]} y2=${h} />` : nothing}
      ${g.z !== undefined ? svg`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0, g.z])[1]} x2=${w} y2=${this.toScreen([0, g.z])[1]} />` : nothing}
      ${g.point ? svg`<circle class="fp3d-snap" cx=${this.toScreen(g.point)[0]} cy=${this.toScreen(g.point)[1]} r="9" />` : nothing}
    </g>`;
  }

  private num(label: string, value: number, onChange: (v: number) => void, step = 0.01, min?: number) {
    return html`<label class="fp3d-field"
      >${label}
      <input
        type="number"
        inputmode="decimal"
        step=${step}
        min=${min ?? nothing}
        .value=${String(round(value))}
        ?disabled=${!this.isAdmin}
        @change=${(e: Event) => {
          const v = parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
          if (Number.isFinite(v)) onChange(v);
        }}
    /></label>`;
  }

  private renderSide(floor: Floor | undefined) {
    const floors = this._doc?.floors ?? [];
    const room = this.room;
    const admin = this.isAdmin;
    const areas = Object.values(this.hass?.areas ?? {}).sort((a, b) => a.name.localeCompare(b.name));
    return html`
      ${admin ? nothing : html`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...floors].reverse().map(
            (f) => html`<button
              class="fp3d-chip"
              aria-pressed=${f.id === this._floorId}
              @click=${() => {
                this._floorId = f.id;
                this._roomId = null;
                this._vertex = null;
                this._draft = [];
                this.fit();
              }}
            >
              ${f.name}
            </button>`,
          )}
          ${admin ? html`<button class="fp3d-btn" @click=${() => this.addFloor()}>+ ${this.t("add_floor")}</button>` : nothing}
        </div>
        ${floor
          ? html`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${floor.name} ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ name: (e.target as HTMLInputElement).value })}
              /></label>
              ${this.num(this.t("elevation"), floor.elevation, (v) => this.updateFloor({ elevation: v }))}
              ${this.num(this.t("height"), floor.height, (v) => this.updateFloor({ height: Math.max(1, v) }), 0.05, 1)}
              ${admin
                ? html`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${() => this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${() => this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>`
                : nothing}
            </div>`
          : nothing}
      </section>
      ${room ? html`${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}` : floor ? this.renderRoomList(floor) : nothing}
      ${floor && admin ? this.renderBackgroundForm(floor) : nothing} ${admin ? this.renderSettings() : nothing}
    `;
  }

  private renderRoomList(floor: Floor) {
    if (!floor.rooms.length) return nothing;
    return html`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${floor.rooms.map(
          (r) => html`<button class="fp3d-row" @click=${() => (this._roomId = r.id)}>
            <span>${r.name}</span><span class="fp3d-muted">${this.t("area_m2", { a: formatNumber(this.hass, polygonArea(r.points), 1) })}</span>
          </button>`,
        )}
      </div>
    </section>`;
  }

  private renderRoomForm(room: Room, areas: { area_id: string; name: string }[]) {
    const admin = this.isAdmin;
    const rect = isAxisRect(room.points);
    const b = bounds(room.points);
    return html`<section>
      <h3>${this.t("room")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${room.name} ?disabled=${!admin} @change=${(e: Event) => this.updateRoom({ name: (e.target as HTMLInputElement).value })}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.setArea((e.target as HTMLSelectElement).value)}>
            <option value="" ?selected=${!room.area_id}>${this.t("no_area")}</option>
            ${areas.map((a) => html`<option value=${a.area_id} ?selected=${a.area_id === room.area_id}>${a.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateRoom({ floor_material: (e.target as HTMLSelectElement).value })}>
            ${FLOOR_MATERIALS.map((m) => html`<option value=${m} ?selected=${m === room.floor_material}>${this.t(`mat_${m}` as I18nKey)}</option>`)}
          </select></label
        >
        ${rect
          ? html`${this.num(this.t("x"), b.x0, (v) => this.setRect("x", v))} ${this.num(this.t("z"), b.z0, (v) => this.setRect("z", v))}
            ${this.num(this.t("width"), b.x1 - b.x0, (v) => this.setRect("w", v), 0.01, 0.05)}
            ${this.num(this.t("depth"), b.z1 - b.z0, (v) => this.setRect("d", v), 0.01, 0.05)}`
          : nothing}
      </div>
      <details class="fp3d-points" ?open=${!rect}>
        <summary>${this.t("points")} (${room.points.length})</summary>
        ${room.points.map(
          (p, i) => html`<div class="fp3d-point ${i === this._vertex ? "fp3d-point-sel" : ""}">
            <span class="fp3d-muted">${i + 1}</span>
            ${this.num(this.t("x"), p[0], (v) => this.setPoint(i, 0, v))} ${this.num(this.t("z"), p[1], (v) => this.setPoint(i, 1, v))}
            ${admin
              ? html`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${room.points.length <= 3} @click=${() => this.deleteVertex(i)}>
                  ×
                </button>`
              : nothing}
          </div>`,
        )}
      </details>
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteRoom()}>${this.t("delete")}</button>
          </div>`
        : nothing}
    </section>`;
  }

  private renderDeviceList(room: Room) {
    const admin = this.isAdmin;
    const areaName = room.area_id ? this.hass?.areas?.[room.area_id]?.name : undefined;
    const ids = this.hass ? areaEntities(this.hass, room.area_id).filter((id) => isPlaceable(kindOf(id))) : [];
    const placedHere = new Set(this.floor?.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id));
    const unplaced = ids.filter((id) => !placedHere.has(id));
    return html`<section>
      <h3>${this.t("devices")}</h3>
      ${!room.area_id
        ? html`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`
        : !ids.length
          ? html`<p class="fp3d-sub">${this.t("devices_none")}</p>`
          : html`${admin && unplaced.length
                ? html`<button class="fp3d-btn fp3d-primary fp3d-wide-btn" @click=${() => this.placeDevices(unplaced)}>${this.t("devices_place_all")}</button>`
                : nothing}
              <div class="fp3d-room-list">
                ${ids.map((id) => {
                  const placed = placedHere.has(id);
                  return html`<div class="fp3d-row fp3d-dev-row">
                    <span class="fp3d-dev-name ${placed ? "" : "fp3d-muted"}">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d=${iconPath(kindOf(id)!)} />
                      </svg>
                      ${entityName(this.hass, id, areaName)}
                    </span>
                    ${admin
                      ? placed
                        ? html`<button class="fp3d-link" @click=${() => this.removeDevice(id)}>${this.t("devices_remove")}</button>`
                        : html`<button class="fp3d-link" @click=${() => this.placeDevices([id])}>${this.t("devices_place")}</button>`
                      : nothing}
                  </div>`;
                })}
              </div>
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`}
    </section>`;
  }

  private renderBackgroundForm(floor: Floor) {
    const bg = floor.background;
    return html`<details class="fp3d-section">
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${bg
          ? html`${this.num(this.t("x"), bg.x, (v) => this.updateFloor({ background: { ...bg, x: v } }))}
              ${this.num(this.t("z"), bg.z, (v) => this.updateFloor({ background: { ...bg, z: v } }))}
              ${this.num(this.t("background_width"), bg.width, (v) => this.updateFloor({ background: { ...bg, width: Math.max(0.1, v) } }), 0.01, 0.1)}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(bg.opacity)}
                  @change=${(e: Event) => this.updateFloor({ background: { ...bg, opacity: parseFloat((e.target as HTMLInputElement).value) } })}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${() => this.updateFloor({ background: null })}>${this.t("background_remove")}</button>`
          : nothing}
      </div>
    </details>`;
  }

  private renderSettings() {
    const s = this._doc.settings;
    const set = (patch: Partial<Building["settings"]>) => {
      const next = structuredClone(this._doc);
      Object.assign(next.settings, patch);
      this.setDoc(next);
    };
    return html`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.num(this.t("wall_exterior"), s.wall_exterior, (v) => set({ wall_exterior: Math.min(1, Math.max(0.02, v)) }), 0.01, 0.02)}
        ${this.num(this.t("wall_interior"), s.wall_interior, (v) => set({ wall_interior: Math.min(1, Math.max(0.02, v)) }), 0.01, 0.02)}
        ${this.num(this.t("grid"), s.grid, (v) => set({ grid: Math.min(1, Math.max(0.01, v)) }), 0.01, 0.01)}
      </div>
    </details>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        display: grid;
        grid-template-columns: 1fr 320px;
        height: 100%;
        min-height: 0;
      }
      .fp3d-editor.fp3d-narrow {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
      }
      .fp3d-warn {
        color: var(--fp3d-warm);
        font-size: 12.5px;
      }
      .fp3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 75%);
      }
      svg.fp3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.fp3d-tool-rect,
      svg.fp3d-tool-polygon {
        cursor: crosshair;
      }
      .fp3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .fp3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .fp3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .fp3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .fp3d-wall {
        fill: #1b2a47;
      }
      .fp3d-wall-ext {
        fill: #22345a;
      }
      .fp3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .fp3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .fp3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
      }
      .fp3d-room-name {
        fill: var(--fp3d-text);
        font: 600 13px var(--fp3d-title-font);
        text-anchor: middle;
      }
      .fp3d-room-area {
        fill: var(--fp3d-muted);
        font: 500 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-dim {
        fill: var(--fp3d-accent);
        font: 600 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      .fp3d-vertex circle:not(.fp3d-hit) {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-vertex-sel circle:not(.fp3d-hit) {
        fill: var(--fp3d-accent);
      }
      .fp3d-vertex,
      .fp3d-mid {
        cursor: grab;
      }
      .fp3d-hit {
        fill: transparent;
      }
      .fp3d-mid circle:not(.fp3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--fp3d-soft);
      }
      .fp3d-mid path {
        stroke: var(--fp3d-text);
        stroke-width: 1.5;
      }
      .fp3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.fp3d-draft {
        fill: none;
      }
      .fp3d-draft-pt {
        fill: var(--fp3d-warm);
      }
      .fp3d-draft-first {
        fill: transparent;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
      }
      .fp3d-cursor {
        fill: var(--fp3d-warm);
      }
      .fp3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .fp3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      .fp3d-hint {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 8px;
        margin: 0;
        font-size: 12px;
        color: var(--fp3d-muted);
        pointer-events: none;
      }
      .fp3d-side {
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      .fp3d-narrow .fp3d-side {
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .fp3d-floor-list,
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-floor-list .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .fp3d-wide {
        grid-column: 1 / -1;
      }
      .fp3d-room-list {
        display: grid;
        gap: 2px;
      }
      .fp3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-row:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-row {
        align-items: center;
        cursor: default;
      }
      .fp3d-dev-row:hover {
        color: var(--fp3d-text);
      }
      .fp3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }
      .fp3d-dev-name svg {
        flex: none;
      }
      .fp3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .fp3d-device {
        cursor: grab;
      }
      .fp3d-device circle:not(.fp3d-hit) {
        fill: #111a2e;
        stroke: var(--fp3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .fp3d-device path {
        fill: none;
        stroke: var(--fp3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-device-on circle:not(.fp3d-hit) {
        fill: var(--fp3d-warm);
        stroke: var(--fp3d-warm);
      }
      .fp3d-device-on path {
        stroke: #2a1a00;
      }
      .fp3d-muted {
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-points {
        margin: 12px 0;
      }
      .fp3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .fp3d-point-sel .fp3d-muted {
        color: var(--fp3d-accent);
      }
      .fp3d-point .fp3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .fp3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .fp3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .fp3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
    `,
  ];
}

if (!customElements.get("fp3d-editor")) customElements.define("fp3d-editor", Fp3dEditor);
