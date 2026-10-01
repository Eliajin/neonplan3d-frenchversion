// Serves the repository and takes screenshots of the preview page with a local Chrome/Edge.
// Usage (from frontend/): node screenshot.mjs [out-dir]

import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import puppeteer from "puppeteer-core";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(process.argv[2] ?? join(root, "preview", "screenshots"));
mkdirSync(outDir, { recursive: true });

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".png": "image/png", ".json": "application/json" };
const server = createServer((req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, "127.0.0.1", ok));
const base = `http://127.0.0.1:${server.address().port}/preview/index.html`;

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));
const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });

// puts the furniture of the local starter pack (private/packs) into the living room and kitchen
const PACK_SCRIPT = `
  const f = e._doc.floors[0];
  const put = (item, x, z, rotation = 0) => { e._floorId = f.id; e.addFurniture('pack:mastershort.starter:' + item); const m = e._doc.floors[0].furniture.at(-1); Object.assign(m, { x, z, rotation }); };
  e._doc.floors[0].furniture = e._doc.floors[0].furniture.filter((m) => !['sofa', 'armchair', 'rug', 'coffee_table', 'table', 'chair'].includes(m.type));
  put('lounge_chair', 1.2, 2.4, 90);
  put('fireplace', 0.45, 3.8, 90);
  put('scandi_sideboard', 3.4, 4.3, 180);
  put('gaming_desk', 4.6, 1.2, 0);
  put('dining_set', 8.0, 3.0, 0);
  put('side_by_side_fridge', 9.4, 0.5, 0);
  e.setDoc(structuredClone(e._doc));
`;

// kitchen with pack furniture on the island, pendant lights from a pack and a wallbox (local packs)
const PACK_MOUNT_SCRIPT = `
  const f = e._doc.floors[0];
  e._floorId = f.id;
  const put = (type, x, z, rotation = 0, entity = null) => { e.addFurniture(type); Object.assign(e._doc.floors[0].furniture.at(-1), { x, z, rotation, entity }); };
  put('pack:mastershort.kitchen:island_bar', 8.0, 3.0, 0);
  put('pack:mastershort.kitchen:coffee_machine', 7.6, 3.1, 0);
  put('pack:mastershort.kitchen:microwave', 8.6, 2.9, 0);
  put('pack:mastershort.kitchen:pendant_trio', 8.0, 3.0, 0, 'light.kueche_links');
  put('pack:mastershort.smarthome:wallbox', 9.9, 2.0, 270);
  put('pack:mastershort.living:arc_lamp', 1.5, 3.0, 90, 'light.stehlampe');
  e.setDoc(structuredClone(e._doc));
`;

