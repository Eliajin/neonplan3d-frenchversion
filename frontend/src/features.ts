/**
 * Pro features: unlocked by an installed, signed feature pack (a pack whose payload lists `features`).
 * The code of every feature is in the integration; the pack is the licence and carries its content.
 */
import { getPacks } from "./packs.ts";

export type Feature = "camera_cockpit" | "weather";

export const FEATURES: readonly Feature[] = ["camera_cockpit", "weather"];

/** The shop page where the Pro pack is sold. */
export const PRO_URL = "https://mastershort.de/neonplan3d/";

export function unlockedFeatures(packs: readonly { features?: string[] }[] = getPacks()): Set<Feature> {
  const out = new Set<Feature>();
  for (const p of packs) for (const f of p.features ?? []) if ((FEATURES as readonly string[]).includes(f)) out.add(f as Feature);
  return out;
}

export function hasFeature(feature: Feature, packs?: readonly { features?: string[] }[]): boolean {
  return unlockedFeatures(packs).has(feature);
}
