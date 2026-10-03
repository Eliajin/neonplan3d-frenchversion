import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building, type RoofSection, type SolarField } from "./model.ts";
import { bestFace, faceCompass, fieldModules, fieldPlan, proposeField, roofFaces } from "./solar.ts";

/** A 10 × 8 m house of one floor (walls 2.5 m high) with the given roof. */
function house(roof: Building["settings"]["roof"]): Building {
  const b = emptyBuilding();
  b.floors = [{ ...newFloor("eg", "EG", 0), height: 2.5, rooms: [{ id: "r", name: "R", area_id: null, points: [[0, 0], [10, 0], [10, 8], [0, 8]], floor_material: "wood" }] }];
  b.settings = { ...b.settings, wall_exterior: 0.24, roof };
  return b;
}

const near = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} ≠ ${b}`);

test("a gable roof has two faces with the roof's pitch, modules lie in the slope", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const faces = roofFaces(b);
  assert.deepEqual(faces.map((f) => f.key), ["main:a", "main:b"]);
  const f = faces[1];
  near(f.pitch, 35);
  // half the depth (8 m + 2 × 0.64 m) up the slope
  near(f.ls, (8 + 2 * 0.64) / 2 / Math.cos((35 * Math.PI) / 180));
  const field: SolarField = { id: "s", face: f.key, u: 1, v: 0.5, rows: 2, cols: 3, portrait: true };
  const mods = fieldModules(f, field);
  assert.equal(mods.length, 6);
  // every corner sits 7 cm above the slope: the slope's height grows by tan(35°) per metre towards the ridge
  for (const m of mods) {
    for (const p of m.corners) {
      const dz = Math.abs(p[2] - 4); // distance from the ridge line in the plan (z = 4)
      const roofY = 2.5 + (4.64 - dz) * Math.tan((35 * Math.PI) / 180);
      assert.ok(p[1] > roofY && p[1] - roofY < 0.1, `${p[1]} vs roof ${roofY}`);
    }
  }
});

test("modules that would leave the face are left out", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const f = roofFaces(b)[0];
  const mods = fieldModules(f, { id: "s", face: f.key, u: 0, v: 0, rows: 10, cols: 20, portrait: true });
  assert.ok(mods.length > 0 && mods.length < 200);
  for (const m of mods) for (const p of m.corners) assert.ok(p[0] >= -0.65 && p[0] <= 10.65);
});

test("a proposed field fits its face completely", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  for (const f of roofFaces(b)) {
    const field = proposeField(f, "s");
    assert.equal(fieldModules(f, field).length, field.rows * field.cols);
    assert.ok(field.cols >= 6);
  }
});

test("hip roof faces narrow towards the ridge", () => {
  const sec: RoofSection = { id: "h", x0: 0, z0: 0, x1: 10, z1: 8, shape: "hip", axis: "x", eave_a: 2.5, eave_b: 2.5, pitch_a: 30, pitch_b: 30, base: 2.5 };
  const b = house({ type: "custom", pitch: 30, overhang: 0.4, sections: [sec] });
  const [a] = roofFaces(b);
  assert.equal(a.key, "h:a");
  const [l0, r0] = a.span(0);
  const [l1, r1] = a.span(a.ls);
  near(l0, 0);
  near(r0, 10);
  near(l1, 4);
  near(r1, 6);
  const field = proposeField(a, "s");
  assert.equal(fieldModules(a, field).length, field.rows * field.cols);
});

test("on a flat roof the modules stand on tilted frames", () => {
  const b = house({ type: "flat", pitch: 0, overhang: 0.2 });
  const [f] = roofFaces(b);
  assert.ok(f.flat);
  const field = { ...proposeField(f, "s"), tilt: 20 };
  const [m] = fieldModules(f, field);
  // the upper edge is higher by the module height times sin(20°)
  near(m.corners[3][1] - m.corners[0][1], 1.72 * Math.sin((20 * Math.PI) / 180), 1e-9);
  assert.equal(m.posts.length, 4);
  // flipped: it leans the other way
  const [mf] = fieldModules(f, { ...field, flip: true });
  assert.ok(mf.corners[0][1] < mf.corners[3][1]);
  assert.notDeepEqual(mf.corners[0], m.corners[0]);
});

test("faces know their compass direction; the best face looks south", () => {
  const b = house({ type: "gable", pitch: 35, overhang: 0.4 });
  const faces = roofFaces(b);
  // north is up in the plan (-z): side a looks north, side b south
  assert.equal(faceCompass(faces[0], 0), "n");
  assert.equal(faceCompass(faces[1], 0), "s");
  assert.equal(bestFace(faces, 0)?.key, "main:b");
  // north pointing down the plan turns it round
  assert.equal(bestFace(faces, 180)?.key, "main:a");
  assert.equal(fieldPlan(faces[1], proposeField(faces[1], "s"))[0].length, 4);
});
