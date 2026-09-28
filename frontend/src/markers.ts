// Turns placements and entity states into device markers for the 3D view, and formats short state
// texts shared by markers and the room panel.

import { defaultHeight, entityName, isActive, isUnavailable, kindOf, lightGlow } from "./devices.ts";
import { formatNumber, translate, type I18nKey } from "./i18n.ts";
import { iconSvg } from "./icons.ts";
import type { Building } from "./model.ts";
import { pointInPolygon } from "./model.ts";
import type { HassEntity, HomeAssistant } from "./types.ts";
import type { DeviceMarker } from "./viewer/viewer3d.ts";

const t = (hass: HomeAssistant | undefined, key: I18nKey) => translate(hass, key);

/** Short, localised state text for a marker or a panel row. */
export function stateText(hass: HomeAssistant | undefined, st: HassEntity | undefined): string {
  if (!st || isUnavailable(st)) return t(hass, "state_unavailable");
  const a = st.attributes;
  switch (kindOf(st.entity_id)) {
    case "light":
      if (st.state !== "on") return t(hass, "state_off");
      return typeof a.brightness === "number" ? `${Math.round((a.brightness / 255) * 100)} %` : t(hass, "state_on");
    case "switch":
    case "fan":
      return t(hass, st.state === "on" ? "state_on" : "state_off");
    case "cover":
      if (typeof a.current_position === "number" && st.state !== "opening" && st.state !== "closing") return `${a.current_position} %`;
      return translateState(hass, st.state);
    case "climate": {
      const cur = typeof a.current_temperature === "number" ? `${formatNumber(hass, a.current_temperature, 1)} °C` : null;
      if (st.state === "off") return cur ? `${cur} · ${t(hass, "state_off")}` : t(hass, "state_off");
      return cur ?? translateState(hass, st.state);
    }
    case "media":
      if (st.state === "playing" && typeof a.media_title === "string") return a.media_title;
      return translateState(hass, st.state);
    case "lock":
      return translateState(hass, st.state);
    case "binary": {
      const opening = ["door", "window", "opening", "garage_door"].includes(a.device_class as string);
      if (opening) return t(hass, st.state === "on" ? "state_open" : "state_closed");
      return t(hass, st.state === "on" ? "state_detected" : "state_clear");
    }
    case "sensor": {
      const v = Number(st.state);
      const unit = (a.unit_of_measurement as string | undefined) ?? "";
      return Number.isFinite(v) ? `${formatNumber(hass, v, 1)}${unit ? ` ${unit}` : ""}` : st.state;
    }
    default:
      return "";
  }
}

function translateState(hass: HomeAssistant | undefined, state: string): string {
  const key = `state_${state}` as I18nKey;
  const s = translate(hass, key);
  return s === key ? state : s;
}

/** Markers for every placed entity that still exists. */
export function buildMarkers(hass: HomeAssistant, building: Building): DeviceMarker[] {
  const out: DeviceMarker[] = [];
  for (const floor of building.floors) {
    for (const pl of floor.placements) {
      const kind = kindOf(pl.entity_id);
      const st = hass.states[pl.entity_id];
      if (!kind || !st) continue;
      const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([pl.x, pl.z], r.points)) ?? null;
      const areaName = room?.area_id ? hass.areas?.[room.area_id]?.name : undefined;
      out.push({
        id: pl.entity_id,
        floorId: floor.id,
        roomId: room?.id ?? null,
        x: pl.x,
        z: pl.z,
        y: pl.y ?? defaultHeight(kind, floor.height, pl.mount ?? null),
        lamp: kind === "light" ? (pl.mount ?? "ceiling") : null,
        icon: iconSvg(kind),
        name: entityName(hass, pl.entity_id, areaName),
        text: stateText(hass, st),
        active: isActive(st),
        unavailable: isUnavailable(st),
        glow: kind === "light" ? lightGlow(st) : null,
      });
    }
  }
  return out;
}

/** Entity ids placed anywhere in the building (to notice relevant state changes cheaply). */
export function placedEntities(building: Building): string[] {
  return building.floors.flatMap((f) => f.placements.map((p) => p.entity_id));
}

/** Opens Home Assistant's more-info dialog for an entity. */
export function openMoreInfo(from: HTMLElement, entityId: string): void {
  from.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId }, bubbles: true, composed: true }));
}

/** Toggle an entity with its own domain's toggle service (light.toggle, switch.toggle, …). */
export function toggleEntity(hass: HomeAssistant, entityId: string): Promise<unknown> {
  const domain = entityId.slice(0, entityId.indexOf("."));
  return hass.callService(domain, "toggle", { entity_id: entityId });
}
