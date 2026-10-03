// Solar fields on the roof: the roof faces a field can lie on, and the modules of a field in 3D and in the
// plan. Plain geometry without three.js, so the editor (plan) and the viewer (3D) share it.
//
// A face has a local frame: u runs along the eave (0 … lu), s up the slope from the eave (0 … ls, true
// length); on a flat roof s runs across, level. A field's u and v place its lower left corner on the face.

import type { Building, Floor, RoofSection, SolarField, Vec2 } from "./model.ts";
import { sectionFrame, sectionProfile } from "./roof-sections.ts";

const DEG = Math.PI / 180;
type V3 = [number, number, number];

/** Module size (a common 400 W module): width × height in portrait (m), and the gap between modules. */
export const MODULE_W = 1.13;
export const MODULE_H = 1.72;
export const MODULE_GAP = 0.025;
/** Height of the modules above the roof surface (mounting rails). */
const LIFT = 0.07;
/** Thickness of a flat roof slab (as drawn by the roof). */
const FLAT_SLAB = 0.25;

export interface RoofFace {
  /** "main:a" / "main:b" / "main:top" for the single roof, "<section id>:a" / ":b" / ":top" for sections. */
  key: string;
  /** Section the face belongs to (null: the single roof). */
  section: string | null;
  side: "a" | "b" | "top";
  flat: boolean;
  /** Eave corner (heights above the ground), unit vectors along the eave and up the slope, the normal. */
  o: V3;
  eu: V3;
  es: V3;
  n: V3;
  lu: number;
  ls: number;
  /** Slope in degrees (0 on a flat roof). */
  pitch: number;
  /** Usable range along the eave at a slope distance (hip roofs get narrower towards the ridge). */
  span(s: number): [number, number];
  /** Plan direction the face looks to (down the slope); for a flat roof the direction of +s. */
  facing: Vec2;
}

/** The floor the single roof sits on: the highest with rooms (as the roof itself). */
function topFloor(b: Building): Floor | null {
  const withRooms = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3));
  return withRooms.sort((p, q) => q.elevation - p.elevation)[0] ?? null;
}

/** All roof faces modules can lie on. */
export function roofFaces(b: Building): RoofFace[] {
  const roof = b.settings.roof;
  if (!roof || roof.type === "none") return [];
  if (roof.type === "custom") return (roof.sections ?? []).flatMap((s) => sectionFaces(s));
  const floor = topFloor(b);
  if (!floor) return [];
  const xs = floor.rooms.flatMap((r) => r.points.map((p) => p[0]));
  const zs = floor.rooms.flatMap((r) => r.points.map((p) => p[1]));
  const m = b.settings.wall_exterior + roof.overhang;
  const x0 = Math.min(...xs) - m;
  const x1 = Math.max(...xs) + m;
  const z0 = Math.min(...zs) - m;
  const z1 = Math.max(...zs) + m;
  const top = floor.elevation + floor.height;
  if (roof.type === "flat") return [flatFace("main", null, x0, z0, x1, z1, top + FLAT_SLAB)];
  // gable, as built by the roof: the ridge along the longer side (or the shorter one)
  const longX = x1 - x0 >= z1 - z0;
  const alongX = roof.ridge === "short" ? !longX : longX;
  const half = (alongX ? z1 - z0 : x1 - x0) / 2;
  const rise = half * Math.tan(roof.pitch * DEG);
  const P = (u: number, v: number, y: number): V3 => (alongX ? [u, top + y, (z0 + z1) / 2 + v] : [(x0 + x1) / 2 + v, top + y, u]);
  const [u0, u1] = alongX ? [x0, x1] : [z0, z1];
  return ([-1, 1] as const).map((side) => slopeFace(`main:${side < 0 ? "a" : "b"}`, null, side < 0 ? "a" : "b", P(u0, side * half, 0), P(u1, side * half, 0), P(u0, 0, rise), roof.pitch, () => [0, u1 - u0]));
}

