import assert from "node:assert/strict";
import { test } from "node:test";
import { appColor, areaEntities, autoPlace, entityName, furnitureEntities, groupByDevice, isActive, kindOf, lightGlow, openingEntities, openingState, primaryEntities, roomPanelEntities, windowPosition } from "./devices.ts";
import type { Floor, Opening, Room } from "./model.ts";
import { centroid, newFloor, pointInPolygon } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

function hassWith(): HomeAssistant {
  const st = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes });
  return {
    language: "de",
    connection: {} as HomeAssistant["connection"],
    callWS: async () => undefined as never,
    callService: async () => undefined,
    areas: { wohnen: { area_id: "wohnen", name: "Wohnzimmer" } },
    devices: { d1: { id: "d1", area_id: "wohnen" } },
    entities: {
      "light.decke": { entity_id: "light.decke", area_id: "wohnen" },
      "light.stehlampe": { entity_id: "light.stehlampe", device_id: "d1" },
      "switch.versteckt": { entity_id: "switch.versteckt", area_id: "wohnen", hidden: true },
      "switch.firmware": { entity_id: "switch.firmware", area_id: "wohnen", entity_category: "config" },
      "sensor.temp": { entity_id: "sensor.temp", area_id: "wohnen" },
      "sensor.signal": { entity_id: "sensor.signal", area_id: "wohnen" },
      "cover.rollo": { entity_id: "cover.rollo", area_id: "wohnen" },
      "light.kueche": { entity_id: "light.kueche", area_id: "kueche" },
      "update.x": { entity_id: "update.x", area_id: "wohnen" },
    },
    states: {
      "light.decke": st("light.decke", "on", { friendly_name: "Wohnzimmer Decke", brightness: 128, color_mode: "color_temp", color_temp_kelvin: 2700 }),
      "light.stehlampe": st("light.stehlampe", "off", { friendly_name: "Stehlampe" }),
      "switch.versteckt": st("switch.versteckt", "on"),
      "switch.firmware": st("switch.firmware", "on"),
      "sensor.temp": st("sensor.temp", "21.5", { device_class: "temperature", friendly_name: "Temperatur" }),
      "sensor.signal": st("sensor.signal", "-60", { device_class: "signal_strength" }),
      "cover.rollo": st("cover.rollo", "open", { friendly_name: "Rollladen" }),
      "light.kueche": st("light.kueche", "on"),
      "update.x": st("update.x", "off"),
    },
  };
}

test("area entities include device areas and skip hidden, config and unsupported entities", () => {
  const ids = areaEntities(hassWith(), "wohnen");
  assert.deepEqual(ids, ["light.decke", "light.stehlampe", "cover.rollo", "sensor.temp"]);
  assert.deepEqual(areaEntities(hassWith(), null), []);
});

test("entity names drop the area prefix", () => {
  const hass = hassWith();
  assert.equal(entityName(hass, "light.decke", "Wohnzimmer"), "Decke");
  assert.equal(entityName(hass, "light.stehlampe", "Wohnzimmer"), "Stehlampe");
});

test("kinds, active states and light glow", () => {
  const hass = hassWith();
  assert.equal(kindOf("media_player.tv"), "media");
  assert.equal(kindOf("input_boolean.gast"), "switch");
  assert.equal(kindOf("automation.x"), null);
  assert.ok(isActive(hass.states["light.decke"]));
  assert.ok(isActive(hass.states["cover.rollo"]));
  assert.ok(!isActive(hass.states["light.stehlampe"]));
  const glow = lightGlow(hass.states["light.decke"])!;
  assert.ok(Math.abs(glow.level - 128 / 255) < 1e-9);
  assert.ok(glow.color[0] > glow.color[2], "2700 K is warm");
  assert.equal(lightGlow(hass.states["light.stehlampe"]), null);
});

const room: Room = { id: "r", name: "R", area_id: null, points: [[0, 0], [5, 0], [5, 4], [0, 4]], floor_material: "wood" };

