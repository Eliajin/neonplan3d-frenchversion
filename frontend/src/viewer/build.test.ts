import assert from "node:assert/strict";
import { test } from "node:test";
import type { BufferGeometry } from "three";
import type { Floor, Room } from "../model.ts";
import { newFloor } from "../model.ts";
import { buildFloorGeometry } from "./build.ts";

const EXT = 0.24;
const INT = 0.12;

function rect(id: string, x0: number, z0: number, x1: number, z1: number): Room {
  return { id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" };
}

function floorWith(...rooms: Room[]): Floor {
  return { ...newFloor("f", "Floor", 0), rooms };
}

const near = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);

/** Line segments as [x0, y0, z0, x1, y1, z1]. */
function segments(g: BufferGeometry): number[][] {
  const p = g.getAttribute("position");
  const out: number[][] = [];
  for (let i = 0; i < p.count; i += 2) out.push([p.getX(i), p.getY(i), p.getZ(i), p.getX(i + 1), p.getY(i + 1), p.getZ(i + 1)]);
  return out;
}

const vertical = (s: number[]) => Math.abs(s[0] - s[3]) < 1e-9 && Math.abs(s[2] - s[5]) < 1e-9;

/** Total area of a triangle soup in the x/z plane. */
function area(g: BufferGeometry): number {
  const p = g.getAttribute("position");
  let sum = 0;
  for (let i = 0; i < p.count; i += 3) {
    const ax = p.getX(i);
    const az = p.getZ(i);
    sum += Math.abs((p.getX(i + 1) - ax) * (p.getZ(i + 2) - az) - (p.getX(i + 2) - ax) * (p.getZ(i + 1) - az)) / 2;
  }
  return sum;
}

test("a single room has corner lines at its four inner and four outer corners", () => {
  const geo = buildFloorGeometry(floorWith(rect("a", 0, 0, 4, 3)), EXT, INT);
  const segs = segments(geo.lowerLines);
  const corners = segs.filter(vertical);
  assert.equal(corners.length, 8);
  // the base outline runs along both faces of the wall ring, without the mitre joints
  assert.equal(segs.length - corners.length, 8);
});

test("a straight outer face across a T-joint gets no corner line", () => {
  const geo = buildFloorGeometry(floorWith(rect("a", 0, 0, 4, 3), rect("b", 4, 0, 7, 3)), EXT, INT);
  const corners = segments(geo.lowerLines).filter(vertical);
  // 4 outer corners + 4 inner corners per room; the interior wall meets the outer walls in T-joints
  assert.equal(corners.length, 12);
  assert.ok(!corners.some((s) => Math.abs(s[0] - 4) < 1e-6 && (Math.abs(s[2] + EXT) < 1e-6 || Math.abs(s[2] - 3 - EXT) < 1e-6)));
});

test("baked wall shadows cover every wall face inside a room and nothing outside", () => {
  const geo = buildFloorGeometry(floorWith(rect("a", 0, 0, 4, 3), rect("b", 4, 0, 7, 3)), EXT, INT);
  const half = INT / 2;
  const lengthA = 2 * (4 - half) + 3 + 3;
  const lengthB = 2 * (3 - half) + 3 + 3;
  near(area(geo.shadow), (lengthA + lengthB) * 0.42, 1e-4);
});

test("upper wall buckets split exterior walls by facing and keep interior walls together", () => {
  const geo = buildFloorGeometry(floorWith(rect("a", 0, 0, 4, 3), rect("b", 4, 0, 7, 3)), EXT, INT);
  const exterior = geo.buckets.filter((b) => b.normal);
  assert.equal(exterior.length, 4);
  assert.equal(geo.buckets.length, 5);
  // top edges of each bucket sit at the full wall height
  for (const b of geo.buckets) assert.ok(segments(b.upperLines).some((s) => !vertical(s) && Math.abs(s[1] - 2.5) < 1e-9));
});
