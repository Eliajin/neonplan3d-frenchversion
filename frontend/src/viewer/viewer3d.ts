// 3D view (separate bundle, loaded on demand). Renders only when something changes.
//
// Floors are shown in three levels: the whole house (floors pulled apart or stacked), one floor
// (floors above fly up and fade out, floors below stay as a dim reference) and one room (camera
// flight into it). Each floor is a group with its own materials so its height and opacity can be
// animated independently.

import {
  AdditiveBlending,
  Box3,
  CanvasTexture,
  Color,
  DoubleSide,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MultiplyBlending,
  PerspectiveCamera,
  PlaneGeometry,
  Raycaster,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  Float32BufferAttribute,
  BufferGeometry as Geometry,
  Vector2,
  Vector3,
  WebGLRenderer,
  type BufferGeometry,
  type Material,
} from "three";
import type { Building, Floor } from "../model.ts";
import { centroid } from "../model.ts";
import { buildFloorGeometry, NEON, SLAB, type FloorGeometry } from "./build.ts";
import { OrbitControls } from "./controls.ts";

export type Quality = "auto" | "low" | "high";
export type WallMode = "auto" | "cut";

export interface ViewerOptions {
  quality?: Quality;
  /** Pull floors apart in the house view (default true). */
  explode?: boolean;
  onRoomTap?: (floorId: string, roomId: string | null) => void;
  onFloorTap?: (floorId: string) => void;
  onBack?: () => void;
  /** Short tap on a device marker. */
  onDeviceTap?: (entityId: string) => void;
  /** Long press on a device marker. */
  onDeviceHold?: (entityId: string) => void;
  onStats?: (stats: ViewerStats) => void;
  /** Text for the floor labels in the house view, e.g. "5 rooms". */
  floorInfo?: (floor: Floor) => string;
}

/** A device shown in the 3D view (prepared by the main bundle from placements and states). */
export interface DeviceMarker {
  /** entity_id */
  id: string;
  floorId: string;
  roomId: string | null;
  x: number;
  z: number;
  /** Height above the floor. */
  y: number;
  /** Inline SVG markup of the icon. */
  icon: string;
  name: string;
  /** Short state text, e.g. "60 %" or "21,5 °C". */
  text: string;
  active: boolean;
  unavailable: boolean;
  /** Light cone on the floor for lights that are on. */
  glow: { color: [number, number, number]; level: number } | null;
}

export interface ViewerStats {
  fps: number;
  calls: number;
  triangles: number;
}

/** Extra gap between floors in the pulled-apart house view (metres). */
const EXPLODE_GAP = 2.4;
/** Opacity of the floors below the selected one. */
const BELOW_OPACITY = 0.22;
/** Time constant of the floor animation (ms); about 700 ms until settled. */
const FLOOR_TAU = 140;
/** Grid cells across the ground texture. */
const GROUND_CELLS = 32;
/** Press duration that counts as a long press (ms). */
const HOLD_MS = 500;

interface FloorMaterials {
  floor: MeshBasicMaterial;
  grid: MeshBasicMaterial;
  wall: MeshBasicMaterial;
  shadow: MeshBasicMaterial;
  edge: LineBasicMaterial;
  soft: LineBasicMaterial;
  glow: MeshBasicMaterial;
}

interface FloorView {
  floor: Floor;
  /** Position in the stack, ordered by elevation. */
  rank: number;
  group: Group;
  geo: FloorGeometry;
  floorMesh: Mesh;
  shadowMesh: Mesh;
  glowMesh: Mesh;
  materials: FloorMaterials;
  /** Current and target height offset and opacity. */
  y: number;
  o: number;
  ty: number;
  to: number;
  appliedO: number;
  buckets: { normal: [number, number] | null; upper: Mesh; upperLines: LineSegments; cutLines: LineSegments }[];
  label: HTMLButtonElement;
}

export function isLowEnd(): boolean {
  const nav = navigator as Navigator & { deviceMemory?: number };
  const mem = nav.deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency || 8;
  return mem <= 3 || cores <= 4 || /Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent);
}