test("automatic placement keeps devices inside the room, apart, and off the room label", () => {
  const ids = ["light.a", "light.b", "switch.c", "sensor.d", "cover.e"];
  const out = autoPlace(room, ids);
  assert.equal(out.length, ids.length);
  const label = centroid(room.points);
  for (const p of out) {
    assert.ok(pointInPolygon([p.x, p.z], room.points));
    // lamps hang from the ceiling and may sit above the room label; other markers keep it free
    if (!p.entity_id.startsWith("light.")) assert.ok(Math.hypot(p.x - label[0], p.z - label[1]) >= 0.69, "room label stays free");
  }
  const first = autoPlace(room, ["light.a"])[0];
  assert.ok(Math.hypot(first.x - label[0], first.z - label[1]) < 0.3, "a single ceiling light goes to the middle");
  for (let i = 0; i < out.length; i++) {
    for (let j = i + 1; j < out.length; j++) assert.ok(Math.hypot(out[i].x - out[j].x, out[i].z - out[j].z) > 0.8);
  }
  assert.deepEqual(autoPlace(room, ids), out, "deterministic");
});

test("automatic placement avoids markers that are already there", () => {
  const [first] = autoPlace(room, ["switch.a"]);
  const [second] = autoPlace(room, ["switch.b"], [[first.x, first.z]]);
  assert.ok(Math.hypot(first.x - second.x, first.z - second.z) > 1);
});

test("automatic placement works in a tiny room", () => {
  const tiny: Room = { ...room, points: [[0, 0], [0.8, 0], [0.8, 0.8], [0, 0.8]] };
  const out = autoPlace(tiny, ["light.a", "switch.b"]);
  assert.equal(out.length, 2);
  for (const p of out) assert.ok(pointInPolygon([p.x, p.z], tiny.points));
});

test("doors and windows get blinds and contacts of their room's area, or the ones set by hand", () => {
  const hass = hassWith();
  hass.entities!["binary_sensor.f1"] = { entity_id: "binary_sensor.f1", area_id: "wohnen" };
  hass.entities!["binary_sensor.f2"] = { entity_id: "binary_sensor.f2", area_id: "wohnen" };
  hass.entities!["binary_sensor.tuer"] = { entity_id: "binary_sensor.tuer", area_id: "wohnen" };
  hass.states["binary_sensor.f1"] = { entity_id: "binary_sensor.f1", state: "on", attributes: { device_class: "window" } };
  hass.states["binary_sensor.f2"] = { entity_id: "binary_sensor.f2", state: "off", attributes: { device_class: "window" } };
  hass.states["binary_sensor.tuer"] = { entity_id: "binary_sensor.tuer", state: "off", attributes: { device_class: "door" } };
  const o = (id: string, type: "door" | "window", edge: number, extra: Partial<Opening> = {}): Opening => ({
    id, room_id: "r", edge, offset: 1, width: 1, type, sill: 0.9, height: 1.3, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...extra,
  });
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen" }],
    openings: [o("w2", "window", 2), o("w1", "window", 0), o("d", "door", 1), o("w3", "window", 3, { cover: "none", contact: "binary_sensor.tuer" })],
  };
  const links = openingEntities(hass, [floor]);
  // the only blind of the area serves every window without its own choice; sensors go one per window
  assert.deepEqual(links.get("w1"), { cover: "cover.rollo", contact: "binary_sensor.f1", tilt: null, contact2: null });
  assert.deepEqual(links.get("w2"), { cover: "cover.rollo", contact: "binary_sensor.f2", tilt: null, contact2: null });
  assert.deepEqual(links.get("w3"), { cover: null, contact: "binary_sensor.tuer", tilt: null, contact2: null });
  assert.deepEqual(links.get("d"), { cover: null, contact: "binary_sensor.tuer", tilt: null, contact2: null });
});

test("opening states: open, tilted and blind position", () => {
  const hass = hassWith();
  hass.states["binary_sensor.k"] = { entity_id: "binary_sensor.k", state: "on", attributes: {} };
  hass.states["binary_sensor.t"] = { entity_id: "binary_sensor.t", state: "on", attributes: {} };
  hass.states["cover.p"] = { entity_id: "cover.p", state: "open", attributes: { current_position: 25 } };
  assert.deepEqual(openingState(hass, { cover: null, contact: "binary_sensor.k", tilt: null }), { open: 1, open2: 0, tilt: 0, cover: null });
  assert.deepEqual(openingState(hass, { cover: "cover.p", contact: "binary_sensor.k", tilt: "binary_sensor.t" }), { open: 0, open2: 0, tilt: 1, cover: 0.75 });
  assert.deepEqual(openingState(hass, { cover: "cover.rollo", contact: null, tilt: null }), { open: 0, open2: 0, tilt: 0, cover: 0 });
});

