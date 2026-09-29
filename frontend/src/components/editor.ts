// 2D editor: floors, rooms (rectangles and free shapes), snapping, undo, background template.

import { css, html, LitElement, nothing, svg, type PropertyValues, type TemplateResult } from "lit";
import { fetchImage, listHistory, restoreSnapshot, storeImage, takeSnapshot, type Snapshot } from "../api.ts";
import { download, exportFile, parseExport } from "../transfer.ts";
import { areaEntities, autoPlace, defaultHeight, entityName, furnitureEntities, groupByDevice, isPlaceable, kindOf, openingEntities, windowPosition } from "../devices.ts";
import { furnitureSymbol } from "./furniture2d.ts";
import { closeGaps, suggestedThickness } from "../geometry/gaps.ts";
import { snapToWall } from "../geometry/snap.ts";
import { furnishRoom, PACKAGES, type PackageId } from "../packages.ts";
import { generateWalls, locateOnWalls, pointOnRoomEdge, type Wall } from "../geometry/walls.ts";
import { formatNumber, translate, type I18nKey } from "../i18n.ts";
import { iconPath } from "../icons.ts";
import {
  bounds,
  centroid,
  FLOOR_MATERIALS,
  FURNITURE_GROUPS,
  FURNITURE_SIZE,
  FURNITURE_TYPES,
  isLamp,
  LAMP_MODEL,
  isAxisRect,
  OUTDOOR_TYPES,
  spotGrid,
  step,
  type Direction,
  signedArea,
  newFloor,
  OPENING_PRESETS,
  openingPreset,
  type OpeningPreset,
  floorElevation,
  resizeFurniture,
  roomTiles,
  pointInPolygon,
  polygonArea,
  uid,
  type Building,
  type Floor,
  type Furniture,
  type FurnitureType,
  type LampMount,
  type OutdoorArea,
  type OutdoorType,
  type RoofType,
  type Placement,
  type Opening,
  type OpeningType,
  type Room,
  type Vec2,
} from "../model.ts";
import { controls, tokens } from "../styles.ts";
import type { HassArea, HassFloor, HomeAssistant } from "../types.ts";
import { importPack, removePack } from "../api.ts";
import { load3d } from "../load3d.ts";
import { furnitureName } from "../furniture-names.ts";
import { furnitureSize, isElectric, packItem, packItemName, packType, setPacks, type FurniturePack } from "../packs.ts";

type Tool = "select" | "rect" | "polygon" | "measure" | "opening" | "furniture" | "outdoor" | "meter";

type Drag =
  | { kind: "pan"; last: [number, number] }
  | { kind: "vertex"; roomId: string; index: number; base: Building; moved: boolean }
  | { kind: "device"; entityId: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "opening"; id: string; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "furniture"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "rotate"; id: string; base: Building; moved: boolean }
  | { kind: "resize"; id: string; corner: [1 | -1, 1 | -1]; base: Building; moved: boolean }
  | { kind: "room"; roomId: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "rect"; start: Vec2; end: Vec2; outdoor?: boolean }
  | { kind: "outdoor"; id: string; start: Vec2; startScreen: [number, number]; base: Building; moved: boolean }
  | { kind: "tap"; startScreen: [number, number]; last: [number, number]; panning: boolean };

interface Guides {
  point?: Vec2;
  x?: number;
  z?: number;
}

/** Drags that change the document live (restored when cancelled, recorded in the history when done). */
const EDIT_DRAGS = new Set(["vertex", "room", "device", "opening", "furniture", "rotate", "resize", "outdoor"]);

const HISTORY = 100;
const SNAP_PX = 10;
const round = (v: number) => Math.round(v * 1000) / 1000;

