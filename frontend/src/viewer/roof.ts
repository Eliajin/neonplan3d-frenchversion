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

/** Roof geometry that sits on a floor: y = 0 is `base` above the floor's own level. */
export interface RoofGeometry {
  floor: Floor;
  base: number;
  solid: GeoBuffer;
  lines: LineBuffer;
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
    return { floor, base: floor.height, solid, lines };
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
  return { floor, base: floor.height, solid, lines };
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
    if (!part) parts.set(floor.id, (part = { floor, base: 0, solid: new GeoBuffer(), lines: new LineBuffer() }));
    pushSection(part.solid, part.lines, sec, sectionOverhang(b, sec, sec.overhang ?? overhang), floor.elevation);
  }
  return [...parts.values()];
}

/**
 * One section: its slopes with their thickness and rim, the ridge (and hips), and the walls from the
 * section's base up under the roof (gable ends and knee walls). `yOff` is the level of its floor.
 */
export function pushSection(solid: GeoBuffer, lines: LineBuffer, s: RoofSection, overhang: SectionOverhang | number, yOff: number): void {
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
  for (const f of faces) {
    fan(f.map(([u, v, y]) => P(u, v, y)), top);
    fan(f.map(([u, v, y]) => P(u, v, y - THICK)), under);
  }
  // the rim: eaves and rakes with the roof's thickness
  for (let i = 0; i < rim.length; i++) {
    const [ua, va, ya] = rim[i];
    const [ub, vb, yb] = rim[(i + 1) % rim.length];
    fan([P(ua, va, ya), P(ub, vb, yb), P(ub, vb, yb - THICK), P(ua, va, ya - THICK)], under);
    lines.seg(P(ua, va, ya), P(ub, vb, yb), EAVE);
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
