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
  ClampToEdgeWrapping,
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
import { buildFloorGeometry, SLAB, stairHoles, type FloorGeometry } from "./build.ts";
import { OrbitControls } from "./controls.ts";
import { makeFoldable, type FoldMasks } from "./fold.ts";
import { screenRect } from "./furniture.ts";
import { GeoBuffer, pushPrism } from "./geo.ts";
import { buildOpeningParts, CLOSED, type OpeningState } from "./openings.ts";

export type { OpeningState } from "./openings.ts";

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
  /** Power drawn (W) when the device reports it. */
  power?: number | null;
  /** Lights: lamp model drawn at the device position. */
  lamp?: "ceiling" | "floor" | "table" | "wall" | null;
  /** Formatted power, e.g. "85 W". */
  powerText?: string;
}

/** Piece of energy cable (floor-local coordinates); the flow runs from a to b. */
export interface FlowPiece {
  floorId: string;
  a: [number, number, number];
  b: [number, number, number];
  /** Cable length from the source to a (m), so stripes continue along the path. */
  dist: number;
  power: number;
  color: [number, number, number];
}

/** A lit TV or monitor screen: colour of the running app and brightness (0..1). */
export interface ScreenState {
  color: [number, number, number];
  level: number;
}

export interface PersonPin {
  id: string;
  name: string;
  initials: string;
  picture: string | null;
  floorId: string;
  roomId: string;
  x: number;
  z: number;
}

export interface ViewerStats {
  /** Frames per second while something moves; 0 at rest (nothing is drawn then). */
  fps: number;
  /** Slowest frame of the last measuring window (ms). */
  worstMs: number;
  calls: number;
  triangles: number;
  /** The low quality level is active (tablet). */
  low: boolean;
  pixelRatio: number;
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
/** Time constant of window and blind movements (ms). */
const OPENING_TAU = 160;
/** Frame interval while only the energy flow moves (ms): about 30 frames per second. */
const FLOW_FRAME_MS = 33;
/** Cable core and the soft glow around it (m). */
const CABLE_WIDTH = 0.07;
const CABLE_HALO = 0.34;
const LAMP_BODY = 0x2a3a60;
const LAMP_SHADE = 0x1d2946;

interface FloorMaterials {
  floor: MeshBasicMaterial;
  pattern: MeshBasicMaterial;
  wall: MeshBasicMaterial;
  glassWall: MeshBasicMaterial;
  shadow: MeshBasicMaterial;
  lines: LineBasicMaterial;
  glow: MeshBasicMaterial;
  frames: MeshBasicMaterial;
  glass: MeshBasicMaterial;
  blinds: MeshBasicMaterial;
  flow: MeshBasicMaterial;
  lamps: MeshBasicMaterial;
  screens: MeshBasicMaterial;
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
  framesMesh: Mesh;
  glassMesh: Mesh;
  blindsMesh: Mesh;
  flowMesh: Mesh;
  lampMesh: Mesh;
  screenMesh: Mesh;
  screenSig: string;
  /** Content signatures: meshes are only rebuilt when these change. */
  flowLayout: string;
  glowSig: string;
  lampSig: string;
  /** Size of the floor label, measured once per text (reading it every frame forces a layout). */
  labelSize: { w: number; h: number } | null;
  materials: FloorMaterials;
  /** Bit masks of the wall buckets that stand and that are drawn as glass (read by the fold shader). */
  mask: FoldMasks;
  /** Shown opening states (animated towards the targets set from Home Assistant). */
  openings: Map<string, OpeningState>;
  /** Current and target height offset and opacity. */
  y: number;
  o: number;
  ty: number;
  to: number;
  appliedO: number;
  label: HTMLButtonElement;
}

const ACTIVE_FLOOR = new Color(0x1a2a4d);

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
  private readonly patternTexture: CanvasTexture;
  private readonly blindTexture: CanvasTexture;
  private openingTargets = new Map<string, OpeningState>();
  private screens = new Map<string, ScreenState>();
  private flows: FlowPiece[] = [];
  /** Stripe phase per cable piece, kept when its speed changes so the stripes do not jump. */
  private flowPhase = new Map<string, { speed: number; offset: number }>();
  private readonly flowTime = { value: 0 };
  private readonly flowStart = performance.now();
  private flowActive = false;
  private flowTimer: ReturnType<typeof setTimeout> | undefined;
  private persons: PersonPin[] = [];
  private readonly personPins = new Map<string, HTMLDivElement>();
  private floorInfo = new Map<string, string>();
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
  private worstFrame = 0;
  private lastStatsFrame = 0;
  private lowQuality = false;
  private fpsStart = 0;

