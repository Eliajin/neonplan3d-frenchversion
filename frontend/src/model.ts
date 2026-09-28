// Data model shared by editor, 3D view and backend (see custom_components/floorplan_3d/schema.py).
// Units are metres; x grows to the right, z grows downwards (as in the 2D editor).

export type Vec2 = [number, number];

export interface Room {
  id: string;
  name: string;
  area_id: string | null;
  points: Vec2[];
  floor_material: string;
}

/** Entity link of an opening: null = assigned automatically by area, "none" = no entity. */
export type EntityRef = string | null;

export interface Opening {
  id: string;
  room_id: string;
  /** Room edge the opening sits on (points[edge] -> points[edge + 1]). */
  edge: number;
  /** Distance of the opening's centre from points[edge] (metres). */
  offset: number;
  width: number;
  type: "door" | "window";
  /** Height of the bottom above the floor; 0 for doors and terrace doors. */
  sill: number;
  height: number;
  /** Window sash hinge as seen from the room. */
  hinge: "left" | "right";
  cover: EntityRef;
  contact: EntityRef;
  tilt: EntityRef;
}

export interface Furniture {
  id: string;
  type: string;
  x: number;
  z: number;
  rotation: number;
  w: number;
  d: number;
  h: number;
  variant: string | null;
}

export interface Placement {
  entity_id: string;
  x: number;
  z: number;
  y: number | null;
}

export interface Background {
  image_id: string;
  x: number;
  z: number;
  width: number;
  opacity: number;
}

export interface Floor {
  id: string;
  name: string;
  elevation: number;
  height: number;
  cut_height: number;
  rooms: Room[];
  openings: Opening[];
  furniture: Furniture[];
  placements: Placement[];
  background: Background | null;
}

export interface BuildingSettings {
  wall_exterior: number;
  wall_interior: number;
  grid: number;
}

/** Energy flow: meter position and power sensors (W). Grid positive = import, battery positive = discharging. */
export interface EnergySettings {
  meter: { floor_id: string; x: number; z: number } | null;
  grid: string | null;
  grid_invert: boolean;
  solar: string | null;
  battery: string | null;
  battery_invert: boolean;
  battery_soc: string | null;
  tariff: string | null;
}

/** A person and the sensor whose state names the room they are in (ESPresense, Bermuda, …). */
export interface PresenceLink {
  person: string;
  sensor: string | null;
}

export interface Building {
  version: 1;
  floors: Floor[];
  settings: BuildingSettings;
  energy: EnergySettings;
  presence: PresenceLink[];
}

export const DEFAULT_ENERGY: EnergySettings = {
  meter: null,
  grid: null,
  grid_invert: false,
  solar: null,
  battery: null,
  battery_invert: false,
  battery_soc: null,
  tariff: null,
};

export const FLOOR_MATERIALS = ["wood", "oak", "tiles", "carpet", "stone", "concrete"] as const;

export const DEFAULT_SETTINGS: BuildingSettings = { wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05 };

export function emptyBuilding(): Building {
  return { version: 1, floors: [], settings: { ...DEFAULT_SETTINGS }, energy: { ...DEFAULT_ENERGY }, presence: [] };
}

export function newFloor(id: string, name: string, elevation: number): Floor {
  return {
    id,
    name,
    elevation,
    height: 2.5,
    cut_height: 1.15,
    rooms: [],
    openings: [],
    furniture: [],
    placements: [],
    background: null,
  };
}

export const FURNITURE_TYPES = [
  "sofa",
  "armchair",
  "table",
  "chair",
  "bed",
  "nightstand",
  "wardrobe",
  "shelf",
  "kitchen",
  "fridge",
  "stove",
  "sink",
  "bathtub",
  "shower",
  "wc",
  "washbasin",
  "desk",
  "tv_board",
  "plant",
  "rug",
  "stairs",
] as const;

export type FurnitureType = (typeof FURNITURE_TYPES)[number];

