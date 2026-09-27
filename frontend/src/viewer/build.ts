// Builds merged, vertex-coloured geometry for one floor: slab with room floors, walls split into a
// lower part (always visible) and upper parts grouped by facing so walls in front of the camera can
// fold down to the cut height. Edges carry vertex colours so bright top edges and faint corner lines
// share one draw call; wall shadows on the floor are baked into a multiply layer.

import { BufferGeometry, Color, Float32BufferAttribute, ShapeUtils, Vector2 } from "three";
import type { Floor, Room, Vec2 } from "../model.ts";
import { pointInPolygon } from "../model.ts";
import { generateWalls, type Wall } from "../geometry/walls.ts";

export const NEON = {
  floor: 0x0e1629,
  floorActive: 0x1a2a4d,
  slab: 0x0a1120,
  wall: 0x131d31,
  wallTop: 0x14303f,
  edge: 0x37e0ff,
  edgeSoft: 0x5b7cff,
};

/** Line colours are added on top of the scene, so they are pre-scaled to their intended strength. */
const EDGE_TOP = shade(NEON.edge, 0.95);
const EDGE_CUT = shade(NEON.edge, 1);
const EDGE_SOFT = shade(NEON.edgeSoft, 0.34);
const EDGE_BASE = shade(NEON.edgeSoft, 0.22);

/** Direction the fake light comes from (x, z); faces turned towards it are slightly brighter. */
const LIGHT: Vec2 = [-0.55, 0.83];

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
  c: number[] = [];

  seg(a: number[], b: number[], color: Color = EDGE_TOP): void {
    this.p.push(...a, ...b);
    this.c.push(color.r, color.g, color.b, color.r, color.g, color.b);
  }

  geometry(): BufferGeometry {
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(this.p, 3));
    g.setAttribute("color", new Float32BufferAttribute(this.c, 3));
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

/**
 * Vertical prism over a counter-clockwise polygon. Side colours fade darker towards the floor (baked
 * occlusion) and vary slightly with the direction the face points to, so neighbouring faces separate.
 */
export function pushPrism(buf: GeoBuffer, poly: Vec2[], y0: number, y1: number, side: number, top: number, aoFrom = y0): void {
  const k = (y: number) => 0.5 + 0.5 * Math.min(1, Math.max(0, (y - aoFrom) / 1.6));
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
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l = Math.hypot(dx, dz) || 1;
    const facing = ((dz / l) * LIGHT[0] - (dx / l) * LIGHT[1] + 1) / 2;
    const dir = 0.8 + 0.28 * facing;
    const lo = shade(side, k(y0) * dir);
    const hi = shade(side, k(y1) * dir);
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
  /** Faint base outline and corner lines of the lower wall part. */
  lowerLines: BufferGeometry;
  /** Multiply layer darkening the floor along the walls (baked occlusion). */
  shadow: BufferGeometry;
  buckets: WallBucket[];
  walls: Wall[];
}

export const SLAB = 0.2;
const BUCKETS = 8;
const SHADOW_WIDTH = 0.42;
const SHADOW_DARK = 0.42;

export function buildFloorGeometry(floor: Floor, wallExterior: number, wallInterior: number): FloorGeometry {
  const { walls } = generateWalls(floor.rooms, { exterior: wallExterior, interior: wallInterior });

  // room floors: top faces (pickable) plus slab sides
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

  const all = walls.map((w) => w.footprint);
  const points = all.flat();
  const outline = outlineOf(all, points);

  const lowerLines = new LineBuffer();
  for (const [a, b] of outline.edges) lowerLines.seg([a[0], 0.004, a[1]], [b[0], 0.004, b[1]], EDGE_BASE);
  for (const v of outline.corners) lowerLines.seg([v[0], 0.004, v[1]], [v[0], cut, v[1]], EDGE_SOFT);

  const buckets: WallBucket[] = [];
  for (const g of groups.values()) {
    const upper = new GeoBuffer();
    const upperLines = new LineBuffer();
    const cutLines = new LineBuffer();
    const polys = g.walls.map((w) => w.footprint);
    for (const poly of polys) pushPrism(upper, poly, cut, floor.height, NEON.wall, NEON.wallTop, 0);
    // outlines leave out joints with other walls; computed against all walls so joints stay clean
    const own = outlineOf(polys, points, outline);
    for (const [a, b] of own.edges) {
      upperLines.seg([a[0], floor.height, a[1]], [b[0], floor.height, b[1]], EDGE_TOP);
      cutLines.seg([a[0], cut, a[1]], [b[0], cut, b[1]], EDGE_CUT);
    }
    for (const v of own.corners) upperLines.seg([v[0], cut, v[1]], [v[0], floor.height, v[1]], EDGE_SOFT);
    buckets.push({ normal: g.normal, upper: upper.geometry(), upperLines: upperLines.geometry(), cutLines: cutLines.geometry() });
  }

  return {
    floor: floorBuf.geometry(),
    roomTris,
    lower: lower.geometry(),
    lowerLines: lowerLines.geometry(),
    shadow: buildShadow(outline.edges, floor.rooms).geometry(),
    buckets,
    walls,
  };
}

