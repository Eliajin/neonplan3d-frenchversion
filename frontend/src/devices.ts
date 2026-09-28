// Devices of a room: which entities belong to an area, what kind they are, how they are placed and
// what their state looks like. Pure functions (no Lit, no three.js) so they can be tested directly.

import type { Floor, LampMount, Opening, Placement, Room, Vec2 } from "./model.ts";
import { centroid, pointInPolygon } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";

export type DeviceKind =
  | "light"
  | "switch"
  | "fan"
  | "cover"
  | "climate"
  | "media"
  | "lock"
  | "sensor"
  | "binary"
  | "camera"
  | "scene"
  | "script";

const DOMAIN_KIND: Record<string, DeviceKind> = {
  light: "light",
  switch: "switch",
  input_boolean: "switch",
  fan: "fan",
  cover: "cover",
  climate: "climate",
  media_player: "media",
  lock: "lock",
  sensor: "sensor",
  binary_sensor: "binary",
  camera: "camera",
  scene: "scene",
  script: "script",
};

/** Sensors worth showing: room climate, and power (consumers of the energy flow). */
const SENSOR_CLASSES = new Set(["temperature", "humidity", "power"]);
const BINARY_CLASSES = new Set(["door", "window", "opening", "garage_door", "motion", "occupancy", "presence", "smoke", "moisture", "gas"]);

/** Order in lists and panels. */
export const KIND_ORDER: DeviceKind[] = ["light", "cover", "climate", "media", "switch", "fan", "lock", "binary", "sensor", "camera", "scene", "script"];

/** Kinds that can be toggled with a tap in 3D. */
export const TOGGLE_KINDS = new Set<DeviceKind>(["light", "switch", "fan"]);

export function domainOf(entityId: string): string {
  return entityId.slice(0, entityId.indexOf("."));
}

export function kindOf(entityId: string): DeviceKind | null {
  return DOMAIN_KIND[domainOf(entityId)] ?? null;
}

/** Scenes and scripts belong to the room panel, not to a spot in the room. */
export function isPlaceable(kind: DeviceKind | null): boolean {
  return kind !== null && kind !== "scene" && kind !== "script";
}

export function entityAreaId(hass: HomeAssistant, entityId: string): string | null {
  const entry = hass.entities?.[entityId];
  if (!entry) return null;
  if (entry.area_id) return entry.area_id;
  return (entry.device_id && hass.devices?.[entry.device_id]?.area_id) || null;
}

/** Whether an entity is shown at all: visible, no config/diagnostic entity, and a kind we handle. */
export function isRelevant(hass: HomeAssistant, entityId: string): boolean {
  const kind = kindOf(entityId);
  if (!kind) return false;
  const entry = hass.entities?.[entityId];
  if (entry?.hidden || entry?.entity_category) return false;
  const st = hass.states[entityId];
  if (!st) return false;
  const dc = st.attributes.device_class as string | undefined;
  if (kind === "sensor") return !!dc && SENSOR_CLASSES.has(dc);
  if (kind === "binary") return !!dc && BINARY_CLASSES.has(dc);
  return true;
}

/** Entities of an area, sorted by kind and name. */
export function areaEntities(hass: HomeAssistant, areaId: string | null): string[] {
  if (!areaId || !hass.entities) return [];
  const ids = Object.keys(hass.entities).filter((id) => entityAreaId(hass, id) === areaId && isRelevant(hass, id));
  const areaName = hass.areas?.[areaId]?.name;
  return ids.sort((a, b) => {
    const ka = KIND_ORDER.indexOf(kindOf(a)!);
    const kb = KIND_ORDER.indexOf(kindOf(b)!);
    return ka - kb || entityName(hass, a, areaName).localeCompare(entityName(hass, b, areaName));
  });
}

/** Friendly name without a leading area name ("Wohnzimmer Deckenlicht" in the Wohnzimmer -> "Deckenlicht"). */
export function entityName(hass: HomeAssistant, entityId: string, areaName?: string): string {
  const st = hass.states[entityId];
  const name = (st?.attributes.friendly_name as string | undefined) ?? hass.entities?.[entityId]?.name ?? entityId;
  if (areaName && name.length > areaName.length + 1 && name.toLowerCase().startsWith(areaName.toLowerCase() + " ")) {
    const rest = name.slice(areaName.length + 1);
    return rest.charAt(0).toUpperCase() + rest.slice(1);
  }
  return name;
}

