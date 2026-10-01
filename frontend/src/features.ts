/**
 * Pro features: unlocked by an installed, signed feature pack (a pack whose payload lists `features`).
 * The code of every feature is in the integration; the pack is the licence and carries its content.
 */
import { getPacks } from "./packs.ts";

export type Feature = "camera_cockpit" | "weather" | "screens" | "fridge_smart";

/** The add-ons shown on the extensions page (sold in the shop). */
export const FEATURES: readonly Feature[] = ["camera_cockpit", "weather", "screens"];
/** Features unlocked by a pack but not listed anywhere (exclusive items). */
const HIDDEN: readonly Feature[] = ["fridge_smart"];

/** The shop page where the Pro pack is sold. */
export const PRO_URL = "https://mastershort.de/neonplan3d/";

export function unlockedFeatures(packs: readonly { features?: string[] }[] = getPacks()): Set<Feature> {
  const out = new Set<Feature>();
  for (const p of packs) for (const f of p.features ?? []) if ((FEATURES as readonly string[]).includes(f) || (HIDDEN as readonly string[]).includes(f)) out.add(f as Feature);
  return out;
}

export function hasFeature(feature: Feature, packs?: readonly { features?: string[] }[]): boolean {
  return unlockedFeatures(packs).has(feature);
}
