// Builds merged, vertex-coloured geometry for one floor: slab with room floors, walls split into a
// lower part (always visible) and upper parts grouped by facing so walls in front of the camera can
// fold down to the cut height.

import { BufferGeometry, Color, Float32BufferAttribute, ShapeUtils, Vector2 } from "three";
import type { Floor, Vec2 } from "../model.ts";
import { generateWalls, type Wall } from "../geometry/walls.ts";

export const NEON = {
  floor: 0x0e1629,
  floorActive: 0x1a2a4d,
  slab: 0x0b1222,
  wall: 0x111a2c,
  wallTop: 0x1a2742,
  edge: 0x37e0ff,
  edgeSoft: 0x5b7cff,
};

export class GeoBuffer {
  p: number[] = [];
  c: number[] = [];
  /** Texture coordinates; only kept when the buffer is created with uvs = true. */
  uv: number[] | null;

  constructor(uvs = false) {
    this.uv = uvs ? [] : null;
  }

  tri(a: number[], b: number[], c: number[], ca: Color, cb: Color = ca, cc: Color = ca, uv?: number[]): void {
    this.p.push(...a, ...b, ...c);
    this.c.push(ca.r, ca.g, ca.b, cb.r, cb.g, cb.b, cc.r, cc.g, cc.b);
    // without explicit uvs, point into an empty spot of the grid texture
    this.uv?.push(...(uv ?? [0.25, 0.25, 0.25, 0.25, 0.25, 0.25]));
  }

  get count(): number {
    return this.p.length / 9;
  }

  geometry(): BufferGeometry {
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(this.p, 3));
    g.setAttribute("color", new Float32BufferAttribute(this.c, 3));
    if (this.uv) g.setAttribute("uv", new Float32BufferAttribute(this.uv, 2));
    g.computeBoundingSphere();
    return g;
  }
}

export class LineBuffer {
  p: number[] = [];

  seg(a: number[], b: number[]): void {
    this.p.push(...a, ...b);
  }

  geometry(): BufferGeometry {
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(this.p, 3));
    return g;
  }
}

/** Colour scaled by k with channels clamped to 1 (Color.multiplyScalar alone can overflow). */
export function shade(hex: number, k: number): Color {
  const c = new Color(hex).multiplyScalar(k);
  c.r = Math.min(1, c.r);
  c.g = Math.min(1, c.g);
  c.b = Math.min(1, c.b);
  return c;
}

function triangulate(poly: Vec2[]): number[][] {
  const contour = poly.map(([x, z]) => new Vector2(x, z));
  return ShapeUtils.triangulateShape(contour, []);
}

/** Vertical prism over a polygon; side colours fade darker towards the floor (baked occlusion). */
export function pushPrism(buf: GeoBuffer, poly: Vec2[], y0: number, y1: number, side: number, top: number, aoFrom = y0): void {
  const k = (y: number) => 0.55 + 0.45 * Math.min(1, Math.max(0, (y - aoFrom) / 1.4));
  const lo = shade(side, k(y0));
  const hi = shade(side, k(y1));
  const topC = new Color(top);
  for (const [i, j, l] of triangulate(poly)) {
    // polygon is counter-clockwise in (x, z); seen from above (+y) that is clockwise, so swap
    const a = poly[i];
    const b = poly[j];
    const c = poly[l];
    buf.tri([a[0], y1, a[1]], [c[0], y1, c[1]], [b[0], y1, b[1]], topC);
  }
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    buf.tri([a[0], y0, a[1]], [a[0], y1, a[1]], [b[0], y1, b[1]], lo, hi, hi);
    buf.tri([a[0], y0, a[1]], [b[0], y1, b[1]], [b[0], y0, b[1]], lo, hi, lo);
  }
}

export interface WallBucket {
  /** Outward horizontal direction (x, z) of the walls in this bucket; null for interior walls. */
  normal: Vec2 | null;
  upper: BufferGeometry;
  upperLines: BufferGeometry;
  cutLines: BufferGeometry;
}

export interface FloorGeometry {
  floor: BufferGeometry;
  /** Triangle ranges of room tops, for picking and highlighting. */
  roomTris: { roomId: string; start: number; end: number }[];
  lower: BufferGeometry;
  buckets: WallBucket[];
  walls: Wall[];
}

const SLAB = 0.2;
const BUCKETS = 8;