export function isUnavailable(st: HassEntity | undefined): boolean {
  return !st || st.state === "unavailable" || st.state === "unknown";
}

/** "Active" drives the glow of a device marker: light on, cover open, heating, playing, window open … */
export function isActive(st: HassEntity | undefined): boolean {
  if (!st) return false;
  switch (kindOf(st.entity_id)) {
    case "light":
    case "switch":
    case "fan":
    case "binary":
      return st.state === "on";
    case "cover":
      return st.state === "open" || st.state === "opening";
    case "climate":
      return st.attributes.hvac_action === "heating" || st.attributes.hvac_action === "cooling";
    case "media":
      return st.state === "playing";
    case "lock":
      return st.state === "unlocked" || st.state === "open";
    default:
      return false;
  }
}

/** Colour (0..1 channels) and level (0..1) of a light that is on; null when off. */
export function lightGlow(st: HassEntity | undefined): { color: [number, number, number]; level: number } | null {
  if (!st || st.state !== "on") return null;
  const a = st.attributes;
  const level = typeof a.brightness === "number" ? Math.max(0.08, a.brightness / 255) : 1;
  const rgb = a.rgb_color as [number, number, number] | undefined;
  let color: [number, number, number];
  if (rgb && a.color_mode !== "color_temp" && a.color_mode !== "brightness" && a.color_mode !== "onoff") {
    color = [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
  } else if (typeof a.color_temp_kelvin === "number") {
    color = kelvinToRgb(a.color_temp_kelvin);
  } else {
    color = [1, 0.71, 0.28]; // warm neon amber (#ffb547)
  }
  return { color, level };
}

/** Rough black-body colour for 2000–6500 K, tuned to stay warm and readable on the dark floor. */
export function kelvinToRgb(k: number): [number, number, number] {
  const t = Math.min(1, Math.max(0, (k - 2200) / (6500 - 2200)));
  const warm: [number, number, number] = [1, 0.66, 0.26];
  const cool: [number, number, number] = [0.78, 0.9, 1];
  return [warm[0] + (cool[0] - warm[0]) * t, warm[1] + (cool[1] - warm[1]) * t, warm[2] + (cool[2] - warm[2]) * t];
}

/** Default mounting height of a device marker (metres above the floor). */
export function defaultHeight(kind: DeviceKind, floorHeight: number, mount: LampMount | null = null): number {
  if (kind === "light" && mount) {
    // markers sit just above floor and table lamps and next to wall lamps
    if (mount === "floor") return 1.95;
    if (mount === "table") return 1.25;
    if (mount === "wall") return 1.95;
  }
  switch (kind) {
    case "light":
    case "camera":
      return Math.max(0.5, floorHeight - 0.25);
    case "cover":
      return Math.min(2, floorHeight - 0.3);
    case "climate":
      return 0.6;
    case "media":
      return 0.9;
    case "binary":
    case "sensor":
      return 1.4;
    default:
      return 1.05;
  }
}

// ------------------------------------------------------------------ automatic placement

function distanceToEdges(p: Vec2, poly: readonly Vec2[]): number {
  let best = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l2 = dx * dx + dz * dz || 1;
    const t = Math.min(1, Math.max(0, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dz) / l2));
    best = Math.min(best, Math.hypot(p[0] - a[0] - dx * t, p[1] - a[1] - dz * t));
  }
  return best;
}

/**
 * Places entities in a room without overlapping each other or the markers already there. Lights go
 * towards the middle, spread out; everything else goes along the walls. The room label at the
 * centroid is kept free. Deterministic, so the same room always gets the same layout.
 */