export class FloorplanViewer {
  private readonly host: HTMLElement;
  private readonly options: ViewerOptions;
  private renderer: WebGLRenderer;
  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(38, 1, 0.1, 400);
  private controls: OrbitControls;
  private readonly labels: HTMLDivElement;
  private readonly root = new Group();
  private readonly gridTexture: CanvasTexture;
  private readonly groundTexture: CanvasTexture;
  private readonly glowTexture: CanvasTexture;
  private devices: DeviceMarker[] = [];
  private readonly devicePins = new Map<string, HTMLButtonElement>();
  private readonly ground: Mesh;
  private floors: FloorView[] = [];
  private building: Building | null = null;
  private floorId: string | null = null;
  private roomId: string | null = null;
  private wallMode: WallMode = "auto";
  private explode: boolean;
  private frame = 0;
  private lastFrame = 0;
  private disposed = false;
  private readonly resizeObserver: ResizeObserver;
  private fpsFrames = 0;
  private fpsStart = 0;

  constructor(host: HTMLElement, options: ViewerOptions = {}) {
    this.host = host;
    this.options = options;
    this.explode = options.explode ?? true;
    this.renderer = this.makeRenderer(options.quality ?? "auto");
    this.labels = document.createElement("div");
    this.labels.className = "fp3d-labels";
    host.append(this.labels);
    this.gridTexture = makeGridTexture();
    this.groundTexture = makeGroundTexture();
    this.glowTexture = makeGlowTexture();
    this.ground = new Mesh(
      new PlaneGeometry(1, 1),
      new MeshBasicMaterial({ map: this.groundTexture, transparent: true, blending: AdditiveBlending, depthWrite: false }),
    );
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.renderOrder = -1;
    this.scene.add(this.ground, this.root);
    this.controls = this.makeControls();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    document.addEventListener("visibilitychange", this.onVisibility);
    this.resize();
  }

  setQuality(quality: Quality): void {
    const canvas = this.renderer.domElement;
    const next = this.makeRenderer(quality);
    canvas.replaceWith(next.domElement);
    this.renderer.dispose();
    this.renderer = next;
    const view = this.controls.view;
    this.controls.dispose();
    this.controls = this.makeControls();
    this.controls.view = view;
    this.resize();
  }

  setBuilding(building: Building): void {
    const first = this.building === null;
    this.building = building;
    this.rebuild();
    if (first) this.fit(0);
    this.invalidate();
  }

  /** Show one floor (null = the whole house). */
  setFloor(floorId: string | null, animate = true): void {
    this.floorId = floorId;
    this.roomId = null;
    this.applyTargets(!animate);
    this.applyHighlight();
    this.fit(animate ? 700 : 0);
  }

  /** Pull the floors apart in the house view, or stack them. */
  setExplode(explode: boolean): void {
    if (explode === this.explode) return;
    this.explode = explode;
    this.applyTargets(false);
    if (this.floorId === null) this.fit(700);
  }

  /** Highlight a room and fly into it (null = back to the floor overview). */
  selectRoom(roomId: string | null): void {
    this.roomId = roomId;
    this.applyHighlight();
    if (!roomId) {
      this.fit(700);
      return;
    }
    const fv = this.floors.find((f) => f.floor.rooms.some((r) => r.id === roomId));
    const room = fv?.floor.rooms.find((r) => r.id === roomId);
    if (!fv || !room) return;
    const [cx, cz] = centroid(room.points);
    const xs = room.points.map((p) => p[0]);
    const zs = room.points.map((p) => p[1]);
    const size = new Vector3(Math.max(...xs) - Math.min(...xs), fv.floor.cut_height, Math.max(...zs) - Math.min(...zs));
    this.controls.flyTo({ target: new Vector3(cx, fv.floor.elevation + fv.ty + 0.3, cz), radius: Math.max(4, this.distanceFor(size) * 1.05), phi: 0.72 });
  }

  setWallMode(mode: WallMode): void {
    this.wallMode = mode;
    this.invalidate();
  }