function sectionFaces(s: RoofSection): RoofFace[] {
  const fr = sectionFrame(s);
  const pr = sectionProfile(s);
  const P = (u: number, v: number, y: number): V3 => {
    const [x, z] = fr.at(u, v);
    return [x, y, z];
  };
  const lu = fr.u1 - fr.u0;
  if (s.shape === "flat") {
    const a = fr.at(fr.u0, 0);
    const c = fr.at(fr.u1, fr.w);
    return [flatFace(s.id, s.id, Math.min(a[0], c[0]), Math.min(a[1], c[1]), Math.max(a[0], c[0]), Math.max(a[1], c[1]), s.eave_a + FLAT_SLAB)];
  }
  if (s.shape === "pent") return [slopeFace(`${s.id}:a`, s.id, "a", P(fr.u0, 0, pr.y(0)), P(fr.u1, 0, pr.y(0)), P(fr.u0, fr.w, pr.y(fr.w)), s.pitch_a, () => [0, lu])];
  const hip = s.shape === "hip";
  const d = hip ? Math.min(lu / 2, Math.min(pr.vr, fr.w - pr.vr) || fr.w / 2) : 0;
  const out: RoofFace[] = [];
  if (pr.vr > 0.3) {
    const len = Math.hypot(pr.vr, pr.rh - pr.y(0));
    // a hip slope narrows by d over its plan run vr: at slope distance s the inset is d * (s / len)
    out.push(slopeFace(`${s.id}:a`, s.id, "a", P(fr.u0, 0, pr.y(0)), P(fr.u1, 0, pr.y(0)), P(fr.u0, pr.vr, pr.rh), s.pitch_a, (t) => [d * (t / len), lu - d * (t / len)]));
  }
  if (fr.w - pr.vr > 0.3) {
    const len = Math.hypot(fr.w - pr.vr, pr.rh - pr.y(fr.w));
    // side b: the eave at v = w, running the other way so the face looks outwards
    out.push(slopeFace(`${s.id}:b`, s.id, "b", P(fr.u1, fr.w, pr.y(fr.w)), P(fr.u0, fr.w, pr.y(fr.w)), P(fr.u1, pr.vr, pr.rh), s.pitch_b, (t) => [d * (t / len), lu - d * (t / len)]));
  }
  return out;
}

function slopeFace(key: string, section: string | null, side: "a" | "b", o: V3, eaveEnd: V3, ridge: V3, pitch: number, span: (s: number) => [number, number]): RoofFace {
  const eu = unit(sub(eaveEnd, o));
  const es = unit(sub(ridge, o));
  let n = unit(cross(eu, es));
  if (n[1] < 0) n = [-n[0], -n[1], -n[2]];
  const down = unit([-es[0], 0, -es[2]]);
  return { key, section, side, flat: false, o, eu, es, n, lu: len(sub(eaveEnd, o)), ls: len(sub(ridge, o)), pitch, span, facing: [down[0], down[2]] };
}

function flatFace(id: string, section: string | null, x0: number, z0: number, x1: number, z1: number, y: number): RoofFace {
  // u along the longer side; s across, towards +z (or +x)
  const alongX = x1 - x0 >= z1 - z0;
  const lu = alongX ? x1 - x0 : z1 - z0;
  const ls = alongX ? z1 - z0 : x1 - x0;
  return {
    key: `${id}:top`,
    section,
    side: "top",
    flat: true,
    o: [x0, y, z0],
    eu: alongX ? [1, 0, 0] : [0, 0, 1],
    es: alongX ? [0, 0, 1] : [1, 0, 0],
    n: [0, 1, 0],
    lu,
    ls,
    pitch: 0,
    span: () => [0, lu],
    facing: alongX ? [0, 1] : [1, 0],
  };
}

/** One module: its four corners (lower left, lower right, upper right, upper left) and, on a flat roof, its stand. */
export interface SolarModule {
  corners: [V3, V3, V3, V3];
  /** Flat roofs: the feet of the raised upper edge (posts from the roof up to the module). */
  posts: [V3, V3][];
}

/** Size of a module along the eave and up the slope. */
export function moduleSize(f: Pick<SolarField, "portrait">): [number, number] {
  return f.portrait === false ? [MODULE_H, MODULE_W] : [MODULE_W, MODULE_H];
}

/** Rows a flat-roof field needs per row of modules (module depth plus the distance against shading). */
export function rowPitch(face: RoofFace, f: Pick<SolarField, "portrait" | "tilt">): number {
  const [, mh] = moduleSize(f);
  if (!face.flat) return mh + MODULE_GAP;
  const t = Math.min(45, Math.max(0, f.tilt ?? 15)) * DEG;
  return mh * Math.cos(t) + Math.max(0.3, 2 * mh * Math.sin(t));
}

