import assert from "node:assert/strict";
import { test } from "node:test";
import { hasFeature, unlockedFeatures } from "./features.ts";

test("features come from installed packs that list them; unknown names are ignored", () => {
  assert.deepEqual([...unlockedFeatures([])], []);
  const packs = [{ features: ["weather", "time_travel"] }, { features: undefined }, { features: ["camera_cockpit"] }];
  assert.deepEqual([...unlockedFeatures(packs)].sort(), ["camera_cockpit", "weather"]);
  assert.equal(hasFeature("screens", [{ features: ["screens"] }]), true);
  assert.equal(hasFeature("screens", [{ features: ["screens"] }]), true);
  assert.equal(hasFeature("weather", [{ features: ["weather"] }]), true);
  assert.equal(hasFeature("camera_cockpit", [{ features: ["weather"] }]), false);
});
