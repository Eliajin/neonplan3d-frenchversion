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
  Points,
  PointsMaterial,
  PlaneGeometry,
  Raycaster,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  TextureLoader,
  type Texture,
  Float32BufferAttribute,
  BufferGeometry as Geometry,
  Vector2,
  Vector3,
  WebGLRenderer,
  type BufferGeometry,
  type Material,
} from "three";
import type { Building, Floor, Furniture } from "../model.ts";
import { centroid } from "../model.ts";
import { buildFloorGeometry, SLAB, stairHoles, type FloorGeometry } from "./build.ts";
import { OrbitControls } from "./controls.ts";
import { makeFoldable, type FoldMasks } from "./fold.ts";
import { screenRect } from "./furniture.ts";
import { buildRoof } from "./roof.ts";
import { lineBlending, themed, themeIndex, type Theme, type ThemeUniform } from "./theme.ts";

export type { Theme } from "./theme.ts";
import { GeoBuffer, LineBuffer, pushPrism } from "./geo.ts";
import { buildLightSurface, lightColors, roomIndexAt, type LightKind, type LightSource, type LightSurface } from "./lighting.ts";
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
  /** Furnishing in 3D: an item was selected (null: none) or dragged to a new place. */
  onFurnitureSelect?: (furnitureId: string | null) => void;
  onFurnitureMove?: (furnitureId: string, x: number, z: number) => void;
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
  lamp?: LampModel | null;
  /** Lamp: turn around y (degrees), size (w, d, h) and height of what it stands on. */
  rotation?: number;
  size?: [number, number, number];
  base?: number;
  /** Show the HTML marker (false: the 3D object alone stands for the device). */
  pin?: boolean;
  /** The 3D lamp can be tapped (it has an entity). */
  pickable?: boolean;
  /** Furniture item this lamp is (for moving it in 3D). */
  furnitureId?: string;
  /** A colour effect runs (colour loop …): the colour is animated in 3D. */
  effect?: boolean;
  /** Pendant shape: shade (default), globe, cone or drum. */
  variant?: string | null;
  /** Formatted power, e.g. "85 W". */
  powerText?: string;
}

export type LampModel = "ceiling" | "downlight" | "spot" | "panel" | "pendant" | "floor" | "uplight" | "table" | "wall" | "strip" | "bollard" | "garden";

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
  /** Picture of what is running (app icon or cover art from the media player), if any. */
  picture?: string | null;
}

/** Position of the sun (from sun.sun): degrees above the horizon and clockwise from north. */
export interface SunState {
  elevation: number;
  azimuth: number;
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
const CABLE_WIDTH = 0.035;
const CABLE_HALO = 0.14;
const LAMP_BODY = 0x2a3a60;
const LAMP_SHADE = 0x1d2946;
const WALL_LAMP_Y = 1.75;
/** Lamps that hang from the ceiling (hidden in the cut view). */
const HANGING = new Set<LampModel>(["ceiling", "downlight", "spot", "panel", "pendant", "strip"]);
const FLASH_MS = 450;
const EFFECT_MS = 125;
/** Turns of the colour wheel per second while a colour effect runs. */
const EFFECT_SPEED = 0.08;
const LAMP_SIZE: Record<LampModel, [number, number, number]> = {
  ceiling: [0.4, 0.4, 0.08],
  downlight: [0.1, 0.1, 0.02],
  spot: [0.1, 0.1, 0.14],
  panel: [0.6, 0.6, 0.03],
  uplight: [0.35, 0.35, 1.8],
  bollard: [0.16, 0.16, 0.8],
  garden: [0.12, 0.12, 0.3],
  pendant: [0.4, 0.4, 0.8],
  floor: [0.42, 0.42, 1.7],
  table: [0.26, 0.26, 0.45],
  wall: [0.22, 0.12, 0.2],
  strip: [2, 0.04, 0.03],
};

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
  halos: PointsMaterial;
  cones: MeshBasicMaterial;
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
  patternMesh: Mesh;
  /** Room lighting on floors and wall faces (see lighting.ts). */
  glowMesh: Mesh;
  lightSurface: LightSurface | null;
  framesMesh: Mesh;
  glassMesh: Mesh;
  blindsMesh: Mesh;
  flowMesh: Mesh;
  lampMesh: Mesh;
  /** Sunlight falling through the windows onto the floor. */
  sunMesh: Mesh;
  sunSig: string;
  /** Soft glow around lit lamps, and light cones under spots (quality "High"). */
  haloMesh: Points;
  coneMesh: Mesh;
  /** Triangle ranges of lamps (entity ids), furniture walls mesh and openings, for tapping. */
  lampTris: { id: string; start: number; end: number }[];
  /** The same lamp ranges, keyed by furniture id (for moving lamps). */
  lampFurnTris: { id: string; start: number; end: number }[];
  frameTris: { id: string; start: number; end: number }[];
  blindTris: { id: string; start: number; end: number }[];
  wallMesh: Mesh;
  screenMesh: Mesh;
  screenSig: string;
  /** Pictures shown on lit screens, by furniture id. */
  screenPics: Map<string, { url: string; mesh: Mesh; texture: Texture | null }>;
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
  /** Entities behind furniture (TV, …) and openings (blind, contact), for tapping them in 3D. */
  private pickFurniture = new Map<string, string>();
  private pickOpenings = new Map<string, string>();
  /** Lamps flashing after a tap (entity id -> end time). */
  private flashes = new Map<string, number>();
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
  private highQuality = false;
  /** Seconds used for animated colour effects (advanced in steps while an effect runs). */
  private effectTime = 0;
  private effectTimer: ReturnType<typeof setTimeout> | undefined;
  private readonly haloTexture: CanvasTexture;
  /** Roof over the top floor (house view only), its opacity and the camera distance of the house view. */
  private roof: { group: Group; floorId: string; solid: MeshBasicMaterial; lines: LineBasicMaterial } | null = null;
  private roofO = 0;
  /** Furnishing in 3D: items can be dragged; the selected one shows a wireframe box. */
  private furnish = false;
  private selectedFurniture: string | null = null;
  private grab: { floorId: string; id: string; offset: [number, number]; x: number; z: number; moved: boolean } | null = null;
  private ghost: LineSegments | null = null;
  private theme: Theme = "neon";
  private readonly themeUniform: ThemeUniform = { value: 0 };
  private sun: SunState | null = null;
  /** Heatmap colour per room id (null: normal floors). */
  private roomTint: Map<string, [number, number, number]> | null = null;
  private houseRadius = 20;
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
    this.haloTexture = makeHaloTexture();
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
    this.applyDetail();
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