test("garage doors use garage covers and contacts; door leaves follow their contact or stand half open", () => {
  const hass = hassWith();
  const add = (id: string, state: string, attributes: Record<string, unknown>) => {
    hass.entities![id] = { entity_id: id, area_id: "wohnen" };
    hass.states[id] = { entity_id: id, state, attributes };
  };
  add("cover.tor", "open", { device_class: "garage" });
  add("binary_sensor.tuer", "on", { device_class: "door" });
  const o = (id: string, type: Opening["type"], edge: number): Opening => ({
    id, room_id: "r", edge, offset: 1, width: 1, type, sill: 0, height: 2, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null,
  });
  const floor: Floor = { ...newFloor("f", "F", 0), rooms: [{ ...room, area_id: "wohnen" }], openings: [o("g", "garage", 0), o("w", "window", 1), o("d", "door", 2)] };
  const links = openingEntities(hass, [floor]);
  // the garage cover goes to the garage door only; the window keeps the ordinary blind
  assert.equal(links.get("g")!.cover, "cover.tor");
  assert.equal(links.get("w")!.cover, "cover.rollo");
  assert.equal(links.get("d")!.contact, "binary_sensor.tuer");
  assert.deepEqual(openingState(hass, links.get("g")!, "garage"), { open: 0, open2: 0, tilt: 0, cover: 0 });
  hass.states["cover.tor"] = { entity_id: "cover.tor", state: "closing", attributes: { device_class: "garage" } };
  assert.equal(openingState(hass, links.get("g")!, "garage").cover, 0.5);
  assert.equal(openingState(hass, links.get("d")!, "door").open, 1);
  assert.equal(openingState(hass, { cover: null, contact: null, tilt: null }, "door").open, 0.5);
});

test("entities are grouped by device; the entity without a name of its own is the main one", () => {
  const hass = hassWith();
  const add = (id: string, device: string, name?: string) => {
    hass.entities![id] = { entity_id: id, area_id: "wohnen", device_id: device, ...(name ? { name } : {}) };
    hass.states[id] = { entity_id: id, state: "on", attributes: { friendly_name: name ?? "Awtrix" } };
  };
  add("light.awtrix_indicator_1", "awtrix", "Indicator 1");
  add("light.awtrix_matrix", "awtrix", "Matrix");
  add("light.awtrix", "awtrix");
  add("light.awtrix_indicator_2", "awtrix", "Indicator 2");
  const ids = areaEntities(hass, "wohnen").filter((id) => kindOf(id) === "light");
  const groups = groupByDevice(hass, ids);
  const awtrix = groups.find((g) => g.primary === "light.awtrix")!;
  assert.deepEqual([...awtrix.others].sort(), ["light.awtrix_indicator_1", "light.awtrix_indicator_2", "light.awtrix_matrix"]);
  // entities without a device are their own group
  assert.ok(groups.some((g) => g.primary === "light.decke" && g.others.length === 0));
  assert.deepEqual(primaryEntities(hass, ids).length, groups.length);
});

test("furniture finds its entities in the room's area: the TV, and power sensors by device or name", () => {
  const hass = hassWith();
  const add = (id: string, state: string, attributes: Record<string, unknown>, device?: string) => {
    hass.entities![id] = { entity_id: id, area_id: "wohnen", ...(device ? { device_id: device } : {}) };
    hass.states[id] = { entity_id: id, state, attributes };
  };
  add("media_player.soundbar", "on", { friendly_name: "Soundbar" });
  add("media_player.fernseher", "on", { friendly_name: "Fernseher", device_class: "tv", app_name: "Netflix" }, "d_tv");
  add("sensor.tv_leistung", "95", { friendly_name: "TV Leistung", device_class: "power" }, "d_tv");
  add("sensor.kuehlschrank_leistung", "80", { friendly_name: "Kühlschrank Leistung", device_class: "power" });
  const item = (id: string, type: string, extra: Record<string, unknown> = {}) => ({ id, type, x: 2, z: 1.5, rotation: 0, w: 1, d: 0.5, h: 0.5, variant: null, entity: null, power: null, ...extra });
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen" }],
    furniture: [item("tv", "tv_board"), item("fridge", "fridge"), item("sofa", "sofa"), item("desk", "desk", { power: "none" })],
  };
  const links = furnitureEntities(hass, [floor]);
  assert.deepEqual(links.get("tv"), { entity: "media_player.fernseher", power: "sensor.tv_leistung" });
  assert.deepEqual(links.get("fridge"), { entity: null, power: "sensor.kuehlschrank_leistung" });
  assert.equal(links.get("sofa"), undefined);
  assert.equal(links.get("desk"), undefined);
  assert.deepEqual(appColor(hass.states["media_player.fernseher"]), [0.9, 0.04, 0.08]);
  assert.equal(appColor({ entity_id: "media_player.x", state: "off", attributes: {} }), null);
});