export function autoPlace(room: Room, entityIds: readonly string[], taken: readonly Vec2[] = []): Placement[] {
  if (room.points.length < 3 || !entityIds.length) return [];
  const poly = room.points;
  const xs = poly.map((p) => p[0]);
  const zs = poly.map((p) => p[1]);
  const x0 = Math.min(...xs);
  const z0 = Math.min(...zs);
  const x1 = Math.max(...xs);
  const z1 = Math.max(...zs);
  const size = Math.min(x1 - x0, z1 - z0);
  const step = Math.max(0.1, Math.min(0.25, size / 8));
  const margin = Math.min(0.35, size / 5);
  const label = centroid(poly);
  const candidates: { p: Vec2; wall: number }[] = [];
  for (let x = x0 + step / 2; x < x1; x += step) {
    for (let z = z0 + step / 2; z < z1; z += step) {
      const p: Vec2 = [x, z];
      if (!pointInPolygon(p, poly)) continue;
      const wall = distanceToEdges(p, poly);
      if (wall < margin) continue;
      candidates.push({ p, wall });
    }
  }
  if (!candidates.length) candidates.push({ p: label, wall: 0 });
  const used: Vec2[] = [...taken];
  const out: Placement[] = [];
  const labelFree = Math.min(0.7, size / 4);
  for (const entity_id of entityIds) {
    const light = kindOf(entity_id) === "light";
    let best = candidates[0].p;
    let bestScore = -Infinity;
    for (const { p, wall } of candidates) {
      const free = used.length ? Math.min(...used.map((q) => Math.hypot(p[0] - q[0], p[1] - q[1]))) : 3;
      const fromLabel = Math.hypot(p[0] - label[0], p[1] - label[1]);
      let score = Math.min(free, 3) * 2;
      if (fromLabel < labelFree && !light) score -= 10;
      // lights prefer the middle of the room, other devices a spot near a wall
      score -= light ? fromLabel * 0.35 : wall * 1.2;
      if (score > bestScore + 1e-9) {
        bestScore = score;
        best = p;
      }
    }
    const p: Vec2 = [Math.round(best[0] * 100) / 100, Math.round(best[1] * 100) / 100];
    used.push(p);
    out.push({ entity_id, x: p[0], z: p[1], y: null, mount: null });
  }
  return out;
}

// ------------------------------------------------------------------ doors and windows

const COVER_CLASSES = new Set([undefined, "shutter", "blind", "awning", "shade", "curtain", "window"]);
const GARAGE_COVERS = new Set(["garage", "gate"]);
const WINDOW_CONTACTS = new Set(["window", "opening"]);

export interface OpeningEntities {
  cover: string | null;
  contact: string | null;
  tilt: string | null;
}

/** Pairs openings with entities in order; with `shared`, a single entity serves all openings. */
function pair(openings: Opening[], ids: string[], shared = false): Map<string, string> {
  const out = new Map<string, string>();
  if (!ids.length) return out;
  openings.forEach((o, i) => {
    const id = shared && ids.length === 1 ? ids[0] : ids[i];
    if (id) out.set(o.id, id);
  });
  return out;
}

/**
 * Entities of every door and window: set by hand, or (when null) matched automatically with the
 * covers and contact sensors of the room's area, in the order the openings sit on the room outline.
 */
export function openingEntities(hass: HomeAssistant, floors: readonly Floor[]): Map<string, OpeningEntities> {
  const out = new Map<string, OpeningEntities>();
  for (const floor of floors) {
    for (const room of floor.rooms) {
      const own = floor.openings.filter((o) => o.room_id === room.id).sort((a, b) => a.edge - b.edge || a.offset - b.offset);
      if (!own.length) continue;
      const ids = areaEntities(hass, room.area_id);
      const cls = (id: string) => hass.states[id]?.attributes.device_class as string | undefined;
      const covers = ids.filter((id) => kindOf(id) === "cover" && COVER_CLASSES.has(cls(id)));
      const windows = own.filter((o) => o.type === "window");
      const doors = own.filter((o) => o.type === "door");
      const garages = own.filter((o) => o.type === "garage");
      // one blind for the whole room (e.g. a group) serves every window; a sensor belongs to one window
      const autoCover = pair(windows, covers, true);
      const autoWindow = pair(windows, ids.filter((id) => kindOf(id) === "binary" && WINDOW_CONTACTS.has(cls(id)!)));
      const autoDoor = pair(doors, ids.filter((id) => kindOf(id) === "binary" && cls(id) === "door"));
      const autoGarageCover = pair(garages, ids.filter((id) => kindOf(id) === "cover" && GARAGE_COVERS.has(cls(id) ?? "")));
      const autoGarageContact = pair(garages, ids.filter((id) => kindOf(id) === "binary" && cls(id) === "garage_door"));
      const pick = (ref: string | null, auto: string | undefined) => (ref === "none" ? null : (ref ?? auto ?? null));
      for (const o of own) {
        const autoC = o.type === "window" ? autoCover : o.type === "garage" ? autoGarageCover : null;
        const autoK = o.type === "window" ? autoWindow : o.type === "garage" ? autoGarageContact : autoDoor;
        out.set(o.id, {
          cover: pick(o.cover, autoC?.get(o.id)),
          contact: pick(o.contact, autoK.get(o.id)),
          tilt: o.tilt === "none" ? null : o.tilt,
        });
      }
    }
  }
  return out;
}