  /** Entities opened by tapping furniture or openings in 3D (by furniture / opening id). */
  setPickTargets(furniture: Map<string, string>, openings: Map<string, string>): void {
    this.pickFurniture = furniture;
    this.pickOpenings = openings;
  }

  /** Look of the 3D view: neon, blueprint or day. Instant: colours are mapped in the shaders. */
  setTheme(theme: Theme): void {
    if (theme === this.theme) return;
    this.theme = theme;
    this.themeUniform.value = themeIndex(theme);
    const blending = lineBlending(theme);
    const lineMats = [...this.floors.map((f) => f.materials.lines), ...(this.roof ? [this.roof.lines] : [])];
    for (const m of lineMats) {
      m.blending = blending;
      m.needsUpdate = true;
    }
    // the neon ground grid would vanish on the light background anyway
    this.placeGround();
    this.invalidate();
  }

  /** Furnishing mode: dragging furniture and lamps moves them instead of turning the view. */
  setFurnishMode(on: boolean): void {
    this.furnish = on;
    if (!on) this.selectFurniture(null);
    this.invalidate();
  }

  /** Select a furniture item (wireframe box), or none. */
  selectFurniture(id: string | null): void {
    this.selectedFurniture = id;
    this.updateGhost();
    this.invalidate();
  }

  /** Position of the sun; sunlight falls through windows facing it. */
  setSun(sun: SunState | null): void {
    this.sun = sun;
    for (const fv of this.floors) this.buildSun(fv);
    this.invalidate();
  }

