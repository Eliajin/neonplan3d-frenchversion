// The roof: either one roof over the top floor (flat or gable, over the bounding box of its rooms plus
// the outer walls and the overhang), or roof sections (wings of an L- or T-shaped house, a barn with a
// catslide, a lean-to …) at their own heights. Drawn in the house view only; the viewer lifts and fades
// it out when the camera zooms in.

import { Color } from "three";
import type { Building, Floor, RoofSection } from "../model.ts";
import { sectionFrame, sectionOverhang, sectionProfile, type SectionOverhang } from "../roof-sections.ts";
import { DEG, GeoBuffer, LineBuffer, pushPrism, shade } from "./geo.ts";

const ROOF = 0x1a2338;
const ROOF_TOP = 0x222d48;
const GABLE = 0x141d31;
const RIDGE = shade(0x37e0ff, 0.9);
const EAVE = shade(0x5b7cff, 0.45);
const THICK = 0.14;
/** Canopy: see-through panels and a light frame of posts and beams. */
const GLASS = 0x8fd8ff;
const FRAME = 0xc9d3e6;
const FRAME_TOP = 0xe3e9f5;

/** Roof geometry that sits on a floor: y = 0 is `base` above the floor's own level. */
export interface RoofGeometry {
  floor: Floor;
  base: number;
  solid: GeoBuffer;
  lines: LineBuffer;
  /** See-through roof panels of canopies (drawn with their own, fainter material). */
  glass: GeoBuffer;
}

/** The floor the roof sits on: the highest one with rooms. */
export function roofFloor(b: Building): Floor | null {
  const withRooms = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3));
  return withRooms.sort((p, q) => q.elevation - p.elevation)[0] ?? null;
}

/** The roof, in parts per floor (each part moves with its floor when the floors are pulled apart). */
export function buildRoof(b: Building): RoofGeometry[] {
  const roof = b.settings.roof;
  if (roof?.type === "custom") return buildSections(b, roof.sections ?? [], roof.overhang);
  const one = buildSingleRoof(b);
  return one ? [one] : [];
}

/** One roof over the top floor, in floor coordinates with y = 0 at the top of the floor's walls. */
function buildSingleRoof(b: Building): RoofGeometry | null {
  const roof = b.settings.roof;
  const floor = roofFloor(b);
  if (!floor || !roof || roof.type === "none" || roof.type === "custom") return null;
  const xs = floor.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = floor.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const m = b.settings.wall_exterior + roof.overhang;
  const x0 = Math.min(...xs) - m;
  const x1 = Math.max(...xs) + m;
  const z0 = Math.min(...zs) - m;
  const z1 = Math.max(...zs) + m;
  const solid = new GeoBuffer();
  const lines = new LineBuffer();
  if (roof.type === "flat") {
    pushPrism(solid, [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], 0, 0.25, ROOF, ROOF_TOP, { bottom: true });
    const e = 0.252;
    for (const [a, c] of [
      [[x0, z0], [x1, z0]],
      [[x1, z0], [x1, z1]],
      [[x1, z1], [x0, z1]],
      [[x0, z1], [x0, z0]],
    ]) {
      lines.seg([a[0], e, a[1]], [c[0], e, c[1]], RIDGE);
      lines.seg([a[0], 0, a[1]], [c[0], 0, c[1]], EAVE);
    }
    return { floor, base: floor.height, solid, lines, glass: new GeoBuffer() };
  }
  // gable: the ridge runs along the longer side, or along the shorter one (terraced houses)
  const longX = x1 - x0 >= z1 - z0;
  const alongX = roof.ridge === "short" ? !longX : longX;
  const half = (alongX ? z1 - z0 : x1 - x0) / 2;
  const rise = half * Math.tan(roof.pitch * DEG);
  // coordinates: u along the ridge, v across (from -half to +half)
  const P = (u: number, v: number, y: number): number[] => (alongX ? [u, y, (z0 + z1) / 2 + v] : [(x0 + x1) / 2 + v, y, u]);
  const [u0, u1] = alongX ? [x0, x1] : [z0, z1];
  const top = new Color(ROOF_TOP);
  const under = new Color(ROOF);
  const quad = (a: number[], b2: number[], c: number[], d: number[], col: Color) => {
    solid.tri(a, b2, c, col);
    solid.tri(a, c, d, col);
  };
  for (const side of [-1, 1]) {
    // upper and lower face of the slope, and the eave and rake faces of its thickness
    quad(P(u0, side * half, 0), P(u1, side * half, 0), P(u1, 0, rise), P(u0, 0, rise), top);
    quad(P(u0, side * half, -THICK), P(u0, 0, rise - THICK), P(u1, 0, rise - THICK), P(u1, side * half, -THICK), under);
    quad(P(u0, side * half, -THICK), P(u1, side * half, -THICK), P(u1, side * half, 0), P(u0, side * half, 0), under);
    for (const u of [u0, u1]) quad(P(u, side * half, -THICK), P(u, side * half, 0), P(u, 0, rise), P(u, 0, rise - THICK), under);
    lines.seg(P(u0, side * half, 0), P(u1, side * half, 0), EAVE);
    for (const u of [u0, u1]) lines.seg(P(u, side * half, 0), P(u, 0, rise), EAVE);
  }
  // gable walls above the outer walls (set back by the overhang)
  const inset = roof.overhang;
  const g = new Color(GABLE);
  const hw = half - inset;
  const rw = hw * Math.tan(roof.pitch * DEG);
  for (const u of [u0 + inset, u1 - inset]) {
    solid.tri(P(u, -hw, -THICK), P(u, hw, -THICK), P(u, 0, rw - THICK), g);
    solid.tri(P(u, hw, -THICK), P(u, -hw, -THICK), P(u, 0, rw - THICK), g);
  }
  lines.seg(P(u0, 0, rise + 0.004), P(u1, 0, rise + 0.004), RIDGE);
  return { floor, base: floor.height, solid, lines, glass: new GeoBuffer() };
}

