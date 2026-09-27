// Builds the two bundles into custom_components/floorplan_3d/frontend and checks the size budgets.

import { build, context } from "esbuild";
import { copyFileSync, mkdirSync, statSync } from "node:fs";

const out = "../custom_components/floorplan_3d/frontend";
const watch = process.argv.includes("--watch");

const common = {
  bundle: true,
  format: "esm",
  target: "es2022",
  minify: !watch,
  sourcemap: false,
  legalComments: "none",
  logLevel: "info",
};

const configs = [
  { ...common, entryPoints: ["src/main.ts"], outfile: `${out}/floorplan-3d.js` },
  { ...common, entryPoints: ["src/viewer/viewer3d.ts"], outfile: `${out}/floorplan-3d-3d.js` },
];

// Self-hosted fonts (SIL OFL): latin subset of the variable weight axis, shipped with their licences.
const FONTS = [
  ["figtree", "figtree-latin-wght-normal.woff2", "figtree.woff2"],
  ["bricolage-grotesque", "bricolage-grotesque-latin-wght-normal.woff2", "bricolage-grotesque.woff2"],
];
function copyFonts() {
  mkdirSync(`${out}/fonts`, { recursive: true });
  for (const [pkg, file, name] of FONTS) {
    const dir = `node_modules/@fontsource-variable/${pkg}`;
    copyFileSync(`${dir}/files/${file}`, `${out}/fonts/${name}`);
    copyFileSync(`${dir}/LICENSE`, `${out}/fonts/${pkg}-LICENSE.txt`);
  }
}

const BUDGET = { "floorplan-3d.js": 250 * 1024, "floorplan-3d-3d.js": 650 * 1024 };

copyFonts();
if (watch) {
  for (const c of configs) await (await context(c)).watch();
} else {
  await Promise.all(configs.map((c) => build(c)));
  let over = false;
  for (const [file, limit] of Object.entries(BUDGET)) {
    const size = statSync(`${out}/${file}`).size;
    const ok = size <= limit;
    over ||= !ok;
    console.log(`${ok ? "ok  " : "OVER"} ${file}: ${(size / 1024).toFixed(1)} KB (budget ${limit / 1024} KB)`);
  }
  if (over) process.exit(1);
}
