import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, normalizeBuilding, outdoorGround, spotGrid, surfaceHeight, type Furniture } from "./model.ts";

const item = (type: string, x: number, z: number, h: number, extra: Partial<Furniture> = {}): Furniture => ({
  id: `${type}_${x}`,
  type,
  x,
  z,
  rotation: 0,
  w: 1,
  d: 0.6,
  h,
  variant: null,
  ...extra,
});

test("lights placed as devices become lamps of their mount type", () => {
  const b = emptyBuilding();
  const floor = newFloor("eg", "EG", 0);
  floor.placements = [
    { entity_id: "light.decke", x: 1, z: 2, y: null, mount: null },
    { entity_id: "light.lese", x: 3, z: 1, y: null, mount: "floor" },
    { entity_id: "switch.tv", x: 2, z: 2, y: null },
  ];
  b.floors = [floor];
  const out = normalizeBuilding(b).floors[0];
  assert.deepEqual(
    out.placements.map((p) => p.entity_id),
    ["switch.tv"],
  );
  assert.deepEqual(
    out.furniture.map((f) => [f.type, f.entity, f.x, f.z]),
    [
      ["lamp_ceiling", "light.decke", 1, 2],
      ["lamp_floor", "light.lese", 3, 1],
    ],
  );
  // normalising again changes nothing
  assert.equal(normalizeBuilding(b).floors[0].furniture.length, 2);
});

test("a table lamp stands on the furniture below it", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.furniture = [item("nightstand", 1, 1, 0.5), item("table", 4, 1, 0.75), item("sofa", 7, 1, 0.8)];
  assert.equal(surfaceHeight(floor, 1.1, 1), 0.5);
  assert.equal(surfaceHeight(floor, 4, 1.2), 0.75);
  assert.equal(surfaceHeight(floor, 7, 1), 0, "no lamps on the sofa");
  assert.equal(surfaceHeight(floor, 10, 10), 0);
});

test("a spot grid spreads lamps evenly and leaves out cells outside an L-shaped room", () => {
  const square = { id: "r", name: "R", area_id: null, points: [[0, 0], [4, 0], [4, 2], [0, 2]] as [number, number][], floor_material: "wood" };
  assert.deepEqual(spotGrid(square, 1, 2), [
    [1, 1],
    [3, 1],
  ]);
  const l = { ...square, points: [[0, 0], [4, 0], [4, 2], [2, 2], [2, 4], [0, 4]] as [number, number][] };
  // 2 × 2 cells, the one at the bottom right lies outside the L
  assert.equal(spotGrid(l, 2, 2).length, 3);
});

test("outdoor lamps stand on the ground, or on a terrace", () => {
  const floor = newFloor("eg", "EG", 0);
  floor.outdoor = [{ id: "t", type: "terrace", points: [[0, 0], [4, 0], [4, 3], [0, 3]] }];
  assert.equal(outdoorGround(floor, 10, 10), -0.2);
  assert.ok(Math.abs(outdoorGround(floor, 2, 1) - (-0.2 + 0.12)) < 1e-9);
  assert.equal(outdoorGround({ ...newFloor("og", "OG", 2.75), outdoor: [] }, 1, 1), 0);
});