  /** Heatmap: floor colour per room id, or null for the normal look. */
  setRoomTint(tint: Map<string, [number, number, number]> | null): void {
    const changed = !!tint !== !!this.roomTint;
    this.roomTint = tint;
    this.applyHighlight();
    if (changed) {
      for (const fv of this.floors) {
        fv.glowSig = "";
        this.buildGlow(fv);
      }
    }
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
    clearTimeout(this.effectTimer);
    this.resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.controls.dispose();
    this.clear();
    this.building = null;
    this.buildRoofMesh();
    this.ground.geometry.dispose();
    (this.ground.material as Material).dispose();
    this.patternTexture.dispose();
    this.blindTexture.dispose();
    this.groundTexture.dispose();
    this.haloTexture.dispose();
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
    this.highQuality = quality === "high";
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
      hold: (x, y) => this.onHold(x, y),
      grab: (x, y) => this.grabFurniture(x, y),
      drag: (x, y) => this.dragFurniture(x, y),
      drop: () => this.dropFurniture(),
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
      for (const pic of fv.screenPics.values()) {
        (pic.mesh.material as Material).dispose();
        pic.texture?.dispose();
      }
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
  /** Light surface of a floor (rebuilt with the floor plan and when the detail level changes). */
  private buildLightSurface(fv: FloorView): void {
    const cell = this.lowQuality ? 0.5 : 0.25;
    const surface = buildLightSurface(fv.floor, fv.geo.walls2d, fv.geo.wallBuckets, fv.geo.openings, cell);
    fv.lightSurface = surface;
    const g = new Geometry();
    g.setAttribute("position", new Float32BufferAttribute(surface.pos, 3));
    g.setAttribute("color", new Float32BufferAttribute(new Float32Array(surface.pos.length), 3));
    g.setAttribute("fold", new Float32BufferAttribute(surface.fold, 1));
    g.computeBoundingSphere();
    fv.glowMesh.geometry.dispose();
    fv.glowMesh.geometry = g;
    fv.glowSig = "";
    this.buildGlow(fv);
  }

  /** Light sources of the lights that are on, with the height and characteristic of their lamp. */
  private lightSources(fv: FloorView): LightSource[] {
    const H = fv.floor.height;
    const out: LightSource[] = [];
    for (const d of this.devices) {
      const glow = this.glowOf(d);
      if (d.floorId !== fv.floor.id || !glow) continue;
      const room = roomIndexAt(fv.floor, d.x, d.z);
      const [w, , h] = d.size ?? (d.lamp ? LAMP_SIZE[d.lamp] : [0.3, 0.3, 0.3]);
      const base = d.base ?? 0;
      const kinds: Record<LampModel, [number, LightKind]> = {
        ceiling: [H - 0.12, "ceiling"],
        downlight: [H - 0.03, "spot"],
        spot: [H - h, "spot"],
        panel: [H - 0.05, "ceiling"],
        pendant: [Math.max(0.5, H - h), "pendant"],
        floor: [h - 0.15, "omni"],
        uplight: [h, "up"],
        table: [base + h - 0.1, "omni"],
        wall: [WALL_LAMP_Y + 0.1, "wall"],
        strip: [H - 0.05, "ceiling"],
        bollard: [base + h - 0.08, "ceiling"],
        garden: [base + h, "up"],
      };
      const [y, kind] = d.lamp ? kinds[d.lamp] : [d.y, "omni" as LightKind];
      const color = glow.color;
      if (d.lamp === "strip") {
        // a strip lights along its length: three sources spread over it
        const a = ((d.rotation ?? 0) * Math.PI) / 180;
        for (const t of [-1 / 3, 0, 1 / 3]) {
          out.push({ x: d.x + Math.cos(a) * w * t, y, z: d.z + Math.sin(a) * w * t, color, level: glow.level * 0.55, kind, room });
        }
      } else out.push({ x: d.x, y, z: d.z, color, level: glow.level, kind, room });
    }
    return out;
  }

  /** Colours of the light surface for the current lights and doors. */
  private buildGlow(fv: FloorView): void {
    const surface = fv.lightSurface;
    if (!surface) return;
    const sources = this.lightSources(fv);
    const doorOpen = surface.doors.map((d) => {
      const o = fv.openings.get(d.id);
      return o ? Math.max(o.open, o.open2 ?? 0) : 0.5;
    });
    const sig =
      sources.map((l) => `${l.x.toFixed(2)},${l.y.toFixed(2)},${l.z.toFixed(2)},${l.kind},${l.level.toFixed(3)},${l.color.map((c) => c.toFixed(3)).join("/")}`).join(";") +
      "|" +
      doorOpen.map((o) => o.toFixed(1)).join(",");
    if (sig === fv.glowSig) return;
    fv.glowSig = sig;
    const attr = fv.glowMesh.geometry.getAttribute("color") as Float32BufferAttribute;
    // the heatmap is an analysis view: room light would wash out its colours
    if (!sources.length || this.roomTint) {
      fv.glowMesh.visible = false;
      return;
    }
    const colors = lightColors(surface, sources, 0.42, doorOpen);
    (attr.array as Float32Array).set(colors);
    attr.needsUpdate = true;
    // only quads that receive light are drawn (dark ones would cost fill rate for nothing)
    const index: number[] = [];
    for (let q = 0; q < colors.length / 18; q++) {
      let lit = false;
      for (let k = q * 18; k < q * 18 + 18 && !lit; k++) lit = colors[k] > 0.004;
      if (lit) for (let v = 0; v < 6; v++) index.push(q * 6 + v);
    }
    fv.glowMesh.geometry.setIndex(index);
    fv.glowMesh.visible = index.length > 0;
  }

  private makeMaterials(mask: FoldMasks): FloorMaterials {
    return {
      floor: themed(new MeshBasicMaterial({ vertexColors: true }), this.themeUniform),
      pattern: patternMaterial(this.patternTexture),
      wall: themed(makeFoldable(new MeshBasicMaterial({ vertexColors: true }), mask, "solid"), this.themeUniform),
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
      lines: themed(
        makeFoldable(new LineBasicMaterial({ vertexColors: true, transparent: true, blending: lineBlending(this.theme), depthWrite: false }), mask),
        this.themeUniform,
        true,
      ),
      // light on floors and walls follows cut and glass walls like the walls themselves
      glow: makeFoldable(
        new MeshBasicMaterial({
          vertexColors: true,
          transparent: true,
          blending: AdditiveBlending,
          depthWrite: false,
          side: DoubleSide,
          polygonOffset: true,
          polygonOffsetFactor: -3,
        }),
        mask,
        "solid",
      ),
      frames: themed(makeFoldable(new MeshBasicMaterial({ vertexColors: true, side: DoubleSide }), mask), this.themeUniform),
      glass: makeFoldable(
        new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }),
        mask,
      ),
      blinds: themed(makeFoldable(new MeshBasicMaterial({ map: this.blindTexture, vertexColors: true, side: DoubleSide }), mask), this.themeUniform),
      flow: flowMaterial(this.flowTime),
      lamps: themed(new MeshBasicMaterial({ vertexColors: true }), this.themeUniform),
      halos: new PointsMaterial({
        map: this.haloTexture,
        size: 0.9,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false,
      }),
      cones: new MeshBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }),
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
      const sunMesh = new Mesh(new Geometry(), materials.cones);
      sunMesh.visible = false;
      sunMesh.renderOrder = 3;
      const haloMesh = new Points(new Geometry(), materials.halos);
      haloMesh.visible = false;
      haloMesh.renderOrder = 7;
      const coneMesh = new Mesh(new Geometry(), materials.cones);
      coneMesh.visible = false;
      coneMesh.renderOrder = 7;
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
      const wallMesh = new Mesh(geo.walls, materials.wall);
      glassWalls.renderOrder = 6;
      group.add(
        floorMesh,
        shadowMesh,
        pattern,
        glowMesh,
        wallMesh,
        new LineSegments(geo.lines, materials.lines),
        framesMesh,
        blindsMesh,
        glassMesh,
        flowMesh,
        lampMesh,
        sunMesh,
        haloMesh,
        coneMesh,
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
        patternMesh: pattern,
        glowMesh,
        lightSurface: null,
        framesMesh,
        glassMesh,
        blindsMesh,
        flowMesh,
        lampMesh,
        sunMesh,
        sunSig: "",
        haloMesh,
        coneMesh,
        lampTris: [],
        lampFurnTris: [],
        frameTris: [],
        blindTris: [],
        wallMesh,
        screenMesh,
        screenSig: "",
        screenPics: new Map(),
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
      this.buildLamps(fv);
      this.buildScreens(fv);
      const prev = previousOpenings.get(fv.floor.id);
      for (const info of fv.geo.openings) fv.openings.set(info.opening.id, prev?.get(info.opening.id) ?? this.openingTargets.get(info.opening.id) ?? CLOSED);
      this.buildOpenings(fv);
      this.buildFlows(fv);
      this.buildLightSurface(fv);
      this.buildSun(fv);
    }
    this.applyTargets(previous.size === 0);
    this.applyHighlight();
    this.applyDetail();
    this.buildRoofMesh();
    this.updateGhost();
  }

  private buildRoofMesh(): void {
    if (this.roof) {
      this.roof.group.traverse((o) => ((o as Mesh).geometry as BufferGeometry | undefined)?.dispose());
      this.roof.solid.dispose();
      this.roof.lines.dispose();
      this.scene.remove(this.roof.group);
      this.roof = null;
    }
    const geo = this.building ? buildRoof(this.building) : null;
    if (!geo) return;
    const group = new Group();
    const solid = themed(new MeshBasicMaterial({ vertexColors: true, transparent: true, side: DoubleSide }), this.themeUniform);
    const lines = themed(new LineBasicMaterial({ vertexColors: true, transparent: true, blending: lineBlending(this.theme), depthWrite: false }), this.themeUniform, true);
    group.add(new Mesh(geo.solid.geometry(), solid), new LineSegments(geo.lines.geometry(), lines));
    group.renderOrder = 8;
    this.scene.add(group);
    this.roof = { group, floorId: geo.floor.id, solid, lines };
    this.placeRoof();
  }

  /**
   * The roof shows in the house view and sits on its floor; zooming in lifts and fades it, so the top
   * floor opens up. Returns true while it still moves.
   */
  private placeRoof(dt = 1000): boolean {
    const roof = this.roof;
    if (!roof) return false;
    const fv = this.floors.find((f) => f.floor.id === roof.floorId);
    if (!fv) return false;
    const zoom = Math.min(1, Math.max(0, (this.controls.view.radius / this.houseRadius - 0.62) / 0.3));
    const target = this.floorId === null && this.wallMode !== "cut" ? 0.94 * zoom : 0;
    const k = 1 - Math.exp(-dt / FLOOR_TAU);
    const before = this.roofO;
    this.roofO += (target - this.roofO) * k;
    if (Math.abs(target - this.roofO) < 0.004) this.roofO = target;
    roof.group.visible = this.roofO > 0.02;
    roof.group.position.y = fv.floor.elevation + fv.y + fv.floor.height + (1 - this.roofO) * 2.2;
    roof.solid.opacity = this.roofO;
    roof.solid.depthWrite = this.roofO > 0.9;
    roof.lines.opacity = this.roofO;
    return this.roofO !== before && this.roofO !== target;
  }

  /**
   * Tablet level: leave out the passes that cover the whole picture but add little (floor patterns,
   * baked floor shadows, the ground grid, the wide glow around cables).
   */
  private applyDetail(): void {
    const low = this.lowQuality;
    this.ground.visible = !low && this.theme !== "day" && this.floors.some((f) => f.floor.rooms.length > 0);
    for (const fv of this.floors) {
      fv.patternMesh.visible = !low;
      fv.shadowMesh.visible = !low && fv.o > 0.98;
      fv.flowLayout = "";
      this.buildFlows(fv);
      this.buildLightSurface(fv);
      this.buildLamps(fv);
    }
    this.invalidate();
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
    // a multiply layer cannot fade, so it goes with the first step; the tablet level leaves it out
    fv.shadowMesh.visible = fv.o > 0.98 && !this.lowQuality;
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
    m.halos.opacity = fv.o;
    m.cones.opacity = fv.o;
    m.screens.opacity = fv.o;
    for (const pic of fv.screenPics.values()) {
      const mat = pic.mesh.material as MeshBasicMaterial;
      mat.transparent = fv.o < 0.999;
      mat.opacity = fv.o;
    }
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
        const next = { ...cur, open2: cur.open2 ?? 0 };
        let busy = false;
        for (const key of ["open", "open2", "tilt"] as const) {
          const to = target[key] ?? 0;
          const from = cur[key] ?? 0;
          const d = to - from;
          if (Math.abs(d) < 0.003) next[key] = to;
          else {
            next[key] = from + d * k;
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
        if (next.open !== cur.open || next.open2 !== (cur.open2 ?? 0) || next.tilt !== cur.tilt || next.cover !== cur.cover) {
          fv.openings.set(id, next);
          changed = true;
        }
        moving ||= busy;
      }
      if (changed) {
        this.buildOpenings(fv);
        this.buildGlow(fv);
        this.buildSun(fv);
      }
    }
    return moving;
  }

  /** Glow of a device, with the hue turning while a colour effect runs. */
  private glowOf(d: DeviceMarker): DeviceMarker["glow"] {
    if (!d.glow || !d.effect) return d.glow;
    const c = new Color(...d.glow.color);
    const hsl = { h: 0, s: 0, l: 0 };
    c.getHSL(hsl);
    // lamps start at different points of the colour wheel, so a room does not blink in sync
    const offset = (d.x * 0.37 + d.z * 0.61) % 1;
    c.setHSL((hsl.h + this.effectTime * EFFECT_SPEED + offset) % 1, Math.max(0.6, hsl.s), Math.max(0.45, hsl.l));
    return { color: [c.r, c.g, c.b], level: d.glow.level };
  }

  /** Lamp models of the lights on a floor, merged into one mesh; lit shades take the light colour. */
  private buildLamps(fv: FloorView): void {
    const now = performance.now();
    const flash = (id: string) => {
      const until = this.flashes.get(id);
      return until && until > now ? Math.round(((until - now) / FLASH_MS) * 10) / 10 : 0;
    };
    const sig =
      this.wallMode +
      (this.lowQuality ? "L" : this.highQuality ? "H" : "M") +
      this.devices
        .filter((d) => d.floorId === fv.floor.id && d.lamp)
        .map(
          (d) =>
            `${d.id},${d.lamp},${d.variant},${d.x},${d.z},${d.rotation ?? 0},${d.size?.join("/")},${d.base ?? 0},${flash(d.id)},${this.glowOf(d) ? `${this.glowOf(d)!.level.toFixed(3)},${this.glowOf(d)!.color.map((c) => c.toFixed(3)).join("/")}` : "off"}`,
        )
        .join(";");
    if (sig === fv.lampSig && fv.lampMesh.geometry.getAttribute("position")) return;
    fv.lampSig = sig;
    const buf = new GeoBuffer();
    const tris: FloorView["lampTris"] = [];
    const furnTris: FloorView["lampFurnTris"] = [];
    const H = fv.floor.height;
    for (const d of this.devices) {
      if (d.floorId !== fv.floor.id || !d.lamp) continue;
      // hanging lamps would float above cut walls
      if (HANGING.has(d.lamp) && this.wallMode === "cut") continue;
      const start = buf.count;
      const glow = this.glowOf(d);
      // a lit shade glows in the light's colour, brighter with more brightness; a tap flashes it white
      const k = glow ? 0.55 + 0.45 * glow.level : 0;
      const shadeC = glow ? new Color(...(glow.color.map((c) => Math.min(1, c * k)) as [number, number, number])) : new Color(LAMP_SHADE);
      const f = flash(d.id);
      if (f > 0) shadeC.lerp(new Color(1, 1, 1), 0.7 * f);
      const shadeCol = shadeC.getHex();
      const [w, dd, h] = d.size ?? LAMP_SIZE[d.lamp];
      const base = d.base ?? 0;
      const ang = ((d.rotation ?? 0) * Math.PI) / 180;
      const ca = Math.cos(ang);
      const sa = Math.sin(ang);
      const L = (x: number, z: number): [number, number] => [d.x + x * ca - z * sa, d.z + x * sa + z * ca];
      const cyl = (r: number, y0: number, y1: number, side: number, top: number, n = 14) => {
        const poly: [number, number][] = [];
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2;
          poly.push([d.x + Math.cos(a) * r, d.z + Math.sin(a) * r]);
        }
        pushPrism(buf, poly, y0, y1, side, top, { aoFrom: 0, bottom: true });
      };
      const box = (x0: number, x1: number, z0: number, z1: number, y0: number, y1: number, side: number, top = side) =>
        pushPrism(buf, [L(x0, z0), L(x1, z0), L(x1, z1), L(x0, z1)], y0, y1, side, top, { aoFrom: 0, bottom: true });
      const r = Math.max(0.05, Math.min(w, dd) / 2);
      switch (d.lamp) {
        case "ceiling":
          cyl(r * 0.25, H - 0.04, H, LAMP_BODY, LAMP_BODY, 8);
          cyl(r, H - Math.max(0.04, h) - 0.035, H - 0.04, shadeCol, shadeCol);
          break;
        case "pendant": {
          const bottom = Math.max(0.4, H - h);
          cyl(0.06, H - 0.02, H, LAMP_BODY, LAMP_BODY, 8);
          const shapeTop = d.variant === "globe" ? bottom + 2 * r : d.variant === "drum" ? bottom + 0.24 : bottom + 0.2;
          cyl(0.008, shapeTop, H - 0.02, LAMP_BODY, LAMP_BODY, 5);
          if (d.variant === "globe") {
            // stacked rings approximate a ball
            const n = 7;
            for (let i = 0; i < n; i++) {
              const a0 = Math.PI * (i / n);
              const a1 = Math.PI * ((i + 1) / n);
              cyl(r * Math.max(0.2, Math.sin((a0 + a1) / 2)), bottom + r - r * Math.cos(a0), bottom + r - r * Math.cos(a1), shadeCol, shadeCol, 14);
            }
          } else if (d.variant === "cone") {
            const n = 4;
            for (let i = 0; i < n; i++) cyl(r * (0.25 + (0.75 * (n - i)) / n), bottom + 0.06 * i, bottom + 0.06 * (i + 1), shadeCol, shadeCol, 16);
          } else if (d.variant === "drum") {
            cyl(r, bottom, bottom + 0.24, shadeCol, shadeCol, 18);
          } else {
            cyl(r * 0.35, bottom + 0.14, bottom + 0.2, shadeCol, shadeCol, 12);
            cyl(r, bottom, bottom + 0.14, shadeCol, shadeCol, 16);
          }
          break;
        }
        case "downlight":
          // flush ring in the ceiling with a glowing lens
          cyl(r, H - 0.012, H, LAMP_BODY, LAMP_BODY, 12);
          cyl(r * 0.7, H - 0.02, H - 0.012, shadeCol, shadeCol, 12);
          break;
        case "spot":
          cyl(r * 0.6, H - 0.02, H, LAMP_BODY, LAMP_BODY, 10);
          cyl(r, H - Math.max(0.06, h), H - 0.02, LAMP_BODY, LAMP_BODY, 12);
          cyl(r * 0.8, H - Math.max(0.06, h) - 0.008, H - Math.max(0.06, h), shadeCol, shadeCol, 12);
          break;
        case "panel":
          box(-w / 2, w / 2, -dd / 2, dd / 2, H - Math.max(0.015, h), H, LAMP_BODY, LAMP_BODY);
          box(-w / 2 + 0.02, w / 2 - 0.02, -dd / 2 + 0.02, dd / 2 - 0.02, H - Math.max(0.015, h) - 0.004, H - Math.max(0.015, h), shadeCol);
          break;
        case "uplight":
          cyl(Math.max(0.1, r * 0.6), 0, 0.03, LAMP_BODY, LAMP_BODY);
          cyl(0.014, 0.03, h - 0.12, LAMP_BODY, LAMP_BODY, 6);
          // bowl open to the top: dark outside, glowing rim
          cyl(r, h - 0.14, h - 0.02, LAMP_BODY, LAMP_BODY);
          cyl(r * 0.92, h - 0.02, h, shadeCol, shadeCol);
          break;
        case "bollard":
          // path light: post with a glowing band under its cap
          cyl(r, base, base + h - 0.14, LAMP_BODY, LAMP_BODY, 10);
          cyl(r * 0.9, base + h - 0.14, base + h - 0.03, shadeCol, shadeCol, 10);
          cyl(r * 1.1, base + h - 0.03, base + h, LAMP_BODY, LAMP_BODY, 10);
          break;
        case "garden":
          // spike in the ground, head pointing up
          cyl(0.012, base, base + h - 0.08, LAMP_BODY, LAMP_BODY, 5);
          cyl(r, base + h - 0.08, base + h - 0.01, LAMP_BODY, LAMP_BODY, 10);
          cyl(r * 0.8, base + h - 0.01, base + h, shadeCol, shadeCol, 10);
          break;
        case "floor":
          cyl(Math.max(0.1, r * 0.7), 0, 0.03, LAMP_BODY, LAMP_BODY);
          cyl(0.014, 0.03, h - 0.28, LAMP_BODY, LAMP_BODY, 6);
          cyl(r, h - 0.3, h, shadeCol, shadeCol);
          break;
        case "table":
          cyl(Math.max(0.05, r * 0.55), base, base + 0.03, LAMP_BODY, LAMP_BODY);
          cyl(0.012, base + 0.03, base + h - 0.16, LAMP_BODY, LAMP_BODY, 6);
          cyl(r, base + h - 0.18, base + h, shadeCol, shadeCol);
          break;
        case "wall": {
          // plate on the wall (back at -z) and a glowing shade in front of it
          const y0 = WALL_LAMP_Y;
          box(-w / 2 + 0.03, w / 2 - 0.03, -dd / 2, -dd / 2 + 0.02, y0, y0 + h, LAMP_BODY);
          box(-w / 2, w / 2, -dd / 2 + 0.02, dd / 2, y0 + h * 0.15, y0 + h * 0.85, shadeCol);
          break;
        }
        case "strip": {
          // cove light: a thin bar just under the ceiling along the wall
          const y1 = H - 0.04;
          box(-w / 2, w / 2, -dd / 2, dd / 2, y1 - Math.max(0.02, h), y1, shadeCol);
          break;
        }
      }
      if (d.pickable !== false) tris.push({ id: d.id, start, end: buf.count });
      if (d.furnitureId) furnTris.push({ id: d.furnitureId, start, end: buf.count });
    }
    fv.lampTris = tris;
    fv.lampFurnTris = furnTris;
    fv.lampMesh.geometry.dispose();
    fv.lampMesh.geometry = buf.geometry();
    fv.lampMesh.visible = buf.count > 0;
    this.buildHalos(fv);
  }

  /**
   * Sunlight through windows that face the sun: each window's opening (reduced by its blind) is
   * projected along the sun's rays onto the floor as a warm, soft patch.
   */
  private buildSun(fv: FloorView): void {
    const sun = this.sun;
    const north = ((this.building?.settings.north ?? 0) * Math.PI) / 180;
    const sig = sun ? `${sun.elevation.toFixed(1)},${sun.azimuth.toFixed(1)},${north},${[...fv.openings.values()].map((o) => (o.cover ?? 0).toFixed(2)).join(",")}` : "";
    if (sig === fv.sunSig) return;
    fv.sunSig = sig;
    const buf = new GeoBuffer();
    if (sun && sun.elevation > 2) {
      const day = Math.min(1, sun.elevation / 12);
      const el = (sun.elevation * Math.PI) / 180;
      const az = (sun.azimuth * Math.PI) / 180;
      // horizontal direction towards the sun in plan coordinates (x right, z down, "up" = -z)
      const toSun: [number, number] = [Math.sin(north + az), -Math.cos(north + az)];
      const reach = 1 / Math.tan(el);
      for (const info of fv.geo.openings) {
        if (info.opening.type !== "window" || !info.exterior) continue;
        const out: [number, number] = [-info.toRoom[0], -info.toRoom[1]];
        const facing = out[0] * toSun[0] + out[1] * toSun[1];
        if (facing < 0.05) continue;
        const st = fv.openings.get(info.opening.id);
        const top = info.top - (st?.cover ?? 0) * (info.top - info.sill);
        if (top - info.sill < 0.05) continue;
        const at = (s: number, y: number) => {
          const d = Math.min(7, y * reach);
          return [
            info.start[0] + info.axis[0] * s + info.toRoom[0] * info.faceRoom - toSun[0] * d,
            0.02,
            info.start[1] + info.axis[1] * s + info.toRoom[1] * info.faceRoom - toSun[1] * d,
          ];
        };
        const k = 0.14 * day * Math.min(1, facing * 1.5);
        const near = new Color(1 * k, 0.82 * k, 0.55 * k);
        const far = near.clone().multiplyScalar(0.45);
        const a = at(0, info.sill);
        const b = at(info.width, info.sill);
        const c = at(info.width, top);
        const d = at(0, top);
        buf.tri(a, b, c, near, near, far);
        buf.tri(a, c, d, near, far, far);
      }
    }
    fv.sunMesh.geometry.dispose();
    fv.sunMesh.geometry = buf.geometry();
    fv.sunMesh.visible = buf.count > 0;
  }

  /** Glow points at lit shades (not at the tablet level) and light cones under spots (level "High"). */
  private buildHalos(fv: FloorView): void {
    const H = fv.floor.height;
    const hp: number[] = [];
    const hc: number[] = [];
    const cones = new GeoBuffer();
    for (const d of this.devices) {
      const glow = this.glowOf(d);
      if (d.floorId !== fv.floor.id || !d.lamp || !glow) continue;
      if (HANGING.has(d.lamp) && this.wallMode === "cut") continue;
      const [w, dd, h] = d.size ?? LAMP_SIZE[d.lamp];
      const base = d.base ?? 0;
      const ang = ((d.rotation ?? 0) * Math.PI) / 180;
      const y = {
        ceiling: H - 0.07,
        downlight: H - 0.03,
        spot: H - h,
        panel: H - 0.03,
        pendant: Math.max(0.4, H - h) + 0.08,
        floor: h - 0.15,
        uplight: h,
        table: base + h - 0.09,
        wall: WALL_LAMP_Y + h / 2,
        strip: H - 0.05,
        bollard: base + h - 0.08,
        garden: base + h - 0.03,
      }[d.lamp];
      // a wall light glows in front of the wall
      const push = (x: number, z: number, k = 1) => {
        hp.push(x, y, z);
        hc.push(...glow.color.map((c) => c * glow.level * 0.7 * k));
      };
      if (d.lamp === "strip") for (const t of [-0.4, -0.13, 0.13, 0.4]) push(d.x + Math.cos(ang) * w * t, d.z + Math.sin(ang) * w * t, 0.6);
      else if (d.lamp === "wall") push(d.x - Math.sin(ang) * (dd / 2 + 0.05), d.z + Math.cos(ang) * (dd / 2 + 0.05));
      else push(d.x, d.z);
      if (this.highQuality && (d.lamp === "downlight" || d.lamp === "spot")) {
        // soft cone from the lamp to the floor, fading towards the floor
        const top = new Color(...glow.color.map((c) => c * 0.09 * glow.level) as [number, number, number]);
        const bottom = new Color(0, 0, 0);
        const r0 = Math.max(0.03, w / 2);
        const r1 = 0.45 + 0.35 * glow.level;
        const n = 16;
        for (let i = 0; i < n; i++) {
          const a0 = (i / n) * Math.PI * 2;
          const a1 = ((i + 1) / n) * Math.PI * 2;
          const t0 = [d.x + Math.cos(a0) * r0, y, d.z + Math.sin(a0) * r0];
          const t1 = [d.x + Math.cos(a1) * r0, y, d.z + Math.sin(a1) * r0];
          const b0 = [d.x + Math.cos(a0) * r1, 0.02, d.z + Math.sin(a0) * r1];
          const b1 = [d.x + Math.cos(a1) * r1, 0.02, d.z + Math.sin(a1) * r1];
          cones.tri(t0, b0, b1, top, bottom, bottom);
          cones.tri(t0, b1, t1, top, bottom, top);
        }
      }
    }
    const g = new Geometry();
    g.setAttribute("position", new Float32BufferAttribute(hp, 3));
    g.setAttribute("color", new Float32BufferAttribute(hc, 3));
    fv.haloMesh.geometry.dispose();
    fv.haloMesh.geometry = g;
    fv.haloMesh.visible = hp.length > 0 && !this.lowQuality;
    fv.coneMesh.geometry.dispose();
    fv.coneMesh.geometry = cones.geometry();
    fv.coneMesh.visible = cones.count > 0;
  }

  /** Lit screens of a floor: a bright panel in the app colour and a faint glow around it. */
  private buildScreens(fv: FloorView): void {
    const items = fv.floor.furniture.filter((f) => this.screens.has(f.id));
    const sig = items.map((f) => `${f.id}:${f.x},${f.z},${f.rotation},${f.w},${f.d},${f.h}:${JSON.stringify(this.screens.get(f.id))}`).join(";");
    // pictures follow the screens even when only they changed
    if (sig === fv.screenSig && fv.screenMesh.geometry.getAttribute("position")) return this.updateScreenPictures(fv, items);
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
    this.updateScreenPictures(fv, items);
  }

  /** App icons or cover art on the screens, fitted into the screen with their own aspect ratio. */
  private updateScreenPictures(fv: FloorView, items: Furniture[]): void {
    const wanted = new Map(items.map((f) => [f.id, f]).filter(([id]) => !!this.screens.get(id as string)?.picture) as [string, Furniture][]);
    for (const [id, pic] of fv.screenPics) {
      if (wanted.has(id) && this.screens.get(id)!.picture === pic.url) continue;
      fv.group.remove(pic.mesh);
      pic.mesh.geometry.dispose();
      (pic.mesh.material as Material).dispose();
      pic.texture?.dispose();
      fv.screenPics.delete(id);
    }
    for (const [id, f] of wanted) {
      const st = this.screens.get(id)!;
      const r = screenRect(f);
      if (!r) continue;
      let pic = fv.screenPics.get(id);
      if (!pic) {
        const mesh = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ color: 0xffffff }));
        mesh.visible = false;
        mesh.renderOrder = 5;
        pic = { url: st.picture!, mesh, texture: null };
        fv.screenPics.set(id, pic);
        fv.group.add(mesh);
        const entry = pic;
        new TextureLoader().load(
          st.picture!,
          (tex) => {
            if (fv.screenPics.get(id) !== entry) {
              tex.dispose();
              return;
            }
            tex.colorSpace = SRGBColorSpace;
            entry.texture = tex;
            const mat = entry.mesh.material as MeshBasicMaterial;
            mat.map = tex;
            mat.needsUpdate = true;
            this.placeScreenPicture(entry.mesh, f, r, tex);
            entry.mesh.visible = true;
            this.invalidate();
          },
          undefined,
          // no picture (e.g. an expired token): the screen keeps its coloured glow
          () => undefined,
        );
      }
      (pic.mesh.material as MeshBasicMaterial).color.setScalar(0.45 + 0.55 * st.level);
      if (pic.texture) this.placeScreenPicture(pic.mesh, f, r, pic.texture);
    }
  }

  private placeScreenPicture(mesh: Mesh, f: Furniture, r: { x0: number; x1: number; y0: number; y1: number; z: number }, tex: Texture): void {
    const img = tex.image as { width?: number; height?: number } | undefined;
    const aspect = img?.width && img?.height ? img.width / img.height : 16 / 9;
    const sw = r.x1 - r.x0 - 0.04;
    const sh = r.y1 - r.y0 - 0.04;
    // contain: the whole picture is visible, letterboxed by the dark screen around it
    const w = Math.min(sw, sh * aspect);
    const h = w / aspect;
    const a = (f.rotation * Math.PI) / 180;
    const cx = (r.x0 + r.x1) / 2;
    const z = r.z + 0.008;
    mesh.scale.set(w, h, 1);
    mesh.rotation.set(0, -a, 0);
    mesh.position.set(f.x + cx * Math.cos(a) - z * Math.sin(a), (r.y0 + r.y1) / 2, f.z + cx * Math.sin(a) + z * Math.cos(a));
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
      const layers: [number, number][] = this.lowQuality
        ? [[CABLE_WIDTH * 1.4, 1]]
        : [
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
    fv.frameTris = parts.frameTris;
    fv.blindTris = parts.blindTris;
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
        const tint = this.roomTint?.get(r.roomId);
        // heatmap: a clear, saturated floor colour (the room light is dimmed meanwhile)
        if (tint) c.lerp(new Color(...tint).multiplyScalar(0.6), 0.9);
        if (r.roomId === this.roomId) c.lerp(ACTIVE_FLOOR, tint ? 0.3 : 0.75);
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
    if (this.floorId === null) this.houseRadius = radius;
    this.controls.flyTo({ target: center, radius, phi: 0.85, theta: -0.6 }, duration);
  }

  /** The ground grid lies under the lowest floor and reaches well beyond the building. */
  private placeGround(): void {
    const box = new Box3();
    let y = Infinity;
    for (const fv of this.floors) {
      y = Math.min(y, fv.floor.elevation + Math.min(0, fv.ty));
      for (const room of fv.floor.rooms) for (const [x, z] of room.points) box.expandByPoint(new Vector3(x, 0, z));
      for (const a of fv.floor.outdoor ?? []) for (const [x, z] of a.points) box.expandByPoint(new Vector3(x, 0, z));
    }
    this.ground.visible = !box.isEmpty() && !this.lowQuality && this.theme !== "day";
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

  /**
   * What lies under a screen point: a lamp, a linked piece of furniture or opening (their entity), or
   * a room. Walls are looked through (the ones in front are glass), furniture without an entity too.
   */
  private pick(x: number, y: number): { entity: string } | { floorId: string; roomId: string | null } | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new Vector2((x / rect.width) * 2 - 1, -(y / rect.height) * 2 + 1);
    const ray = new Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const floors = this.activeFloors();
    const meshes = floors.flatMap((f) => [f.lampMesh, f.framesMesh, f.blindsMesh, f.wallMesh, f.floorMesh].filter((m) => m.visible));
    const inRange = (list: { id: string; start: number; end: number }[], tri: number) => list.find((r) => tri >= r.start && tri < r.end)?.id;
    for (const hit of ray.intersectObjects(meshes, false)) {
      if (hit.faceIndex == null) continue;
      const tri = hit.faceIndex;
      const fv = floors.find((f) => f.group === hit.object.parent)!;
      if (hit.object === fv.lampMesh) {
        const id = inRange(fv.lampTris, tri);
        if (id) return { entity: id };
      } else if (hit.object === fv.framesMesh || hit.object === fv.blindsMesh) {
        const id = inRange(hit.object === fv.framesMesh ? fv.frameTris : fv.blindTris, tri);
        const entity = id ? this.pickOpenings.get(id) : undefined;
        if (entity) return { entity };
      } else if (hit.object === fv.wallMesh) {
        const id = inRange(fv.geo.furnitureTris, tri);
        const entity = id ? this.pickFurniture.get(id) : undefined;
        if (entity) return { entity };
      } else if (hit.object === fv.floorMesh) {
        return { floorId: fv.floor.id, roomId: inRange(fv.geo.roomTris.map((r) => ({ id: r.roomId, start: r.start, end: r.end })), tri) ?? null };
      }
    }
    return null;
  }

  private onTap(x: number, y: number): void {
    const hit = this.pick(x, y);
    if (hit && "entity" in hit) {
      this.flashes.set(hit.entity, performance.now() + FLASH_MS);
      this.invalidate();
      this.options.onDeviceTap?.(hit.entity);
      return;
    }
    this.options.onRoomTap?.(hit?.floorId ?? this.floorId ?? "", hit?.roomId ?? null);
  }

  /** Furniture item (or lamp) under a screen point, with the floor it is on. */
  private furnitureAt(x: number, y: number): { fv: FloorView; id: string } | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ray = new Raycaster();
    ray.setFromCamera(new Vector2((x / rect.width) * 2 - 1, -(y / rect.height) * 2 + 1), this.camera);
    const floors = this.activeFloors();
    const meshes = floors.flatMap((f) => [f.lampMesh, f.wallMesh].filter((m) => m.visible));
    for (const hit of ray.intersectObjects(meshes, false)) {
      if (hit.faceIndex == null) continue;
      const fv = floors.find((f) => f.group === hit.object.parent)!;
      const list = hit.object === fv.lampMesh ? fv.lampFurnTris : fv.geo.furnitureTris;
      const id = list.find((r) => hit.faceIndex! >= r.start && hit.faceIndex! < r.end)?.id;
      if (id) return { fv, id };
    }
    return null;
  }

  /** Point on a floor's plane under a screen point. */
  private floorPoint(fv: FloorView, x: number, y: number): [number, number] | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ray = new Raycaster();
    ray.setFromCamera(new Vector2((x / rect.width) * 2 - 1, -(y / rect.height) * 2 + 1), this.camera);
    const h = fv.floor.elevation + fv.y;
    const dir = ray.ray.direction;
    if (Math.abs(dir.y) < 1e-4) return null;
    const t = (h - ray.ray.origin.y) / dir.y;
    if (t <= 0) return null;
    return [ray.ray.origin.x + dir.x * t, ray.ray.origin.z + dir.z * t];
  }

  private grabFurniture(x: number, y: number): boolean {
    if (!this.furnish) return false;
    const hit = this.furnitureAt(x, y);
    if (!hit) {
      // a tap on empty space clears the selection, a drag still turns the view
      if (this.selectedFurniture) {
        this.selectFurniture(null);
        this.options.onFurnitureSelect?.(null);
      }
      return false;
    }
    const f = hit.fv.floor.furniture.find((m) => m.id === hit.id);
    const p = this.floorPoint(hit.fv, x, y);
    if (!f || !p) return false;
    this.grab = { floorId: hit.fv.floor.id, id: f.id, offset: [f.x - p[0], f.z - p[1]], x: f.x, z: f.z, moved: false };
    this.selectFurniture(f.id);
    this.options.onFurnitureSelect?.(f.id);
    return true;
  }

  private dragFurniture(x: number, y: number): void {
    const g = this.grab;
    const fv = g && this.floors.find((f) => f.floor.id === g.floorId);
    if (!g || !fv) return;
    const p = this.floorPoint(fv, x, y);
    if (!p) return;
    const grid = this.building?.settings.grid ?? 0.05;
    g.x = Math.round((p[0] + g.offset[0]) / grid) * grid;
    g.z = Math.round((p[1] + g.offset[1]) / grid) * grid;
    g.moved = true;
    this.updateGhost();
    this.invalidate();
  }

  private dropFurniture(): void {
    const g = this.grab;
    this.grab = null;
    if (g?.moved) this.options.onFurnitureMove?.(g.id, Math.round(g.x * 1000) / 1000, Math.round(g.z * 1000) / 1000);
    this.updateGhost();
  }

  /** Wireframe box around the selected item, at its drag position while it is dragged. */
  private updateGhost(): void {
    if (this.ghost) {
      this.ghost.geometry.dispose();
      (this.ghost.material as Material).dispose();
      this.scene.remove(this.ghost);
      this.ghost = null;
    }
    const id = this.selectedFurniture;
    const fv = id ? this.floors.find((f) => f.floor.furniture.some((m) => m.id === id)) : undefined;
    const f = fv?.floor.furniture.find((m) => m.id === id);
    if (!fv || !f) return;
    const x = this.grab?.id === f.id ? this.grab.x : f.x;
    const z = this.grab?.id === f.id ? this.grab.z : f.z;
    const H = fv.floor.height;
    const hanging = ["lamp_ceiling", "lamp_downlight", "lamp_spot", "lamp_panel", "lamp_pendant", "led_strip"].includes(f.type);
    const h = Math.max(0.1, f.type === "lamp_pendant" ? 0.3 : f.h);
    const y0 = hanging ? (f.type === "lamp_pendant" ? H - f.h - 0.1 : H - h) : f.type === "radiator" ? 0.12 : f.type === "kitchen_wall" ? 1.45 : 0;
    const a = (f.rotation * Math.PI) / 180;
    const c = Math.cos(a);
    const sn = Math.sin(a);
    const corner = (lx: number, lz: number, y: number) => [x + lx * c - lz * sn, y, z + lx * sn + lz * c];
    const lines = new LineBuffer();
    const pts = [
      [-f.w / 2, -f.d / 2],
      [f.w / 2, -f.d / 2],
      [f.w / 2, f.d / 2],
      [-f.w / 2, f.d / 2],
    ];
    const color = new Color(0.25, 0.9, 1);
    for (let i = 0; i < 4; i++) {
      const [ax, az] = pts[i];
      const [bx, bz] = pts[(i + 1) % 4];
      lines.seg(corner(ax, az, y0 + 0.01), corner(bx, bz, y0 + 0.01), color);
      lines.seg(corner(ax, az, y0 + h), corner(bx, bz, y0 + h), color);
      lines.seg(corner(ax, az, y0 + 0.01), corner(ax, az, y0 + h), color);
    }
    // the front edge a little brighter at floor level, so the direction is clear
    lines.seg(corner(-f.w / 2, f.d / 2 + 0.03, y0 + 0.02), corner(f.w / 2, f.d / 2 + 0.03, y0 + 0.02), new Color(1, 1, 1));
    this.ghost = new LineSegments(lines.geometry(), new LineBasicMaterial({ vertexColors: true, depthTest: false, transparent: true }));
    this.ghost.position.y = fv.floor.elevation + fv.y;
    this.ghost.renderOrder = 20;
    this.scene.add(this.ghost);
  }

  private onHold(x: number, y: number): void {
    const hit = this.pick(x, y);
    if (hit && "entity" in hit) this.options.onDeviceHold?.(hit.entity);
  }

  private render(now: number): void {
    this.frame = 0;
    if (this.disposed) return;
    const dt = this.lastFrame ? Math.min(100, now - this.lastFrame) : 16;
    const cameraMoving = this.controls.update(now);
    const floorsMoving = this.stepFloors(dt);
    const openingsMoving = this.stepOpenings(dt);
    let flashing = false;
    if (this.flashes.size) {
      for (const [id, until] of this.flashes) if (until <= now) this.flashes.delete(id);
      flashing = this.flashes.size > 0;
      for (const fv of this.floors) this.buildLamps(fv);
    }
    const roofMoving = this.placeRoof(dt);
    const moving = cameraMoving || floorsMoving || openingsMoving || flashing || roofMoving;
    this.lastFrame = moving ? now : 0;
    this.flowTime.value = this.flowSeconds();
    this.updateWalls();
    this.renderer.render(this.scene, this.camera);
    this.updateLabels();
    // the energy flow counts as motion here, so its frame rate shows too
    this.reportStats(now, moving || this.flowActive);
    if (moving) this.invalidate();
    const effects = this.devices.some((d) => d.effect && d.glow);
    if (effects && !this.effectTimer && !document.hidden) {
      // colour effects: a few steps per second are enough and keep the tablet idle in between
      this.effectTimer = setTimeout(() => {
        this.effectTimer = undefined;
        this.effectTime += EFFECT_MS / 1000;
        for (const fv of this.floors) {
          this.buildLamps(fv);
          this.buildGlow(fv);
        }
        this.invalidate();
      }, EFFECT_MS);
    }
    if (!moving && this.flowActive && !this.flowTimer) {
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
      if (!fv || house || fv.to < 0.99 || fv.o < 0.9 || d.pin === false) {
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

/** Soft round glow for the halos around lamps. */
function makeHaloTexture(): CanvasTexture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,0.9)");
  g.addColorStop(0.2, "rgba(255,255,255,0.45)");
  g.addColorStop(0.55, "rgba(255,255,255,0.1)");
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