/** Default size (width x, depth z, height) of new furniture in metres. */
export const FURNITURE_SIZE: Record<FurnitureType, [number, number, number]> = {
  sofa: [2.2, 0.9, 0.82],
  armchair: [0.85, 0.85, 0.8],
  table: [1.6, 0.9, 0.75],
  chair: [0.46, 0.5, 0.9],
  bed: [1.6, 2.05, 0.9],
  nightstand: [0.45, 0.4, 0.5],
  wardrobe: [1.8, 0.6, 2.1],
  shelf: [0.9, 0.35, 1.9],
  kitchen: [2.4, 0.62, 0.92],
  fridge: [0.6, 0.65, 1.8],
  stove: [0.6, 0.62, 0.92],
  sink: [0.9, 0.62, 0.92],
  bathtub: [1.7, 0.75, 0.58],
  shower: [0.9, 0.9, 2.0],
  wc: [0.38, 0.6, 0.8],
  washbasin: [0.6, 0.46, 0.85],
  desk: [1.4, 0.7, 0.75],
  tv_board: [1.8, 0.42, 0.5],
  plant: [0.45, 0.45, 1.1],
  rug: [2.0, 1.4, 0.01],
  stairs: [1.0, 3.2, 2.75],
};

export const OPENING_DEFAULTS = {
  door: { width: 0.9, sill: 0, height: 2.05 },
  window: { width: 1.2, sill: 0.9, height: 1.3 },
} as const;

/** Fill fields added in later versions so older saved buildings keep working. */
export function normalizeBuilding(b: Building): Building {
  b.energy = { ...DEFAULT_ENERGY, ...(b.energy ?? {}) };
  b.presence = b.presence ?? [];
  for (const f of b.floors) {
    f.openings = f.openings.map((o) => ({ ...o, hinge: o.hinge ?? "left", cover: o.cover ?? null, contact: o.contact ?? null, tilt: o.tilt ?? null }));
  }
  return b;
}

export function uid(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Signed area (positive = counter-clockwise in x/z maths orientation). */
export function signedArea(points: readonly Vec2[]): number {
  let a = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % points.length];
    a += x0 * z1 - x1 * z0;
  }
  return a / 2;
}

export function polygonArea(points: readonly Vec2[]): number {
  return Math.abs(signedArea(points));
}

/** Area-weighted centroid; falls back to the vertex average for degenerate polygons. */
export function centroid(points: readonly Vec2[]): Vec2 {
  const a = signedArea(points);
  if (Math.abs(a) < 1e-9) {
    const n = points.length || 1;
    return [points.reduce((s, p) => s + p[0], 0) / n, points.reduce((s, p) => s + p[1], 0) / n];
  }
  let cx = 0;
  let cz = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % points.length];
    const f = x0 * z1 - x1 * z0;
    cx += (x0 + x1) * f;
    cz += (z0 + z1) * f;
  }
  return [cx / (6 * a), cz / (6 * a)];
}

/** True when the polygon is an axis-aligned rectangle (so the editor can offer x/z/width/depth fields). */
export function isAxisRect(points: readonly Vec2[]): boolean {
  if (points.length !== 4) return false;
  for (let i = 0; i < 4; i++) {
    const [x0, z0] = points[i];
    const [x1, z1] = points[(i + 1) % 4];
    if (Math.abs(x0 - x1) > 1e-6 && Math.abs(z0 - z1) > 1e-6) return false;
  }
  return true;
}

export function bounds(points: readonly Vec2[]): { x0: number; z0: number; x1: number; z1: number } {
  let x0 = Infinity;
  let z0 = Infinity;
  let x1 = -Infinity;
  let z1 = -Infinity;
  for (const [x, z] of points) {
    x0 = Math.min(x0, x);
    z0 = Math.min(z0, z);
    x1 = Math.max(x1, x);
    z1 = Math.max(z1, z);
  }
  return { x0, z0, x1, z1 };
}

/** Corners of a furniture item in world x/z (rotated rectangle). */
export function furnitureFootprint(f: Furniture): Vec2[] {
  const a = (f.rotation * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  const hw = f.w / 2;
  const hd = f.d / 2;
  return [
    [-hw, -hd],
    [hw, -hd],
    [hw, hd],
    [-hw, hd],
  ].map(([x, z]) => [f.x + x * c - z * s, f.z + x * s + z * c] as Vec2);
}

export function pointInPolygon(p: Vec2, points: readonly Vec2[]): boolean {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, zi] = points[i];
    const [xj, zj] = points[j];
    if (zi > p[1] !== zj > p[1] && p[0] < ((xj - xi) * (p[1] - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}