  /** Replace the device markers; pins are reused per entity, light cones rebuilt per floor. */
  setDevices(devices: DeviceMarker[]): void {
    this.devices = devices;
    const seen = new Set<string>();
    for (const d of devices) {
      seen.add(d.id);
      let pin = this.devicePins.get(d.id);
      if (!pin) {
        pin = this.makeDevicePin(d.id);
        this.devicePins.set(d.id, pin);
        this.labels.append(pin);
      }
      if (pin.dataset.icon !== d.icon) {
        pin.dataset.icon = d.icon;
        pin.querySelector(".fp3d-dev-icon")!.innerHTML = d.icon;
      }
      pin.querySelector(".fp3d-dev-text")!.textContent = d.text;
      pin.title = d.name;
      pin.setAttribute("aria-label", `${d.name}: ${d.text}`);
      pin.classList.toggle("fp3d-dev-on", d.active);
      pin.classList.toggle("fp3d-dev-na", d.unavailable);
      if (d.glow) {
        const [r, g, b] = d.glow.color.map((c) => Math.round(c * 255));
        pin.style.setProperty("--fp3d-glow", `rgb(${r}, ${g}, ${b})`);
      } else pin.style.removeProperty("--fp3d-glow");
    }
    for (const [id, pin] of this.devicePins) {
      if (seen.has(id)) continue;
      pin.remove();
      this.devicePins.delete(id);
    }
    for (const fv of this.floors) this.buildGlow(fv);
    this.invalidate();
  }

  resetView(): void {
    this.fit(700);
  }

  dispose(): void {
    this.disposed = true;
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.controls.dispose();
    this.clear();
    this.ground.geometry.dispose();
    (this.ground.material as Material).dispose();
    this.gridTexture.dispose();
    this.groundTexture.dispose();
    this.glowTexture.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
    this.labels.remove();
  }

  invalidate(): void {
    if (this.frame || this.disposed || document.hidden) return;
    this.frame = requestAnimationFrame((t) => this.render(t));
  }

  // ------------------------------------------------------------------ internals

  private makeRenderer(quality: Quality): WebGLRenderer {
    const low = quality === "low" || (quality === "auto" && isLowEnd());
    const renderer = new WebGLRenderer({ antialias: !low, alpha: true, powerPreference: low ? "low-power" : "default" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1 : quality === "high" ? 2.5 : 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.domElement.className = "fp3d-canvas";
    this.host.prepend(renderer.domElement);
    return renderer;
  }

  private makeControls(): OrbitControls {
    return new OrbitControls(this.renderer.domElement, this.camera, {
      change: () => this.invalidate(),
      tap: (x, y) => this.onTap(x, y),
      doubleTap: () => this.options.onBack?.(),
    });
  }

  private readonly onVisibility = () => {
    if (!document.hidden) this.invalidate();
  };

  private resize(): void {
    const w = this.host.clientWidth || 1;
    const h = this.host.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.invalidate();
  }

  private clear(): void {
    for (const fv of this.floors) {
      fv.group.traverse((o) => {
        const g = (o as Mesh).geometry as BufferGeometry | undefined;
        g?.dispose();
      });
      for (const m of Object.values(fv.materials)) m.dispose();
      this.root.remove(fv.group);
    }
    this.floors = [];
    // device pins survive a rebuild; only floor and room labels are recreated
    for (const el of [...this.labels.children]) if (!(el as HTMLElement).dataset.entity) el.remove();
  }

  private makeDevicePin(entityId: string): HTMLButtonElement {
    const pin = document.createElement("button");
    pin.className = "fp3d-dev";
    pin.dataset.entity = entityId;
    const icon = document.createElement("span");
    icon.className = "fp3d-dev-icon";
    const text = document.createElement("span");
    text.className = "fp3d-dev-text";
    pin.append(icon, text);
    let timer: ReturnType<typeof setTimeout> | undefined;
    let held = false;
    pin.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
      held = false;
      clearTimeout(timer);
      timer = setTimeout(() => {
        held = true;
        this.options.onDeviceHold?.(entityId);
      }, HOLD_MS);
    });
    const cancel = () => clearTimeout(timer);
    pin.addEventListener("pointerleave", cancel);
    pin.addEventListener("pointercancel", cancel);
    pin.addEventListener("pointerup", cancel);
    pin.addEventListener("contextmenu", (e) => e.preventDefault());
    pin.addEventListener("click", (e) => {
      e.stopPropagation();
      if (held) return;
      this.options.onDeviceTap?.(entityId);
    });
    pin.addEventListener("keydown", (e) => {
      // keyboard: Enter acts like a tap; Shift+Enter or the context-menu key opens the details
      if ((e.key === "Enter" && e.shiftKey) || e.key === "ContextMenu") {
        e.preventDefault();
        this.options.onDeviceHold?.(entityId);
      }
    });
    return pin;
  }

