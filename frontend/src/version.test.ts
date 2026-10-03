import assert from "node:assert/strict";
import { test } from "node:test";
import { isNewer } from "./version.ts";

test("isNewer compares numeric parts", () => {
  assert.equal(isNewer("1.8.3", "1.8.2"), true);
  assert.equal(isNewer("1.10.0", "1.9.9"), true);
  assert.equal(isNewer("1.8.2", "1.8.3"), false);
  assert.equal(isNewer("1.8.3", "1.8.3"), false);
  assert.equal(isNewer("1.9", "1.8.9"), true);
});
