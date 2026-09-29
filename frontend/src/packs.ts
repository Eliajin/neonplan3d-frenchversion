// Furniture from imported packs (see custom_components/floorplan_3d/packs.py for the format). Pack
// furniture has the type "pack:<pack id>:<item id>". Every bundle (main, editor, 3D) keeps its own
// registry, filled with setPacks() from the packs the backend returns.

import { ELECTRIC_FURNITURE, FURNITURE_SIZE, surfaceHeight, type Floor, type Furniture } from "./model.ts";
import type { LampModel } from "./viewer/viewer3d.ts";

export interface PackPart {
  /** A box, a cylinder, or a loft: a box whose top face is another rectangle (sloped sides). */
  shape: "box" | "cyl" | "loft";
  /** Centre across and in depth (fractions -0.5..0.5 of the item's width and depth, front at +z). */
  x: number;
  z: number;
  /** Extent in fractions of the item's width and depth; a cylinder's diameter is the smaller one. */
  w: number;
  d: number;
  /** Bottom and height in fractions of the item's height. */
  y: number;
  h: number;
  /** "#rrggbb" or a palette role ("body", "fabric", "wood", …). */
  color: string;
  top?: string;
  /** Outline: true (soft blue), "glow" (cyan like the walls) or "faint". */
  edges?: boolean | "glow" | "faint";
  /** Lamps: shines in the colour and brightness of the linked light. */
  glow?: boolean;
  /** Loft: centre and extent of the top rectangle (defaults: the same as the bottom). */
  tx?: number;
  tz?: number;
  tw?: number;
  td?: number;
  /** Cylinder axis: upright (y, default) or lying along x or z (wheels, pipes, rollers). */
  axis?: "x" | "y" | "z";
}

export type PackSymbol =
  | { shape: "rect"; x: number; z: number; w: number; d: number; fill?: boolean }
  | { shape: "circle"; x: number; z: number; r: number }
  | { shape: "line"; x1: number; z1: number; x2: number; z2: number };

export interface PackItem {
  id: string;
  /** Names by language code. */
  name: Record<string, string>;
  /** Default width, depth, height (metres). */
  size: [number, number, number];
  electric?: boolean;
  /** On the floor, on the furniture below, on a wall (bottom at wall_y) or hanging from the ceiling. */
  mount?: "floor" | "surface" | "wall" | "ceiling";
  wall_y?: number;
  /** Its top carries other items. */
  surface?: boolean;
  /** A vehicle: offered for parking spots. */
  vehicle?: boolean;
  /** A lamp: how its light spreads. */
  light?: LampModel;
  parts: PackPart[];
  symbol?: PackSymbol[];
}

export interface FurniturePack {
  id: string;
  name: string;
  publisher: string;
  licensee: string | null;
  description?: string;
  items: PackItem[];
  imported_at?: number;
}

let registry: FurniturePack[] = [];
let items = new Map<string, PackItem>();
let version = 0;

export function setPacks(packs: FurniturePack[]): void {
  registry = packs;
  items = new Map(packs.flatMap((p) => p.items.map((it) => [packType(p.id, it.id), it] as const)));
  version++;
}

export function getPacks(): readonly FurniturePack[] {
  return registry;
}

/** Changes with every setPacks(), to notice new packs. */
export function packsVersion(): number {
  return version;
}

export function packType(packId: string, itemId: string): string {
  return `pack:${packId}:${itemId}`;
}

export function isPackType(type: string): boolean {
  return type.startsWith("pack:");
}

/** The pack item of a furniture type (undefined for built-in types and removed packs). */
export function packItem(type: string): PackItem | undefined {
  return isPackType(type) ? items.get(type) : undefined;
}

/** Default size of any furniture type. */
export function furnitureSize(type: string): [number, number, number] {
  return (FURNITURE_SIZE as Record<string, [number, number, number]>)[type] ?? packItem(type)?.size ?? [0.6, 0.6, 0.8];
}

/** Whether a type can be linked with entities (power sensor, switch …). */
export function isElectric(type: string): boolean {
  return ELECTRIC_FURNITURE.has(type) || !!packItem(type)?.electric;
}

/** Name of a pack item in a language (English, then the first name as fallback). */
export function packItemName(item: PackItem, language: string): string {
  const lang = language.split("-")[0];
  return item.name[lang] ?? item.name.en ?? Object.values(item.name)[0] ?? item.id;
}


/** Height of the bottom of a pack item above the floor (0 for built-in furniture). */
export function mountBase(floor: Floor, f: Pick<Furniture, "type" | "x" | "z" | "h">): number {
  const item = packItem(f.type);
  switch (item?.mount) {
    case "surface":
      return surfaceHeight(floor, f.x, f.z);
    case "wall":
      return item.wall_y ?? 1;
    case "ceiling":
      return Math.max(0, floor.height - f.h);
    default:
      return 0;
  }
}