  /** Light cones of the lights that are on, merged into one mesh per floor. */
  private buildGlow(fv: FloorView): void {
    const p: number[] = [];
    const c: number[] = [];
    const uv: number[] = [];
    for (const d of this.devices) {
      if (d.floorId !== fv.floor.id || !d.glow) continue;
      const r = 0.9 + 1.7 * d.glow.level;
      const k = 0.3 + 0.5 * d.glow.level;
      // additive light on a blue floor washes out; a gamma > 1 keeps warm light warm
      const [cr, cg, cb] = d.glow.color.map((v) => Math.min(1, Math.pow(v, 1.7) * k));
      const y = 0.012;
      const quad = [
        [d.x - r, d.z - r, 0, 0],
        [d.x + r, d.z - r, 1, 0],
        [d.x + r, d.z + r, 1, 1],
        [d.x - r, d.z + r, 0, 1],
      ];
      for (const i of [0, 2, 1, 0, 3, 2]) {
        const [x, z, u, v] = quad[i];
        p.push(x, y, z);
        c.push(cr, cg, cb);
        uv.push(u, v);
      }
    }
    const g = new Geometry();
    g.setAttribute("position", new Float32BufferAttribute(p, 3));
    g.setAttribute("color", new Float32BufferAttribute(c, 3));
    g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
    g.computeBoundingSphere();
    fv.glowMesh.geometry.dispose();
    fv.glowMesh.geometry = g;
    fv.glowMesh.visible = p.length > 0;
  }

