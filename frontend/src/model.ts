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

export interface Opening {
  id: string;
  room_id: string;
  edge: number;
  offset: number;
  width: number;
  type: "door" | "window";
  sill: number;
  height: number;
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

export interface Building {
  version: 1;
  floors: Floor[];
  settings: BuildingSettings;
}

export const FLOOR_MATERIALS = ["wood", "oak", "tiles", "carpet", "stone", "concrete"] as const;

export const DEFAULT_SETTINGS: BuildingSettings = { wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05 };

export function emptyBuilding(): Building {
  return { version: 1, floors: [], settings: { ...DEFAULT_SETTINGS } };
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

export function pointInPolygon(p: Vec2, points: readonly Vec2[]): boolean {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, zi] = points[i];
    const [xj, zj] = points[j];
    if (zi > p[1] !== zj > p[1] && p[0] < ((xj - xi) * (p[1] - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}