/** Roof sections, grouped by the floor whose wall tops are nearest below each section's base. */
function buildSections(b: Building, sections: readonly RoofSection[], overhang: number): RoofGeometry[] {
  const floors = b.floors.filter((f) => f.rooms.length > 0).sort((p, q) => p.elevation - q.elevation);
  if (!floors.length) return [];
  const parts = new Map<string, RoofGeometry>();
  for (const sec of sections) {
    if (Math.abs(sec.x1 - sec.x0) < 0.1 || Math.abs(sec.z1 - sec.z0) < 0.1) continue;
    // the floor the section sits on: the highest one that starts below its walls' top
    const floor = [...floors].reverse().find((f) => f.elevation < sec.base - 0.05) ?? floors[0];
    let part = parts.get(floor.id);
    if (!part) parts.set(floor.id, (part = { floor, base: 0, solid: new GeoBuffer(), lines: new LineBuffer(), glass: new GeoBuffer() }));
    pushSection(part.solid, part.lines, sec, sectionOverhang(b, sec, sec.overhang ?? overhang), floor.elevation, part.glass);
  }
  return [...parts.values()];
}

/**
 * One section: its slopes with their thickness and rim, the ridge (and hips), and the walls from the
 * section's base up under the roof (gable ends and knee walls). `yOff` is the level of its floor.
 */