interface Outline {
  /** Edges of the merged wall footprints (joints between walls left out), counter-clockwise per wall. */
  edges: [Vec2, Vec2][];
  /** Vertices where the outline turns a corner. */
  corners: Vec2[];
}

const r3 = (v: number) => Math.round(v * 1000);
const vkey = (p: Vec2) => `${r3(p[0])},${r3(p[1])}`;
const ekey = (a: Vec2, b: Vec2) => {
  const s = vkey(a);
  const t = vkey(b);
  return s < t ? `${s}|${t}` : `${t}|${s}`;
};

/** Edges of a polygon, split wherever one of `points` lies on them (so T-joints line up). */
function splitEdges(poly: Vec2[], points: Vec2[]): [Vec2, Vec2][] {
  const out: [Vec2, Vec2][] = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l2 = dx * dx + dz * dz;
    if (l2 < 1e-8) continue;
    const cuts: number[] = [];
    for (const p of points) {
      const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2;
      if (t <= 1e-6 || t >= 1 - 1e-6) continue;
      const off = Math.abs((p[0] - a[0]) * dz - (p[1] - a[1]) * dx) / Math.sqrt(l2);
      if (off < 1e-4) cuts.push(t);
    }
    cuts.sort((p, q) => p - q);
    let prev = a;
    for (const t of cuts) {
      const q: Vec2 = [a[0] + dx * t, a[1] + dz * t];
      if (vkey(q) !== vkey(prev)) out.push([prev, q]);
      prev = q;
    }
    out.push([prev, b]);
  }
  return out;
}

/**
 * Outline of `polys`: edges no other polygon shares, and the vertices where those edges change
 * direction. Edges are split at `points` first, so an edge partly covered by another wall (T-joint)
 * keeps only its free part. With `whole` given, only edges and corners that are part of that outline
 * are kept, so a subset of walls gets the same clean joints as the full set.
 */
function outlineOf(polys: Vec2[][], points: Vec2[], whole?: Outline): Outline {
  const pieces = polys.map((poly) => splitEdges(poly, points));
  const count = new Map<string, number>();
  for (const [a, b] of pieces.flat()) {
    const k = ekey(a, b);
    count.set(k, (count.get(k) ?? 0) + 1);
  }
  const allowed = whole ? new Set(whole.edges.map(([a, b]) => ekey(a, b))) : null;
  const edges: [Vec2, Vec2][] = [];
  const dirs = new Map<string, { p: Vec2; d: Vec2[] }>();
  const addDir = (p: Vec2, d: Vec2) => {
    const k = vkey(p);
    let e = dirs.get(k);
    if (!e) dirs.set(k, (e = { p, d: [] }));
    e.d.push(d);
  };
  for (const [a, b] of pieces.flat()) {
    const k = ekey(a, b);
    if (count.get(k) !== 1 || (allowed && !allowed.has(k))) continue;
    const l = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (l < 1e-4) continue;
    edges.push([a, b]);
    const d: Vec2 = [(b[0] - a[0]) / l, (b[1] - a[1]) / l];
    addDir(a, d);
    addDir(b, d);
  }
  const corners: Vec2[] = [];
  for (const { p, d } of dirs.values()) {
    // a vertex where the outline just continues straight (e.g. a T-joint seen from outside) is no corner
    if (d.some((u) => d.some((v) => Math.abs(u[0] * v[1] - u[1] * v[0]) > 0.05))) corners.push(p);
  }
  const wholeCorners = whole ? new Set(whole.corners.map(vkey)) : null;
  return { edges, corners: wholeCorners ? corners.filter((p) => wholeCorners.has(vkey(p))) : corners };
}

/** Strips on the floor along every wall face that borders a room, dark at the wall and fading out. */
function buildShadow(edges: [Vec2, Vec2][], rooms: readonly Room[]): GeoBuffer {
  const buf = new GeoBuffer();
  const dark = new Color(SHADOW_DARK, SHADOW_DARK, SHADOW_DARK);
  const clear = new Color(1, 1, 1);
  const y = 0.002;
  for (const [a, b] of edges) {
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l = Math.hypot(dx, dz);
    if (l < 0.05) continue;
    // footprints are counter-clockwise, so the right normal points away from the wall
    const n: Vec2 = [dz / l, -dx / l];
    const probe: Vec2 = [(a[0] + b[0]) / 2 + n[0] * 0.05, (a[1] + b[1]) / 2 + n[1] * 0.05];
    if (!rooms.some((r) => r.points.length >= 3 && pointInPolygon(probe, r.points))) continue;
    const a2: Vec2 = [a[0] + n[0] * SHADOW_WIDTH, a[1] + n[1] * SHADOW_WIDTH];
    const b2: Vec2 = [b[0] + n[0] * SHADOW_WIDTH, b[1] + n[1] * SHADOW_WIDTH];
    // the layer is drawn double-sided, so the winding does not matter
    buf.tri([a[0], y, a[1]], [a2[0], y, a2[1]], [b2[0], y, b2[1]], dark, clear, clear);
    buf.tri([a[0], y, a[1]], [b2[0], y, b2[1]], [b[0], y, b[1]], dark, clear, dark);
  }
  return buf;
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