  private makeMaterials(): FloorMaterials {
    return {
      floor: new MeshBasicMaterial({ vertexColors: true }),
      grid: new MeshBasicMaterial({
        map: this.gridTexture,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -2,
      }),
      wall: new MeshBasicMaterial({ vertexColors: true }),
      // result = floor colour * vertex colour (white leaves the floor untouched)
      shadow: new MeshBasicMaterial({
        vertexColors: true,
        blending: MultiplyBlending,
        premultipliedAlpha: true,
        transparent: true,
        depthWrite: false,
        side: DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: -1,
      }),
      edge: new LineBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false }),
      soft: new LineBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false }),
      glow: new MeshBasicMaterial({
        map: this.glowTexture,
        vertexColors: true,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false,
        side: DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: -3,
      }),
    };
  }

  private rebuild(): void {
    const previous = new Map(this.floors.map((f) => [f.floor.id, { y: f.y, o: f.o }]));
    this.clear();
    const b = this.building;
    if (!b) return;
    const ordered = [...b.floors].sort((p, q) => p.elevation - q.elevation);
    for (const floor of b.floors) {
      const geo = buildFloorGeometry(floor, b.settings.wall_exterior, b.settings.wall_interior);
      const materials = this.makeMaterials();
      const group = new Group();
      const floorMesh = new Mesh(geo.floor, materials.floor);
      const shadowMesh = new Mesh(geo.shadow, materials.shadow);
      shadowMesh.renderOrder = 1;
      const grid = new Mesh(geo.floor, materials.grid);
      grid.renderOrder = 2;
      const glowMesh = new Mesh(new Geometry(), materials.glow);
      glowMesh.renderOrder = 3;
      glowMesh.visible = false;
      group.add(floorMesh, shadowMesh, grid, glowMesh, new Mesh(geo.lower, materials.wall), new LineSegments(geo.lowerLines, materials.soft));
      const buckets = geo.buckets.map((bk) => {
        const upper = new Mesh(bk.upper, materials.wall);
        const upperLines = new LineSegments(bk.upperLines, materials.edge);
        const cutLines = new LineSegments(bk.cutLines, materials.edge);
        group.add(upper, upperLines, cutLines);
        return { normal: bk.normal, upper, upperLines, cutLines };
      });
      this.root.add(group);

      const label = document.createElement("button");
      label.className = "fp3d-pin fp3d-pin-floor";
      label.dataset.floor = floor.id;
      const name = document.createElement("b");
      name.textContent = floor.name || "–";
      const info = document.createElement("span");
      info.textContent = this.options.floorInfo?.(floor) ?? "";
      label.append(name, info);
      label.addEventListener("click", () => this.options.onFloorTap?.(floor.id));
      this.labels.append(label);

      const prev = previous.get(floor.id);
      this.floors.push({
        floor,
        rank: ordered.indexOf(floor),
        group,
        geo,
        floorMesh,
        shadowMesh,
        glowMesh,
        materials,
        y: prev?.y ?? 0,
        o: prev?.o ?? 1,
        ty: 0,
        to: 1,
        appliedO: -1,
        buckets,
        label,
      });
      for (const room of floor.rooms) {
        const pin = document.createElement("button");
        pin.className = "fp3d-pin";
        pin.dataset.room = room.id;
        pin.dataset.floor = floor.id;
        pin.textContent = room.name || "–";
        pin.addEventListener("click", () => this.options.onRoomTap?.(floor.id, room.id));
        this.labels.append(pin);
      }
    }
    if (this.floorId && !b.floors.some((f) => f.id === this.floorId)) this.floorId = null;
    for (const fv of this.floors) this.buildGlow(fv);
    this.applyTargets(previous.size === 0);
    this.applyHighlight();
  }

  /** True when the house view shows several floors (floor labels instead of room labels). */
  private get houseView(): boolean {
    return this.floorId === null && this.floors.length > 1;
  }

  /** Target height offset and opacity of every floor for the current view. */
  private applyTargets(immediate: boolean): void {
    const sel = this.floors.find((f) => f.floor.id === this.floorId);
    for (const fv of this.floors) {
      let ty = 0;
      let to = 1;
      if (!sel) ty = this.explode ? fv.rank * EXPLODE_GAP : 0;
      else if (fv.rank > sel.rank) {
        ty = 5 + fv.rank; // floors above fly away
        to = 0;
      } else if (fv.rank < sel.rank) {
        ty = -0.4; // floors below stay as a dim reference
        to = BELOW_OPACITY;
      }
      fv.ty = ty;
      fv.to = to;
      if (immediate) {
        fv.y = ty;
        fv.o = to;
      }
      this.applyFloor(fv);
    }
    this.invalidate();
  }

  /** Move a floor group to its current offset and fade its materials. */
  private applyFloor(fv: FloorView): void {
    fv.group.position.y = fv.floor.elevation + fv.y;
    fv.group.visible = fv.o > 0.02;
    fv.shadowMesh.visible = fv.o > 0.98; // a multiply layer cannot fade, so it goes with the first step
    if (Math.abs(fv.appliedO - fv.o) < 1e-3) return;
    fv.appliedO = fv.o;
    const m = fv.materials;
    const solid = fv.o > 0.999;
    for (const mat of [m.floor, m.wall]) {
      if (mat.transparent === solid) {
        mat.transparent = !solid;
        mat.depthWrite = solid;
        mat.needsUpdate = true;
      }
      mat.opacity = fv.o;
    }
    m.grid.opacity = fv.o;
    m.glow.opacity = fv.o;
    m.edge.opacity = fv.o;
    m.soft.opacity = fv.o;
  }

  /** Advance the floor animation; returns true while something still moves. */
  private stepFloors(dt: number): boolean {
    let moving = false;
    const k = 1 - Math.exp(-dt / FLOOR_TAU);
    for (const fv of this.floors) {
      const dy = fv.ty - fv.y;
      const dO = fv.to - fv.o;
      if (Math.abs(dy) < 0.004 && Math.abs(dO) < 0.004) {
        if (dy !== 0 || dO !== 0) {
          fv.y = fv.ty;
          fv.o = fv.to;
          this.applyFloor(fv);
        }
        continue;
      }
      fv.y += dy * k;
      fv.o += dO * k;
      moving = true;
      this.applyFloor(fv);
    }
    return moving;
  }

  /** Floors that can be tapped and are framed by the camera: the whole house or the selected floor. */
  private activeFloors(): FloorView[] {
    return this.floors.filter((f) => f.to > 0.99);
  }

  private applyHighlight(): void {
    for (const fv of this.floors) {
      const colors = fv.geo.floor.getAttribute("color");
      const base = new Color(NEON.floor);
      const active = new Color(NEON.floorActive);
      for (const r of fv.geo.roomTris) {
        const c = r.roomId === this.roomId ? active : base;
        for (let v = r.start * 3; v < r.end * 3; v++) colors.setXYZ(v, c.r, c.g, c.b);
      }
      colors.needsUpdate = true;
    }
    for (const pin of this.labels.querySelectorAll<HTMLElement>(".fp3d-pin")) {
      pin.classList.toggle("fp3d-pin-active", !!pin.dataset.room && pin.dataset.room === this.roomId);
    }
    this.invalidate();
  }

  private fit(duration: number): void {
    const box = new Box3();
    for (const fv of this.activeFloors()) {
      const y0 = fv.floor.elevation + fv.ty;
      for (const room of fv.floor.rooms) {
        for (const [x, z] of room.points) {
          box.expandByPoint(new Vector3(x, y0, z));
          box.expandByPoint(new Vector3(x, y0 + fv.floor.height, z));
        }
      }
    }
    if (box.isEmpty()) box.set(new Vector3(-4, 0, -4), new Vector3(4, 2.5, 4));
    this.placeGround();
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    // perspective widens the near corners; portrait screens need a little more room for that
    const radius = Math.max(8, this.distanceFor(size) * (this.camera.aspect < 1 ? 1.16 : 1.02));
    this.controls.maxRadius = Math.max(40, radius * 3);
    center.y = box.min.y + size.y * (this.houseView ? 0.45 : 0.3);
    this.controls.flyTo({ target: center, radius, phi: 0.85, theta: -0.6 }, duration);
  }

  /** The ground grid lies under the lowest floor and reaches well beyond the building. */
  private placeGround(): void {
    const box = new Box3();
    let y = Infinity;
    for (const fv of this.floors) {
      y = Math.min(y, fv.floor.elevation + Math.min(0, fv.ty));
      for (const room of fv.floor.rooms) for (const [x, z] of room.points) box.expandByPoint(new Vector3(x, 0, z));
    }
    this.ground.visible = !box.isEmpty();
    if (box.isEmpty()) return;
    const c = box.getCenter(new Vector3());
    const s = box.getSize(new Vector3());
    // the texture has 32 cells: 1 m each for a normal house, 2 m for a very large one
    const span = GROUND_CELLS * Math.ceil((Math.max(s.x, s.z) + 16) / GROUND_CELLS);
    this.ground.scale.set(span, span, 1);
    this.ground.position.set(c.x, y - SLAB - 0.02, c.z);
  }

  /** Camera distance at which a box of this size fits the view (bounding sphere against the narrower field of view). */
  private distanceFor(size: Vector3): number {
    const vfov = (this.camera.fov * Math.PI) / 180;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * this.camera.aspect);
    return size.length() / 2 / Math.sin(Math.min(vfov, hfov) / 2);
  }

  private onTap(x: number, y: number): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new Vector2((x / rect.width) * 2 - 1, -(y / rect.height) * 2 + 1);
    const ray = new Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const meshes = this.activeFloors().map((f) => f.floorMesh);
    const hit = ray.intersectObjects(meshes, false)[0];
    if (!hit || hit.faceIndex == null) {
      this.options.onRoomTap?.(this.floorId ?? "", null);
      return;
    }
    const fv = this.floors.find((f) => f.floorMesh === hit.object)!;
    const tri = hit.faceIndex;
    const room = fv.geo.roomTris.find((r) => tri >= r.start && tri < r.end);
    this.options.onRoomTap?.(fv.floor.id, room?.roomId ?? null);
  }

  private render(now: number): void {
    this.frame = 0;
    if (this.disposed) return;
    const dt = this.lastFrame ? Math.min(100, now - this.lastFrame) : 16;
    const cameraMoving = this.controls.update(now);
    const floorsMoving = this.stepFloors(dt);
    const moving = cameraMoving || floorsMoving;
    this.lastFrame = moving ? now : 0;
    this.updateWalls();
    this.renderer.render(this.scene, this.camera);
    this.updateLabels();
    this.reportStats(now, moving);
    if (moving) this.invalidate();
  }

  /** Upper wall parts facing the camera fold down to the cut height. */
  private updateWalls(): void {
    const cam = this.camera.position;
    const t = this.controls.view.target;
    const dx = cam.x - t.x;
    const dz = cam.z - t.z;
    const l = Math.hypot(dx, dz) || 1;
    for (const fv of this.floors) {
      // in a room, its floor's interior walls fold down as well
      const inRoom = this.roomId !== null && fv.floor.rooms.some((r) => r.id === this.roomId);
      for (const bk of fv.buckets) {
        let show = this.wallMode !== "cut";
        if (show && bk.normal) show = (bk.normal[0] * dx) / l + (bk.normal[1] * dz) / l < 0.25;
        else if (show && inRoom) show = false;
        bk.upper.visible = show;
        bk.upperLines.visible = show;
        bk.cutLines.visible = !show;
      }
    }
  }

  private updateLabels(): void {
    const w = this.host.clientWidth;
    const h = this.host.clientHeight;
    const v = new Vector3();
    const house = this.houseView;
    const placed: { fv: FloorView; left: number; y: number; h: number }[] = [];
    for (const fv of this.floors) {
      const show = house && fv.o > 0.5 && fv.floor.rooms.length > 0;
      fv.label.hidden = !show;
      if (!show) continue;
      // left of the leftmost corner of the floor's bounding box, at half the cut height
      let best: { x: number; y: number } | null = null;
      const xs = fv.floor.rooms.flatMap((r) => r.points.map((p) => p[0]));
      const zs = fv.floor.rooms.flatMap((r) => r.points.map((p) => p[1]));
      const y = fv.floor.elevation + fv.y + fv.floor.cut_height * 0.5;
      for (const x of [Math.min(...xs), Math.max(...xs)]) {
        for (const z of [Math.min(...zs), Math.max(...zs)]) {
          v.set(x, y, z).project(this.camera);
          const sx = ((v.x + 1) / 2) * w;
          if (!best || sx < best.x) best = { x: sx, y: ((1 - v.y) / 2) * h };
        }
      }
      const lw = fv.label.offsetWidth;
      placed.push({ fv, left: Math.max(8, Math.min(w - lw - 8, best!.x - lw - 14)), y: best!.y, h: fv.label.offsetHeight });
    }
    // top floor first; each lower label keeps below the one above so labels never cover each other
    placed.sort((a, b) => b.fv.rank - a.fv.rank);
    for (let i = 1; i < placed.length; i++) {
      const above = placed[i - 1];
      placed[i].y = Math.max(placed[i].y, above.y + (above.h + placed[i].h) / 2 + 8);
    }
    for (const p of placed) p.fv.label.style.transform = `translate(${p.left}px, ${p.y}px) translate(0, -50%)`;
    this.updateDevicePins(w, h);
    for (const pin of this.labels.querySelectorAll<HTMLElement>(".fp3d-pin[data-room]")) {
      const fv = this.floors.find((f) => f.floor.id === pin.dataset.floor);
      const room = fv?.floor.rooms.find((r) => r.id === pin.dataset.room);
      // in the house view, room labels would pile up between the floors; in a room its panel names it
      if (!fv || !room || fv.to < 0.99 || fv.o < 0.9 || house || this.roomId) {
        pin.hidden = true;
        continue;
      }
      const [cx, cz] = centroid(room.points);
      v.set(cx, fv.floor.elevation + fv.y + 0.05, cz).project(this.camera);
      const off = v.z > 1 || Math.abs(v.x) > 1.1 || Math.abs(v.y) > 1.1;
      pin.hidden = off;
      if (!off) pin.style.transform = `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px) translate(-50%, -50%)`;
    }
  }

  private updateDevicePins(w: number, h: number): void {
    const v = new Vector3();
    const house = this.houseView;
    for (const d of this.devices) {
      const pin = this.devicePins.get(d.id);
      if (!pin) continue;
      const fv = this.floors.find((f) => f.floor.id === d.floorId);
      // device markers belong to the floor and room views; the house view only shows floor labels
      if (!fv || house || fv.to < 0.99 || fv.o < 0.9) {
        pin.hidden = true;
        continue;
      }
      v.set(d.x, fv.floor.elevation + fv.y + d.y, d.z).project(this.camera);
      const off = v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05;
      pin.hidden = off;
      if (off) continue;
      const inRoom = this.roomId !== null && d.roomId === this.roomId;
      pin.classList.toggle("fp3d-dev-full", inRoom);
      pin.classList.toggle("fp3d-dev-dim", this.roomId !== null && !inRoom);
      pin.style.transform = `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px) translate(-50%, -50%)`;
    }
  }

  private reportStats(now: number, moving: boolean): void {
    if (!this.options.onStats) return;
    if (!this.fpsStart) this.fpsStart = now;
    this.fpsFrames++;
    const elapsed = now - this.fpsStart;
    if (elapsed > 500 || !moving) {
      const info = this.renderer.info.render;
      this.options.onStats({ fps: moving ? Math.round((this.fpsFrames * 1000) / elapsed) : 0, calls: info.calls, triangles: info.triangles });
      this.fpsFrames = 0;
      this.fpsStart = now;
    }
  }
}