const shots = [
  { name: "view-house", query: "?fp3d_stats", width: 1280, height: 800 },
  { name: "view-stacked", query: "", width: 1280, height: 800, click: "Gestapelt" },
  { name: "view-floor-og", query: "", width: 1280, height: 800, click: "Obergeschoss" },
  { name: "view-floor-eg", query: "?fp3d_stats", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-room", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Küche" },
  { name: "view-garage", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Garage" },
  { name: "view-hall", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Flur" },
  { name: "view-tablet-level", query: "?fp3d_stats", width: 1280, height: 800, click: "Tablet", then: "Erdgeschoss" },
  { name: "view-tap-lamp", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Küche", tapAt: [688, 395] },
  { name: "view-high", query: "", width: 1280, height: 800, click: "Hoch", then: "Bad" },
  { name: "view-garden", query: "", width: 1280, height: 800, click: "Gestapelt" },
  { name: "view-sun", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Schlafzimmer" },
  { name: "view-heat", query: "", width: 1280, height: 800, click: "Temp.", then: "Erdgeschoss" },
  { name: "view-blueprint", query: "", width: 1280, height: 800, click: "Blueprint", then: "Erdgeschoss" },
  { name: "view-day", query: "", width: 1280, height: 800, click: "Tag", then: "Erdgeschoss" },
  { name: "view-day-house", query: "", width: 1280, height: 800, click: "Tag" },
  { name: "view-cut", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Schnitt" },
  { name: "view-room-panel", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "tablet-room", query: "", width: 800, height: 1280, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "editor", query: "", width: 1280, height: 800, editor: true },
  { name: "editor-room", query: "", width: 1280, height: 800, editor: true, select: "Wohnzimmer" },
  { name: "editor-devices", query: "", width: 1280, height: 800, editor: true, select: "Küche", scrollSide: true },
  { name: "editor-opening", query: "", width: 1280, height: 800, editor: true, editorState: { _openingId: "o2", _roomId: "wohnen" } },
  { name: "editor-camera-wedge", query: "", width: 1280, height: 800, editor: true, editorState: { _floorId: "eg", _deviceId: "camera.wohnzimmer", _roomId: "wohnen", _tool: "select" } },
  { name: "editor-picture-rules", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[0].furniture.find((m) => m.pictures); e._roomId = 'wohnen'; e._furnitureId = f.id; e.renderRoot.querySelector('aside').scrollTop = 900;" },
  { name: "editor-library", query: "", width: 1280, height: 900, editor: true, editorScript: "e._roomId = 'wohnen'; e._furnQuery = 'sofa';" },
  { name: "editor-split-3d", query: "", width: 1400, height: 900, editor: true, editorScript: "e._split = true; e._furnitureId = 'm2';" },
  { name: "editor-hole-tool", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "hole" } },
  { name: "editor-split-idle", query: "", width: 1400, height: 900, editor: true, editorScript: "e._split = true; e._sidePinned = false;" },
  { name: "editor-front-door", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[0]; const o = f.openings.find((x) => x.style === 'sidelight'); e._roomId = o.room_id; e._openingId = o.id;" },
  { name: "editor-opening-leaves", query: "", width: 1280, height: 800, editor: true, editorState: { _openingId: "o2", _roomId: "wohnen" }, scrollSide: true },
  { name: "editor-furniture", query: "", width: 1280, height: 800, editor: true, editorState: { _furnitureId: "m2" } },
  { name: "editor-parking", query: "", width: 1280, height: 900, editor: true, editorScript: "e._furnitureId = e._doc.floors[0].furniture.find((f) => f.type === 'parking').id;" },
  { name: "editor-furniture-tool", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture", _roomId: "wohnen" } },
  { name: "editor-energy", query: "", width: 1280, height: 1400, editor: true, openDetails: true, scrollSide: true },
  { name: "editor-device", query: "", width: 1280, height: 900, editor: true, editorState: { _deviceId: "light.wohnzimmer_decke", _roomId: "wohnen" } },
  { name: "editor-devlist", query: "", width: 1280, height: 1100, editor: true, editorState: { _roomId: "wohnen" }, scrollSide: true },
  { name: "editor-backup", query: "", width: 1280, height: 1600, editor: true, openDetails: true, scrollSide: true },
  { name: "editor-spots", query: "", width: 1280, height: 1000, editor: true, editorState: { _roomId: "wohnen", _spots: { type: "lamp_downlight", rows: 3, cols: 4, entity: "light.wohnzimmer_decke" } } },
  { name: "editor-measure", query: "", width: 1280, height: 900, editor: true, editorState: { _tool: "measure", _draft: [[14, 6], [18, 6], [18, 9.5]], _measureLen: 4 } },
  { name: "editor-ha-floors", query: "", width: 1280, height: 900, editor: true, editorScript: "e._doc.floors[0].ha_floor = 'erdgeschoss'; e._doc.floors[1].ha_floor = 'obergeschoss'; e._floorMenu = true;" },
  { name: "editor-area-rooms", query: "", width: 1280, height: 900, editor: true, editorScript: "e._doc.floors[0].ha_floor = 'erdgeschoss'; e._doc.floors[1].ha_floor = 'obergeschoss'; e.addFloor(e.freeHaFloors[0]); e.addAreaRooms(e.floor);" },
  { name: "editor-resize", query: "", width: 1280, height: 800, editor: true, editorState: { _furnitureId: "m2" } },
  { name: "view-size-bar", query: "", width: 1280, height: 800, click: "Erdgeschoss", furnishDrag: { id: "m2", dx: 0, dy: 0 } },
  { name: "editor-opening-kinds", query: "", width: 1280, height: 900, editor: true, editorState: { _openingId: "o2", _roomId: "wohnen" } },
  { name: "view-double-door", query: "", width: 1280, height: 800, click: "Wohnzimmer" },
  { name: "editor-packs", query: "", width: 1280, height: 1000, editor: true, editorState: { _tool: "furniture", _roomId: "wohnen" }, scrollSide: true },
  { name: "view-packs", query: "", width: 1280, height: 800, editor: true, editorScript: PACK_SCRIPT, then3d: "Wohnzimmer" },
  { name: "editor-packs-plan", query: "", width: 1280, height: 800, editor: true, editorScript: PACK_SCRIPT },
  { name: "editor-shop", query: "?shop", width: 1280, height: 1000, editor: true, editorState: { _tool: "furniture", _roomId: "wohnen" }, scrollSide: true },
  { name: "editor-shop-key", query: "", width: 1280, height: 1000, editor: true, editorState: { _tool: "furniture", _roomId: "wohnen" }, scrollSide: true },
  { name: "card-editor", query: "?card", width: 1400, height: 900 },
  { name: "card-og-dim", query: "?card&floor=og", width: 1400, height: 900 },
  { name: "card-og-stacked", query: "?card&floor=og&stack=stacked", width: 1400, height: 900 },
  { name: "card-og-single", query: "?card&floor=og&stack=single", width: 1400, height: 900 },
  { name: "view-camera", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "v.onDeviceTap('camera.wohnzimmer', 420, 380);" },
  { name: "view-camera-model", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "const c = v.viewer.controls; c.view.target.set(0.9, 1.2, 0.9); c.view.radius = 4.5; c.view.theta = 2.2; c.view.phi = 1.0; c.events.change(); v.viewer.invalidate();" },
  { name: "view-camera-through", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "v.lookThrough('camera.wohnzimmer'); v._blend = 0.55;", wait: 1400 },
  { name: "view-camera-screen", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Arbeitszimmer", viewScript: "v.markerMode = 'none'; const c = v.viewer.controls; c.view.target.set(8.4, 3.75, 0.2); c.view.radius = 2.2; c.view.theta = 0.3; c.view.phi = 1.2; c.events.change(); v.viewer.invalidate();" },
  { name: "view-media-wall", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Arbeitszimmer", viewScript: "v.markerMode = 'none';" },
  { name: "view-find", query: "", width: 1280, height: 800, viewScript: "v._find = 'licht';" },
  { name: "view-find-go", query: "", width: 1280, height: 800, viewScript: "v._find = 'stehlampe'; setTimeout(() => v.renderRoot.querySelector('.fp3d-find-list button').click(), 300);" },
  { name: "view-quickmenu", query: "", width: 1280, height: 800, click: "Wohnzimmer", viewScript: "v.onDeviceHold('light.wohnzimmer_decke', 520, 420);" },
  { name: "view-quickmenu-cover", query: "", width: 1280, height: 800, viewScript: "v.onDeviceTap('cover.wohnzimmer', 700, 400);" },
  { name: "view-swipe", query: "", width: 1280, height: 800, viewScript: "v.onDeviceSwipe('light.wohnzimmer_decke', 'start', 0, 600, 420); v.onDeviceSwipe('light.wohnzimmer_decke', 'move', -40, 600, 420);" },
  { name: "editor-preview-sofa", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Sofa" },
  { name: "editor-preview-pendant", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Pendelleuchte" },
  { name: "editor-preview-kitchen", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Küchenzeile" },
  { name: "editor-preview-pack", query: "", width: 1280, height: 800, editor: true, editorState: { _tool: "furniture" }, hover: "Kamin" },
  { name: "view-pack-mounts", query: "", width: 1280, height: 800, editor: true, editorScript: PACK_MOUNT_SCRIPT, then3d: "Küche" },
  { name: "editor-package", query: "", width: 1280, height: 900, editor: true, editorScript: "const f = e._doc.floors[1]; e._floorId = f.id; e.applyPackage(f.rooms.find((r) => r.id === 'gast'), 'bedroom'); e.applyPackage(f.rooms.find((r) => r.id === 'kind'), 'kids');" },
  { name: "view-package", query: "", width: 1280, height: 800, editor: true, editorScript: "const f = e._doc.floors[1]; e.applyPackage(f.rooms.find((r) => r.id === 'gast'), 'bedroom');", then3d: "Obergeschoss" },
  { name: "view-furnish", query: "", width: 1280, height: 800, click: "Erdgeschoss", furnishDrag: { id: "m2", dx: -160, dy: 60 } },
  // a tap on the camera's wedge (1.2 m in front of it) selects the camera in the furnish bar
  { name: "view-furnish-camera", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", furnishTap: { x: 1.05, z: 1.05 } },
  { name: "save-failed", query: "?savefail", width: 1280, height: 800, editor: true, editRoomName: "Wohnen", reload: true },
  { name: "tablet", query: "", width: 800, height: 1280, click: "Obergeschoss" },
  { name: "tablet-portrait-house", query: "", width: 800, height: 1280 },
  { name: "tablet-portrait-room", query: "", width: 800, height: 1280, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "phone-floor", query: "", width: 420, height: 800, click: "Erdgeschoss" },
  { name: "card-portrait-room", query: "?card&floor=eg", width: 700, height: 1000, click: "Wohnzimmer" },
  { name: "view-alert-banner", query: "?alerts", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-pro-locked", query: "?nopro", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer", viewScript: "v.lookThrough('camera.wohnzimmer');" },
  { name: "view-weather-rain", query: "?weather=pouring", width: 1280, height: 800, wait: 1200 },
  { name: "view-weather-snow", query: "?weather=snowy", width: 1280, height: 800, wait: 1200 },
  { name: "view-trail", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Spur", wait: 1500 },
  { name: "view-fridge", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Küche", viewScript: "v.markerMode = 'none'; const c = v.viewer.controls; c.view.target.set(6.6, 1.0, 0.8); c.view.radius = 3.6; c.view.theta = -0.75; c.view.phi = 1.2; c.events.change(); v.viewer.invalidate();" },
  { name: "card-alert", query: "?card&alerts", width: 1400, height: 900 },
  { name: "card-scenes", query: "?card&nopanel", width: 1400, height: 900, click: "Wohnzimmer" },
  { name: "card-night", query: "?card&night", width: 1400, height: 900 },
  { name: "card-kiosk-orbit", query: "?card&kiosk", width: 1400, height: 900, wait: 2600 },
  { name: "view-floor-stack-panel", query: "", width: 1280, height: 800, click: "Obergeschoss", then: "Einzeln" },
  { name: "view-room-names-off", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Raumnamen" },
  { name: "empty", query: "?empty", width: 1280, height: 800 },
];

const errors = [];
const only = process.env.SHOTS?.split(",");
for (const shot of shots.filter((s) => !only || only.includes(s.name))) {
  const page = await browser.newPage();
  page.on("pageerror", (e) => errors.push(`${shot.name}: ${e.message}`));
  page.on("console", (m) => m.type() === "error" && !m.location()?.url?.endsWith("favicon.ico") && errors.push(`${shot.name}: ${m.text()}`));
  await page.setViewport({ width: shot.width, height: shot.height, deviceScaleFactor: 1 });
  // every shot starts with the default settings (the panel remembers quality and FPS per device)
  // (only on the first load of the tab, so a reload keeps what the page stored)
  await page.evaluateOnNewDocument(() => {
    if (sessionStorage.getItem("fp3d-shot")) return;
    sessionStorage.setItem("fp3d-shot", "1");
    localStorage.clear();
  });
  await page.goto(base + shot.query, { waitUntil: "networkidle0", timeout: 120000 });
  await new Promise((r) => setTimeout(r, 1200));
  const clickText = async (text) => {
    await page.evaluate((t) => {
      const find = (root) => {
        // exact text, or the first part of a row button ("Flur" in "Flur 12,8 m²")
        for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t || el.firstElementChild?.textContent.trim() === t) return el;
        for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
        return null;
      };
      find(document)?.click();
    }, text);
    await new Promise((r) => setTimeout(r, 1200));
  };
  const hoverText = async (text) => {
    const at = await page.evaluate((t) => {
      const find = (root) => {
        for (const el of root.querySelectorAll("button")) if (el.textContent.trim() === t) return el;
        for (const el of root.querySelectorAll("*")) if (el.shadowRoot) {
          const hit = find(el.shadowRoot);
          if (hit) return hit;
        }
        return null;
      };
      const el = find(document);
      if (!el) return null;
      el.scrollIntoView({ block: "center" });
      const r = el.getBoundingClientRect();
      return [r.left + r.width / 2, r.top + r.height / 2];
    }, text);
    if (at) await page.mouse.move(at[0], at[1]);
    await new Promise((r) => setTimeout(r, 1500));
  };
  if (shot.wait) await new Promise((r) => setTimeout(r, shot.wait));
  if (shot.editor) await clickText("Editor");
  if (shot.select) await clickText(shot.select);
  if (shot.click) await clickText(shot.click);
  if (shot.then) await clickText(shot.then);
  if (shot.tapAt) {
    await page.mouse.click(shot.tapAt[0], shot.tapAt[1]);
    await new Promise((r) => setTimeout(r, 900));
  }
  if (shot.editRoomName) {
    // change a room name through the panel's data controller, wait for the failed save, then reload
    await page.evaluate((name) => {
      const panel = document.querySelector("neonplan3d-panel");
      const b = structuredClone(panel.data.building);
      b.floors[0].rooms[0].name = name;
      panel.data.edit(b);
    }, shot.editRoomName);
    await new Promise((r) => setTimeout(r, 1500));
    if (shot.reload) {
      await page.reload({ waitUntil: "networkidle0", timeout: 120000 });
      await new Promise((r) => setTimeout(r, 1200));
    }
  }
  if (shot.viewScript) {
    // runs with v = the 3D view of the panel (search, quick menu, swipe)
    await page.evaluate((code) => {
      const v = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      new Function("v", code)(v);
    }, shot.viewScript);
    await new Promise((r) => setTimeout(r, 1500));
  }
  if (shot.editorScript) {
    await page.evaluate((code) => {
      const e = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      new Function("e", code)(e);
    }, shot.editorScript);
    await new Promise((r) => setTimeout(r, 1200));
    if (shot.then3d) {
      await clickText("3D");
      await clickText(shot.then3d);
    }
  }
  if (shot.furnishDrag) {
    await clickText("Einrichten");
    // screen position of the item: project its centre with the viewer's camera
    const at = await page.evaluate((id) => {
      const view = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      const v = view.viewer;
      const fv = v.floors.find((f) => f.floor.furniture.some((m) => m.id === id));
      const f = fv.floor.furniture.find((m) => m.id === id);
      const p = v.camera.position.clone().set(f.x, fv.floor.elevation + fv.y + f.h * 0.6, f.z).project(v.camera);
      const r = view.shadowRoot.querySelector("canvas").getBoundingClientRect();
      return [r.left + ((p.x + 1) / 2) * r.width, r.top + ((1 - p.y) / 2) * r.height];
    }, shot.furnishDrag.id);
    await page.mouse.move(at[0], at[1]);
    await page.mouse.down();
    for (let i = 1; i <= 10; i++) await page.mouse.move(at[0] + (shot.furnishDrag.dx * i) / 10, at[1] + (shot.furnishDrag.dy * i) / 10);
    await page.mouse.up();
    await new Promise((r) => setTimeout(r, 1500));
  }
  if (shot.furnishTap) {
    await clickText("Einrichten");
    const at = await page.evaluate((pt) => {
      const view = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-view3d");
      const v = view.viewer;
      const fv = v.floors[0];
      const p = v.camera.position.clone().set(pt.x, fv.floor.elevation + fv.y + 0.02, pt.z).project(v.camera);
      const r = view.shadowRoot.querySelector("canvas").getBoundingClientRect();
      return [r.left + ((p.x + 1) / 2) * r.width, r.top + ((1 - p.y) / 2) * r.height];
    }, shot.furnishTap);
    await page.mouse.click(at[0], at[1]);
    await new Promise((r) => setTimeout(r, 1200));
  }
  if (shot.editorState) {
    await page.evaluate((state) => {
      const editor = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      Object.assign(editor, state);
    }, shot.editorState);
    await new Promise((r) => setTimeout(r, 300));
  }
  if (shot.hover) await hoverText(shot.hover);
  if (shot.openDetails) {
    await page.evaluate(() => {
      const editor = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      for (const d of editor.shadowRoot.querySelectorAll("details.fp3d-section")) d.open = !d.querySelector(".fp3d-library");
    });
    await new Promise((r) => setTimeout(r, 300));
  }
  if (shot.scrollSide) {
    await page.evaluate(() => {
      const editor = document.querySelector("neonplan3d-panel").shadowRoot.querySelector("fp3d-editor");
      const side = editor.shadowRoot.querySelector(".fp3d-side");
      side.scrollTop = side.scrollHeight;
    });
    await new Promise((r) => setTimeout(r, 300));
  }
  await page.screenshot({ path: join(outDir, `${shot.name}.png`) });
  await page.close();
  console.log(`saved ${shot.name}.png`);
}
await browser.close();
server.close();
if (errors.length) {
  console.error("Errors:\n" + errors.join("\n"));
  process.exit(1);
}
