// Robot vacuums in 3D. Home Assistant tells the state (cleaning, returning, docked …) but usually
// not where the robot is, so while it cleans it drives lanes through the room its dock stands in,
// returns to the dock when it goes home and waits in front of the dock otherwise.

import { pointInPolygon, type Vec2 } from "../model.ts";

export type RobotMode = "cleaning" | "returning" | "docked" | "idle" | "error";

export interface RobotInfo {
  /** Furniture item (the dock). */
  id: string;
  floorId: string;
  /** Where the robot rests: in front of its dock, facing away from it (radians). */
  rest: Vec2;
  restHeading: number;
  mode: RobotMode;
  /** Outline of the room it cleans (null: circles near the dock). */
  room: Vec2[] | null;
}

/** Driving speed (m/s) and turning speed (rad/s). */
export const ROBOT_SPEED = 0.3;
export const ROBOT_TURN = 2.6;

/**
 * Lanes through a room, back and forth along its longer side, keeping `inset` from the walls. Each
 * lane takes the longest stretch that lies inside the outline.
 */
export function cleaningPath(room: Vec2[], lane = 0.32, inset = 0.22): Vec2[] {
  const xs = room.map((p) => p[0]);
  const zs = room.map((p) => p[1]);
  const x0 = Math.min(...xs);
  const x1 = Math.max(...xs);
  const z0 = Math.min(...zs);
  const z1 = Math.max(...zs);
  // lanes run along the longer side (fewer turns)
  const alongZ = z1 - z0 >= x1 - x0;
  const inside = (a: number, b: number) => {
    const p: Vec2 = alongZ ? [a, b] : [b, a];
    return [p, [p[0] + inset, p[1]], [p[0] - inset, p[1]], [p[0], p[1] + inset], [p[0], p[1] - inset]].every((q) => pointInPolygon(q as Vec2, room));
  };
  const [a0, a1, b0, b1] = alongZ ? [x0, x1, z0, z1] : [z0, z1, x0, x1];
  const out: Vec2[] = [];
  let forward = true;
  for (let a = a0 + inset; a <= a1 - inset + 1e-6; a += lane) {
    // the longest run of inside samples along this lane
    let best: [number, number] | null = null;
    let start: number | null = null;
    const step = 0.05;
    for (let b = b0; b <= b1 + 1e-6; b += step) {
      if (inside(a, b)) start ??= b;
      if ((!inside(a, b) || b + step > b1 + 1e-6) && start !== null) {
        const end = inside(a, b) ? b : b - step;
        if (!best || end - start > best[1] - best[0]) best = [start, end];
        start = null;
      }
    }
    if (!best || best[1] - best[0] < 0.2) continue;
    const [s, e] = forward ? best : [best[1], best[0]];
    out.push(alongZ ? [a, s] : [s, a], alongZ ? [a, e] : [e, a]);
    forward = !forward;
  }
  return out;
}

/** A small circle in front of the dock, for robots outside any room. */
export function circlePath(center: Vec2, radius = 0.7, n = 12): Vec2[] {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [center[0] + Math.cos(a) * radius, center[1] + Math.sin(a) * radius] as Vec2;
  });
}

/** Moving state of one robot. */
export interface RobotMotion {
  pos: Vec2;
  heading: number;
  path: Vec2[];
  next: number;
}

const wrap = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));

/**
 * Advance a robot by `dt` seconds: turn towards the next target, drive when facing it. Returns
 * whether it still moves.
 */
export function stepRobot(m: RobotMotion, info: RobotInfo, dt: number): boolean {
  let target: Vec2 | null = null;
  if (info.mode === "cleaning") {
    if (!m.path.length) return false;
    target = m.path[m.next % m.path.length];
  } else if (info.mode === "returning" || info.mode === "docked") {
    target = info.rest;
  } else return false;
  const dx = target[0] - m.pos[0];
  const dz = target[1] - m.pos[1];
  const dist = Math.hypot(dx, dz);
  if (dist < 0.02) {
    if (info.mode === "cleaning") {
      m.next = (m.next + 1) % m.path.length;
      return true;
    }
    // home: turn to face away from the dock
    const diff = wrap(info.restHeading - m.heading);
    if (Math.abs(diff) < 0.02) return false;
    m.heading += Math.sign(diff) * Math.min(Math.abs(diff), ROBOT_TURN * dt);
    return true;
  }
  // heading 0 faces +z; the robot turns on the spot before it drives
  const want = Math.atan2(dx, dz);
  const diff = wrap(want - m.heading);
  m.heading = wrap(m.heading + Math.sign(diff) * Math.min(Math.abs(diff), ROBOT_TURN * dt));
  if (Math.abs(diff) < 0.35) {
    const move = Math.min(dist, ROBOT_SPEED * dt);
    m.pos = [m.pos[0] + (dx / dist) * move, m.pos[1] + (dz / dist) * move];
  }
  return true;
}