test("lamps take a light of their room, preferring one whose name fits", () => {
  const hass = hassWith();
  hass.entities!["light.stehlampe"].area_id = "wohnen";
  const lamp = (id: string, type: string, entity: string | null = null) => ({ id, type, x: 2, z: 1.5, rotation: 0, w: 0.4, d: 0.4, h: 1.7, variant: null, entity, power: null });
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen" }],
    furniture: [lamp("a", "lamp_floor"), lamp("b", "lamp_ceiling"), lamp("c", "lamp_table")],
  };
  const links = furnitureEntities(hass, [floor]);
  assert.equal(links.get("a")!.entity, "light.stehlampe");
  assert.equal(links.get("b")!.entity, "light.decke");
  // no free light left for the third lamp
  assert.equal(links.get("c"), undefined);
});

test("double doors and French windows: the second leaf follows a contact of its own", () => {
  const hass = hassWith();
  hass.states["binary_sensor.a"] = { entity_id: "binary_sensor.a", state: "off", attributes: { device_class: "door" } };
  hass.states["binary_sensor.b"] = { entity_id: "binary_sensor.b", state: "on", attributes: { device_class: "door" } };
  const e = { cover: null, contact: "binary_sensor.a", tilt: null, contact2: "binary_sensor.b" };
  assert.deepEqual(openingState(hass, e, "window"), { open: 0, open2: 1, tilt: 0, cover: null });
  assert.deepEqual(openingState(hass, e, "door"), { open: 0, open2: 1, tilt: 0, cover: null });
  // without a sensor the second leaf of a double door stays shut
  assert.equal(openingState(hass, { cover: null, contact: null, tilt: null }, "door").open2, 0);
});

test("the room panel shows what the plan shows in the room, plus picked entities", () => {
  const hass = hassWith();
  const floor: Floor = {
    ...newFloor("f", "F", 0),
    rooms: [{ ...room, area_id: "wohnen", panel: ["sensor.signal"] }],
    placements: [{ entity_id: "cover.rollo", x: 1, z: 1, y: null, mount: null }],
    furniture: [{ id: "l", type: "lamp_ceiling", x: 2, z: 2, rotation: 0, w: 0.4, d: 0.4, h: 0.1, variant: null, entity: "light.decke", power: null }],
  };
  const { shown, more } = roomPanelEntities(hass, floor, floor.rooms[0]);
  assert.deepEqual(shown.sort(), ["cover.rollo", "light.decke", "sensor.signal"]);
  // the rest of the area is offered, not shown
  assert.ok(more.includes("sensor.temp"));
  assert.ok(!more.includes("light.decke"));
});

test("window handles with three states, HomematicIP window_state and plain contacts", () => {
  const st = (state: string, attributes: Record<string, unknown> = {}) => ({ entity_id: "x", state, attributes });
  assert.equal(windowPosition(st("on")), "open");
  assert.equal(windowPosition(st("off")), "closed");
  assert.equal(windowPosition(st("tilted")), "tilted");
  assert.equal(windowPosition(st("gekippt")), "tilted");
  assert.equal(windowPosition(st("Geschlossen")), "closed");
  assert.equal(windowPosition(st("on", { window_state: "TILTED" })), "tilted");
  assert.equal(windowPosition(st("unavailable")), null);
  assert.equal(windowPosition(st("42")), null);

  const hass = hassWith();
  hass.states["sensor.griff"] = { entity_id: "sensor.griff", state: "tilted", attributes: {} };
  const e = { cover: null, contact: "sensor.griff", tilt: null };
  assert.deepEqual(openingState(hass, e, "window"), { open: 0, open2: 0, tilt: 1, cover: null });
  hass.states["sensor.griff"] = { entity_id: "sensor.griff", state: "open", attributes: {} };
  assert.equal(openingState(hass, e, "window").open, 1);
  // a sensor that only knows "tilted or not" goes into the tilt field
  hass.states["binary_sensor.kipp"] = { entity_id: "binary_sensor.kipp", state: "on", attributes: {} };
  hass.states["binary_sensor.auf"] = { entity_id: "binary_sensor.auf", state: "on", attributes: {} };
  assert.deepEqual(openingState(hass, { cover: null, contact: "binary_sensor.auf", tilt: "binary_sensor.kipp" }, "window"), { open: 0, open2: 0, tilt: 1, cover: null });
});
