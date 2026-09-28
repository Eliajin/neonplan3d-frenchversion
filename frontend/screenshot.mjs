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

const shots = [
  { name: "view-house", query: "?fp3d_stats", width: 1280, height: 800 },
  { name: "view-stacked", query: "", width: 1280, height: 800, click: "Gestapelt" },
  { name: "view-floor-og", query: "", width: 1280, height: 800, click: "Obergeschoss" },
  { name: "view-floor-eg", query: "?fp3d_stats", width: 1280, height: 800, click: "Erdgeschoss" },
  { name: "view-room", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Küche" },
  { name: "view-cut", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Schnitt" },
  { name: "view-room-panel", query: "", width: 1280, height: 800, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "tablet-room", query: "", width: 800, height: 1280, click: "Erdgeschoss", then: "Wohnzimmer" },
  { name: "editor", query: "", width: 1280, height: 800, editor: true },
  { name: "editor-room", query: "", width: 1280, height: 800, editor: true, select: "Wohnzimmer" },
  { name: "editor-devices", query: "", width: 1280, height: 800, editor: true, select: "Küche", scrollSide: true },
  { name: "tablet", query: "", width: 800, height: 1280, click: "Obergeschoss" },
  { name: "empty", query: "?empty", width: 1280, height: 800 },
];

const errors = [];
for (const shot of shots) {
  const page = await browser.newPage();
  page.on("pageerror", (e) => errors.push(`${shot.name}: ${e.message}`));
  page.on("console", (m) => m.type() === "error" && !m.location()?.url?.endsWith("favicon.ico") && errors.push(`${shot.name}: ${m.text()}`));
  await page.setViewport({ width: shot.width, height: shot.height, deviceScaleFactor: 1 });
  await page.goto(base + shot.query, { waitUntil: "networkidle0" });
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
  if (shot.editor) await clickText("Editor");
  if (shot.select) await clickText(shot.select);
  if (shot.click) await clickText(shot.click);
  if (shot.then) await clickText(shot.then);
  if (shot.scrollSide) {
    await page.evaluate(() => {
      const editor = document.querySelector("floorplan-3d-panel").shadowRoot.querySelector("fp3d-editor");
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