export function buildFloorGeometry(floor: Floor, wallExterior: number, wallInterior: number): FloorGeometry {
  const { walls } = generateWalls(floor.rooms, { exterior: wallExterior, interior: wallInterior });

  // room floors: top faces (pickable) plus slab sides and bottom
  const floorBuf = new GeoBuffer(true);
  const roomTris: FloorGeometry["roomTris"] = [];
  const top = new Color(NEON.floor);
  for (const room of floor.rooms) {
    if (room.points.length < 3) continue;
    const poly = ccw(room.points);
    const start = floorBuf.count;
    for (const [i, j, l] of triangulate(poly)) {
      const a = poly[i];
      const b = poly[j];
      const c = poly[l];
      floorBuf.tri([a[0], 0, a[1]], [c[0], 0, c[1]], [b[0], 0, b[1]], top, top, top, [a[0], a[1], c[0], c[1], b[0], b[1]]);
    }
    roomTris.push({ roomId: room.id, start, end: floorBuf.count });
    const slab = new Color(NEON.slab);
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % poly.length];
      floorBuf.tri([a[0], -SLAB, a[1]], [a[0], 0, a[1]], [b[0], 0, b[1]], slab);
      floorBuf.tri([a[0], -SLAB, a[1]], [b[0], 0, b[1]], [b[0], -SLAB, b[1]], slab);
    }
  }

  const cut = Math.min(floor.cut_height, floor.height);
  const lower = new GeoBuffer();
  const groups = new Map<string, { normal: Vec2 | null; walls: Wall[] }>();
  for (const wall of walls) {
    pushPrism(lower, wall.footprint, -SLAB, cut, NEON.wall, NEON.wallTop, 0);
    let key = "interior";
    let normal: Vec2 | null = null;
    if (wall.exterior) {
      const dx = wall.b[0] - wall.a[0];
      const dz = wall.b[1] - wall.a[1];
      const l = Math.hypot(dx, dz) || 1;
      const out: Vec2 = [dz / l, -dx / l]; // right normal: away from the room
      const sector = ((Math.round((Math.atan2(out[1], out[0]) / (2 * Math.PI)) * BUCKETS) % BUCKETS) + BUCKETS) % BUCKETS;
      key = `s${sector}`;
      const ang = (sector / BUCKETS) * 2 * Math.PI;
      normal = [Math.cos(ang), Math.sin(ang)];
    }
    let g = groups.get(key);
    if (!g) groups.set(key, (g = { normal, walls: [] }));
    g.walls.push(wall);
  }

  const buckets: WallBucket[] = [];
  const all = walls.map((w) => w.footprint);
  for (const g of groups.values()) {
    const upper = new GeoBuffer();
    const upperLines = new LineBuffer();
    const cutLines = new LineBuffer();
    const polys = g.walls.map((w) => w.footprint);
    for (const poly of polys) pushPrism(upper, poly, cut, floor.height, NEON.wall, NEON.wallTop, 0);
    // outlines leave out joints with other walls; computed against all walls so joints stay clean
    pushOutlineOf(upperLines, polys, all, floor.height);
    pushOutlineOf(cutLines, polys, all, cut);
    buckets.push({ normal: g.normal, upper: upper.geometry(), upperLines: upperLines.geometry(), cutLines: cutLines.geometry() });
  }

  return { floor: floorBuf.geometry(), roomTris, lower: lower.geometry(), buckets, walls };
}

/** Outline of `polys`, skipping edges that another polygon in `all` shares. */
function pushOutlineOf(lines: LineBuffer, polys: Vec2[][], all: Vec2[][], y: number): void {
  const r = (v: number) => Math.round(v * 1000);
  const key = (a: Vec2, b: Vec2) => {
    const s = `${r(a[0])},${r(a[1])}`;
    const t = `${r(b[0])},${r(b[1])}`;
    return s < t ? `${s}|${t}` : `${t}|${s}`;
  };
  const count = new Map<string, number>();
  for (const poly of all) {
    for (let i = 0; i < poly.length; i++) {
      const k = key(poly[i], poly[(i + 1) % poly.length]);
      count.set(k, (count.get(k) ?? 0) + 1);
    }
  }
  for (const poly of polys) {
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % poly.length];
      if (count.get(key(a, b)) === 1) lines.seg([a[0], y, a[1]], [b[0], y, b[1]]);
    }
  }
}

function ccw(points: Vec2[]): Vec2[] {
  let a = 0;
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const q = points[(i + 1) % points.length];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return a >= 0 ? points : [...points].reverse();
}
