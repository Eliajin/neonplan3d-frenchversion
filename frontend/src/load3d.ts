// Loads the three.js bundle only when a 3D view is opened.

import type * as Viewer from "./viewer/viewer3d.ts";

export type ViewerModule = typeof Viewer;

const base = new URL(import.meta.url);
const version = base.searchParams.get("v");
const url = new URL(`./floorplan-3d-3d.js${version ? `?v=${version}` : ""}`, base).href;

let loading: Promise<ViewerModule> | undefined;

export function load3d(): Promise<ViewerModule> {
  loading ??= import(/* @vite-ignore */ url) as Promise<ViewerModule>;
  return loading;
}
