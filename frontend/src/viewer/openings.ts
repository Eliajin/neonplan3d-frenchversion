// Moving and state-dependent parts of doors and windows: fixed frames, sashes with glass (open or
// tilted from contact sensors), window sills, door frames, blind boxes and blind slats. They are
// rebuilt as merged geometry whenever a state changes (and during the short open/close animation),
// so all windows of a floor stay three draw calls: frames, glass and blinds.

import { Color, type BufferGeometry } from "three";
import type { OpeningInfo } from "./build.ts";
import { ALWAYS, GeoBuffer, shade } from "./geo.ts";

export interface OpeningState {
  /** 0 = closed, 1 = swung open. */
  open: number;
  /** 0 = closed, 1 = tilted. */
  tilt: number;
  /** Closed fraction of the blind (0 = up, 1 = down); null = no blind. */
  cover: number | null;
}

export const CLOSED: OpeningState = { open: 0, tilt: 0, cover: null };

const FRAME = 0x1f3052;
const FRAME_TOP = 0x2a4270;
const SASH = 0x22375f;
const SILL = 0x1c2a47;
const BLIND_BOX = 0x16223a;
const OPEN_WARM = 0xffb547;

const OPEN_ANGLE = 1.2;
const TILT_ANGLE = 0.2;

type Tf = (x: number, n: number, y: number) => number[];

/** Box in local coordinates (x along the opening, n towards the room, y up), all six faces. */
function box(buf: GeoBuffer, tf: Tf, x0: number, x1: number, n0: number, n1: number, y0: number, y1: number, side: Color, top: Color, fold: number): void {
  const v = (x: number, n: number, y: number) => tf(x, n, y);
  const quads: [number[], number[], number[], number[], Color][] = [
    [v(x0, n0, y1), v(x1, n0, y1), v(x1, n1, y1), v(x0, n1, y1), top],
    [v(x0, n0, y0), v(x1, n0, y0), v(x1, n1, y0), v(x0, n1, y0), shade(side.getHex(), 0.6)],
    [v(x0, n1, y0), v(x1, n1, y0), v(x1, n1, y1), v(x0, n1, y1), side],
    [v(x0, n0, y0), v(x1, n0, y0), v(x1, n0, y1), v(x0, n0, y1), shade(side.getHex(), 0.85)],
    [v(x0, n0, y0), v(x0, n1, y0), v(x0, n1, y1), v(x0, n0, y1), shade(side.getHex(), 0.92)],
    [v(x1, n0, y0), v(x1, n1, y0), v(x1, n1, y1), v(x1, n0, y1), shade(side.getHex(), 0.92)],
  ];
  for (const [a, b, c, d, col] of quads) {
    buf.tri(a, b, c, col, col, col, undefined, fold);
    buf.tri(a, c, d, col, col, col, undefined, fold);
  }
}

/** Box split at the cut height: the part above folds away with its wall. */
function splitBox(buf: GeoBuffer, tf: Tf, x0: number, x1: number, n0: number, n1: number, y0: number, y1: number, side: Color, top: Color, cut: number, bucket: number): void {
  if (y1 <= cut + 1e-6) return box(buf, tf, x0, x1, n0, n1, y0, y1, side, top, ALWAYS);
  if (y0 >= cut - 1e-6) return box(buf, tf, x0, x1, n0, n1, y0, y1, side, top, bucket);
  box(buf, tf, x0, x1, n0, n1, y0, cut, side, top, ALWAYS);
  box(buf, tf, x0, x1, n0, n1, cut, y1, side, top, bucket);
}

/** Flat quad in a local plane (for glass and slats), split at the cut height, with optional uvs. */
function panel(buf: GeoBuffer, tf: Tf, x0: number, x1: number, n: number, y0: number, y1: number, color: Color, cut: number, bucket: number, vScale = 0): void {
  const part = (ya: number, yb: number, fold: number) => {
    const uv = (y: number) => (vScale ? (y1 - y) / vScale : 0.5);
    const a = tf(x0, n, ya);
    const b = tf(x1, n, ya);
    const c = tf(x1, n, yb);
    const d = tf(x0, n, yb);
    buf.tri(a, b, c, color, color, color, [0, uv(ya), 1, uv(ya), 1, uv(yb)], fold);
    buf.tri(a, c, d, color, color, color, [0, uv(ya), 1, uv(yb), 0, uv(yb)], fold);
  };
  if (y1 <= cut + 1e-6) part(y0, y1, ALWAYS);
  else if (y0 >= cut - 1e-6) part(y0, y1, bucket);
  else {
    part(y0, cut, ALWAYS);
    part(cut, y1, bucket);
  }
}

export interface OpeningParts {
  frames: BufferGeometry;
  glass: BufferGeometry;
  blinds: BufferGeometry;
}

