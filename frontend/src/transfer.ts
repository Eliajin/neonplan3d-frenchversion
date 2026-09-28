// Export and import of the building as a JSON file. Without entities, a plan can be shared with others:
// areas, lights, sensors and every other link to this Home Assistant are removed.

import { normalizeBuilding, type Building } from "./model.ts";

export const EXPORT_FORMAT = "floorplan_3d";

export interface ExportFile {
  format: typeof EXPORT_FORMAT;
  version: 1;
  exported_at: string;
  building: Building;
}

/** A copy of the building without any link to entities or areas (background images stay out anyway). */
export function withoutEntities(b: Building): Building {
  const out = structuredClone(b);
  out.energy = { ...out.energy, grid: null, solar: null, battery: null, battery_soc: null, tariff: null };
  out.presence = [];
  for (const f of out.floors) {
    f.placements = [];
    f.background = null;
    f.rooms = f.rooms.map((r) => ({ ...r, area_id: null }));
    f.furniture = f.furniture.map((m) => ({ ...m, entity: null, power: null }));
    f.openings = f.openings.map((o) => ({ ...o, cover: null, contact: null, tilt: null }));
  }
  return out;
}

export function exportFile(b: Building, shareable: boolean): ExportFile {
  return { format: EXPORT_FORMAT, version: 1, exported_at: new Date().toISOString(), building: shareable ? withoutEntities(b) : structuredClone(b) };
}

/** Reads an export file; throws with a short reason when it is none. */
export function parseExport(text: string): Building {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("no JSON");
  }
  const file = data as Partial<ExportFile>;
  const b = (file?.format === EXPORT_FORMAT ? file.building : data) as Building | undefined;
  if (!b || b.version !== 1 || !Array.isArray(b.floors) || !b.settings) throw new Error("no Floorplan 3D plan");
  // background images are not part of an export
  for (const f of b.floors) f.background = null;
  return normalizeBuilding(b);
}

/** Starts a download of a text file in the browser. */
export function download(name: string, text: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