/** The modules of a field on its face; modules that would leave the face (a hip, the ridge) are left out. */
export function fieldModules(face: RoofFace, f: SolarField): SolarModule[] {
  const [mw, mh] = moduleSize(f);
  const out: SolarModule[] = [];
  const t = face.flat ? Math.min(45, Math.max(0, f.tilt ?? 15)) * DEG : 0;
  const depth = mh * Math.cos(t);
  const pitch = rowPitch(face, f);
  const at = (u: number, s: number, up: number): V3 => [
    face.o[0] + face.eu[0] * u + face.es[0] * s + face.n[0] * up,
    face.o[1] + face.eu[1] * u + face.es[1] * s + face.n[1] * up,
    face.o[2] + face.eu[2] * u + face.es[2] * s + face.n[2] * up,
  ];
  const inside = (u: number, s: number) => {
    if (s < -1e-6 || s > face.ls + 1e-6) return false;
    const [a, b] = face.span(s);
    return u >= a - 1e-6 && u <= b + 1e-6;
  };
  for (let r = 0; r < Math.max(1, f.rows); r++) {
    for (let c = 0; c < Math.max(1, f.cols); c++) {
      const u0 = f.u + c * (mw + MODULE_GAP);
      const s0 = f.v + r * pitch;
      const u1 = u0 + mw;
      const s1 = s0 + (face.flat ? depth : mh);
      if (![[u0, s0], [u1, s0], [u1, s1], [u0, s1]].every(([u, s]) => inside(u, s))) continue;
      if (!face.flat) {
        out.push({ corners: [at(u0, s0, LIFT), at(u1, s0, LIFT), at(u1, s1, LIFT), at(u0, s1, LIFT)], posts: [] });
        continue;
      }
      // flat roof: the module leans up towards +s (or towards -s when flipped), on a low frame
      const lo = 0.15;
      const hi = lo + mh * Math.sin(t);
      const [sl, sh] = f.flip ? [s1, s0] : [s0, s1];
      const corners: [V3, V3, V3, V3] = [at(u0, sl, lo), at(u1, sl, lo), at(u1, sh, hi), at(u0, sh, hi)];
      out.push({ corners, posts: [u0 + 0.05, u1 - 0.05].flatMap((u) => [[at(u, sl, 0), at(u, sl, lo)], [at(u, sh, 0), at(u, sh, hi)]] as [V3, V3][]) });
    }
  }
  return out;
}

/** Corners of every module of a field in the plan (for the editor). */
export function fieldPlan(face: RoofFace, f: SolarField): Vec2[][] {
  return fieldModules(face, f).map((m) => m.corners.map((p) => [p[0], p[2]] as Vec2));
}

/** A field that fits: as many modules as fit the face, centred along the eave, starting a little above it. */
export function proposeField(face: RoofFace, id: string): SolarField {
  const f: SolarField = { id, face: face.key, u: 0, v: 0, rows: 1, cols: 1, portrait: true, tilt: face.flat ? 15 : null, flip: false, entity: null };
  const [mw] = moduleSize(f);
  const margin = 0.4;
  const pitch = rowPitch(face, f);
  const [a, b] = face.span(face.ls / 2);
  f.cols = Math.max(1, Math.floor((b - a - 2 * margin + MODULE_GAP) / (mw + MODULE_GAP)));
  f.rows = Math.max(1, Math.min(4, Math.floor((face.ls - 2 * margin) / pitch)));
  // hip faces narrow towards the ridge: fewer columns until every module fits
  while (f.cols > 1 && fieldModules(face, { ...f, u: center(face, f), v: margin }).length < f.rows * f.cols) f.cols--;
  f.u = center(face, f);
  f.v = margin;
  return f;
}

function center(face: RoofFace, f: SolarField): number {
  const [mw] = moduleSize(f);
  const width = f.cols * mw + (f.cols - 1) * MODULE_GAP;
  return Math.round(((face.lu - width) / 2) * 100) / 100;
}

/** Compass direction of a face (N, NE, E …) with the plan's north (degrees clockwise from up). */
export function faceCompass(face: RoofFace, north: number): "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw" {
  // bearing of the facing direction in the plan, clockwise from up (-z), then turned by north
  const bearing = (Math.atan2(face.facing[0], -face.facing[1]) / DEG - north + 720) % 360;
  return (["n", "ne", "e", "se", "s", "sw", "w", "nw"] as const)[Math.round(bearing / 45) % 8];
}

/** The face that suits a new field best: towards the south, the larger the better. */
export function bestFace(faces: readonly RoofFace[], north: number): RoofFace | null {
  const score = (f: RoofFace) => {
    if (f.flat) return f.lu * f.ls * 0.8;
    const bearing = (Math.atan2(f.facing[0], -f.facing[1]) / DEG - north + 720) % 360;
    const south = Math.cos((bearing - 180) * DEG);
    return f.lu * f.ls * (1.2 + south);
  };
  return [...faces].sort((p, q) => score(q) - score(p))[0] ?? null;
}

function sub(a: V3, b: V3): V3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function len(a: V3): number {
  return Math.hypot(a[0], a[1], a[2]);
}
function unit(a: V3): V3 {
  const l = len(a) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
}
function cross(a: V3, b: V3): V3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