  constructor(host: HTMLElement, options: ViewerOptions = {}) {
    this.host = host;
    this.options = options;
    this.explode = options.explode ?? true;
    this.renderer = this.makeRenderer(options.quality ?? "auto");
    this.labels = document.createElement("div");
    this.labels.className = "fp3d-labels";
    host.append(this.labels);
    this.patternTexture = makePatternTexture();
    this.blindTexture = makeBlindTexture();
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
    // ceiling lamps would float above cut walls
    for (const fv of this.floors) this.buildLamps(fv);
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
      const watt = pin.querySelector(".fp3d-dev-watt")!;
      watt.textContent = d.power !== null && d.power !== undefined && d.power >= 1 ? (d.powerText ?? `${Math.round(d.power)} W`) : "";
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
    for (const fv of this.floors) {
      this.buildGlow(fv);
      this.buildLamps(fv);
    }
    this.invalidate();
  }

  /** Energy cables; the stripes run while any cable carries power. */
  setFlows(flows: FlowPiece[]): void {
    this.flows = flows;
    const now = this.flowSeconds();
    const next = new Map<string, { speed: number; offset: number }>();
    for (const f of flows) {
      const key = flowKey(f);
      const speed = flowSpeed(f.power);
      const prev = this.flowPhase.get(key);
      // keep time * speed + offset continuous across the change
      next.set(key, { speed, offset: prev ? now * (prev.speed - speed) + prev.offset : 0 });
    }
    this.flowPhase = next;
    this.flowActive = flows.some((f) => f.power > 0.5);
    for (const fv of this.floors) this.buildFlows(fv);
    this.invalidate();
  }

  /** People in their rooms (pink markers in the floor and room views). */
  setPersons(persons: PersonPin[]): void {
    this.persons = persons;
    const seen = new Set<string>();
    for (const p of persons) {
      seen.add(p.id);
      let pin = this.personPins.get(p.id);
      if (!pin) {
        pin = document.createElement("div");
        pin.className = "fp3d-person";
        pin.dataset.entity = p.id;
        this.personPins.set(p.id, pin);
        this.labels.append(pin);
      }
      pin.title = p.name;
      pin.setAttribute("aria-label", p.name);
      if (pin.dataset.picture !== (p.picture ?? "") || pin.dataset.initials !== p.initials) {
        pin.dataset.picture = p.picture ?? "";
        pin.dataset.initials = p.initials;
        pin.replaceChildren();
        if (p.picture) {
          const img = document.createElement("img");
          img.src = p.picture;
          img.alt = "";
          img.addEventListener("error", () => img.replaceWith(document.createTextNode(p.initials)));
          pin.append(img);
        } else pin.textContent = p.initials;
      }
    }
    for (const [id, pin] of this.personPins) {
      if (seen.has(id)) continue;
      pin.remove();
      this.personPins.delete(id);
    }
    this.invalidate();
  }

  /** Screens of TVs and monitors that are on (by furniture id). */
  setScreens(screens: Map<string, ScreenState>): void {
    this.screens = screens;
    for (const fv of this.floors) this.buildScreens(fv);
    this.invalidate();
  }

  /** Text under the floor names in the house view, e.g. "5 rooms · 3 lights on · 1 open". */
  setFloorInfo(info: Map<string, string>): void {
    this.floorInfo = info;
    for (const fv of this.floors) {
      const span = fv.label.querySelector("span");
      const text = info.get(fv.floor.id) ?? this.options.floorInfo?.(fv.floor) ?? "";
      if (span && span.textContent !== text) {
        span.textContent = text;
        fv.labelSize = null;
      }
    }
    this.invalidate();
  }

  /** Target states of doors and windows (sashes and blinds move there smoothly). */
  setOpeningStates(states: Map<string, OpeningState>): void {
    this.openingTargets = states;
    this.invalidate();
  }

  resetView(): void {
    this.fit(700);
  }

