// 3D view (separate bundle, loaded on demand). Renders only when something changes.

import {
  AdditiveBlending,
  Box3,
  CanvasTexture,
  Color,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Raycaster,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
  type BufferGeometry,
} from "three";
import type { Building, Floor } from "../model.ts";
import { centroid } from "../model.ts";
import { buildFloorGeometry, NEON, type FloorGeometry } from "./build.ts";
import { OrbitControls } from "./controls.ts";

export type Quality = "auto" | "low" | "high";
export type WallMode = "auto" | "cut";

export interface ViewerOptions {
  quality?: Quality;
  onRoomTap?: (floorId: string, roomId: string | null) => void;
  onBack?: () => void;
  onStats?: (stats: ViewerStats) => void;
}

export interface ViewerStats {
  fps: number;
  calls: number;
  triangles: number;
}

interface FloorView {
  floor: Floor;
  group: Group;
  geo: FloorGeometry;
  floorMesh: Mesh;
  buckets: { normal: [number, number] | null; upper: Mesh; upperLines: LineSegments; cutLines: LineSegments }[];
}

export function isLowEnd(): boolean {
  const nav = navigator as Navigator & { deviceMemory?: number };
  const mem = nav.deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency || 8;
  return mem <= 3 || cores <= 4 || /Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent);
}

export class FloorplanViewer {
  private readonly host: HTMLElement;
  private readonly options: ViewerOptions;
  private renderer: WebGLRenderer;
  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(38, 1, 0.1, 300);
  private controls: OrbitControls;
  private readonly labels: HTMLDivElement;
  private readonly root = new Group();
  private readonly gridTexture: CanvasTexture;
  private floors: FloorView[] = [];
  private building: Building | null = null;
  private floorId: string | null = null;
  private roomId: string | null = null;
  private wallMode: WallMode = "auto";
  private frame = 0;
  private disposed = false;
  private readonly resizeObserver: ResizeObserver;
  private fpsFrames = 0;
  private fpsStart = 0;
  private readonly materials = {
    floor: new MeshBasicMaterial({ vertexColors: true }),
    grid: null as MeshBasicMaterial | null,
    wall: new MeshBasicMaterial({ vertexColors: true }),
    edge: new LineBasicMaterial({ color: NEON.edge, transparent: true, opacity: 0.85, blending: AdditiveBlending, depthWrite: false }),
    cut: new LineBasicMaterial({ color: NEON.edge, transparent: true, opacity: 0.95, blending: AdditiveBlending, depthWrite: false }),
  };

  constructor(host: HTMLElement, options: ViewerOptions = {}) {
    this.host = host;
    this.options = options;
    this.renderer = this.makeRenderer(options.quality ?? "auto");
    this.labels = document.createElement("div");
    this.labels.className = "fp3d-labels";
    host.append(this.labels);
    this.gridTexture = makeGridTexture();
    this.materials.grid = new MeshBasicMaterial({
      map: this.gridTexture,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
    });
    this.scene.add(this.root);
    this.controls = this.makeControls();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    document.addEventListener("visibilitychange", this.onVisibility);
    this.resize();
  }

  setQuality(quality: Quality): void {
    const canvas = this.renderer.domElement;
    const next = this.makeRenderer(quality);
    canvas.replaceWith(next.domElement);
    this.renderer.dispose();
    this.renderer = next;
    const view = this.controls.view;
    this.controls.dispose();
    this.controls = this.makeControls();
    this.controls.view = view;
    this.resize();
  }

  setBuilding(building: Building): void {
    const first = this.building === null;
    this.building = building;
    this.rebuild();
    if (first) this.fit(0);
    this.invalidate();
  }

  /** Show one floor (null = all floors stacked). */
  setFloor(floorId: string | null, animate = true): void {
    this.floorId = floorId;
    this.roomId = null;
    this.applyVisibility();
    this.fit(animate ? 700 : 0);
  }

  /** Highlight a room and fly into it (null = back to the floor overview). */
  selectRoom(roomId: string | null): void {
    this.roomId = roomId;
    this.applyHighlight();
    if (!roomId) {
      this.fit(700);
      return;
    }
    const fv = this.floors.find((f) => f.floor.rooms.some((r) => r.id === roomId));
    const room = fv?.floor.rooms.find((r) => r.id === roomId);
    if (!fv || !room) return;
    const [cx, cz] = centroid(room.points);
    const xs = room.points.map((p) => p[0]);
    const zs = room.points.map((p) => p[1]);
    const size = new Vector3(Math.max(...xs) - Math.min(...xs), fv.floor.cut_height, Math.max(...zs) - Math.min(...zs));
    this.controls.flyTo({ target: new Vector3(cx, fv.floor.elevation + 0.3, cz), radius: Math.max(4, this.distanceFor(size) * 1.05), phi: 0.72 });
  }

