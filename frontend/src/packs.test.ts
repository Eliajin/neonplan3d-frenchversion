import assert from "node:assert/strict";
import { test } from "node:test";
import { furnitureSize, isElectric, packItem, packItemName, packType, setPacks, type FurniturePack } from "./packs.ts";

const pack: FurniturePack = {
  id: "demo.pack",
  name: "Demo",
  publisher: "Demo",
  licensee: null,
  items: [{ id: "tv", name: { de: "Fernseher groß", en: "Big TV" }, size: [2, 0.3, 1.2], electric: true, parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "dark" }] }],
};

test("pack furniture resolves by type, with size, name and power link", () => {
  setPacks([pack]);
  const type = packType("demo.pack", "tv");
  assert.equal(type, "pack:demo.pack:tv");
  assert.deepEqual(furnitureSize(type), [2, 0.3, 1.2]);
  assert.equal(isElectric(type), true);
  assert.equal(packItemName(packItem(type)!, "de-DE"), "Fernseher groß");
  assert.equal(packItemName(packItem(type)!, "fr"), "Big TV");
  // built-in types keep their sizes; a removed pack leaves a plain default box
  assert.equal(furnitureSize("sofa").length, 3);
  setPacks([]);
  assert.equal(packItem(type), undefined);
  assert.deepEqual(furnitureSize(type), [0.6, 0.6, 0.8]);
  assert.equal(isElectric(type), false);
});