export function pushSection(solid: GeoBuffer, lines: LineBuffer, s: RoofSection, overhang: SectionOverhang | number, yOff: number, glass: GeoBuffer = solid): void {
  const fr = sectionFrame(s);
  const pr = sectionProfile(s);
  const ov = typeof overhang === "number" ? { u0: overhang, u1: overhang, a: overhang, b: overhang } : overhang;
  const oa = Math.max(0, ov.a);
  const ob = Math.max(0, ov.b);
  const w = fr.w;
  const U0 = fr.u0 - Math.max(0, ov.u0);
  const U1 = fr.u1 + Math.max(0, ov.u1);
  const P = (u: number, v: number, y: number): number[] => {
    const [x, z] = fr.at(u, v);
    return [x, y - yOff, z];
  };
  const top = new Color(ROOF_TOP);
  const under = new Color(ROOF);
  const g = new Color(GABLE);
  const fan = (pts: number[][], col: Color) => {
    for (let i = 1; i + 1 < pts.length; i++) solid.tri(pts[0], pts[i], pts[i + 1], col);
  };
  // the roof planes: corners as (u, v) with the height from the profile, the ridge points at its height
  type Q = [number, number, number];
  const at = (u: number, v: number): Q => [u, v, pr.y(v)];
  let faces: Q[][];
  let rim: Q[];
  const ridges: [Q, Q][] = [];
  if (s.shape === "flat") {
    const y = s.eave_a;
    const poly = [fr.at(U0, -oa), fr.at(U1, -oa), fr.at(U1, w + ob), fr.at(U0, w + ob)];
    pushPrism(solid, poly, y - yOff, y - yOff + 0.25, ROOF, ROOF_TOP, { bottom: true });
    for (let i = 0; i < 4; i++) {
      const a = poly[i];
      const c = poly[(i + 1) % 4];
      lines.seg([a[0], y - yOff + 0.252, a[1]], [c[0], y - yOff + 0.252, c[1]], RIDGE);
      lines.seg([a[0], y - yOff, a[1]], [c[0], y - yOff, c[1]], EAVE);
    }
    faces = [];
    rim = [];
  } else if (s.shape === "pent") {
    const c = [at(U0, -oa), at(U1, -oa), at(U1, w + ob), at(U0, w + ob)];
    faces = [c];
    rim = c;
    ridges.push([c[2], c[3]]);
  } else if (s.shape === "hip") {
    // hips rise from the corners: the ridge is shorter by the run of the slopes at both ends
    const d = Math.min((fr.u1 - fr.u0) / 2, Math.min(pr.vr, w - pr.vr) || w / 2);
    const rs: Q = [fr.u0 + d, pr.vr, pr.rh];
    const re: Q = [fr.u1 - d, pr.vr, pr.rh];
    const a0 = at(U0, -oa);
    const a1 = at(U1, -oa);
    const b1 = at(U1, w + ob);
    const b0 = at(U0, w + ob);
    faces = [
      [a0, a1, re, rs],
      [rs, re, b1, b0],
      [b0, a0, rs],
      [a1, b1, re],
    ];
    rim = [a0, a1, b1, b0];
    ridges.push([rs, re], [a0, rs], [b0, rs], [a1, re], [b1, re]);
  } else {
    const r0: Q = [U0, pr.vr, pr.rh];
    const r1: Q = [U1, pr.vr, pr.rh];
    const a0 = at(U0, -oa);
    const a1 = at(U1, -oa);
    const b1 = at(U1, w + ob);
    const b0 = at(U0, w + ob);
    faces = [
      [a0, a1, r1, r0],
      [r0, r1, b1, b0],
    ];
    rim = [a0, a1, r1, b1, b0, r0];
    ridges.push([r0, r1]);
  }
  // a canopy has thin see-through panels; a closed roof its tiles with their thickness below
  const open = !!s.open;
  const pane = new Color(GLASS);
  for (const f of faces) {
    if (open) {
      for (let i = 1; i + 1 < f.length; i++) glass.tri(P(f[0][0], f[0][1], f[0][2]), P(f[i][0], f[i][1], f[i][2]), P(f[i + 1][0], f[i + 1][1], f[i + 1][2]), pane);
      continue;
    }
    fan(f.map(([u, v, y]) => P(u, v, y)), top);
    fan(f.map(([u, v, y]) => P(u, v, y - THICK)), under);
  }
  // the rim: eaves and rakes with the roof's thickness
  for (let i = 0; i < rim.length; i++) {
    const [ua, va, ya] = rim[i];
    const [ub, vb, yb] = rim[(i + 1) % rim.length];
    if (!open) fan([P(ua, va, ya), P(ub, vb, yb), P(ub, vb, yb - THICK), P(ua, va, ya - THICK)], under);
    lines.seg(P(ua, va, ya), P(ub, vb, yb), open ? RIDGE : EAVE);
  }
  if (open) {
    pushCanopyFrame(solid, lines, fr, pr, ov, P, yOff);
    return;
  }
  for (const [[ua, va, ya], [ub, vb, yb]] of ridges) lines.seg(P(ua, va, ya + 0.004), P(ub, vb, yb + 0.004), RIDGE);
  // walls up under the roof, from the section's base: the gable ends (not under a hip) …
  const base = s.base;
  if (s.shape === "gable" || s.shape === "pent") {
    const profile: [number, number][] = s.shape === "pent" ? [[0, pr.y(0)], [w, pr.y(w)]] : [[0, pr.y(0)], [pr.vr, pr.rh], [w, pr.y(w)]];
    const poly = above(profile, base - THICK);
    if (poly.length >= 3) for (const u of [fr.u0, fr.u1]) fan(poly.map(([v, y]) => P(u, v, y)), g);
  }
  // … and the knee walls along the eaves where the roof starts above the walls (a high back wall of a pent roof)
  if (s.shape !== "flat") {
    for (const v of [0, w]) {
      const y = pr.y(v) - THICK;
      if (y > base + 0.02) fan([P(fr.u0, v, base), P(fr.u1, v, base), P(fr.u1, v, y), P(fr.u0, v, y)], g);
    }
  } else if (s.eave_a > base + 0.02) {
    for (const [ua, va, ub, vb] of [[fr.u0, 0, fr.u1, 0], [fr.u1, 0, fr.u1, w], [fr.u1, w, fr.u0, w], [fr.u0, w, fr.u0, 0]])
      fan([P(ua, va, base), P(ub, vb, base), P(ub, vb, s.eave_a), P(ua, va, s.eave_a)], g);
  }
}