  dispose(): void {
    this.disposed = true;
    cancelAnimationFrame(this.frame);
    clearTimeout(this.flowTimer);
    this.resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.controls.dispose();
    this.clear();
    this.ground.geometry.dispose();
    (this.ground.material as Material).dispose();
    this.patternTexture.dispose();
    this.blindTexture.dispose();
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
    this.lowQuality = low;
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
    const watt = document.createElement("span");
    watt.className = "fp3d-dev-watt";
    pin.append(icon, text, watt);
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
    const sig = this.devices
      .filter((d) => d.floorId === fv.floor.id && d.glow)
      .map((d) => `${d.x},${d.z},${d.glow!.level.toFixed(3)},${d.glow!.color.map((c) => c.toFixed(3)).join("/")}`)
      .join(";");
    if (sig === fv.glowSig && fv.glowMesh.geometry.getAttribute("position")) return;
    fv.glowSig = sig;
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

  private makeMaterials(mask: FoldMasks): FloorMaterials {
    return {
      floor: new MeshBasicMaterial({ vertexColors: true }),
      pattern: patternMaterial(this.patternTexture),
      wall: makeFoldable(new MeshBasicMaterial({ vertexColors: true }), mask, "solid"),
      glassWall: makeFoldable(new MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false }), mask, "glass"),
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
      lines: makeFoldable(new LineBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false }), mask),
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
      frames: makeFoldable(new MeshBasicMaterial({ vertexColors: true, side: DoubleSide }), mask),
      glass: makeFoldable(
        new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }),
        mask,
      ),
      blinds: makeFoldable(new MeshBasicMaterial({ map: this.blindTexture, vertexColors: true, side: DoubleSide }), mask),
      flow: flowMaterial(this.flowTime),
      lamps: new MeshBasicMaterial({ vertexColors: true }),
      screens: new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }),
    };
  }

  private rebuild(): void {
    const previous = new Map(this.floors.map((f) => [f.floor.id, { y: f.y, o: f.o }]));
    const previousOpenings = new Map(this.floors.map((f) => [f.floor.id, f.openings]));
    this.clear();
    const b = this.building;
    if (!b) return;
    const ordered = [...b.floors].sort((p, q) => p.elevation - q.elevation);
    for (const floor of b.floors) {
      const geo = buildFloorGeometry(floor, b.settings.wall_exterior, b.settings.wall_interior, stairHoles(b.floors, floor));
      const mask: FoldMasks = { standing: { value: 0xffff }, glass: { value: 0 } };
      const materials = this.makeMaterials(mask);
      const group = new Group();
      const floorMesh = new Mesh(geo.floor, materials.floor);
      const shadowMesh = new Mesh(geo.shadow, materials.shadow);
      shadowMesh.renderOrder = 1;
      const pattern = new Mesh(geo.floor, materials.pattern);
      pattern.renderOrder = 2;
      const glowMesh = new Mesh(new Geometry(), materials.glow);
      glowMesh.renderOrder = 3;
      glowMesh.visible = false;
      const framesMesh = new Mesh(new Geometry(), materials.frames);
      const blindsMesh = new Mesh(new Geometry(), materials.blinds);
      const glassMesh = new Mesh(new Geometry(), materials.glass);
      glassMesh.renderOrder = 4;
      const lampMesh = new Mesh(new Geometry(), materials.lamps);
      lampMesh.visible = false;
      const screenMesh = new Mesh(new Geometry(), materials.screens);
      screenMesh.visible = false;
      screenMesh.renderOrder = 5;
      const flowMesh = new Mesh(new Geometry(), materials.flow);
      flowMesh.renderOrder = 5;
      flowMesh.frustumCulled = false;
      // the fold shader moves hidden parts, so the bounding spheres must not cull them early
      for (const m of [framesMesh, blindsMesh, glassMesh]) m.frustumCulled = false;
      // glass walls are drawn after everything opaque in the room, so doors and furniture show through
      const glassWalls = new Mesh(geo.walls, materials.glassWall);
      glassWalls.renderOrder = 6;
      group.add(
        floorMesh,
        shadowMesh,
        pattern,
        glowMesh,
        new Mesh(geo.walls, materials.wall),
        new LineSegments(geo.lines, materials.lines),
        framesMesh,
        blindsMesh,
        glassMesh,
        flowMesh,
        lampMesh,
        screenMesh,
        glassWalls,
      );
      this.root.add(group);

      const label = document.createElement("button");
      label.className = "fp3d-pin fp3d-pin-floor";
      label.dataset.floor = floor.id;
      const name = document.createElement("b");
      name.textContent = floor.name || "–";
      const info = document.createElement("span");
      info.textContent = this.floorInfo.get(floor.id) ?? this.options.floorInfo?.(floor) ?? "";
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
        framesMesh,
        glassMesh,
        blindsMesh,
        flowMesh,
        lampMesh,
        screenMesh,
        screenSig: "",
        flowLayout: "",
        glowSig: "",
        lampSig: "",
        labelSize: null,
        materials,
        mask,
        openings: new Map(),
        y: prev?.y ?? 0,
        o: prev?.o ?? 1,
        ty: 0,
        to: 1,
        appliedO: -1,
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
    for (const fv of this.floors) {
      this.buildGlow(fv);
      this.buildLamps(fv);
      this.buildScreens(fv);
      const prev = previousOpenings.get(fv.floor.id);
      for (const info of fv.geo.openings) fv.openings.set(info.opening.id, prev?.get(info.opening.id) ?? this.openingTargets.get(info.opening.id) ?? CLOSED);
      this.buildOpenings(fv);
      this.buildFlows(fv);
    }
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
    for (const mat of [m.floor, m.wall, m.frames, m.blinds, m.lamps]) {
      if (mat.transparent === solid) {
        mat.transparent = !solid;
        mat.depthWrite = solid;
        mat.needsUpdate = true;
      }
      mat.opacity = fv.o;
    }
    m.pattern.opacity = fv.o;
    m.glow.opacity = fv.o;
    m.lines.opacity = fv.o;
    m.glass.opacity = fv.o;
    m.glassWall.opacity = fv.o;
    m.flow.opacity = fv.o;
    m.lamps.opacity = fv.o;
    m.screens.opacity = fv.o;
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

  /** Move sashes and blinds towards their targets; returns true while something still moves. */
  private stepOpenings(dt: number): boolean {
    let moving = false;
    const k = 1 - Math.exp(-dt / OPENING_TAU);
    for (const fv of this.floors) {
      let changed = false;
      for (const [id, cur] of fv.openings) {
        const target = this.openingTargets.get(id) ?? CLOSED;
        const next = { ...cur };
        let busy = false;
        for (const key of ["open", "tilt"] as const) {
          const d = target[key] - cur[key];
          if (Math.abs(d) < 0.003) next[key] = target[key];
          else {
            next[key] = cur[key] + d * k;
            busy = true;
          }
        }
        if (target.cover === null || cur.cover === null) next.cover = target.cover;
        else {
          const d = target.cover - cur.cover;
          if (Math.abs(d) < 0.003) next.cover = target.cover;
          else {
            next.cover = cur.cover + d * k;
            busy = true;
          }
        }
        if (next.open !== cur.open || next.tilt !== cur.tilt || next.cover !== cur.cover) {
          fv.openings.set(id, next);
          changed = true;
        }
        moving ||= busy;
      }
      if (changed) this.buildOpenings(fv);
    }
    return moving;
  }

  /** Lamp models of the lights on a floor, merged into one mesh; lit shades take the light colour. */
  private buildLamps(fv: FloorView): void {
    const sig =
      this.wallMode +
      this.devices
        .filter((d) => d.floorId === fv.floor.id && d.lamp)
        .map((d) => `${d.lamp},${d.x},${d.z},${d.glow ? `${d.glow.level.toFixed(3)},${d.glow.color.map((c) => c.toFixed(3)).join("/")}` : "off"}`)
        .join(";");
    if (sig === fv.lampSig && fv.lampMesh.geometry.getAttribute("position")) return;
    fv.lampSig = sig;
    const buf = new GeoBuffer();
    const H = fv.floor.height;
    for (const d of this.devices) {
      if (d.floorId !== fv.floor.id || !d.lamp) continue;
      if (d.lamp === "ceiling" && this.wallMode === "cut") continue;
      // a lit shade glows in the light's colour, brighter with more brightness
      const k = d.glow ? 0.55 + 0.45 * d.glow.level : 0;
      const shadeCol = d.glow ? new Color(...(d.glow.color.map((c) => Math.min(1, c * k)) as [number, number, number])).getHex() : LAMP_SHADE;
      const cyl = (r: number, y0: number, y1: number, side: number, top: number, n = 14) => {
        const poly: [number, number][] = [];
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2;
          poly.push([d.x + Math.cos(a) * r, d.z - Math.sin(a) * r]);
        }
        pushPrism(buf, poly, y0, y1, side, top, { aoFrom: 0, bottom: true });
      };
      switch (d.lamp) {
        case "ceiling":
          cyl(0.05, H - 0.04, H, LAMP_BODY, LAMP_BODY, 8);
          cyl(0.2, H - 0.075, H - 0.04, shadeCol, shadeCol);
          break;
        case "floor":
          cyl(0.15, 0, 0.03, LAMP_BODY, LAMP_BODY);
          cyl(0.014, 0.03, 1.5, LAMP_BODY, LAMP_BODY, 6);
          cyl(0.21, 1.45, 1.75, shadeCol, shadeCol);
          break;
        case "table":
          cyl(0.08, 0.72, 0.75, LAMP_BODY, LAMP_BODY);
          cyl(0.012, 0.75, 1.02, LAMP_BODY, LAMP_BODY, 6);
          cyl(0.13, 0.98, 1.16, shadeCol, shadeCol);
          break;
        case "wall":
          cyl(0.09, 1.68, 1.86, shadeCol, shadeCol, 10);
          break;
      }
    }
    fv.lampMesh.geometry.dispose();
    fv.lampMesh.geometry = buf.geometry();
    fv.lampMesh.visible = buf.count > 0;
  }

  /** Lit screens of a floor: a bright panel in the app colour and a faint glow around it. */
  private buildScreens(fv: FloorView): void {
    const items = fv.floor.furniture.filter((f) => this.screens.has(f.id));
    const sig = items.map((f) => `${f.id}:${f.x},${f.z},${f.rotation},${f.w},${f.d},${f.h}:${JSON.stringify(this.screens.get(f.id))}`).join(";");
    if (sig === fv.screenSig && fv.screenMesh.geometry.getAttribute("position")) return;
    fv.screenSig = sig;
    const buf = new GeoBuffer();
    for (const f of items) {
      const r = screenRect(f);
      const st = this.screens.get(f.id)!;
      if (!r) continue;
      const a = (f.rotation * Math.PI) / 180;
      const c = Math.cos(a);
      const s = Math.sin(a);
      const P = (x: number, y: number, z: number) => [f.x + x * c - z * s, y, f.z + x * s + z * c];
      const core = new Color(...st.color.map((v) => Math.min(1, v * (0.35 + 0.65 * st.level))) as [number, number, number]);
      const edge = new Color(0, 0, 0);
      const z = r.z + 0.004;
      buf.tri(P(r.x0, r.y0, z), P(r.x1, r.y0, z), P(r.x1, r.y1, z), core);
      buf.tri(P(r.x0, r.y0, z), P(r.x1, r.y1, z), P(r.x0, r.y1, z), core);
      // glow frame fading out around the screen
      const g = 0.18 + 0.12 * st.level;
      const halo = core.clone().multiplyScalar(0.5);
      const inner = [P(r.x0, r.y0, z), P(r.x1, r.y0, z), P(r.x1, r.y1, z), P(r.x0, r.y1, z)];
      const outer = [P(r.x0 - g, r.y0 - g, z + 0.01), P(r.x1 + g, r.y0 - g, z + 0.01), P(r.x1 + g, r.y1 + g, z + 0.01), P(r.x0 - g, r.y1 + g, z + 0.01)];
      for (let i = 0; i < 4; i++) {
        const j = (i + 1) % 4;
        buf.tri(inner[i], outer[i], outer[j], halo, edge, edge);
        buf.tri(inner[i], outer[j], inner[j], halo, edge, halo);
      }
    }
    fv.screenMesh.geometry.dispose();
    fv.screenMesh.geometry = buf.geometry();
    fv.screenMesh.visible = buf.count > 0;
  }

  private flowSeconds(): number {
    return (performance.now() - this.flowStart) / 1000;
  }

  /** Energy cables of a floor as flat glowing ribbons (vertical pieces as two crossed ribbons). */
  private buildFlows(fv: FloorView): void {
    const layout = this.flows
      .filter((f) => f.floorId === fv.floor.id)
      .map(flowKey)
      .join(";");
    const p: number[] = [];
    const c: number[] = [];
    const uv: number[] = [];
    const sp: number[] = [];
    const off: number[] = [];
    for (const f of this.flows) {
      if (f.floorId !== fv.floor.id) continue;
      const phase = this.flowPhase.get(flowKey(f)) ?? { speed: flowSpeed(f.power), offset: 0 };
      const level = f.power > 0.5 ? Math.min(1, 0.5 + f.power / 2500) : 0.22;
      const col = f.color.map((v) => v * level);
      const len = Math.hypot(f.b[0] - f.a[0], f.b[1] - f.a[1], f.b[2] - f.a[2]);
      if (len < 1e-4) continue;
      const dir = [(f.b[0] - f.a[0]) / len, (f.b[1] - f.a[1]) / len, (f.b[2] - f.a[2]) / len];
      // ribbon sides: flat on the floor for horizontal cables, two crossed planes for risers
      const sides: number[][] = [];
      if (Math.abs(dir[1]) < 0.5) {
        const l = Math.hypot(dir[0], dir[2]) || 1;
        sides.push([-dir[2] / l, 0, dir[0] / l]);
      } else sides.push([1, 0, 0], [0, 0, 1]);
      // a wide, faint halo under a bright core
      const layers: [number, number][] = [
        [CABLE_HALO, 0.3],
        [CABLE_WIDTH, 1],
      ];
      for (const [width, strength] of layers) {
        for (const n of sides) {
          const h = width / 2;
          const v = (q: number[], k: number) => [q[0] + n[0] * h * k, q[1] + n[1] * h * k, q[2] + n[2] * h * k];
          const quad = [
            [v(f.a, -1), f.dist, 0],
            [v(f.b, -1), f.dist + len, 0],
            [v(f.b, 1), f.dist + len, 1],
            [v(f.a, 1), f.dist, 1],
          ] as const;
          for (const i of [0, 1, 2, 0, 2, 3]) {
            const [pos, u, w] = quad[i];
            p.push(pos[0], pos[1], pos[2]);
            c.push(col[0] * strength, col[1] * strength, col[2] * strength);
            uv.push(u, w);
            sp.push(phase.speed);
            off.push(phase.offset);
          }
        }
      }
    }
    const old = fv.flowMesh.geometry;
    if (layout === fv.flowLayout && old.getAttribute("position")?.count === p.length / 3) {
      // same cables, new power: only colours and stripe speeds change (no new geometry, no garbage)
      for (const [name, data] of [
        ["color", c],
        ["flowSpeed", sp],
        ["flowOffset", off],
      ] as const) {
        const attr = old.getAttribute(name) as Float32BufferAttribute;
        (attr.array as Float32Array).set(data);
        attr.needsUpdate = true;
      }
      fv.flowMesh.visible = p.length > 0;
      return;
    }
    fv.flowLayout = layout;
    const g = new Geometry();
    g.setAttribute("position", new Float32BufferAttribute(p, 3));
    g.setAttribute("color", new Float32BufferAttribute(c, 3));
    g.setAttribute("uv", new Float32BufferAttribute(uv, 2));
    g.setAttribute("flowSpeed", new Float32BufferAttribute(sp, 1));
    g.setAttribute("flowOffset", new Float32BufferAttribute(off, 1));
    fv.flowMesh.geometry.dispose();
    fv.flowMesh.geometry = g;
    fv.flowMesh.visible = p.length > 0;
  }

  private buildOpenings(fv: FloorView): void {
    const parts = buildOpeningParts(fv.geo.openings, fv.openings, Math.min(fv.floor.cut_height, fv.floor.height));
    for (const [mesh, geo] of [
      [fv.framesMesh, parts.frames],
      [fv.glassMesh, parts.glass],
      [fv.blindsMesh, parts.blinds],
    ] as const) {
      mesh.geometry.dispose();
      mesh.geometry = geo;
      mesh.visible = geo.getAttribute("position").count > 0;
    }
  }

  /** Floors that can be tapped and are framed by the camera: the whole house or the selected floor. */
  private activeFloors(): FloorView[] {
    return this.floors.filter((f) => f.to > 0.99);
  }

  private applyHighlight(): void {
    for (const fv of this.floors) {
      const colors = fv.geo.floor.getAttribute("color");
      for (const r of fv.geo.roomTris) {
        const c = new Color(r.color);
        if (r.roomId === this.roomId) c.lerp(ACTIVE_FLOOR, 0.75);
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
    const openingsMoving = this.stepOpenings(dt);
    const moving = cameraMoving || floorsMoving || openingsMoving;
    this.lastFrame = moving ? now : 0;
    this.flowTime.value = this.flowSeconds();
    this.updateWalls();
    this.renderer.render(this.scene, this.camera);
    this.updateLabels();
    // the energy flow counts as motion here, so its frame rate shows too
    this.reportStats(now, moving || this.flowActive);
    if (moving) this.invalidate();
    else if (this.flowActive && !this.flowTimer) {
      // only the energy flow moves: about 30 frames per second are enough
      this.flowTimer = setTimeout(() => {
        this.flowTimer = undefined;
        this.invalidate();
      }, FLOW_FRAME_MS);
    }
  }

  /**
   * Walls facing the camera: in the tall view they turn into glass (rooms stay whole, doors and windows
   * stay visible); in the cut view every wall is cut at the cut height.
   */
  private updateWalls(): void {
    const cam = this.camera.position;
    const t = this.controls.view.target;
    const dx = cam.x - t.x;
    const dz = cam.z - t.z;
    const l = Math.hypot(dx, dz) || 1;
    for (const fv of this.floors) {
      // in a room, its floor's interior walls turn into glass as well
      const inRoom = this.roomId !== null && fv.floor.rooms.some((r) => r.id === this.roomId);
      const cut = this.wallMode === "cut";
      let glass = 0;
      fv.geo.buckets.forEach((normal, b) => {
        const facing = normal ? (normal[0] * dx) / l + (normal[1] * dz) / l >= 0.25 : inRoom;
        if (!cut && facing) glass |= 1 << b;
      });
      fv.mask.standing.value = cut ? 0 : 0xffff;
      fv.mask.glass.value = glass;
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
      fv.labelSize ??= { w: fv.label.offsetWidth, h: fv.label.offsetHeight };
      const lw = fv.labelSize.w;
      placed.push({ fv, left: Math.max(8, Math.min(w - lw - 8, best!.x - lw - 14)), y: best!.y, h: fv.labelSize.h });
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
    for (const p of this.persons) {
      const pin = this.personPins.get(p.id);
      const fv = this.floors.find((f) => f.floor.id === p.floorId);
      if (!pin) continue;
      if (!fv || house || fv.to < 0.99 || fv.o < 0.9) {
        pin.hidden = true;
        continue;
      }
      v.set(p.x, fv.floor.elevation + fv.y + 0.9, p.z).project(this.camera);
      const off = v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05;
      pin.hidden = off;
      if (!off) pin.style.transform = `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px) translate(-50%, -50%)`;
    }
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
    if (this.lastStatsFrame && moving) this.worstFrame = Math.max(this.worstFrame, now - this.lastStatsFrame);
    this.lastStatsFrame = moving ? now : 0;
    this.fpsFrames++;
    const elapsed = now - this.fpsStart;
    if (elapsed > 500 || !moving) {
      const info = this.renderer.info.render;
      this.options.onStats({
        fps: moving ? Math.round((this.fpsFrames * 1000) / elapsed) : 0,
        worstMs: Math.round(this.worstFrame),
        calls: info.calls,
        triangles: info.triangles,
        low: this.lowQuality,
        pixelRatio: this.renderer.getPixelRatio(),
      });
      this.fpsFrames = 0;
      this.fpsStart = now;
      this.worstFrame = 0;
    }
  }
}

/** Pattern atlas: 3 × 2 tiles of 1 m each (wood, oak, tiles / carpet, stone, concrete), faint cyan lines. */
function makePatternTexture(): CanvasTexture {
  const T = 256;
  const canvas = document.createElement("canvas");
  canvas.width = T * 3;
  canvas.height = T * 2;
  const ctx = canvas.getContext("2d")!;
  const line = (x0: number, y0: number, x1: number, y1: number, alpha: number) => {
    ctx.strokeStyle = `rgba(55,224,255,${alpha})`;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
  };
  ctx.lineWidth = 1.5;
  const tile = (col: number, row: number, draw: (ox: number, oy: number) => void) => {
    ctx.save();
    ctx.beginPath();
    ctx.rect(col * T, row * T, T, T);
    ctx.clip();
    draw(col * T, row * T);
    ctx.restore();
  };
  // wood: planks 0.2 m wide along x with staggered joints
  tile(0, 0, (ox, oy) => {
    for (let i = 0; i < 5; i++) {
      const y = oy + (i * T) / 5 + 0.75;
      line(ox, y, ox + T, y, 0.09);
      const j = ox + ((i * 0.37) % 1) * T;
      line(j, y, j, y + T / 5, 0.07);
    }
  });
  // oak: narrower planks along z
  tile(1, 0, (ox, oy) => {
    for (let i = 0; i < 7; i++) {
      const x = ox + (i * T) / 7 + 0.75;
      line(x, oy, x, oy + T, 0.08);
      const j = oy + ((i * 0.53) % 1) * T;
      line(x, j, x + T / 7, j, 0.06);
    }
  });
  // tiles: 0.25 m grid
  tile(2, 0, (ox, oy) => {
    for (let i = 0; i < 4; i++) {
      const p = (i * T) / 4 + 0.75;
      line(ox + p, oy, ox + p, oy + T, 0.1);
      line(ox, oy + p, ox + T, oy + p, 0.1);
    }
  });
  // carpet: plain (also used for slab sides)
  // stone: 0.5 m slabs in a running bond
  tile(1, 1, (ox, oy) => {
    for (let r = 0; r < 2; r++) {
      const y = oy + (r * T) / 2 + 0.75;
      line(ox, y, ox + T, y, 0.09);
      const shift = r ? T / 4 : 0;
      for (const x of [shift, shift + T / 2]) line(ox + x + 0.75, y, ox + x + 0.75, y + T / 2, 0.09);
    }
  });
  // concrete: 1 m grid and a faint speckle
  tile(2, 1, (ox, oy) => {
    line(ox + 0.75, oy, ox + 0.75, oy + T, 0.08);
    line(ox, oy + 0.75, ox + T, oy + 0.75, 0.08);
    ctx.fillStyle = "rgba(55,224,255,0.05)";
    for (let i = 0; i < 90; i++) ctx.fillRect(ox + ((i * 97) % T), oy + ((i * 61 + (i * i) % 37) % T), 2, 2);
  });
  const tex = new CanvasTexture(canvas);
  tex.flipY = false;
  tex.wrapS = ClampToEdgeWrapping;
  tex.wrapT = ClampToEdgeWrapping;
  tex.anisotropy = 4;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

/** Additive floor pattern: picks the atlas tile per vertex and repeats it every metre. */
function patternMaterial(texture: CanvasTexture): MeshBasicMaterial {
  const m = new MeshBasicMaterial({
    map: texture,
    transparent: true,
    blending: AdditiveBlending,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
  });
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nattribute vec2 tile;\nvarying vec2 vFp3dTile;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvFp3dTile = tile;");
    shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vFp3dTile;").replace(
      "#include <map_fragment>",
      `#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`,
    );
  };
  m.customProgramCacheKey = () => "fp3d-pattern";
  return m;
}

/** Blind slats: dark stripes with a faint cyan edge, repeated along v. */
function makeBlindTexture(): CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 8;
  canvas.height = 32;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#1a2742";
  ctx.fillRect(0, 0, 8, 32);
  ctx.fillStyle = "#223556";
  ctx.fillRect(0, 4, 8, 14);
  ctx.fillStyle = "rgba(55,224,255,0.45)";
  ctx.fillRect(0, 29, 8, 2);
  const tex = new CanvasTexture(canvas);
  tex.wrapS = RepeatWrapping;
  tex.wrapT = RepeatWrapping;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

function flowKey(f: FlowPiece): string {
  const r = (n: number) => Math.round(n * 100);
  return `${f.floorId}:${f.a.map(r).join(",")}>${f.b.map(r).join(",")}`;
}

/** Stripe speed (m/s): still at 0 W, faster with more power (square root, so 2 kW is not 20 × 100 W). */
function flowSpeed(power: number): number {
  return power > 0.5 ? Math.min(2.4, 0.3 + Math.sqrt(power) / 28) : 0;
}

/** Glowing cable with stripes running along it (uv.x = metres along the cable, uv.y = across). */
function flowMaterial(time: { value: number }): MeshBasicMaterial {
  const m = new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide });
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uFlowTime = time;
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nattribute float flowSpeed;\nattribute float flowOffset;\nvarying float vFlowSpeed;\nvarying float vFlowOffset;\nvarying vec2 vFlowUv;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvFlowSpeed = flowSpeed;\nvFlowOffset = flowOffset;\nvFlowUv = uv;");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform float uFlowTime;\nvarying float vFlowSpeed;\nvarying float vFlowOffset;\nvarying vec2 vFlowUv;")
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        float fp3dPhase = (vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 2.5;
        float fp3dStripe = smoothstep(0.5, 0.85, fract(fp3dPhase)) * fp3dMoving;
        diffuseColor.rgb *= (0.4 + 1.1 * fp3dStripe) * (0.35 + 0.65 * fp3dAcross);`,
      );
  };
  m.customProgramCacheKey = () => "fp3d-flow";
  return m;
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