export class Fp3dEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    narrow: { type: Boolean },
    packs: { attribute: false },
    _packMsg: { state: true },
    _preview: { state: true },
    _doc: { state: true },
    _floorId: { state: true },
    _roomId: { state: true },
    _vertex: { state: true },
    _openingId: { state: true },
    _furnitureId: { state: true },
    _deviceId: { state: true },
    _deviceQuery: { state: true },
    _expanded: { state: true },
    _notice: { state: true },
    _history: { state: true },
    _spots: { state: true },
    _outdoorId: { state: true },
    _floorMenu: { state: true },
    _openingPreset: { state: true },
    _measureLen: { state: true },
    _packages: { state: true },
    _rectSize: { state: true },
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
  /** Imported furniture packs (from the panel's controller). */
  declare packs: FurniturePack[] | undefined;
  /** Result of the last pack import. */
  private declare _packMsg: { ok: boolean; text: string } | null;
  /** Picture of the furniture under the pointer in the library. */
  private declare _preview: { type: string; url: string | null; left: number; top: number } | null;
  private declare _doc: Building;
  private declare _floorId: string | null;
  private declare _roomId: string | null;
  private declare _vertex: number | null;
  private declare _openingId: string | null;
  private declare _furnitureId: string | null;
  private declare _deviceId: string | null;
  private declare _deviceQuery: string;
  /** Devices whose further entities are unfolded in the device list. */
  private declare _expanded: Set<string>;
  /** Short confirmation shown after an action (e.g. closed gaps). */
  private declare _notice: string | null;
  /** Restore points, loaded when the backup section is opened. */
  private declare _history: Snapshot[] | null;
  /** Open "place spots" form of the selected room. */
  private declare _outdoorId: string | null;
  /** The "add floor" menu with the floors of Home Assistant is open. */
  private declare _floorMenu: boolean;
  /** Kind of opening the opening tool places (the last one chosen). */
  private declare _openingPreset: OpeningPreset;
  /** Length typed for the next wall when drawing by measure, and the size for "rectangle by size". */
  private declare _measureLen: number;
  /** The package list of the selected room is open. */
  private declare _packages: boolean;
  private declare _rectSize: [number, number];
  private declare _spots: { type: FurnitureType; rows: number; cols: number; entity: string | null } | null;
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
    this._openingId = null;
    this._furnitureId = null;
    this._deviceId = null;
    this._deviceQuery = "";
    this._expanded = new Set();
    this._notice = null;
    this._history = null;
    this._spots = null;
    this._outdoorId = null;
    this._floorMenu = false;
    this._openingPreset = "door";
    this._packMsg = null;
    this._preview = null;
    this._measureLen = 3;
    this._packages = false;
    this._rectSize = [4, 3];
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
    // this bundle keeps its own pack registry
    if (changed.has("packs")) setPacks(this.packs ?? []);
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
      if (this.drag && EDIT_DRAGS.has(this.drag.kind) && "moved" in this.drag && this.drag.moved && "base" in this.drag) this.restoreLive(this.drag.base);
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
    if (this._tool === "rect" || this._tool === "outdoor") {
      const start = this.snap(world, undefined, e.altKey);
      this.drag = { kind: "rect", start, end: start, outdoor: this._tool === "outdoor" };
      return;
    }
    if (this._tool === "polygon" || this._tool === "measure") {
      this.drag = { kind: "tap", startScreen: local, last: local, panning: false };
      return;
    }
    if (this._tool === "opening") {
      if (!this.placeOpening(this._openingPreset, local)) this.drag = { kind: "pan", last: local };
      return;
    }
    if (this._tool === "meter") {
      if (this.isAdmin && this._floorId) {
        const g = this._doc.settings.grid;
        const [x, z] = world.map((v) => round(Math.round(v / g) * g));
        this.setEnergy({ meter: { floor_id: this._floorId, x, z } });
      }
      this._tool = "select";
      return;
    }
    const deviceEl = target.closest("[data-device]");
    if (deviceEl && this.isAdmin) {
      this.drag = { kind: "device", entityId: deviceEl.getAttribute("data-device")!, start: world, startScreen: local, base: this._doc, moved: false };
      return;
    }
    const openingEl = target.closest("[data-opening]");
    if (openingEl) {
      const id = openingEl.getAttribute("data-opening")!;
      this.selectItem("opening", id);
      this.drag = this.isAdmin ? { kind: "opening", id, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const resizeEl = target.closest("[data-resize]");
    if (resizeEl && this.isAdmin) {
      const [id, sx, sz] = resizeEl.getAttribute("data-resize")!.split(":");
      this.drag = { kind: "resize", id, corner: [sx === "1" ? 1 : -1, sz === "1" ? 1 : -1], base: this._doc, moved: false };
      return;
    }
    const rotateEl = target.closest("[data-rotate]");
    if (rotateEl && this.isAdmin) {
      this.drag = { kind: "rotate", id: rotateEl.getAttribute("data-rotate")!, base: this._doc, moved: false };
      return;
    }
    const furnitureEl = target.closest("[data-furniture]");
    if (furnitureEl && !target.closest("[data-vertex], [data-mid]")) {
      const id = furnitureEl.getAttribute("data-furniture")!;
      this.selectItem("furniture", id);
      this.drag = this.isAdmin ? { kind: "furniture", id, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
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
      this.change(
        (_, floor) => {
          floor.rooms.find((r) => r.id === roomId)!.points.splice(i + 1, 0, mid);
          const first = Math.hypot(mid[0] - a[0], mid[1] - a[1]);
          for (const o of floor.openings) {
            if (o.room_id !== roomId) continue;
            if (o.edge > i) o.edge += 1;
            else if (o.edge === i && o.offset > first) {
              o.edge = i + 1;
              o.offset = round(o.offset - first);
            }
          }
        },
        base,
        false,
      );
      this._vertex = i + 1;
      this.drag = { kind: "vertex", roomId, index: i + 1, base, moved: true };
      return;
    }
    const outdoorEl = target.closest("[data-outdoor]");
    if (outdoorEl && !target.closest("[data-room]") && !this.roomAt(world)) {
      const id = outdoorEl.getAttribute("data-outdoor")!;
      this.selectItem("outdoor", id);
      this.drag = this.isAdmin ? { kind: "outdoor", id, start: world, startScreen: local, base: this._doc, moved: false } : { kind: "pan", last: local };
      return;
    }
    const roomId = target.closest("[data-room]")?.getAttribute("data-room") ?? this.roomAt(world);
    if (roomId) {
      if (roomId !== this._roomId) this._vertex = null;
      this.selectItem("room", roomId);
      this.drag =
        this.isAdmin && this._tool !== "furniture"
        ? { kind: "room", roomId, start: world, startScreen: local, base: this._doc, moved: false }
        : { kind: "pan", last: local };
      return;
    }
    this.selectItem("room", null);
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
      if (this._tool !== "select" && this._tool !== "furniture" && this.floor) this._cursor = this.snap(world, undefined, e.altKey);
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
      case "opening": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const baseFloor = drag.base.floors.find((f) => f.id === this._floorId);
        const o = baseFloor?.openings.find((x) => x.id === drag.id);
        const room = baseFloor?.rooms.find((r) => r.id === o?.room_id);
        if (!o || !room) return;
        const offset = this.offsetOnEdge(room, o.edge, world, o.width, e.altKey);
        this.change((_, floor) => Object.assign(floor.openings.find((x) => x.id === drag.id)!, { offset }), drag.base, false);
        break;
      }
      case "furniture": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        let x = round(Math.round((f.x + world[0] - drag.start[0]) / g) * g);
        let z = round(Math.round((f.z + world[1] - drag.start[1]) / g) * g);
        let rotation = f.rotation;
        // near a wall: turn the back (or a side) to it and sit flush; Alt moves freely
        const snap = e.altKey ? null : this.snapToWall({ ...f, x, z });
        if (snap) ({ x, z, rotation } = snap);
        this.change((_, floor) => Object.assign(floor.furniture.find((q) => q.id === drag.id)!, { x, z, rotation }), drag.base, false);
        break;
      }
      case "outdoor": {
        if (!drag.moved && Math.hypot(local[0] - drag.startScreen[0], local[1] - drag.startScreen[1]) < 5) return;
        drag.moved = true;
        const area = drag.base.floors.find((f) => f.id === this._floorId)?.outdoor.find((o) => o.id === drag.id);
        if (!area) return;
        const g = e.altKey ? 0.01 : this._doc.settings.grid;
        const dx = Math.round((world[0] - drag.start[0]) / g) * g;
        const dz = Math.round((world[1] - drag.start[1]) / g) * g;
        this.change(
          (_, floor) => (floor.outdoor.find((o) => o.id === drag.id)!.points = area.points.map(([x, z]) => [round(x + dx), round(z + dz)])),
          drag.base,
          false,
        );
        break;
      }
      case "resize": {
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        const size = resizeFurniture(f, drag.corner, world, e.altKey ? 0.01 : this._doc.settings.grid);
        this.change((_, floor) => Object.assign(floor.furniture.find((q) => q.id === drag.id)!, size), drag.base, false);
        break;
      }
      case "rotate": {
        drag.moved = true;
        const f = drag.base.floors.find((x) => x.id === this._floorId)?.furniture.find((x) => x.id === drag.id);
        if (!f) return;
        // the handle sits in front of the item: turn the front towards the pointer
        let a = (Math.atan2(-(world[0] - f.x), world[1] - f.z) * 180) / Math.PI;
        const step = e.altKey ? 1 : 15;
        a = ((Math.round(a / step) * step) % 360 + 360) % 360;
        this.change((_, floor) => Object.assign(floor.furniture.find((q) => q.id === drag.id)!, { rotation: a }), drag.base, false);
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
      if (drag && EDIT_DRAGS.has(drag.kind) && "moved" in drag && drag.moved && "base" in drag) this.restoreLive(drag.base);
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
          const pts: Vec2[] = [lo, [hi[0], lo[1]], hi, [lo[0], hi[1]]];
          if (drag.outdoor) this.addOutdoor(pts);
          else this.addRoom(pts);
        }
        this._guides = {};
        break;
      }
      case "tap":
        if (drag.panning) break;
        // by measure, a tap only sets (or moves) the starting point; the walls are typed in
        if (this._tool === "measure") this._draft = [this.snap(this.toWorld(...local), undefined, e.altKey)];
        else this.addDraftPoint(this.snap(this.toWorld(...local), undefined, e.altKey), local);
        break;
      case "opening":
      case "furniture":
      case "rotate":
      case "resize":
      case "outdoor":
        if (drag.moved) this.pushHistory(drag.base);
        break;
      case "device":
        if (drag.moved) this.pushHistory(drag.base);
        // a tap on a device selects it (and the room it stands in)
        else this.selectItem("device", drag.entityId);
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

  /** Adds a wall of the typed length in a direction (drawing by measure). */
  private measureStep(dir: Direction): void {
    const last = this._draft[this._draft.length - 1];
    if (!last || !(this._measureLen > 0)) return;
    const next = step(last, this._measureLen, dir);
    // arriving at the start closes the room
    const first = this._draft[0];
    if (this._draft.length >= 3 && Math.hypot(next[0] - first[0], next[1] - first[1]) < 0.01) {
      this.closeDraft();
      return;
    }
    this._draft = [...this._draft, next];
  }

  private rectBySize(): void {
    const start = this._draft[0] ?? [0, 0];
    const [w, d] = this._rectSize;
    if (!(w > 0.1 && d > 0.1)) return;
    this.addRoom([start, step(start, w, "right"), step(step(start, w, "right"), d, "down"), step(start, d, "down")]);
    this._draft = [];
  }

  private renderMeasureForm() {
    const draft = this._draft;
    const first = draft[0];
    const last = draft[draft.length - 1];
    const gap = first && last && draft.length > 1 ? Math.hypot(last[0] - first[0], last[1] - first[1]) : 0;
    const arrows: [Direction, string][] = [
      ["up", "↑"],
      ["left", "←"],
      ["right", "→"],
      ["down", "↓"],
    ];
    const len = (v: number) => formatNumber(this.hass, v, 2);
    return html`<section>
      <h3>${this.t("measure")}</h3>
      ${!first
        ? html`<p class="fp3d-sub">${this.t("measure_start")}</p>`
        : html`<p class="fp3d-sub">${this.t("measure_from", { x: len(first[0]), z: len(first[1]) })}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("measure_length")}
                <input
                  class="fp3d-measure-input"
                  type="number"
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${String(this._measureLen)}
                  @input=${(e: Event) => (this._measureLen = parseFloat((e.target as HTMLInputElement).value.replace(",", ".")) || 0)}
                  @keydown=${(e: KeyboardEvent) => {
                    const dir = { ArrowRight: "right", ArrowLeft: "left", ArrowUp: "up", ArrowDown: "down" }[e.key] as Direction | undefined;
                    if (dir) {
                      e.preventDefault();
                      this.measureStep(dir);
                    } else if (e.key === "Enter") this.closeDraft();
                  }}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${arrows.map(([dir, label]) => html`<button class="fp3d-btn fp3d-arrow-${dir}" title=${this.t(`dir_${dir}`)} @click=${() => this.measureStep(dir)}>${label}</button>`)}
              </div>
            </div>
            ${draft.length > 1
              ? html`<ol class="fp3d-measure-list">
                  ${draft.slice(1).map((p, i) => html`<li>${len(Math.hypot(p[0] - draft[i][0], p[1] - draft[i][1]))} m</li>`)}
                </ol>`
              : nothing}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${draft.length < 3} @click=${() => this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${draft.length < 2} @click=${() => (this._draft = draft.slice(0, -1))}>${this.t("measure_undo")}</button>
            </div>
            ${draft.length >= 3 ? html`<p class="fp3d-sub">${this.t("measure_gap", { gap: len(gap) })}</p>` : nothing}`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.num(this.t("width"), this._rectSize[0], (v) => (this._rectSize = [Math.max(0.1, v), this._rectSize[1]]), 0.01, 0.1)}
        ${this.num(this.t("depth"), this._rectSize[1], (v) => (this._rectSize = [this._rectSize[0], Math.max(0.1, v)]), 0.01, 0.1)}
        <button class="fp3d-btn fp3d-wide" @click=${() => this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`;
  }

  private addOutdoor(points: Vec2[]): void {
    if (!this.floor) return;
    const area: OutdoorArea = { id: uid("outdoor"), type: "lawn", points: points.map(([x, z]) => [round(x), round(z)]) };
    this.change((_, floor) => floor.outdoor.push(area));
    this.selectItem("outdoor", area.id);
    this._tool = "select";
  }

  private get outdoorArea(): OutdoorArea | undefined {
    return this._outdoorId ? this.floor?.outdoor.find((o) => o.id === this._outdoorId) : undefined;
  }

  private updateOutdoor(patch: Partial<OutdoorArea>): void {
    const id = this._outdoorId;
    this.change((_, floor) => Object.assign(floor.outdoor.find((o) => o.id === id)!, patch));
  }

  private deleteOutdoor(): void {
    const id = this._outdoorId;
    if (!id || !this.isAdmin) return;
    this.change((_, floor) => (floor.outdoor = floor.outdoor.filter((o) => o.id !== id)));
    this._outdoorId = null;
  }

  private duplicateOutdoor(): void {
    const a = this.outdoorArea;
    if (!a || !this.isAdmin) return;
    const copy: OutdoorArea = { ...a, id: uid("outdoor"), points: a.points.map(([x, z]) => [round(x + 0.5), round(z + 0.5)]) };
    this.change((_, floor) => floor.outdoor.push(copy));
    this.selectItem("outdoor", copy.id);
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
    } else if (e.key === "Delete" || (e.key === "Backspace" && (this._tool === "select" || this._tool === "furniture"))) {
      if (this._deviceId) {
        this.removeDevice(this._deviceId);
        this._deviceId = null;
      } else if (this._outdoorId) this.deleteOutdoor();
      else if (this._openingId) this.deleteOpening();
      else if (this._furnitureId) this.deleteFurniture();
      else if (this._vertex !== null) this.deleteVertex(this._vertex);
      else this.deleteRoom();
    } else if (e.key.toLowerCase() === "r" && !mod && this._furnitureId) {
      this.rotateFurniture(e.shiftKey ? -90 : 90);
    } else if (e.key === "Backspace" && this._tool === "polygon") {
      this._draft = this._draft.slice(0, -1);
    } else if (e.key === "Enter" && this._tool === "polygon") {
      this.closeDraft();
    } else if (e.key === "Escape") {
      if (this._draft.length) this._draft = [];
      else if (this._tool !== "select") this._tool = "select";
      else this.selectItem("room", null);
      this._cursor = null;
    }
  };

  // ------------------------------------------------------------------ actions

  /** Floors of Home Assistant's floor registry that no floor of the plan stands for yet, lowest first. */
  private get freeHaFloors(): HassFloor[] {
    const used = new Set(this._doc.floors.map((f) => f.ha_floor));
    return Object.values(this.hass?.floors ?? {})
      .filter((f) => !used.has(f.floor_id))
      .sort((a, b) => (a.level ?? 99) - (b.level ?? 99) || a.name.localeCompare(b.name));
  }

  /** Areas of a floor's Home Assistant floor that have no room in the plan yet. */
  private unplacedAreas(floor: Floor): HassArea[] {
    if (!floor.ha_floor) return [];
    const used = new Set(this._doc.floors.flatMap((f) => f.rooms.map((r) => r.area_id)));
    return Object.values(this.hass?.areas ?? {})
      .filter((a) => a.floor_id === floor.ha_floor && !used.has(a.area_id))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  private addFloor(ha: HassFloor | null = null): void {
    const floors = this._doc.floors;
    const id = uid("floor");
    const name = ha?.name ?? (floors.length === 0 ? this.t("default_floor") : this.t("new_floor", { n: floors.length }));
    const floor = { ...newFloor(id, name, floorElevation(floors, ha?.level)), ha_floor: ha?.floor_id ?? null };
    const next = structuredClone(this._doc);
    // floors are kept from bottom to top
    const at = next.floors.findIndex((f) => f.elevation > floor.elevation);
    next.floors.splice(at < 0 ? next.floors.length : at, 0, floor);
    this.setDoc(next);
    this._floorId = id;
    this._roomId = null;
    this._floorMenu = false;
    this.fit();
  }

  /** One room tile per unplaced area of the floor's Home Assistant floor, to drag into place. */
  private addAreaRooms(floor: Floor): void {
    const areas = this.unplacedAreas(floor);
    if (!areas.length) return;
    const rooms = roomTiles(floor, areas, () => uid("room"));
    this.change((_, f) => f.rooms.push(...rooms));
    this.fit();
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

  /** Select a room, an opening or a furniture item (only one at a time). */
  private selectItem(kind: "room" | "opening" | "furniture" | "device" | "outdoor", id: string | null): void {
    this._notice = null;
    this._outdoorId = kind === "outdoor" ? id : null;
    if (kind === "outdoor") this._roomId = null;
    if (kind !== "room" || id !== this._roomId) this._vertex = null;
    this._roomId = kind === "room" ? id : this._roomId;
    this._openingId = kind === "opening" ? id : null;
    this._furnitureId = kind === "furniture" ? id : null;
    this._deviceId = kind === "device" ? id : null;
    if (kind === "device" && id) {
      const pl = this.floor?.placements.find((x) => x.entity_id === id);
      this._roomId = (pl && this.roomAt([pl.x, pl.z])) ?? this._roomId;
    }
    if (kind === "opening" && id) this._roomId = this.floor?.openings.find((o) => o.id === id)?.room_id ?? this._roomId;
  }

  private get opening(): Opening | undefined {
    return this._openingId ? this.floor?.openings.find((o) => o.id === this._openingId) : undefined;
  }

  private get furnitureItem(): Furniture | undefined {
    return this._furnitureId ? this.floor?.furniture.find((f) => f.id === this._furnitureId) : undefined;
  }

  /** Centre offset on a room edge closest to `world`, keeping the opening inside the edge. */
  private offsetOnEdge(room: Room, edge: number, world: Vec2, width: number, free: boolean): number {
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const t = ((world[0] - a[0]) * (b[0] - a[0]) + (world[1] - a[1]) * (b[1] - a[1])) / len;
    const g = free ? 0.01 : this._doc.settings.grid;
    const half = Math.min(width, len) / 2;
    return round(Math.min(len - half, Math.max(half, Math.round(t / g) * g)));
  }

  /** Add a door or window on the room edge nearest to a screen point. */
  private placeOpening(preset: OpeningPreset, screen: [number, number]): boolean {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return false;
    let best: { room: Room; edge: number; d: number } | null = null;
    for (const room of floor.rooms) {
      for (let i = 0; i < room.points.length; i++) {
        const [ax, ay] = this.toScreen(room.points[i]);
        const [bx, by] = this.toScreen(room.points[(i + 1) % room.points.length]);
        const l2 = (bx - ax) ** 2 + (by - ay) ** 2 || 1;
        const t = Math.min(1, Math.max(0, ((screen[0] - ax) * (bx - ax) + (screen[1] - ay) * (by - ay)) / l2));
        const d = Math.hypot(screen[0] - ax - (bx - ax) * t, screen[1] - ay - (by - ay) * t);
        // the selected room wins on shared edges
        const score = d - (room.id === this._roomId ? 0.5 : 0);
        if (d < SNAP_PX * 2.2 && (!best || score < best.d)) best = { room, edge: i, d: score };
      }
    }
    if (!best) return false;
    const { room, edge } = best;
    const a = room.points[edge];
    const b = room.points[(edge + 1) % room.points.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const defaults = OPENING_PRESETS[preset];
    const type: OpeningType = defaults.type;
    const width = round(Math.min(defaults.width, Math.max(0.3, len - 0.1)));
    const opening: Opening = {
      id: uid("opening"),
      room_id: room.id,
      edge,
      offset: this.offsetOnEdge(room, edge, this.toWorld(...screen), width, false),
      width,
      type,
      sill: defaults.sill,
      height: defaults.height,
      hinge: "left",
      leaves: defaults.leaves,
      swing: "in",
      cover: null,
      contact: null,
      contact2: null,
      tilt: null,
    };
    this.change((_, f) => f.openings.push(opening));
    this._tool = "select";
    this.selectItem("opening", opening.id);
    return true;
  }

  /** Turns an opening into another kind (door, double door, window, terrace door, garage door). */
  private setOpeningPreset(o: Opening, preset: OpeningPreset): void {
    const d = OPENING_PRESETS[preset];
    this._openingPreset = preset;
    const sameWidth = openingPreset(o) === preset;
    this.updateOpening({ type: d.type, leaves: d.leaves, sill: d.sill, height: d.height, ...(sameWidth ? {} : { width: d.width }) });
  }

  private updateOpening(patch: Partial<Opening>): void {
    const id = this._openingId;
    this.change((_, floor) => Object.assign(floor.openings.find((o) => o.id === id)!, patch));
  }

  private deleteOpening(): void {
    const id = this._openingId;
    if (!id || !this.isAdmin) return;
    this.change((_, floor) => (floor.openings = floor.openings.filter((o) => o.id !== id)));
    this._openingId = null;
  }

  private addFurniture(type: string): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const [w, d, h0] = furnitureSize(type);
    // stairs reach up to the next floor
    const above = this._doc.floors.filter((f) => f.elevation > floor.elevation).sort((p, q) => p.elevation - q.elevation)[0];
    const h = type === "stairs" ? round(above ? above.elevation - floor.elevation : floor.height + 0.25) : h0;
    const room = this.room;
    const [x, z] = room ? centroid(room.points) : this.toWorld(this._size.w / 2, this._size.h / 2);
    const item: Furniture = { id: uid("furniture"), type, x: round(x), z: round(z), rotation: 0, w, d, h, variant: null };
    this.change((_, f) => f.furniture.push(item));
    this.selectItem("furniture", item.id);
  }

  /**
   * Snap a furniture item against the nearest wall of its room: back to the wall (or a side, when it
   * stands sideways), flush with the wall face. Null when no wall is close enough.
   */
  private snapToWall(f: Furniture): { x: number; z: number; rotation: number } | null {
    return this.floor ? snapToWall(this.floor, f, this._doc.settings.wall_interior) : null;
  }

  private updateFurniture(patch: Partial<Furniture>): void {
    const id = this._furnitureId;
    this.change((_, floor) => Object.assign(floor.furniture.find((f) => f.id === id)!, patch));
  }

  private rotateFurniture(delta: number): void {
    const f = this.furnitureItem;
    if (!f || !this.isAdmin) return;
    this.updateFurniture({ rotation: (((f.rotation + delta) % 360) + 360) % 360 });
  }

  private deleteFurniture(): void {
    const id = this._furnitureId;
    if (!id || !this.isAdmin) return;
    this.change((_, floor) => (floor.furniture = floor.furniture.filter((f) => f.id !== id)));
    this._furnitureId = null;
  }

  private duplicateFurniture(): void {
    const f = this.furnitureItem;
    if (!f || !this.isAdmin) return;
    const copy = { ...structuredClone(f), id: uid("furniture"), x: round(f.x + 0.3), z: round(f.z + 0.3) };
    this.change((_, floor) => floor.furniture.push(copy));
    this.selectItem("furniture", copy.id);
  }

  /** Place entities in the selected room; an entity already placed elsewhere moves here. */
  private placeDevices(entityIds: string[]): void {
    const room = this.room;
    if (!room || !entityIds.length || !this.isAdmin) return;
    const ids = new Set(entityIds);
    this.change((doc, floor) => {
      for (const f of doc.floors) {
        f.placements = f.placements.filter((pl) => !ids.has(pl.entity_id));
        f.furniture = f.furniture.filter((m) => !(isLamp(m.type) && m.entity && ids.has(m.entity)));
      }
      const taken = [...floor.placements.map((pl) => [pl.x, pl.z] as Vec2), ...floor.furniture.filter((m) => isLamp(m.type)).map((m) => [m.x, m.z] as Vec2)];
      for (const pl of autoPlace(room, entityIds, taken)) {
        if (!pl.entity_id.startsWith("light.")) {
          floor.placements.push(pl);
          continue;
        }
        // a light becomes a ceiling lamp that is tapped directly in 3D
        const [w, d, h] = FURNITURE_SIZE.lamp_ceiling;
        floor.furniture.push({ id: uid("furniture"), type: "lamp_ceiling", x: pl.x, z: pl.z, rotation: 0, w, d, h, variant: null, entity: pl.entity_id, power: null });
      }
    });
  }

  private get device(): Placement | undefined {
    return this._deviceId ? this.floor?.placements.find((p) => p.entity_id === this._deviceId) : undefined;
  }

  private updateDevice(patch: Partial<Placement>): void {
    const id = this._deviceId;
    this.change((_, floor) => Object.assign(floor.placements.find((p) => p.entity_id === id)!, patch));
  }

  /** Move the selected device to the middle of its room. */
  private centreDevice(): void {
    const pl = this.device;
    const roomId = pl ? this.roomAt([pl.x, pl.z]) : null;
    const room = this.floor?.rooms.find((r) => r.id === roomId);
    if (!pl || !room) return;
    const [x, z] = centroid(room.points);
    this.updateDevice({ x: round(x), z: round(z) });
  }

  /** Spread the room's ceiling lights evenly over it (grid of cells, one light per cell). */
  private spreadCeilingLights(room: Room): void {
    const floor = this.floor;
    if (!floor) return;
    const lights = floor.placements.filter(
      (p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points),
    );
    if (lights.length < 2) return;
    const b = bounds(room.points);
    const w = b.x1 - b.x0;
    const d = b.z1 - b.z0;
    const cols = Math.max(1, Math.round(Math.sqrt((lights.length * w) / Math.max(0.1, d))));
    const rows = Math.ceil(lights.length / cols);
    const spots = lights.map((_, i) => {
      const r = Math.floor(i / cols);
      // a last row that is not full is spread over the whole width as well
      const inRow = r === rows - 1 ? lights.length - cols * (rows - 1) : cols;
      const c = i - r * cols;
      return [round(b.x0 + (w / inRow) * (c + 0.5)), round(b.z0 + (d / rows) * (r + 0.5))] as Vec2;
    });
    const ids = lights.map((l) => l.entity_id);
    this.change((_, f) => {
      ids.forEach((id, i) => Object.assign(f.placements.find((p) => p.entity_id === id)!, { x: spots[i][0], z: spots[i][1] }));
    });
  }

  /** Close gaps between rooms of this floor and take the gap as interior wall thickness. */
  private closeFloorGaps(): void {
    const floor = this.floor;
    if (!floor || !this.isAdmin) return;
    const { rooms, gaps } = closeGaps(floor.rooms);
    if (!gaps.length) {
      this._notice = this.t("gaps_none");
      return;
    }
    const thickness = suggestedThickness(gaps);
    this.change((doc, f) => {
      f.rooms = rooms;
      if (thickness) doc.settings.wall_interior = thickness;
    });
    this._notice = thickness
      ? this.t("gaps_closed_wall", { n: gaps.length, t: formatNumber(this.hass, thickness, 2) })
      : this.t("gaps_closed", { n: gaps.length });
  }

  private removeDevice(entityId: string): void {
    this.change((doc) => {
      for (const f of doc.floors) {
        f.placements = f.placements.filter((pl) => pl.entity_id !== entityId);
        f.furniture = f.furniture.filter((m) => !(isLamp(m.type) && m.entity === entityId));
      }
    });
  }

  private deleteVertex(index: number): void {
    const room = this.room;
    if (!room || room.points.length <= 3) return;
    const n = room.points.length;
    const prev = (index - 1 + n) % n;
    this.change((_, floor) => {
      floor.rooms.find((r) => r.id === room.id)!.points.splice(index, 1);
      // the two edges at the removed corner merge; openings on them cannot keep their place
      floor.openings = floor.openings
        .filter((o) => o.room_id !== room.id || (o.edge !== index && o.edge !== prev))
        .map((o) => (o.room_id === room.id && o.edge > index ? { ...o, edge: o.edge - 1 } : o));
    });
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
      ${this.renderPreview()}
      <div class="fp3d-editor ${this.narrow ? "fp3d-narrow" : ""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${(["select", "rect", "polygon", "measure", "opening", "furniture", "outdoor"] as Tool[]).map(
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
              ${floor ? this.renderOutdoor(floor) : nothing} ${floor ? this.renderRooms(floor) : nothing} ${floor ? this.renderFurniture(floor) : nothing}
              ${floor && walls ? this.renderOpenings(floor, walls.walls) : nothing} ${floor ? this.renderMeter(floor) : nothing}
              ${floor && this._tool === "select" ? this.renderDevices(floor) : nothing}
              ${this.room && this.isAdmin && this._tool === "select" && !this._openingId && !this._furnitureId ? this.renderHandles(this.room) : nothing}
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

  private renderOutdoor(floor: Floor) {
    return svg`<g>${floor.outdoor.map((a) => {
      const pts = a.points.map((p) => this.toScreen(p).join(",")).join(" ");
      const [cx, cy] = this.toScreen(centroid(a.points));
      const b = bounds(a.points);
      const big = Math.min(b.x1 - b.x0, b.z1 - b.z0) * this._view.scale > 40;
      return svg`<g data-outdoor=${a.id} class=${`fp3d-out fp3d-out-${a.type}${a.id === this._outdoorId ? " fp3d-out-sel" : ""}`}>
        <polygon points=${pts} />
        ${big ? svg`<text x=${cx} y=${cy + 4}>${this.t(`out_${a.type}` as I18nKey)}</text>` : nothing}
      </g>`;
    })}</g>`;
  }

  private renderOutdoorForm(a: OutdoorArea) {
    const admin = this.isAdmin;
    const rect = isAxisRect(a.points);
    const b = bounds(a.points);
    const setRect = (field: "x" | "z" | "w" | "d", v: number) => {
      let { x0, z0, x1, z1 } = b;
      if (field === "x") [x0, x1] = [v, v + (x1 - x0)];
      if (field === "z") [z0, z1] = [v, v + (z1 - z0)];
      if (field === "w") x1 = x0 + Math.max(0.1, v);
      if (field === "d") z1 = z0 + Math.max(0.1, v);
      this.updateOutdoor({ points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].map(([x, z]) => [round(x), round(z)] as Vec2) });
    };
    return html`<section>
      <h3>${this.t("outdoor")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateOutdoor({ type: (e.target as HTMLSelectElement).value as OutdoorType })}>
            ${OUTDOOR_TYPES.map((t) => html`<option value=${t} ?selected=${t === a.type}>${this.t(`out_${t}` as I18nKey)}</option>`)}
          </select></label
        >
        ${rect
          ? html`${this.num(this.t("x"), b.x0, (v) => setRect("x", v))} ${this.num(this.t("z"), b.z0, (v) => setRect("z", v))}
            ${this.num(this.t("width"), b.x1 - b.x0, (v) => setRect("w", v), 0.01, 0.1)} ${this.num(this.t("depth"), b.z1 - b.z0, (v) => setRect("d", v), 0.01, 0.1)}`
          : nothing}
      </div>
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`
        : nothing}
    </section>`;
  }

  private renderRooms(floor: Floor) {
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
    `;
  }

  private renderMeter(floor: Floor) {
    const m = this._doc.energy?.meter;
    if (!m || m.floor_id !== floor.id) return nothing;
    const [x, y] = this.toScreen([m.x, m.z]);
    return svg`<g class="fp3d-meter" transform="translate(${x} ${y})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`;
  }

  private renderFurniture(floor: Floor) {
    const k = this._view.scale;
    return svg`<g>${floor.furniture.map((f) => {
      const sel = f.id === this._furnitureId;
      const [cx, cy] = this.toScreen([f.x, f.z]);
      const big = Math.min(f.w, f.d) * k > 44;
      // the handle sits in front of the item; dragging it turns the item
      const a = (f.rotation * Math.PI) / 180;
      const reach = f.d / 2 + Math.max(0.3, 26 / k);
      const [hx, hy] = this.toScreen([f.x - Math.sin(a) * reach, f.z + Math.cos(a) * reach]);
      const [fx, fy] = this.toScreen([f.x - Math.sin(a) * (f.d / 2), f.z + Math.cos(a) * (f.d / 2)]);
      const lit = isLamp(f.type) && !!f.entity && f.entity !== "none" && this.hass?.states[f.entity]?.state === "on";
      return svg`<g data-furniture=${f.id} class=${`fp3d-furn${sel ? " fp3d-furn-sel" : ""}${lit ? " fp3d-furn-lit" : ""}`}>
        <g transform="translate(${cx} ${cy}) rotate(${f.rotation}) scale(${k})">
          <rect class="fp3d-furn-body" x=${-f.w / 2} y=${-f.d / 2} width=${f.w} height=${f.d} />
          <g class="fp3d-furn-sym">${furnitureSymbol(f.type, f.w, f.d)}</g>
          <line class="fp3d-furn-front" x1=${-f.w / 2} y1=${f.d / 2} x2=${f.w / 2} y2=${f.d / 2} />
        </g>
        ${big ? svg`<text x=${cx} y=${cy + 4}>${furnitureName(this.hass, f.type)}</text>` : nothing}
      </g>
      ${sel && this.isAdmin
        ? ([[-1, -1], [1, -1], [1, 1], [-1, 1]] as const).map(([sx, sz]) => {
            const [x, y] = this.toScreen([f.x + (sx * f.w * Math.cos(a)) / 2 - (sz * f.d * Math.sin(a)) / 2, f.z + (sx * f.w * Math.sin(a)) / 2 + (sz * f.d * Math.cos(a)) / 2]);
            return svg`<g class="fp3d-resize" data-resize=${`${f.id}:${sx}:${sz}`}>
              <circle cx=${x} cy=${y} r="14" class="fp3d-hit" />
              <rect x=${x - 5} y=${y - 5} width="10" height="10" rx="2" />
            </g>`;
          })
        : nothing}
      ${sel
        ? (() => {
            // behind the item, away from the turn handle in front
            const [lx, ly] = this.toScreen([f.x + Math.sin(a) * (f.d / 2 + 18 / k), f.z - Math.cos(a) * (f.d / 2 + 18 / k)]);
            return svg`<text class="fp3d-dim" x=${lx} y=${ly + 4}>${formatNumber(this.hass, f.w, 2)} × ${formatNumber(this.hass, f.d, 2)} m</text>`;
          })()
        : nothing}
      ${sel && this.isAdmin
        ? svg`<g class="fp3d-rotate" data-rotate=${f.id}>
            <line x1=${fx} y1=${fy} x2=${hx} y2=${hy} />
            <circle cx=${hx} cy=${hy} r="16" class="fp3d-hit" />
            <circle cx=${hx} cy=${hy} r="8" />
            <path d="M${hx - 4} ${hy - 1}a4 4 0 1 1 2 3.5" />
          </g>`
        : nothing}`;
    })}</g>`;
  }

  private renderOpenings(floor: Floor, walls: Wall[]) {
    return svg`<g>${floor.openings.map((o) => {
      const room = floor.rooms.find((r) => r.id === o.room_id);
      if (!room || o.edge >= room.points.length) return nothing;
      const hit = locateOnWalls(walls, room, o.edge, o.offset);
      const p0 = pointOnRoomEdge(room, o.edge, o.offset - o.width / 2);
      const p1 = pointOnRoomEdge(room, o.edge, o.offset + o.width / 2);
      const ux = (p1[0] - p0[0]) / (o.width || 1);
      const uz = (p1[1] - p0[1]) / (o.width || 1);
      // normal into the room (room outlines may run either way round)
      const sgn = signedArea(room.points) >= 0 ? 1 : -1;
      const n: Vec2 = [-uz * sgn, ux * sgn];
      // gap across the whole wall thickness
      let across: [number, number] = [0.06, 0.06];
      if (hit) across = hit.wall.roomLeft === room.id ? [hit.wall.left, hit.wall.right] : [hit.wall.right, hit.wall.left];
      const q = (p: Vec2, k: number) => this.toScreen([p[0] + n[0] * k, p[1] + n[1] * k]);
      const gap = [q(p0, across[0] + 0.01), q(p1, across[0] + 0.01), q(p1, -across[1] - 0.01), q(p0, -across[1] - 0.01)];
      const sel = o.id === this._openingId;
      const cls = `fp3d-open fp3d-open-${o.type}${sel ? " fp3d-open-sel" : ""}`;
      let symbol;
      if (o.type === "garage") {
        // door panel just inside the room, with its track under the ceiling drawn dashed
        const a0 = q(p0, across[0] - 0.04);
        const a1 = q(p1, across[0] - 0.04);
        const b0 = q(p0, across[0] + Math.min(2, o.height));
        const b1 = q(p1, across[0] + Math.min(2, o.height));
        symbol = svg`<line x1=${a0[0]} y1=${a0[1]} x2=${a1[0]} y2=${a1[1]} />
          <path class="fp3d-open-track" d="M${a0[0]} ${a0[1]}L${b0[0]} ${b0[1]}M${a1[0]} ${a1[1]}L${b1[0]} ${b1[1]}" />`;
      } else if (o.type === "door") {
        // leaves swinging into the room (or out of it) from the hinge side; "left" is seen from the
        // room, so it depends on which way round the outline runs
        const out = o.swing === "out";
        const face = out ? -across[1] : across[0];
        const hingeAtP0 = (o.hinge === "left") === sgn > 0;
        const two = o.leaves === 2;
        const midP: Vec2 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        const leafW = two ? o.width / 2 : o.width;
        const arc = (hinge: Vec2, free: Vec2) => {
          const [hx, hy] = q(hinge, face);
          const [fx, fy] = q(free, face);
          const leaf = q(hinge, face + (out ? -leafW : leafW));
          const r = leafW * this._view.scale;
          const cross = (leaf[0] - hx) * (fy - hy) - (leaf[1] - hy) * (fx - hx);
          return svg`<path d="M${hx} ${hy}L${leaf[0]} ${leaf[1]}A${r} ${r} 0 0 ${cross > 0 ? 1 : 0} ${fx} ${fy}" />`;
        };
        symbol = two
          ? svg`${arc(p0, midP)}${arc(p1, midP)}`
          : arc(hingeAtP0 ? p0 : p1, hingeAtP0 ? p1 : p0);
      } else {
        // two panes in the middle of the wall; a double window has a post in the middle
        const mid = (across[0] - across[1]) / 2;
        const a0 = q(p0, mid + 0.035);
        const a1 = q(p1, mid + 0.035);
        const b0 = q(p0, mid - 0.035);
        const b1 = q(p1, mid - 0.035);
        const midP: Vec2 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        const m0 = q(midP, across[0]);
        const m1 = q(midP, -across[1]);
        symbol = svg`<line x1=${a0[0]} y1=${a0[1]} x2=${a1[0]} y2=${a1[1]} /><line x1=${b0[0]} y1=${b0[1]} x2=${b1[0]} y2=${b1[1]} />${
          o.leaves === 2 ? svg`<line x1=${m0[0]} y1=${m0[1]} x2=${m1[0]} y2=${m1[1]} />` : nothing
        }`;
      }
      return svg`<g data-opening=${o.id} class=${cls}>
        <polygon class="fp3d-open-gap" points=${gap.map((p) => p.join(",")).join(" ")} />
        ${symbol}
      </g>`;
    })}</g>`;
  }

  private renderDevices(floor: Floor) {
    return svg`<g>${floor.placements.map((pl) => {
      const kind = kindOf(pl.entity_id);
      if (!kind) return nothing;
      const [x, y] = this.toScreen([pl.x, pl.z]);
      const on = this.hass?.states[pl.entity_id]?.state === "on";
      const cls = `fp3d-device${on ? " fp3d-device-on" : ""}${pl.entity_id === this._deviceId ? " fp3d-device-sel" : ""}`;
      return svg`<g data-device=${pl.entity_id} class=${cls} transform="translate(${x} ${y})">
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
    if (this._tool !== "polygon" && this._tool !== "measure") return nothing;
    const pts = [...this._draft, ...(this._cursor ? [this._cursor] : [])].map((p) => this.toScreen(p));
    return svg`<g pointer-events="none">
      ${pts.length > 1 ? svg`<polyline class="fp3d-draft" points=${pts.map((p) => p.join(",")).join(" ")} />` : nothing}
      ${this._tool === "measure"
        ? this._draft.slice(1).map((p, i) => {
            const a = this.toScreen(this._draft[i]);
            const b = this.toScreen(p);
            return svg`<text class="fp3d-dim" x=${(a[0] + b[0]) / 2} y=${(a[1] + b[1]) / 2 - 6}>${formatNumber(this.hass, Math.hypot(p[0] - this._draft[i][0], p[1] - this._draft[i][1]), 2)} m</text>`;
          })
        : nothing}
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
    // furnishing: the library and the selected item come first
    if (this._tool === "furniture" && floor && admin) {
      return html`${this.furnitureItem ? this.renderFurnitureForm(this.furnitureItem) : nothing} ${this.renderFurnitureLibrary()}`;
    }
    // a selected item shows only its own form, with a way back to the floor and room
    const item =
      this._tool === "measure"
        ? null
        : this.furnitureItem
          ? this.renderFurnitureForm(this.furnitureItem)
          : this.opening
            ? this.renderOpeningForm(this.opening)
            : this.device
              ? this.renderDeviceForm(this.device)
              : this.outdoorArea
                ? this.renderOutdoorForm(this.outdoorArea)
                : null;
    if (item) {
      return html`<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("room", this._roomId)}>‹ ${this.t(room ? "back_to_room" : "back_to_floor", { room: room?.name ?? "" })}</button>
        ${item}`;
    }
    if (room && this._tool !== "measure") {
      return html`<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("room", null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}`;
    }
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
          ${admin
            ? html`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${() => (this.freeHaFloors.length ? (this._floorMenu = !this._floorMenu) : this.addFloor())}
              >
                + ${this.t("add_floor")}
              </button>`
            : nothing}
        </div>
        ${admin && this._floorMenu
          ? html`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(
                (f) => html`<button class="fp3d-btn" @click=${() => this.addFloor(f)}>
                  ${f.name}${f.level != null ? html` <span class="fp3d-sub">· ${this.t("level", { n: f.level })}</span>` : nothing}
                </button>`,
              )}
              <button class="fp3d-btn" @click=${() => this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`
          : nothing}
        ${floor
          ? html`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${floor.name} ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ name: (e.target as HTMLInputElement).value })}
              /></label>
              ${this.num(this.t("elevation"), floor.elevation, (v) => this.updateFloor({ elevation: v }))}
              ${this.num(this.t("height"), floor.height, (v) => this.updateFloor({ height: Math.max(1, v) }), 0.05, 1)}
              ${Object.keys(this.hass?.floors ?? {}).length
                ? html`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ ha_floor: (e.target as HTMLSelectElement).value || null })}>
                      <option value="" ?selected=${!floor.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors ?? {})
                        .filter((f) => f.floor_id === floor.ha_floor || !floors.some((x) => x.ha_floor === f.floor_id))
                        .map((f) => html`<option value=${f.floor_id} ?selected=${f.floor_id === floor.ha_floor}>${f.name}</option>`)}
                    </select></label
                  >`
                : nothing}
              ${admin && this.unplacedAreas(floor).length
                ? html`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${() => this.addAreaRooms(floor)}>
                      ${this.t("area_rooms", { n: this.unplacedAreas(floor).length })}
                    </button>
                  </div>`
                : nothing}
              ${admin
                ? html`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${() => this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${() => this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${floor.rooms.length < 2} @click=${() => this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice ? html`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>` : nothing}`
                : nothing}
            </div>`
          : nothing}
      </section>
      ${this._tool === "measure" && floor
        ? this.renderMeasureForm()
        : this.outdoorArea
        ? this.renderOutdoorForm(this.outdoorArea)
        : this.opening
        ? this.renderOpeningForm(this.opening)
        : this.furnitureItem
          ? this.renderFurnitureForm(this.furnitureItem)
          : this.device
            ? this.renderDeviceForm(this.device)
          : room
            ? html`${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}`
            : floor
              ? this.renderRoomList(floor)
              : nothing}
      ${admin ? this.renderEnergySettings() : nothing}
      ${admin ? this.renderPresenceSettings() : nothing}
      ${floor && admin ? this.renderBackgroundForm(floor) : nothing} ${admin ? this.renderSettings() : nothing}
      ${admin ? this.renderBackup() : nothing}
    `;
  }

  private renderRoomList(floor: Floor) {
    if (!floor.rooms.length) return nothing;
    return html`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${floor.rooms.map(
          (r) => html`<button class="fp3d-row" @click=${() => this.selectItem("room", r.id)}>
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
            <button class="fp3d-btn fp3d-primary" @click=${() => (this._packages = !this._packages)}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${() => this.openSpotForm(room)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${() => this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteRoom()}>${this.t("delete")}</button>
          </div>`
        : nothing}
      ${this._spots ? this.renderSpotForm(room) : nothing}
      ${this._packages
        ? html`<div class="fp3d-packages">
            ${PACKAGES.map(
              (p) => html`<button class="fp3d-btn" @click=${() => this.applyPackage(room, p)}>
                <b>${this.t(`pkg_${p}` as I18nKey)}</b><span>${this.t(`pkg_${p}_desc` as I18nKey)}</span>
              </button>`,
            )}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`
        : nothing}
    </section>`;
  }

  /** Adds the furniture of a room package (lamps link to the room's lights automatically). */
  private applyPackage(room: Room, pkg: PackageId): void {
    if (!this.isAdmin) return;
    const items = furnishRoom(room, pkg, () => uid("furniture"));
    this.change((_, floor) => floor.furniture.push(...items));
    this._packages = false;
    this._notice = this.t("pkg_done", { n: items.length });
  }

  /** Suggests about one spot per 1.2 m in each direction, and the room's first light. */
  private openSpotForm(room: Room): void {
    const b = bounds(room.points);
    const lights = this.hass ? areaEntities(this.hass, room.area_id).filter((id) => id.startsWith("light.")) : [];
    this._spots = {
      type: "lamp_downlight",
      rows: Math.max(1, Math.round((b.z1 - b.z0) / 1.2)),
      cols: Math.max(1, Math.round((b.x1 - b.x0) / 1.2)),
      entity: lights[0] ?? null,
    };
  }

  private placeSpots(room: Room): void {
    const f = this._spots;
    if (!f || !this.isAdmin) return;
    const [w, d, h] = FURNITURE_SIZE[f.type];
    const items = spotGrid(room, f.rows, f.cols).map(([x, z]) => ({
      id: uid("furniture"),
      type: f.type,
      x,
      z,
      rotation: 0,
      w,
      d,
      h,
      variant: null,
      // every spot of the grid follows the same light (spots on one dimmer); "none" = not linked
      entity: f.entity ?? "none",
      power: null,
    }));
    this.change((_, floor) => floor.furniture.push(...items));
    this._spots = null;
    this._notice = this.t("spots_placed", { n: items.length });
  }

  private renderSpotForm(room: Room) {
    const f = this._spots!;
    const count = spotGrid(room, f.rows, f.cols).length;
    const lights = this.entityOptions((id) => /^(light|switch|input_boolean)\./.test(id));
    const set = (patch: Partial<NonNullable<Fp3dEditor["_spots"]>>) => (this._spots = { ...f, ...patch });
    return html`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${(e: Event) => set({ type: (e.target as HTMLSelectElement).value as FurnitureType })}>
          ${(["lamp_downlight", "lamp_spot", "lamp_panel", "lamp_ceiling"] as FurnitureType[]).map(
            (t) => html`<option value=${t} ?selected=${t === f.type}>${this.t(`furn_${t}` as I18nKey)}</option>`,
          )}
        </select></label
      >
      ${this.num(this.t("spots_cols"), f.cols, (v) => set({ cols: Math.max(1, Math.min(12, Math.round(v))) }), 1, 1)}
      ${this.num(this.t("spots_rows"), f.rows, (v) => set({ rows: Math.max(1, Math.min(12, Math.round(v))) }), 1, 1)}
      ${this.entitySelect(this.t("furn_entity_light"), f.entity, undefined, lights, (v) => set({ entity: v === "none" ? null : v }))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!count} @click=${() => this.placeSpots(room)}>${this.t("spots_add", { n: count })}</button>
        <button class="fp3d-btn" @click=${() => (this._spots = null)}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`;
  }

  private entityOptions(filter: (id: string) => boolean) {
    const areaName = (id: string) => {
      const entry = this.hass?.entities?.[id];
      const area = entry?.area_id ?? (entry?.device_id ? this.hass?.devices?.[entry.device_id]?.area_id : null);
      return area ? this.hass?.areas?.[area]?.name : undefined;
    };
    return Object.keys(this.hass?.states ?? {})
      .filter(filter)
      .map((id) => ({ id, label: `${entityName(this.hass, id)}${areaName(id) ? ` · ${areaName(id)}` : ""}` }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  private entitySelect(label: string, value: string | null, auto: string | null | undefined, options: { id: string; label: string }[], onChange: (v: string | null) => void) {
    const autoLabel =
      auto === undefined ? null : auto ? this.t("entity_auto", { name: entityName(this.hass, auto) }) : this.t("entity_auto_none");
    return html`<label class="fp3d-field fp3d-wide"
      >${label}
      <select
        ?disabled=${!this.isAdmin}
        @change=${(e: Event) => {
          const v = (e.target as HTMLSelectElement).value;
          onChange(v === "__auto" ? null : v);
        }}
      >
        ${autoLabel !== null ? html`<option value="__auto" ?selected=${value === null}>${autoLabel}</option>` : nothing}
        <option value="none" ?selected=${value === "none" || (autoLabel === null && value === null)}>${this.t("entity_none")}</option>
        ${options.map((o) => html`<option value=${o.id} ?selected=${o.id === value}>${o.label}</option>`)}
      </select></label
    >`;
  }

  private renderOpeningForm(o: Opening) {
    const admin = this.isAdmin;
    const window = o.type === "window";
    const garage = o.type === "garage";
    // what "automatic" would pick: resolve with the opening's own links cleared
    const autoPick = (key: "cover" | "contact") => {
      if (!this.hass) return null;
      const probe = structuredClone(this._doc.floors);
      for (const f of probe) for (const x of f.openings) if (x.id === o.id) x[key] = null;
      return openingEntities(this.hass, probe).get(o.id)?.[key] ?? null;
    };
    const dc = (id: string) => this.hass?.states[id]?.attributes.device_class as string | undefined;
    const covers = this.entityOptions((id) => id.startsWith("cover."));
    // sensors with a number for the live position of a blind
    const positions = this.entityOptions((id) => /^(sensor|number|input_number)\./.test(id) && Number.isFinite(Number(this.hass?.states[id]?.state)));
    // plain contacts, and handle sensors with three states (open / tilted / closed)
    const contacts = this.entityOptions(
      (id) =>
        (id.startsWith("binary_sensor.") && ["door", "window", "opening", "garage_door"].includes(dc(id) ?? "")) ||
        (id.startsWith("sensor.") && windowPosition(this.hass?.states[id]) !== null),
    );
    // handle sensors: text states (open / tilted / closed), a window_state attribute, or a telling name
    const handles = this.entityOptions((id) => {
      const st = this.hass?.states[id];
      if (id.startsWith("binary_sensor.")) return typeof st?.attributes.window_state === "string";
      return id.startsWith("sensor.") && (windowPosition(st) !== null || /griff|handle|fenster|window|drehgriff/i.test(`${id} ${entityName(this.hass, id)}`));
    });
    const plainContacts = this.entityOptions((id) => id.startsWith("binary_sensor.") && ["door", "window", "opening", "garage_door"].includes(dc(id) ?? ""));
    type Kind = NonNullable<Opening["sensor"]>;
    const leafSensors = (leaf: 1 | 2) => {
      const main = leaf === 1;
      const tilt = main ? o.tilt : (o.tilt2 ?? null);
      const contact = main ? o.contact : o.contact2;
      const kind: Kind = (main ? o.sensor : o.sensor2) ?? (tilt && tilt !== "none" ? "contact_tilt" : "contact");
      const setContact = (v: string | null) => this.updateOpening(main ? { contact: v } : { contact2: v === "none" ? null : v });
      return html`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!admin}
            @change=${(e: Event) => {
              const next = (e.target as HTMLSelectElement).value as Kind;
              const clearTilt = next === "contact_tilt" ? {} : main ? { tilt: null } : { tilt2: null };
              this.updateOpening({ ...(main ? { sensor: next } : { sensor2: next }), ...clearTilt });
            }}
          >
            ${(["contact", "handle", "contact_tilt"] as const).map((k) => html`<option value=${k} ?selected=${k === kind}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${kind === "handle"
          ? this.entitySelect(this.t("handle_entity"), contact, undefined, handles, (v) => setContact(v === "none" ? (main ? "none" : null) : v))
          : this.entitySelect(this.t("contact_entity"), contact, main ? autoPick("contact") : undefined, plainContacts, setContact)}
        ${kind === "contact_tilt"
          ? this.entitySelect(this.t("tilt_entity"), tilt, undefined, contacts, (v) => this.updateOpening(main ? { tilt: v === "none" ? null : v } : { tilt2: v === "none" ? null : v }))
          : nothing}`;
    };
    const preset = openingPreset(o);
    const door = o.type === "door";
    return html`<section>
      <h3>${this.t(`preset_${preset}` as I18nKey)}</h3>
      ${admin
        ? html`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${(Object.keys(OPENING_PRESETS) as OpeningPreset[]).map(
              (p) => html`<button class="fp3d-chip" aria-pressed=${p === preset} @click=${() => this.setOpeningPreset(o, p)}>${this.t(`preset_${p}` as I18nKey)}</button>`,
            )}
          </div>`
        : nothing}
      ${admin && !garage
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${() => this.updateOpening({ hinge: o.hinge === "left" ? "right" : "left" })}>
              ⇆ ${this.t(o.leaves === 2 ? "flip_main_leaf" : "flip_hinge")}
            </button>
            ${door
              ? html`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${() => this.updateOpening({ swing: o.swing === "out" ? "in" : "out" })}>
                  ⇅ ${this.t("flip_swing")}
                </button>`
              : nothing}
          </div>`
        : nothing}
      <div class="fp3d-form">
        ${this.num(this.t("width"), o.width, (v) => this.updateOpening({ width: Math.max(0.3, v) }), 0.01, 0.3)}
        ${this.num(this.t("opening_position"), o.offset, (v) => this.updateOpening({ offset: Math.max(0, v) }), 0.01, 0)}
        ${window ? this.num(this.t("sill"), o.sill, (v) => this.updateOpening({ sill: Math.max(0, v) }), 0.01, 0) : nothing}
        ${this.num(this.t("opening_height"), o.height, (v) => this.updateOpening({ height: Math.max(0.3, v) }), 0.01, 0.3)}
        ${garage
          ? nothing
          : html`<label class="fp3d-field fp3d-wide"
          >${this.t(o.leaves === 2 ? "main_leaf" : "hinge")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateOpening({ hinge: (e.target as HTMLSelectElement).value as "left" | "right" })}>
            <option value="left" ?selected=${o.hinge === "left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${o.hinge === "right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${window || garage ? this.entitySelect(this.t("cover_entity"), o.cover, autoPick("cover"), covers, (v) => this.updateOpening({ cover: v })) : nothing}
        ${(window || garage) && o.cover !== "none"
          ? html`${this.entitySelect(this.t("cover_position_entity"), o.position ?? null, undefined, positions, (v) => this.updateOpening({ position: v === "none" ? null : v }))}
              ${o.position
                ? html`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!admin}
                      .checked=${!!o.position_inverted}
                      @change=${(ev: Event) => this.updateOpening({ position_inverted: (ev.target as HTMLInputElement).checked })}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`
                : nothing}`
          : nothing}
        ${window
          ? html`${o.leaves === 2 ? html`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>` : nothing}
              ${leafSensors(1)} ${o.leaves === 2 ? html`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${leafSensors(2)}` : nothing}`
          : html`${this.entitySelect(this.t(o.leaves === 2 ? "contact_main" : "contact_entity"), o.contact, autoPick("contact"), contacts, (v) => this.updateOpening({ contact: v }))}
              ${o.leaves === 2 && !garage
                ? this.entitySelect(this.t("contact_second"), o.contact2, undefined, contacts, (v) => this.updateOpening({ contact2: v === "none" ? null : v }))
                : nothing}`}
      </div>
      <p class="fp3d-sub">${this.t(window ? "opening_hint" : garage ? "garage_hint" : "door_hint")}</p>
      ${admin
        ? html`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${() => this.deleteOpening()}>${this.t("delete")}</button></div>`
        : nothing}
    </section>`;
  }

  private renderFurnitureForm(f: Furniture) {
    const admin = this.isAdmin;
    return html`<section>
      <h3>${this.t("furniture")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ type: (e.target as HTMLSelectElement).value })}>
            ${FURNITURE_TYPES.map((t) => html`<option value=${t} ?selected=${t === f.type}>${this.t(`furn_${t}` as I18nKey)}</option>`)}
            ${(this.packs ?? []).map(
              (pack) => html`<optgroup label=${pack.name}>
                ${pack.items.map((it) => {
                  const t = packType(pack.id, it.id);
                  return html`<option value=${t} ?selected=${t === f.type}>${packItemName(it, this.hass?.language ?? "en")}</option>`;
                })}
              </optgroup>`,
            )}
            ${f.type.startsWith("pack:") && !(this.packs ?? []).some((p) => f.type.startsWith(`pack:${p.id}:`))
              ? html`<option value=${f.type} selected>${furnitureName(this.hass, f.type)}</option>`
              : nothing}
          </select></label
        >
        ${this.num(this.t("x"), f.x, (v) => this.updateFurniture({ x: v }))} ${this.num(this.t("z"), f.z, (v) => this.updateFurniture({ z: v }))}
        ${this.num(this.t("width"), f.w, (v) => this.updateFurniture({ w: Math.max(0.05, v) }), 0.01, 0.05)}
        ${this.num(this.t("depth"), f.d, (v) => this.updateFurniture({ d: Math.max(0.05, v) }), 0.01, 0.05)}
        ${this.num(this.t("height_m"), f.h, (v) => this.updateFurniture({ h: Math.max(0.005, v) }), 0.01, 0)}
        ${this.num(this.t("rotation"), f.rotation, (v) => this.updateFurniture({ rotation: ((v % 360) + 360) % 360 }), 1)}
      </div>
      ${f.type === "stairs" ? html`<p class="fp3d-sub">${this.t("stairs_hint")}</p>` : nothing}
      ${f.type === "lamp_pendant"
        ? html`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
                ${(["", "globe", "cone", "drum"] as const).map(
                  (v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`pendant_${v || "shade"}` as I18nKey)}</option>`,
                )}
              </select></label
            >
          </div>`
        : nothing}
      ${isElectric(f.type) ? this.renderFurnitureLinks(f) : nothing} ${f.type === "parking" ? this.renderParkingForm(f) : nothing}
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${() => this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" @click=${() => this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`
        : nothing}
    </section>`;
  }

  private setEnergy(patch: Partial<Building["energy"]>): void {
    const next = structuredClone(this._doc);
    next.energy = { ...next.energy, ...patch };
    this.setDoc(next);
  }

  private renderEnergySettings() {
    const e = this._doc.energy;
    const attr = (id: string, key: string) => this.hass?.states[id]?.attributes[key] as string | undefined;
    const power = this.entityOptions((id) => id.startsWith("sensor.") && attr(id, "device_class") === "power");
    const soc = this.entityOptions((id) => id.startsWith("sensor.") && attr(id, "device_class") === "battery");
    const tariff = this.entityOptions(
      (id) => id.startsWith("sensor.") && (attr(id, "device_class") === "monetary" || /\/(kWh|MWh)$/.test(attr(id, "unit_of_measurement") ?? "")),
    );
    const pick = (key: "grid" | "solar" | "battery" | "battery_soc" | "tariff") => (v: string | null) => this.setEnergy({ [key]: v === "none" ? null : v });
    const floorName = e.meter ? this._doc.floors.find((f) => f.id === e.meter!.floor_id)?.name : null;
    return html`<details class="fp3d-section">
      <summary>${this.t("energy")}</summary>
      <div class="fp3d-form">
        <div class="fp3d-actions fp3d-wide">
          <button class="fp3d-btn ${this._tool === "meter" ? "fp3d-primary" : ""}" ?disabled=${!this.floor} @click=${() => (this._tool = "meter")}>
            ${this.t("energy_meter_set")}
          </button>
          ${e.meter ? html`<button class="fp3d-btn fp3d-danger" @click=${() => this.setEnergy({ meter: null })}>${this.t("energy_meter_remove")}</button>` : nothing}
        </div>
        <p class="fp3d-sub fp3d-wide">
          ${e.meter ? `${this.t("energy_meter")}: ${floorName ?? ""} · ${formatNumber(this.hass, e.meter.x, 2)} / ${formatNumber(this.hass, e.meter.z, 2)} m` : this.t("energy_meter_hint")}
        </p>
        ${this.entitySelect(this.t("energy_grid"), e.grid, undefined, power, pick("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.grid_invert} @change=${(ev: Event) => this.setEnergy({ grid_invert: (ev.target as HTMLInputElement).checked })} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"), e.solar, undefined, power, pick("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"), e.battery, undefined, power, pick("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.battery_invert} @change=${(ev: Event) => this.setEnergy({ battery_invert: (ev.target as HTMLInputElement).checked })} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"), e.battery_soc, undefined, soc, pick("battery_soc"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"), e.tariff, undefined, tariff, pick("tariff"))}
      </div>
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </details>`;
  }

  private renderPresenceSettings() {
    const persons = Object.keys(this.hass?.states ?? {})
      .filter((id) => id.startsWith("person."))
      .sort();
    const sensors = (person: string) => {
      // likely room sensors of this person first (ESPresense / Bermuda name them after the device)
      const slug = person.slice("person.".length);
      const all = this.entityOptions((id) => id.startsWith("sensor."));
      const likely = (id: string) => id.includes(slug) && /(area|room|raum|bermuda|espresense)/.test(id);
      return [...all.filter((o) => likely(o.id)), ...all.filter((o) => !likely(o.id))];
    };
    const set = (person: string, sensor: string | null) => {
      const next = structuredClone(this._doc);
      next.presence = next.presence.filter((p) => p.person !== person);
      if (sensor && sensor !== "none") next.presence.push({ person, sensor });
      this.setDoc(next);
    };
    return html`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${persons.length
          ? persons.map((id) =>
              this.entitySelect(
                `${entityName(this.hass, id)} · ${this.t("presence_sensor")}`,
                this._doc.presence.find((p) => p.person === id)?.sensor ?? null,
                undefined,
                sensors(id),
                (v) => set(id, v),
              ),
            )
          : html`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`;
  }

  private renderFurnitureLinks(f: Furniture) {
    if (!this.hass) return nothing;
    const hass = this.hass;
    // what "automatic" would choose: resolve with this item's own links cleared
    const autoPick = (key: "entity" | "power") => {
      const probe = structuredClone(this._doc.floors);
      for (const fl of probe) for (const x of fl.furniture) if (x.id === f.id) x[key] = null;
      return furnitureEntities(hass, probe).get(f.id)?.[key] ?? null;
    };
    const media = f.type === "tv_board" || f.type === "tv_wall";
    const lamp = isLamp(f.type);
    const entities = this.entityOptions((id) =>
      lamp
        ? // a lamp can follow a light or a plain switch (e.g. a relay that switches the ceiling light)
          /^(light|switch|input_boolean)\./.test(id)
        : media
          ? id.startsWith("media_player.")
          : f.type === "radiator"
            ? id.startsWith("climate.")
            : f.type === "robot_vacuum"
              ? id.startsWith("vacuum.")
              : /^(switch|media_player|fan|input_boolean|climate)\./.test(id),
    );
    const power = this.entityOptions((id) => id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === "power");
    return html`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t(lamp ? "furn_entity_light" : media ? "furn_entity_tv" : f.type === "radiator" ? "furn_entity_climate" : f.type === "robot_vacuum" ? "furn_entity_vacuum" : "furn_entity"), f.entity ?? null, autoPick("entity"), entities, (v) =>
          this.updateFurniture({ entity: v }),
        )}
        ${lamp ? nothing : this.entitySelect(this.t("furn_power"), f.power ?? null, autoPick("power"), power, (v) => this.updateFurniture({ power: v }))}
      </div>
      <p class="fp3d-sub">${this.t(lamp ? (f.type === "lamp_pendant" ? "lamp_hint_pendant" : "lamp_hint") : media ? "furn_links_hint_tv" : f.type === "robot_vacuum" ? "robot_hint" : "furn_links_hint")}</p>`;
  }

  /** Parking spot: presence sensor, the vehicle shown, its size, and an optional vehicle type sensor. */
  private renderParkingForm(f: Furniture) {
    const admin = this.isAdmin;
    const lang = this.hass?.language ?? "en";
    const vehicles = (this.packs ?? []).flatMap((p) => p.items.filter((it) => it.vehicle).map((it) => ({ id: packType(p.id, it.id), label: `${packItemName(it, lang)} · ${p.name}` })));
    const presence = this.entityOptions((id) => /^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(id));
    const typeSensors = this.entityOptions((id) => /^(sensor|input_select|select|input_text)\./.test(id));
    const typeState = f.type_entity ? this.hass?.states[f.type_entity] : undefined;
    const options = Array.isArray(typeState?.attributes.options) ? (typeState.attributes.options as string[]) : [];
    const types = f.types ?? [];
    const setTypes = (next: { state: string; vehicle: string }[]) => this.updateFurniture({ types: next });
    const vehicleSelect = (value: string | null, onChange: (v: string | null) => void) =>
      html`<select ?disabled=${!admin} @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value || null)}>
        <option value="" ?selected=${!value}>${this.t("parking_vehicle_none")}</option>
        ${vehicles.map((v) => html`<option value=${v.id} ?selected=${v.id === value}>${v.label}</option>`)}
      </select>`;
    // the room's height against the vehicle's: a hint when it would not fit
    const floor = this.floor;
    const room = floor?.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const item = f.vehicle ? packItem(f.vehicle) : undefined;
    const carH = item ? item.size[2] * (f.scale ?? 1) : 0;
    const tooTall = !!room && !!floor && carH > floor.height + 1e-6;
    return html`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"), f.entity ?? null, undefined, presence, (v) => this.updateFurniture({ entity: v === "none" ? null : v }))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${vehicleSelect(f.vehicle ?? null, (v) => this.updateFurniture({ vehicle: v }))}</label>
        ${vehicles.length ? nothing : html`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"), Math.round((f.scale ?? 1) * 100), (v) => this.updateFurniture({ scale: Math.min(150, Math.max(30, v)) / 100 }), 5, 30)}
        ${this.entitySelect(this.t("parking_type_entity"), f.type_entity ?? null, undefined, typeSensors, (v) => this.updateFurniture({ type_entity: v === "none" ? null : v }))}
        ${f.type_entity
          ? html`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${types.map(
                (t, i) => html`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${t.state}
                    ?disabled=${!admin}
                    @change=${(e: Event) => setTypes(types.map((x, j) => (j === i ? { ...x, state: (e.target as HTMLInputElement).value } : x)))}
                  />
                  ${vehicleSelect(t.vehicle, (v) => setTypes(types.map((x, j) => (j === i ? { ...x, vehicle: v ?? "" } : x))))}
                  <button class="fp3d-btn" ?disabled=${!admin} title=${this.t("delete")} @click=${() => setTypes(types.filter((_, j) => j !== i))}>✕</button>
                </div>`,
              )}
              <datalist id="fp3d-parking-states">${options.map((o) => html`<option value=${o}></option>`)}</datalist>
              ${admin
                ? html`<button class="fp3d-btn" @click=${() => setTypes([...types, { state: options[types.length] ?? "", vehicle: vehicles[0]?.id ?? "" }])}>${this.t("parking_add_type")}</button>`
                : nothing}
            </div>`
          : nothing}
      </div>
      ${tooTall ? html`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall", { car: formatNumber(this.hass, carH, 2), room: formatNumber(this.hass, floor!.height, 2) })}</p>` : nothing}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>`;
  }

  private renderFurnitureLibrary() {
    const room = this.room;
    return html`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${room ? this.t("furniture_into", { room: room.name }) : this.t("furniture_pick_room")}</p>
      ${Object.entries(FURNITURE_GROUPS).map(
        ([group, types]) => html`<h4 class="fp3d-lib-head">${this.t(`furn_group_${group}` as I18nKey)}</h4>
          <div class="fp3d-library">
            ${types.map((t) => this.libraryButton(t, this.t(`furn_${t}` as I18nKey)))}
          </div>`,
      )}
      ${(this.packs ?? []).map(
        (pack) => html`<h4 class="fp3d-lib-head">${pack.name}</h4>
          <div class="fp3d-library">
            ${pack.items.map((it) => this.libraryButton(packType(pack.id, it.id), packItemName(it, this.hass?.language ?? "en")))}
          </div>`,
      )}
    </section>
    ${this.renderPacks()}`;
  }

  private libraryButton(type: string, label: string) {
    const show = (e: Event) => void this.showPreview(type, e.currentTarget as HTMLElement);
    return html`<button
      class="fp3d-btn"
      @click=${() => this.addFurniture(type)}
      @mouseenter=${show}
      @focus=${show}
      @mouseleave=${() => (this._preview = null)}
      @blur=${() => (this._preview = null)}
    >
      ${label}
    </button>`;
  }

  /** Picture of an item, drawn by the 3D bundle and shown left of its button. */
  private async showPreview(type: string, button: HTMLElement): Promise<void> {
    const r = button.getBoundingClientRect();
    const place = { left: Math.max(8, r.left - 196), top: Math.max(8, Math.min(window.innerHeight - 200, r.top + r.height / 2 - 95)) };
    this._preview = { type, url: null, ...place };
    try {
      const mod = await load3d();
      const [w, d, h] = furnitureSize(type);
      const url = mod.furniturePreview({ type, w, d, h, variant: null, lamp: LAMP_MODEL[type] ?? null }, 180, this.packs ?? []);
      if (this._preview?.type === type) this._preview = { type, url, ...place };
    } catch {
      this._preview = null;
    }
  }

  private renderPreview() {
    const p = this._preview;
    if (!p) return nothing;
    return html`<div class="fp3d-preview" style="left:${p.left}px;top:${p.top}px" aria-hidden="true">
      ${p.url ? html`<img src=${p.url} alt="" />` : html`<span class="fp3d-preview-wait"></span>`}
      <b>${furnitureName(this.hass, p.type)}</b>
    </div>`;
  }

  private renderPacks() {
    const packs = this.packs ?? [];
    return html`<section>
      <h3>${this.t("packs")}</h3>
      ${packs.map(
        (p) => html`<div class="fp3d-pack">
          <div>
            <b>${p.name}</b>
            <span class="fp3d-sub">${this.t("pack_by", { publisher: p.publisher, n: p.items.length })}</span>
            ${p.licensee ? html`<span class="fp3d-sub">${this.t("pack_licensed", { name: p.licensee })}</span>` : nothing}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${() => this.deletePack(p)}>${this.t("pack_remove")}</button>
        </div>`,
      )}
      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" hidden @change=${(e: Event) => this.importPackFile(e)} />
      </label>
      ${this._packMsg ? html`<p class="fp3d-sub ${this._packMsg.ok ? "fp3d-notice" : "fp3d-pack-error"}">${this._packMsg.text}</p>` : nothing}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`;
  }

  private async importPackFile(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !this.hass) return;
    try {
      const res = await importPack(this.hass, await file.text());
      this._packMsg = { ok: true, text: this.t("pack_imported", { name: res.name, publisher: res.publisher, n: res.items }) };
      this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
    } catch (err) {
      const { code, message } = (err ?? {}) as { code?: string; message?: string };
      const key = `pack_error_${code}` as I18nKey;
      const text = this.t(key, { detail: message ?? String(err) });
      this._packMsg = { ok: false, text: text === key ? this.t("pack_error_other", { detail: message ?? String(err) }) : text };
    }
  }

  private async deletePack(pack: FurniturePack): Promise<void> {
    if (!this.hass || !confirm(this.t("pack_remove_confirm", { name: pack.name }))) return;
    await removePack(this.hass, pack.id);
    this._packMsg = null;
    this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
  }

  private renderDeviceForm(pl: Placement) {
    const admin = this.isAdmin;
    const kind = kindOf(pl.entity_id);
    const light = kind === "light";
    const mount = pl.mount ?? "ceiling";
    const auto = kind ? defaultHeight(kind, this.floor?.height ?? 2.5, light ? mount : null) : 1;
    return html`<section>
      <h3>${this.t("device")}</h3>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${kind ? iconPath(kind) : ""} />
        </svg>
        ${entityName(this.hass, pl.entity_id)}
      </p>
      <div class="fp3d-form">
        ${light
          ? html`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateDevice({ mount: (e.target as HTMLSelectElement).value as LampMount, y: null })}>
                ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === mount}>${this.t(`lamp_${m}`)}</option>`)}
              </select></label
            >`
          : nothing}
        ${this.num(this.t("x"), pl.x, (v) => this.updateDevice({ x: v }))} ${this.num(this.t("z"), pl.z, (v) => this.updateDevice({ z: v }))}
        ${this.num(this.t("marker_height"), pl.y ?? auto, (v) => this.updateDevice({ y: Math.max(0, v) }), 0.05, 0)}
      </div>
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${() => this.centreDevice()}>${this.t("device_centre")}</button>
            ${pl.y !== null ? html`<button class="fp3d-btn" @click=${() => this.updateDevice({ y: null })}>${this.t("height_auto")}</button>` : nothing}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${() => {
                this.removeDevice(pl.entity_id);
                this._deviceId = null;
              }}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`
        : nothing}
    </section>`;
  }

  private renderDeviceList(room: Room) {
    const admin = this.isAdmin;
    const hass = this.hass;
    const areaName = room.area_id ? hass?.areas?.[room.area_id]?.name : undefined;
    const ids = hass ? areaEntities(hass, room.area_id).filter((id) => isPlaceable(kindOf(id))) : [];
    // placed as a device, or as a lamp with this light
    const placedHere = new Set([
      ...(this.floor?.placements.filter((pl) => pointInPolygon([pl.x, pl.z], room.points)).map((pl) => pl.entity_id) ?? []),
      ...(this.floor?.furniture.filter((m) => isLamp(m.type) && m.entity && pointInPolygon([m.x, m.z], room.points)).map((m) => m.entity!) ?? []),
    ]);
    const groups = hass ? groupByDevice(hass, ids) : [];
    // the automatic placement only takes each device's main entity
    const unplacedMain = groups.map((g) => g.primary).filter((id) => !placedHere.has(id));
    const q = this._deviceQuery.trim().toLowerCase();
    const matches = (id: string) => !q || entityName(hass, id, areaName).toLowerCase().includes(q) || id.includes(q);
    const ceilingLights = this.floor?.placements.filter(
      (p) => kindOf(p.entity_id) === "light" && (p.mount ?? "ceiling") === "ceiling" && pointInPolygon([p.x, p.z], room.points),
    ).length;
    const pinned = new Set(room.panel ?? []);
    const row = (id: string, extra = false) => {
      const placed = placedHere.has(id);
      return html`<div class="fp3d-row fp3d-dev-row ${extra ? "fp3d-dev-extra" : ""}">
        <button class="fp3d-dev-name ${placed ? "" : "fp3d-muted"}" ?disabled=${!placed} @click=${() => this.selectItem("device", id)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${iconPath(kindOf(id)!)} />
          </svg>
          <span>${entityName(hass, id, areaName)}</span>
        </button>
        ${admin && !placed
          ? html`<button
              class="fp3d-pin ${pinned.has(id) ? "fp3d-pin-on" : ""}"
              aria-pressed=${pinned.has(id)}
              title=${this.t(pinned.has(id) ? "panel_unpin" : "panel_pin")}
              @click=${() => this.updateRoom({ panel: pinned.has(id) ? [...pinned].filter((x) => x !== id) : [...pinned, id] })}
            >
              ${pinned.has(id) ? "★" : "☆"}
            </button>`
          : nothing}
        ${admin
          ? placed
            ? html`<button class="fp3d-link" @click=${() => this.removeDevice(id)}>${this.t("devices_remove")}</button>`
            : html`<button class="fp3d-link" @click=${() => this.placeDevices([id])}>${this.t("devices_place")}</button>`
          : nothing}
      </div>`;
    };
    return html`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${!room.area_id
        ? html`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`
        : !ids.length
          ? html`<p class="fp3d-sub">${this.t("devices_none")}</p>`
          : html`${admin && unplacedMain.length
                ? html`<button class="fp3d-btn fp3d-primary fp3d-wide-btn" @click=${() => this.placeDevices(unplacedMain)}>${this.t("devices_place_all")}</button>`
                : nothing}
              ${admin && (ceilingLights ?? 0) >= 2
                ? html`<button class="fp3d-btn fp3d-wide-btn" @click=${() => this.spreadCeilingLights(room)}>${this.t("lights_spread")}</button>`
                : nothing}
              ${ids.length > 8
                ? html`<input
                    class="fp3d-search"
                    type="search"
                    placeholder=${this.t("devices_search")}
                    .value=${this._deviceQuery}
                    @input=${(e: Event) => (this._deviceQuery = (e.target as HTMLInputElement).value)}
                  />`
                : nothing}
              <div class="fp3d-room-list">
                ${groups.map((g) => {
                  const others = g.others.filter(matches);
                  const open = this._expanded.has(g.primary) || (!!q && others.length > 0);
                  if (!matches(g.primary) && !others.length) return nothing;
                  return html`${row(g.primary)}
                  ${g.others.length
                    ? html`<button
                        class="fp3d-more"
                        @click=${() => {
                          const next = new Set(this._expanded);
                          if (next.has(g.primary)) next.delete(g.primary);
                          else next.add(g.primary);
                          this._expanded = next;
                        }}
                      >
                        ${open ? this.t("devices_less") : this.t("devices_more", { n: g.others.length })}
                      </button>`
                    : nothing}
                  ${open ? (q ? others : g.others).map((id) => row(id, true)) : nothing}`;
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

  private async loadHistory(): Promise<void> {
    if (!this.hass) return;
    try {
      this._history = await listHistory(this.hass);
    } catch {
      this._history = [];
    }
  }

  private async restoreFromHistory(snap: Snapshot): Promise<void> {
    if (!this.hass || !confirm(this.t("backup_restore_confirm", { time: this.snapshotTime(snap) }))) return;
    await restoreSnapshot(this.hass, snap.id);
    this._notice = this.t("backup_restored");
    await this.loadHistory();
  }

  private exportPlan(shareable: boolean): void {
    const day = new Date().toISOString().slice(0, 10);
    download(`floorplan-3d-${this.t(shareable ? "export_name_template" : "export_name_backup")}-${day}.json`, JSON.stringify(exportFile(this._doc, shareable), null, 2));
  }

  private async importPlan(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !this.hass) return;
    let building: Building;
    try {
      building = parseExport(await file.text());
    } catch (err) {
      const code = (err as Error).message;
      alert(code === "not_json" ? this.t("import_error_not_json") : code === "not_plan" ? this.t("import_error_not_plan") : this.t("backup_import_error", { error: code }));
      return;
    }
    if (!confirm(this.t("backup_import_confirm"))) return;
    // the current plan stays available as a restore point
    await takeSnapshot(this.hass).catch(() => undefined);
    this.setDoc(building);
    this._floorId = building.floors[0]?.id ?? null;
    this.selectItem("room", null);
    this.fit();
    this._notice = this.t("backup_imported");
  }

  private snapshotTime(snap: Snapshot): string {
    return new Date(snap.saved_at * 1000).toLocaleString(this.hass?.language, { dateStyle: "short", timeStyle: "short" });
  }

  private renderBackup() {
    return html`<details
      class="fp3d-section"
      @toggle=${(e: Event) => {
        if ((e.target as HTMLDetailsElement).open) void this.loadHistory();
      }}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history === null
        ? html`<p class="fp3d-sub">${this.t("loading")}</p>`
        : this._history.length
          ? html`<div class="fp3d-room-list">
              ${this._history.map(
                (h) => html`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(h)} <span class="fp3d-muted">· ${this.t("backup_summary", { rooms: h.rooms, furniture: h.furniture })}</span></span>
                  <button class="fp3d-link" @click=${() => this.restoreFromHistory(h)}>${this.t("backup_restore")}</button>
                </div>`,
              )}
            </div>`
          : html`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${() => this.exportPlan(false)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${() => this.exportPlan(true)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
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
        ${this.num(this.t("north"), s.north, (v) => set({ north: ((Math.round(v) % 360) + 360) % 360 }), 1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select @change=${(e: Event) => set({ roof: { ...s.roof, type: (e.target as HTMLSelectElement).value as RoofType } })}>
            ${(["none", "flat", "gable"] as const).map((t) => html`<option value=${t} ?selected=${t === s.roof.type}>${this.t(`roof_${t}`)}</option>`)}
          </select></label
        >
        ${s.roof.type === "gable" ? this.num(this.t("roof_pitch"), s.roof.pitch, (v) => set({ roof: { ...s.roof, pitch: Math.min(60, Math.max(5, v)) } }), 1, 5) : nothing}
        ${s.roof.type !== "none" ? this.num(this.t("roof_overhang"), s.roof.overhang, (v) => set({ roof: { ...s.roof, overhang: Math.min(2, Math.max(0, v)) } }), 0.05, 0) : nothing}
      </div>
      <p class="fp3d-sub">${this.t("north_hint")}</p>
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
      .fp3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .fp3d-parking-row input,
      .fp3d-parking-row select {
        flex: 1;
        min-width: 0;
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
      .fp3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-check input {
        accent-color: var(--fp3d-accent);
      }
      .fp3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .fp3d-meter path {
        fill: #ffc633;
      }
      .fp3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .fp3d-packages .fp3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .fp3d-packages .fp3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .fp3d-arrows .fp3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .fp3d-arrow-up {
        grid-area: up;
      }
      .fp3d-arrow-left {
        grid-area: left;
      }
      .fp3d-arrow-right {
        grid-area: right;
      }
      .fp3d-arrow-down {
        grid-area: down;
      }
      .fp3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-library .fp3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      .fp3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .fp3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .fp3d-furn-sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .fp3d-furn-sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .fp3d-out-lawn polygon,
      .fp3d-out-bed polygon,
      .fp3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .fp3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--fp3d-accent);
      }
      .fp3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .fp3d-out-sel polygon {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .fp3d-out text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
      }
      .fp3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        text-align: center;
        pointer-events: none;
        animation: fp3d-pop 120ms ease-out;
      }
      @keyframes fp3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .fp3d-preview img,
      .fp3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .fp3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
      .fp3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-pin-on {
        color: var(--fp3d-warm);
      }
      .fp3d-back {
        margin-bottom: 12px;
      }
      .fp3d-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }
      .fp3d-resize {
        cursor: nwse-resize;
      }
      .fp3d-resize rect {
        fill: var(--fp3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .fp3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-floor-menu .fp3d-btn {
        text-align: left;
      }
      .fp3d-rotate line {
        stroke: var(--fp3d-accent);
        stroke-dasharray: 3 3;
      }
      .fp3d-rotate circle:not(.fp3d-hit) {
        fill: #0b1222;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rotate path {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .fp3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel .fp3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open {
        cursor: grab;
      }
      .fp3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .fp3d-open path,
      .fp3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .fp3d-open-door path {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-open-garage line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
      }
      .fp3d-open-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .fp3d-open-window line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-sel .fp3d-open-gap {
        fill: rgba(55, 224, 255, 0.25);
      }
      .fp3d-open-sel path,
      .fp3d-open-sel line {
        stroke-width: 2.4;
      }
      .fp3d-search {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
      }
      .fp3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .fp3d-more:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .fp3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-device-sel circle:not(.fp3d-hit) {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
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
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-dev-name:disabled {
        cursor: default;
      }
      .fp3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
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