/** Door leaves without a contact sensor stand half open, so the doorway stays readable. */
export const DOOR_DEFAULT_OPEN = 0.5;

/**
 * Visual state of an opening from its entities. Windows: sash open or tilted, blind closed fraction.
 * Doors: leaf open (contact) or half open. Garage doors: closed fraction from the cover or contact.
 */
export function openingState(hass: HomeAssistant, e: OpeningEntities, type: Opening["type"] = "window"): { open: number; tilt: number; cover: number | null } {
  const on = (id: string | null) => !!id && hass.states[id]?.state === "on";
  const known = (id: string | null) => !!id && !!hass.states[id] && !isUnavailable(hass.states[id]);
  if (type === "door") return { open: known(e.contact) ? (on(e.contact) ? 1 : 0) : DOOR_DEFAULT_OPEN, tilt: 0, cover: null };
  const tilted = on(e.tilt);
  const open = on(e.contact) && !tilted ? 1 : 0;
  let cover: number | null = null;
  const c = e.cover ? hass.states[e.cover] : undefined;
  if (c && !isUnavailable(c)) {
    const pos = c.attributes.current_position;
    if (typeof pos === "number") cover = 1 - Math.min(100, Math.max(0, pos)) / 100;
    else cover = c.state === "closed" ? 1 : c.state === "opening" || c.state === "closing" ? 0.5 : 0;
  } else if (e.cover) cover = 0;
  if (type === "garage") {
    // a garage door without a cover shows its contact: open or closed
    if (cover === null) cover = known(e.contact) ? (on(e.contact) ? 0 : 1) : 1;
    return { open: 0, tilt: 0, cover };
  }
  return { open, tilt: tilted ? 1 : 0, cover };
}

// ------------------------------------------------------------------ grouping by device

export interface DeviceGroup {
  /** The device's main entity (the one carrying the device name), or the entity itself. */
  primary: string;
  /** Further entities of the same device (indicators, effects, extra channels, …). */
  others: string[];
}

/**
 * Groups entities by device. The main entity is the one without a name of its own (Home Assistant's
 * convention for a device's main feature); otherwise the first in kind order. Groups keep the order
 * of their main entities in `ids`.
 */
export function groupByDevice(hass: HomeAssistant, ids: readonly string[]): DeviceGroup[] {
  const byDevice = new Map<string, string[]>();
  const order: string[] = [];
  for (const id of ids) {
    const device = hass.entities?.[id]?.device_id ?? `entity:${id}`;
    let list = byDevice.get(device);
    if (!list) {
      byDevice.set(device, (list = []));
      order.push(device);
    }
    list.push(id);
  }
  const groups = order.map((device) => {
    const list = byDevice.get(device)!;
    const main = list.find((id) => !hass.entities?.[id]?.name) ?? list[0];
    return { primary: main, others: list.filter((id) => id !== main) };
  });
  const rank = new Map(ids.map((id, i) => [id, i]));
  return groups.sort((a, b) => rank.get(a.primary)! - rank.get(b.primary)!);
}

/** Main entities only (one per device). */
export function primaryEntities(hass: HomeAssistant, ids: readonly string[]): string[] {
  return groupByDevice(hass, ids).map((g) => g.primary);
}
