import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "./types.ts";
import { weatherActive, weatherEntity, weatherState } from "./weather.ts";

function hassWith(state: string, attributes: Record<string, unknown> = {}): HomeAssistant {
  return {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    areas: {},
    devices: {},
    entities: {},
    states: {
      "weather.zuhause": { entity_id: "weather.zuhause", state, attributes },
      "weather.arbeit": { entity_id: "weather.arbeit", state: "sunny", attributes: {} },
    },
  };
}

test("the preferred weather entity wins, otherwise the first one by id", () => {
  assert.equal(weatherEntity(hassWith("sunny")), "weather.arbeit");
  assert.equal(weatherEntity(hassWith("sunny"), "weather.zuhause"), "weather.zuhause");
  assert.equal(weatherEntity(hassWith("sunny"), "weather.missing"), "weather.arbeit");
});

test("conditions map to rain, snow, fog, cloud and lightning; attributes refine cloud and wind", () => {
  const pouring = weatherState(hassWith("pouring"), "weather.zuhause")!;
  assert.equal(pouring.rain, 1);
  assert.equal(pouring.cloud, 1);
  assert.equal(pouring.lightning, false);

  const storm = weatherState(hassWith("lightning-rainy", { cloud_coverage: 60, wind_speed: 10, wind_speed_unit: "m/s" }), "weather.zuhause")!;
  assert.equal(storm.lightning, true);
  assert.equal(storm.cloud, 0.6);
  assert.equal(storm.wind, 0.6);

  const snow = weatherState(hassWith("snowy"), "weather.zuhause")!;
  assert.equal(snow.snow, 0.8);
  assert.equal(snow.rain, 0);

  assert.equal(weatherState(hassWith("unavailable"), "weather.zuhause"), null);
  assert.equal(weatherState(hassWith("sunny"), null), null);
  assert.equal(weatherActive(weatherState(hassWith("sunny"), "weather.zuhause")), false);
  assert.equal(weatherActive(weatherState(hassWith("fog"), "weather.zuhause")), true);
});