/** Faint cyan grid: 1 texture tile = 1 m, lines every 0.5 m. */
function makeGridTexture(): CanvasTexture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.strokeStyle = "rgba(55,224,255,0.09)";
  ctx.lineWidth = 1.5;
  for (const p of [0.75, size / 2]) {
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, size);
    ctx.moveTo(0, p);
    ctx.lineTo(size, p);
    ctx.stroke();
  }
  const tex = new CanvasTexture(canvas);
  tex.wrapS = RepeatWrapping;
  tex.wrapT = RepeatWrapping;
  tex.anisotropy = 4;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

/** Soft round light cone: bright core, long falloff. */
function makeGlowTexture(): CanvasTexture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.3, "rgba(255,255,255,0.5)");
  g.addColorStop(0.65, "rgba(255,255,255,0.14)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

/** Ground below the house: a wide 1 m grid that fades out towards the edges. */
function makeGroundTexture(): CanvasTexture {
  const size = 1024;
  const cells = GROUND_CELLS;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.strokeStyle = "rgba(91,124,255,0.16)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= cells; i++) {
    const p = Math.round((i / cells) * size) + 0.5;
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, size);
    ctx.moveTo(0, p);
    ctx.lineTo(size, p);
    ctx.stroke();
  }
  // fade out radially so the grid has no hard border
  ctx.globalCompositeOperation = "destination-in";
  const g = ctx.createRadialGradient(size / 2, size / 2, size * 0.12, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(0,0,0,1)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new CanvasTexture(canvas);
  tex.anisotropy = 4;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

export function createViewer(host: HTMLElement, options?: ViewerOptions): FloorplanViewer {
  return new FloorplanViewer(host, options);
}