/**
 * Posts and beams of a canopy: a beam under each free edge of the roof, posts at its corners and at
 * most 3.5 m apart along the free sides; an edge against the house (no overhang) rests on the wall.
 */
function pushCanopyFrame(
  solid: GeoBuffer,
  lines: LineBuffer,
  fr: ReturnType<typeof sectionFrame>,
  pr: ReturnType<typeof sectionProfile>,
  ov: { u0: number; u1: number; a: number; b: number },
  P: (u: number, v: number, y: number) => number[],
  yOff: number,
): void {
  const w = fr.w;
  const POST = 0.12;
  const BEAM = 0.16;
  const freeA = ov.a > 0;
  const freeB = ov.b > 0;
  const freeU0 = ov.u0 > 0;
  const freeU1 = ov.u1 > 0;
  const box = (u0: number, u1: number, v0: number, v1: number, y0: number, y1: number) => {
    const poly = [fr.at(u0, v0), fr.at(u1, v0), fr.at(u1, v1), fr.at(u0, v1)];
    // the frame may be flipped: keep the outline counter-clockwise
    const area = (poly[1][0] - poly[0][0]) * (poly[2][1] - poly[0][1]) - (poly[2][0] - poly[0][0]) * (poly[1][1] - poly[0][1]);
    pushPrism(solid, area < 0 ? [...poly].reverse() : poly, y0 - yOff, y1 - yOff, FRAME, FRAME_TOP, { bottom: true });
  };
  const ground = yOff;
  // beams along the free long sides (a, b), under the roof at their height
  for (const [v, free] of [[0, freeA], [w, freeB]] as const) {
    if (!free) continue;
    const y = pr.y(v) - 0.03;
    const vv = v === 0 ? 0 : w - POST;
    box(fr.u0, fr.u1, vv, vv + POST, y - BEAM, y);
    lines.seg(P(fr.u0, v, y - BEAM), P(fr.u1, v, y - BEAM), EAVE);
  }
  // beams along the free ends (u0, u1), following the slope
  for (const [u, free] of [[fr.u0, freeU0], [fr.u1 - POST, freeU1]] as const) {
    if (!free) continue;
    for (let i = 0; i < 6; i++) {
      const v0 = (w * i) / 6;
      const v1 = (w * (i + 1)) / 6;
      const y = Math.min(pr.y(v0), pr.y(v1)) - 0.03;
      box(u, u + POST, v0, v1, y - BEAM, y);
    }
  }
  // posts: corners where both edges are free (a corner at the house wall rests on the wall), and
  // along a free long side at most 3.5 m apart
  const posts: [number, number][] = [];
  for (const [v, free] of [[0, freeA], [w - POST, freeB]] as const) {
    if (!free) continue;
    const span = fr.u1 - fr.u0 - POST;
    const n = Math.max(1, Math.ceil(span / 3.5));
    for (let i = 0; i <= n; i++) {
      const u = fr.u0 + (span * i) / n;
      if ((i === 0 && !freeU0) || (i === n && !freeU1)) continue;
      posts.push([u, v]);
    }
  }
  // a pent roof against the house with only its ends free still needs posts at its outer corners
  if (!freeA && !freeB) for (const u of [fr.u0, fr.u1 - POST]) if ((u === fr.u0 && freeU0) || (u !== fr.u0 && freeU1)) posts.push([u, w / 2 - POST / 2]);
  for (const [u, v] of posts) {
    const top = pr.y(v + POST / 2) - 0.03 - BEAM;
    box(u, u + POST, v, v + POST, ground, top);
  }
}

/** The part of a roof profile (points across, with heights) above a level, as a closed polygon. */
function above(profile: [number, number][], level: number): [number, number][] {
  const out: [number, number][] = [];
  for (let i = 0; i < profile.length; i++) {
    const [v, y] = profile[i];
    if (y >= level) out.push([v, y]);
    const next = profile[i + 1];
    if (next && (y - level) * (next[1] - level) < 0) {
      const t = (level - y) / (next[1] - y);
      out.push([v + (next[0] - v) * t, level]);
    }
  }
  if (out.length < 2) return [];
  // close along the level
  const first = out[0];
  const last = out[out.length - 1];
  if (last[1] > level) out.push([last[0], level]);
  if (first[1] > level) out.unshift([first[0], level]);
  return out;
}
