// Websocket calls to the backend (custom_components/neonplan3d/websocket.py).

import type { Building } from "./model.ts";
import type { FurniturePack } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

export async function fetchBuilding(hass: HomeAssistant): Promise<{ building: Building; revision: number; version?: string }> {
  return hass.callWS({ type: "neonplan3d/building/get" });
}

export async function saveBuilding(hass: HomeAssistant, building: Building): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "neonplan3d/building/save", building });
  return res.revision;
}

export function subscribeBuilding(hass: HomeAssistant, callback: (revision: number) => void): Promise<() => Promise<void>> {
  return hass.connection.subscribeMessage<{ revision: number }>((msg) => callback(msg.revision), {
    type: "neonplan3d/building/subscribe",
  });
}

export async function fetchImage(hass: HomeAssistant, imageId: string): Promise<string> {
  const res = await hass.callWS<{ data: string }>({ type: "neonplan3d/image/get", image_id: imageId });
  return res.data;
}

export async function storeImage(hass: HomeAssistant, imageId: string, data: string): Promise<void> {
  await hass.callWS({ type: "neonplan3d/image/set", image_id: imageId, data });
}

export interface Snapshot {
  id: string;
  revision: number;
  /** Unix time in seconds. */
  saved_at: number;
  floors: number;
  rooms: number;
  furniture: number;
}

export async function listHistory(hass: HomeAssistant): Promise<Snapshot[]> {
  const res = await hass.callWS<{ snapshots: Snapshot[] }>({ type: "neonplan3d/history/list" });
  return res.snapshots;
}

export async function takeSnapshot(hass: HomeAssistant): Promise<void> {
  await hass.callWS({ type: "neonplan3d/history/snapshot" });
}

export async function restoreSnapshot(hass: HomeAssistant, snapshotId: string): Promise<number> {
  const res = await hass.callWS<{ revision: number }>({ type: "neonplan3d/history/restore", snapshot_id: snapshotId });
  return res.revision;
}

export async function listPacks(hass: HomeAssistant): Promise<FurniturePack[]> {
  const res = await hass.callWS<{ packs: FurniturePack[] }>({ type: "neonplan3d/packs/list" });
  return res.packs;
}

export interface ImportedPack {
  id: string;
  name: string;
  publisher: string;
  licensee: string | null;
  items: number;
}

/** Import a pack file; the backend checks its signature (errors carry a code, e.g. "bad_signature"). */
export async function importPack(hass: HomeAssistant, text: string): Promise<ImportedPack> {
  return hass.callWS<ImportedPack>({ type: "neonplan3d/packs/import", pack: text });
}

export async function removePack(hass: HomeAssistant, packId: string): Promise<void> {
  await hass.callWS({ type: "neonplan3d/packs/remove", pack_id: packId });
}