export function buildOpeningParts(infos: readonly OpeningInfo[], states: ReadonlyMap<string, OpeningState>, cut: number): OpeningParts {
  const frames = new GeoBuffer();
  const glass = new GeoBuffer();
  const blinds = new GeoBuffer(true);
  const frameC = new Color(FRAME);
  const frameTop = new Color(FRAME_TOP);
  for (const info of infos) {
    const st = states.get(info.opening.id) ?? CLOSED;
    const W = info.width;
    const { sill: S, top: T, bucket } = info;
    // local frame: x from the opening start along the wall, n from the wall axis towards the room
    const tf: Tf = (x, n, y) => [info.start[0] + info.axis[0] * x + info.toRoom[0] * n, y, info.start[1] + info.axis[1] * x + info.toRoom[1] * n];
    const mid = (info.faceRoom - info.faceOut) / 2;
    if (info.opening.type === "door") {
      // door frame (Zarge) around the opening, covering the reveal on both faces
      const n0 = -info.faceOut - 0.012;
      const n1 = info.faceRoom + 0.012;
      splitBox(frames, tf, -0.045, 0.02, n0, n1, 0, T + 0.045, frameC, frameTop, cut, bucket);
      splitBox(frames, tf, W - 0.02, W + 0.045, n0, n1, 0, T + 0.045, frameC, frameTop, cut, bucket);
      splitBox(frames, tf, 0.02, W - 0.02, n0, n1, T - 0.02, T + 0.045, frameC, frameTop, cut, bucket);
    } else {
      const fw = 0.06;
      const fd = 0.035;
      // fixed frame in the middle of the wall
      splitBox(frames, tf, 0, fw, mid - fd, mid + fd, S, T, frameC, frameTop, cut, bucket);
      splitBox(frames, tf, W - fw, W, mid - fd, mid + fd, S, T, frameC, frameTop, cut, bucket);
      splitBox(frames, tf, fw, W - fw, mid - fd, mid + fd, S, S + (S > 0.05 ? fw : 0.03), frameC, frameTop, cut, bucket);
      splitBox(frames, tf, fw, W - fw, mid - fd, mid + fd, T - fw, T, frameC, frameTop, cut, bucket);
      // window board inside and sill outside
      if (S > 0.3) {
        splitBox(frames, tf, -0.04, W + 0.04, mid + fd, info.faceRoom + 0.07, S - 0.03, S, new Color(SILL), frameTop, cut, bucket);
        if (info.exterior) splitBox(frames, tf, -0.03, W + 0.03, -info.faceOut - 0.06, mid - fd, S - 0.04, S - 0.02, new Color(SILL), frameTop, cut, bucket);
      }
      // sash: rotates into the room around the hinge, or tilts around its bottom edge
      const alert = st.open > 0.02 || st.tilt > 0.02;
      const sashC = alert ? shade(OPEN_WARM, 0.75) : new Color(SASH);
      const sashTop = alert ? shade(OPEN_WARM, 0.95) : frameTop;
      const sw = 0.055;
      const sx0 = fw;
      const sx1 = W - fw;
      const sy0 = S + (S > 0.05 ? fw : 0.03);
      const sy1 = T - fw;
      const sashW = sx1 - sx0;
      const n0 = mid + fd;
      const n1 = mid + fd + 0.06;
      const theta = st.open * OPEN_ANGLE;
      const phi = st.tilt * TILT_ANGLE;
      // sash coordinates: u from the hinge across the sash, n, y
      const sashTf: Tf = (u, n, y) => {
        const dy = y - sy0;
        let nn = n + dy * Math.sin(phi);
        const yy = sy0 + dy * Math.cos(phi);
        const along = u * Math.cos(theta) - (nn - n0) * Math.sin(theta);
        nn = n0 + (nn - n0) * Math.cos(theta) + u * Math.sin(theta);
        const x = info.hingeAtStart ? sx0 + along : sx1 - along;
        return tf(x, nn, yy);
      };
      // a sash that has swung into the room belongs to no wall: keep it visible
      const sashBucket = theta > 0.05 ? ALWAYS : bucket;
      splitBox(frames, sashTf, 0, sw, n0, n1, sy0, sy1, sashC, sashTop, cut, sashBucket);
      splitBox(frames, sashTf, sashW - sw, sashW, n0, n1, sy0, sy1, sashC, sashTop, cut, sashBucket);
      splitBox(frames, sashTf, sw, sashW - sw, n0, n1, sy0, sy0 + sw, sashC, sashTop, cut, sashBucket);
      splitBox(frames, sashTf, sw, sashW - sw, n0, n1, sy1 - sw, sy1, sashC, sashTop, cut, sashBucket);
      panel(glass, sashTf, sw, sashW - sw, (n0 + n1) / 2, sy0 + sw, sy1 - sw, alert ? shade(OPEN_WARM, 0.16) : shade(0x37e0ff, 0.08), cut, sashBucket);
    }
    // blind on the outside: box above the opening, slats down to the closed fraction
    if (st.cover !== null) {
      const out = -info.faceOut;
      const boxTop = T + 0.2;
      splitBox(frames, tf, -0.05, W + 0.05, out - 0.15, out, T, boxTop, new Color(BLIND_BOX), frameTop, cut, bucket);
      const closed = Math.min(1, Math.max(0, st.cover));
      if (closed > 0.01) {
        const bottom = T - closed * (T - S);
        panel(blinds, tf, 0, W, out - 0.07, bottom, T, new Color(0xffffff), cut, bucket, 0.045);
      }
    }
  }
  return { frames: frames.geometry(), glass: glass.geometry(), blinds: blinds.geometry() };
}