  setWallMode(mode: WallMode): void {
    this.wallMode = mode;
    this.invalidate();
  }

  resetView(): void {
    this.fit(700);
  }

  dispose(): void {
    this.disposed = true;
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", this.onVisibility);
    this.controls.dispose();
    this.clear();
    for (const m of Object.values(this.materials)) m?.dispose();
    this.gridTexture.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
    this.labels.remove();
  }

  invalidate(): void {
    if (this.frame || this.disposed || document.hidden) return;
    this.frame = requestAnimationFrame((t) => this.render(t));
  }

  // ------------------------------------------------------------------ internals

  private makeRenderer(quality: Quality): WebGLRenderer {
    const low = quality === "low" || (quality === "auto" && isLowEnd());
    const renderer = new WebGLRenderer({ antialias: !low, alpha: true, powerPreference: low ? "low-power" : "default" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1 : 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.domElement.className = "fp3d-canvas";
    this.host.prepend(renderer.domElement);
    return renderer;
  }

  private makeControls(): OrbitControls {
    return new OrbitControls(this.renderer.domElement, this.camera, {
      change: () => this.invalidate(),
      tap: (x, y) => this.onTap(x, y),
      doubleTap: () => this.options.onBack?.(),
    });
  }

  private readonly onVisibility = () => {
    if (!document.hidden) this.invalidate();
  };

  private resize(): void {
    const w = this.host.clientWidth || 1;
    const h = this.host.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.invalidate();
  }

  private clear(): void {
    for (const fv of this.floors) {
      fv.group.traverse((o) => {
        const g = (o as Mesh).geometry as BufferGeometry | undefined;
        g?.dispose();
      });
      this.root.remove(fv.group);
    }
    this.floors = [];
    this.labels.replaceChildren();
  }

  private rebuild(): void {
    this.clear();
    const b = this.building;
    if (!b) return;
    for (const floor of b.floors) {
      const geo = buildFloorGeometry(floor, b.settings.wall_exterior, b.settings.wall_interior);
      const group = new Group();
      group.position.y = floor.elevation;
      const floorMesh = new Mesh(geo.floor, this.materials.floor);
      const grid = new Mesh(geo.floor, this.materials.grid!);
      grid.renderOrder = 1;
      group.add(floorMesh, grid, new Mesh(geo.lower, this.materials.wall));
      const buckets = geo.buckets.map((bk) => {
        const upper = new Mesh(bk.upper, this.materials.wall);
        const upperLines = new LineSegments(bk.upperLines, this.materials.edge);
        const cutLines = new LineSegments(bk.cutLines, this.materials.cut);
        group.add(upper, upperLines, cutLines);
        return { normal: bk.normal, upper, upperLines, cutLines };
      });
      this.root.add(group);
      this.floors.push({ floor, group, geo, floorMesh, buckets });
      for (const room of floor.rooms) {
        const pin = document.createElement("button");
        pin.className = "fp3d-pin";
        pin.dataset.room = room.id;
        pin.dataset.floor = floor.id;
        pin.textContent = room.name || "–";
        pin.addEventListener("click", () => this.options.onRoomTap?.(floor.id, room.id));
        this.labels.append(pin);
      }
    }
    if (this.floorId && !b.floors.some((f) => f.id === this.floorId)) this.floorId = null;
    this.applyVisibility();
    this.applyHighlight();
  }

  private visibleFloors(): FloorView[] {
    return this.floors.filter((f) => this.floorId === null || f.floor.id === this.floorId);
  }

  private applyVisibility(): void {
    for (const fv of this.floors) fv.group.visible = this.floorId === null || fv.floor.id === this.floorId;
    this.invalidate();
  }

  private applyHighlight(): void {
    for (const fv of this.floors) {
      const colors = fv.geo.floor.getAttribute("color");
      const base = new Color(NEON.floor);
      const active = new Color(NEON.floorActive);
      for (const r of fv.geo.roomTris) {
        const c = r.roomId === this.roomId ? active : base;
        for (let v = r.start * 3; v < r.end * 3; v++) colors.setXYZ(v, c.r, c.g, c.b);
      }
      colors.needsUpdate = true;
    }
    for (const pin of this.labels.querySelectorAll<HTMLElement>(".fp3d-pin")) {
      pin.classList.toggle("fp3d-pin-active", pin.dataset.room === this.roomId);
    }
    this.invalidate();
  }

  private fit(duration: number): void {
    const box = new Box3();
    for (const fv of this.visibleFloors()) {
      for (const room of fv.floor.rooms) {
        for (const [x, z] of room.points) {
          box.expandByPoint(new Vector3(x, fv.floor.elevation, z));
          box.expandByPoint(new Vector3(x, fv.floor.elevation + fv.floor.height, z));
        }
      }
    }
    if (box.isEmpty()) box.set(new Vector3(-4, 0, -4), new Vector3(4, 2.5, 4));
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const radius = Math.max(8, this.distanceFor(size) * 1.02);
    this.controls.maxRadius = Math.max(40, radius * 3);
    center.y = box.min.y + size.y * 0.3;
    this.controls.flyTo({ target: center, radius, phi: 0.85, theta: -0.6 }, duration);
  }

  /** Camera distance at which a box of this size fits the view (bounding sphere against the narrower field of view). */
  private distanceFor(size: Vector3): number {
    const vfov = (this.camera.fov * Math.PI) / 180;
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * this.camera.aspect);
    return size.length() / 2 / Math.sin(Math.min(vfov, hfov) / 2);
  }

  private onTap(x: number, y: number): void {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new Vector2((x / rect.width) * 2 - 1, -(y / rect.height) * 2 + 1);
    const ray = new Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const meshes = this.visibleFloors().map((f) => f.floorMesh);
    const hit = ray.intersectObjects(meshes, false)[0];
    if (!hit || hit.faceIndex == null) {
      this.options.onRoomTap?.(this.floorId ?? "", null);
      return;
    }
    const fv = this.floors.find((f) => f.floorMesh === hit.object)!;
    const tri = hit.faceIndex;
    const room = fv.geo.roomTris.find((r) => tri >= r.start && tri < r.end);
    this.options.onRoomTap?.(fv.floor.id, room?.roomId ?? null);
  }

  private render(now: number): void {
    this.frame = 0;
    if (this.disposed) return;
    const moving = this.controls.update(now);
    this.updateWalls();
    this.renderer.render(this.scene, this.camera);
    this.updateLabels();
    this.reportStats(now, moving);
    if (moving) this.invalidate();
  }

  /** Upper wall parts facing the camera fold down to the cut height. */
  private updateWalls(): void {
    const cam = this.camera.position;
    const t = this.controls.view.target;
    const dx = cam.x - t.x;
    const dz = cam.z - t.z;
    const l = Math.hypot(dx, dz) || 1;
    for (const fv of this.floors) {
      for (const bk of fv.buckets) {
        // exterior walls facing the camera fold down; in a room, the interior walls fold down as well
        let show = this.wallMode !== "cut";
        if (show && bk.normal) show = (bk.normal[0] * dx) / l + (bk.normal[1] * dz) / l < 0.25;
        else if (show && this.roomId) show = false;
        bk.upper.visible = show;
        bk.upperLines.visible = show;
        bk.cutLines.visible = !show;
      }
    }
  }

  private updateLabels(): void {
    const w = this.host.clientWidth;
    const h = this.host.clientHeight;
    const v = new Vector3();
    for (const pin of this.labels.children as HTMLCollectionOf<HTMLElement>) {
      const fv = this.floors.find((f) => f.floor.id === pin.dataset.floor);
      const room = fv?.floor.rooms.find((r) => r.id === pin.dataset.room);
      // with several floors stacked, room labels would show through the floors above
      const stacked = this.floorId === null && this.floors.length > 1;
      if (!fv || !room || !fv.group.visible || stacked) {
        pin.hidden = true;
        continue;
      }
      const [cx, cz] = centroid(room.points);
      v.set(cx, fv.floor.elevation + 0.05, cz).project(this.camera);
      const off = v.z > 1 || Math.abs(v.x) > 1.1 || Math.abs(v.y) > 1.1;
      pin.hidden = off;
      if (!off) pin.style.transform = `translate(${((v.x + 1) / 2) * w}px, ${((1 - v.y) / 2) * h}px) translate(-50%, -50%)`;
    }
  }

  private reportStats(now: number, moving: boolean): void {
    if (!this.options.onStats) return;
    if (!this.fpsStart) this.fpsStart = now;
    this.fpsFrames++;
    const elapsed = now - this.fpsStart;
    if (elapsed > 500 || !moving) {
      const info = this.renderer.info.render;
      this.options.onStats({ fps: moving ? Math.round((this.fpsFrames * 1000) / elapsed) : 0, calls: info.calls, triangles: info.triangles });
      this.fpsFrames = 0;
      this.fpsStart = now;
    }
  }
}

/** Faint cyan grid: 1 texture tile = 1 m, lines every 0.5 m. */
function makeGridTexture(): CanvasTexture {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.strokeStyle = "rgba(55,224,255,0.10)";
  ctx.lineWidth = 2;
  for (const p of [1, size / 2]) {
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, size);
    ctx.moveTo(0, p);
    ctx.lineTo(size, p);
    ctx.stroke();
  }
  const tex = new CanvasTexture(canvas);
  tex.wrapS = RepeatWrapping;
  tex.wrapT = RepeatWrapping;
  tex.anisotropy = 4;
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

export function createViewer(host: HTMLElement, options?: ViewerOptions): FloorplanViewer {
  return new FloorplanViewer(host, options);
}
