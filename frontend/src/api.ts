// Websocket calls to the backend (custom_components/floorplan_3d/websocket.py).

import type { Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export async function fetchBuilding(hass: HomeAssistant): Promise<{ building: Building; revision: number; version?: string }> {
  return hass.callWS({ type: "floorplan_3d/building/get" });
}

export async function saveBuilding(hass: HomeAssistant, building: Building): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "floorplan_3d/building/save", building });
  return res.revision;
}

export function subscribeBuilding(hass: HomeAssistant, callback: (revision: number) => void): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<{ revision: number }>((msg) => callback(msg.revision), {
    type: "floorplan_3d/building/subscribe",
  });
}

export async function fetchImage(hass: HomeAssistant, imageId: string): Promise<string> {
  const res = await hass.callWS<{ data: string }>({ type: "floorplan_3d/image/get", image_id: imageId });
  return res.data;
}

export async function storeImage(hass: HomeAssistant, imageId: string, data: string): Promise<void> {
  await hass.callWS({ type: "floorplan_3d/image/set", image_id: imageId, data });
}
