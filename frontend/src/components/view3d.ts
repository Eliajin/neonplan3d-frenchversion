// Lit wrapper around the lazily loaded 3D viewer.

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import {
  appColor,
  areaEntities,
  entityName,
  furnitureEntities,
  isActive,
  isUnavailable,
  kindOf,
  lightGlow,
  openingEntities,
  openingState,
  TOGGLE_KINDS,
  type FurnitureLinks,
  type OpeningEntities,
} from "../devices.ts";
import { iconPath, iconSvg } from "../icons.ts";
import { energySummary, findConsumers, flowColor, flowSegments, powerSensorFor, readPower, type Consumer, type EnergySummary } from "../energy.ts";
import { STAGE, type Theme } from "../themes.ts";
import { HEAT_SCALES, heatColor, heatGradient, roomValues, type HeatMode } from "../heatmap.ts";
import { furnitureName } from "../furniture-names.ts";
import { formatNumber, translate } from "../i18n.ts";
import { getPacks, packsVersion } from "../packs.ts";
import { searchIndex, searchItems, type SearchItem } from "../search.ts";
import { coverPositionable, lightAbilities } from "./quick-menu.ts";
import "./quick-menu.ts";
import { load3d } from "../load3d.ts";
import { buildMarkers, openMoreInfo, placedEntities, stateText, toggleEntity } from "../markers.ts";
import { isLamp, outdoorGround, pointInPolygon, surfaceHeight, type Building, type Furniture } from "../model.ts";
import { floorCounts, floorInfoText, personsInRooms } from "../presence.ts";
import { tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import type { DeviceMarker, FloorplanViewer, LampModel, Quality, ScreenState, ViewerStats, WallMode } from "../viewer/viewer3d.ts";

/** Which HTML markers are shown: none, only what has no 3D object or shows a value, or all. */
export type MarkerMode = "none" | "important" | "all";

const LAMP_MODEL: Record<string, LampModel> = {
  lamp_ceiling: "ceiling",
  lamp_downlight: "downlight",
  lamp_spot: "spot",
  lamp_panel: "panel",
  lamp_uplight: "uplight",
  lamp_bollard: "bollard",
  lamp_garden: "garden",
  lamp_pendant: "pendant",
  lamp_floor: "floor",
  lamp_table: "table",
  lamp_wall: "wall",
  led_strip: "strip",
};

export class Fp3dView3d extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    floorId: { attribute: false },
    roomId: { attribute: false },
    wallMode: { attribute: false },
    explode: { type: Boolean },
    markerMode: { attribute: false },
    heatMode: { attribute: false },
    theme: { attribute: false },
    packs: { attribute: false },
    showEnergy: { attribute: false },
    flows: { attribute: false },
    furnish: { type: Boolean },
    selectedFurniture: { attribute: false },
    _sky: { state: true },
    quality: { attribute: false },
    showStats: { type: Boolean },
    _stats: { state: true },
    _error: { state: true },
    _energy: { state: true },
    _flows: { state: true },
    _swipe: { state: true },
    _menu: { state: true },
    _find: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building | null;
  declare floorId: string | null;
  declare roomId: string | null;
  declare wallMode: WallMode;
  declare explode: boolean;
  declare markerMode: MarkerMode;
  declare heatMode: HeatMode;
  /** Imported furniture packs (a new list rebuilds pack furniture). */
  declare packs: unknown;
  declare theme: Theme;
  /** Show the energy values at the top (cards can switch them off). */
  declare showEnergy: boolean;
  /** Power flow lines fixed on or off (cards); null: the viewer's own toggle decides. */
  declare flows: boolean | null;
  /** Furnishing: furniture and lamps are dragged in 3D (admins, panel only). */
  declare furnish: boolean;
  declare selectedFurniture: string | null;
  /** How much daylight there is (0 = night, 1 = day), from sun.sun. */
  private declare _sky: number;
  declare quality: Quality;
  declare showStats: boolean;
  private declare _stats: ViewerStats | null;
  private declare _error: string | null;
  private declare _energy: EnergySummary | null;
  /** A running swipe on a lamp or blind: the value shown next to the finger. */
  private declare _swipe: { entity: string; kind: "light" | "cover"; start: number; value: number; x: number; y: number } | null;
  /** Quick menu at a device (long press). */
  private declare _menu: { entity: string; x: number; y: number } | null;
  /** Search ("where is …?"): null = closed. */
  private declare _find: string | null;
  private swipeSent = 0;
  private swipeTimer: ReturnType<typeof setTimeout> | undefined;
  /** Energy cables from the meter to the consumers (off unless switched on; kept per browser). */
  private declare _flows: boolean;

  private viewer: FloorplanViewer | null = null;
  private starting = false;
  /** States of the placed entities as last sent to the viewer. */
  private shownStates = new Map<string, HassEntity | undefined>();
  private shownPacks = -1;
  /** Entities of each door and window, and the registry they were matched with. */
  private openingLinks: Map<string, OpeningEntities> | null = null;
  private linkedRegistry: HomeAssistant["entities"] | undefined;
  /** Entities of electric furniture (TV, fridge, …). */
  private furnitureLinks = new Map<string, FurnitureLinks>();
  /** Room values of the current heatmap (for the legend). */
  private heatValues = new Map<string, number>();
  /** Entities whose state changes redraw markers, cables, people and floor labels. */
  private watched: string[] = [];

  constructor() {
    super();
    this.building = null;
    this.floorId = null;
    this.roomId = null;
    this.wallMode = "auto";
    this.explode = true;
    this.markerMode = "important";
    this.heatMode = "none";
    this.theme = "neon";
    this.furnish = false;
    this.showEnergy = true;
    this.flows = null;
    this.selectedFurniture = null;
    this._sky = 0;
    this.quality = "auto";
    this.showStats = false;
    this._stats = null;
    this._error = null;
    this._energy = null;
    this._swipe = null;
    this._menu = null;
    this._find = null;
    try {
      this._flows = localStorage.getItem("floorplan_3d.flows") === "1";
    } catch {
      this._flows = false;
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (this.hasUpdated && !this.viewer) void this.start();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.viewer?.dispose();
    this.viewer = null;
  }

  protected firstUpdated(): void {
    void this.start();
  }

  private async start(): Promise<void> {
    if (this.starting || this.viewer) return;
    this.starting = true;
    try {
      const mod = await load3d();
      if (!this.isConnected) return;
      const host = this.renderRoot.querySelector(".fp3d-stage") as HTMLElement;
      this.viewer = mod.createViewer(host, {
        quality: this.quality,
        explode: this.explode,
        onRoomTap: (floorId, roomId) => this.fire("room-tap", { floorId, roomId }),
        onFloorTap: (floorId) => this.fire("floor-tap", { floorId }),
        floorInfo: (floor) =>
          floor.rooms.length === 1 ? translate(this.hass, "floor_rooms_one") : translate(this.hass, "floor_rooms", { n: floor.rooms.length }),
        onBack: () => this.fire("back", {}),
        onDeviceTap: (id) => this.onDeviceTap(id),
        onDeviceHold: (id, x, y) => this.onDeviceHold(id, x, y),
        onDeviceSwipe: (id, phase, dy, x, y) => this.onDeviceSwipe(id, phase, dy, x, y),
        onFurnitureSelect: (id) => this.fire("furniture-select", { id }),
        onFurnitureMove: (id, x, z) => this.fire("furniture-move", { id, x, z }),
        // stats can be switched on at any time; they only cause updates while shown
        onStats: (s) => {
          if (this.showStats) this._stats = s;
        },
      });
      this.viewer.setWallMode(this.wallMode);
      this.viewer.setTheme(this.theme);
      this.viewer.setFurnishMode(this.furnish);
      this.viewer.setPacks([...getPacks()]);
      this.shownPacks = packsVersion();
      if (this.building) this.viewer.setBuilding(this.building);
      this.syncDevices(true);
      this.viewer.setFloor(this.floorId, false);
      if (this.roomId) this.viewer.selectRoom(this.roomId);
    } catch (err) {
      this._error = String(err);
    } finally {
      this.starting = false;
    }
  }

  protected updated(changed: PropertyValues): void {
    const v = this.viewer;
    if (!v) return;
    // packs arrive with the building (or after an import): the viewer rebuilds pack furniture
    if (this.shownPacks !== packsVersion()) {
      this.shownPacks = packsVersion();
      v.setPacks([...getPacks()]);
    }
    if (changed.has("building") && this.building) v.setBuilding(this.building);
    if (changed.has("building") || changed.has("hass") || changed.has("markerMode") || changed.has("heatMode") || changed.has("flows")) {
      this.syncDevices(changed.has("building") || changed.has("markerMode") || changed.has("heatMode") || changed.has("flows"));
    }
    if (changed.has("floorId")) v.setFloor(this.floorId);
    if (changed.has("roomId") && (this.roomId || changed.get("roomId"))) v.selectRoom(this.roomId);
    if (changed.has("wallMode")) v.setWallMode(this.wallMode);
    if (changed.has("explode")) v.setExplode(this.explode);
    if (changed.has("theme")) v.setTheme(this.theme);
    if (changed.has("furnish")) v.setFurnishMode(this.furnish);
    if (changed.has("selectedFurniture")) v.selectFurniture(this.selectedFurniture);
    if (changed.has("quality") && changed.get("quality") !== undefined) v.setQuality(this.quality);
  }

  /**
   * Send device markers, door/window states, energy cables, people and floor label texts to the viewer
   * when a watched entity changed (or the building). Openings are matched with entities again when
   * the building or the entity registry changes.
   */
  private syncDevices(force: boolean): void {
    const v = this.viewer;
    const b = this.building;
    if (!v || !b || !this.hass) return;
    const hass = this.hass;
    if (force || !this.openingLinks || this.linkedRegistry !== hass.entities) {
      this.openingLinks = openingEntities(hass, b.floors);
      this.furnitureLinks = furnitureEntities(hass, b.floors);
      this.linkedRegistry = hass.entities;
      const links = [...this.openingLinks.values()].flatMap((e) => [e.cover, e.contact, e.tilt, e.contact2 ?? null]);
      const placed = placedEntities(b);
      const power = placed.map((id) => powerSensorFor(hass, id));
      const e = b.energy;
      const presence = b.presence.flatMap((p) => [p.person, p.sensor]);
      const lights = b.floors.flatMap((f) => f.rooms.flatMap((r) => areaEntities(hass, r.area_id).filter((id) => kindOf(id) === "light")));
      const furniture = [...this.furnitureLinks.values()].flatMap((l) => [l.entity, l.power]);
      const heat =
        this.heatMode === "none"
          ? []
          : b.floors.flatMap((f) => f.rooms.flatMap((r) => areaEntities(hass, r.area_id).filter((id) => id.startsWith("sensor."))));
      const all = [...placed, ...links, ...power, ...furniture, e.grid, e.solar, e.battery, e.battery_soc, e.tariff, ...presence, ...lights, ...heat, "sun.sun"];
      this.watched = [...new Set(all.filter((id): id is string => !!id))];
      force = true;
    }
    const changed = force || this.watched.some((id) => this.shownStates.get(id) !== hass.states[id]);
    if (!changed) return;
    this.shownStates = new Map(this.watched.map((id) => [id, hass.states[id]]));

    const consumers = findConsumers(hass, b);
    const deviceMarkers = buildMarkers(hass, b);
    const furniture = this.furnitureMarkers(hass, b, new Set(deviceMarkers.map((m) => m.id)), new Set(consumers.map((c) => c.powerEntity)));
    consumers.push(...furniture.consumers);
    const summary = energySummary(hass, b, consumers);
    // a placed power sensor shows its value as state text already, so only devices get a watt badge
    const byDevice = new Map(consumers.filter((c) => c.id !== c.powerEntity).map((c) => [c.id, c.power]));
    v.setDevices(
      [...deviceMarkers, ...furniture.markers].map((m) => {
        const power = byDevice.get(m.id) ?? null;
        const marker = { ...m, power, powerText: power === null ? undefined : formatPower(hass, power) };
        return { ...marker, pin: this.showPin(marker) };
      }),
    );
    v.setPickTargets(furniture.targets, this.openingTargets());
    v.setScreens(furniture.screens);
    const types = new Map(b.floors.flatMap((f) => f.openings.map((o) => [o.id, o.type] as const)));
    v.setOpeningStates(new Map([...this.openingLinks!].map(([id, e]) => [id, openingState(hass, e, types.get(id))])));
    const batteryPlaced = b.energy.battery ? b.floors.flatMap((f) => f.placements.filter((p) => p.entity_id === b.energy.battery).map((p) => ({ floorId: f.id, x: p.x, z: p.z })))[0] : null;
    v.setFlows(
      !(this.flows ?? this._flows)
        ? []
        : flowSegments({ building: b, consumers, summary, battery: batteryPlaced ?? null }).map((f) => ({
        floorId: f.floorId,
        a: f.a,
        b: f.b,
        dist: f.dist,
        power: f.power,
        color: flowColor(f.kind, summary),
      })),
    );
    const persons = personsInRooms(hass, b);
    v.setPersons(persons);
    const counts = floorCounts(hass, b, this.openingLinks!, persons);
    v.setFloorInfo(new Map([...counts].map(([id, c]) => [id, floorInfoText(hass, c)])));
    // daylight: sun through the windows and a lighter sky
    const sun = hass.states["sun.sun"]?.attributes;
    const elevation = typeof sun?.elevation === "number" ? sun.elevation : null;
    v.setSun(elevation !== null && typeof sun?.azimuth === "number" ? { elevation, azimuth: sun.azimuth } : null);
    this._sky = elevation === null ? 0 : Math.min(1, Math.max(0, (elevation + 4) / 16));
    // heatmap
    if (this.heatMode === "none") v.setRoomTint(null);
    else {
      const mode = this.heatMode;
      const values = roomValues(hass, b, mode);
      this.heatValues = values;
      v.setRoomTint(new Map([...values].map(([id, value]) => [id, heatColor(mode, value)])));
    }
    const hasEnergy = summary.grid !== null || summary.solar !== null || summary.battery !== null || summary.tariff !== null;
    this._energy = hasEnergy ? summary : null;
  }

  /**
   * Markers, energy consumers and lit screens of furniture with linked entities. Entities that are
   * placed as devices as well keep their device marker.
   */
  private furnitureMarkers(
    hass: HomeAssistant,
    b: Building,
    taken: Set<string>,
    consumerSensors: Set<string>,
  ): { markers: (DeviceMarker & { fromFurniture: boolean })[]; consumers: Consumer[]; screens: Map<string, ScreenState>; targets: Map<string, string> } {
    const markers: (DeviceMarker & { fromFurniture: boolean })[] = [];
    const consumers: Consumer[] = [];
    const screens = new Map<string, ScreenState>();
    const targets = new Map<string, string>();
    for (const floor of b.floors) {
      for (const f of floor.furniture) {
        const link = this.furnitureLinks.get(f.id);
        if (isLamp(f.type)) {
          markers.push(this.lampMarker(hass, floor, f, link?.entity ?? null));
          continue;
        }
        if (!link) continue;
        targets.set(f.id, link.entity ?? link.power!);
        const id = link.entity ?? link.power!;
        const st = link.entity ? hass.states[link.entity] : undefined;
        const power = link.power ? readPower(hass.states[link.power]) : null;
        if (link.power && power !== null && !consumerSensors.has(link.power)) {
          consumerSensors.add(link.power);
          consumers.push({ id, powerEntity: link.power, floorId: floor.id, x: f.x, z: f.z, power: Math.max(0, power) });
        }
        const running = (power ?? 0) > 10 || st?.state === "on" || st?.state === "running";
        if (f.type === "radiator" && st && kindOf(st.entity_id) === "climate") {
          // glows while it heats; brighter the further the room is below its target
          const a = st.attributes;
          if (a.hvac_action === "heating") {
            const gap = typeof a.temperature === "number" && typeof a.current_temperature === "number" ? a.temperature - a.current_temperature : 1;
            screens.set(f.id, { color: [1, 0.42, 0.1], level: Math.min(1, 0.45 + 0.25 * Math.max(0, gap)) });
          }
        } else if ((f.type === "washer" || f.type === "dryer" || f.type === "dishwasher") && running) {
          screens.set(f.id, { color: [0.3, 0.85, 1], level: 0.8 });
        }
        if (st && (f.type === "tv_board" || f.type === "tv_wall" || f.type === "desk")) {
          const color = kindOf(st.entity_id) === "media" ? appColor(st) : isActive(st) ? ([0.22, 0.88, 1] as [number, number, number]) : null;
          const picture = kindOf(st.entity_id) === "media" ? ((st.attributes.entity_picture as string | undefined) ?? null) : null;
          if (color) screens.set(f.id, { color, level: st.state === "playing" ? 1 : 0.6, picture });
        }
        if (taken.has(id)) continue;
        taken.add(id);
        const kind = link.entity ? kindOf(link.entity) : null;
        const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
        markers.push({
          id,
          floorId: floor.id,
          roomId: room?.id ?? null,
          x: f.x,
          z: f.z,
          y: markerHeight(f),
          icon: iconSvg(kind ?? "switch"),
          name: link.entity ? entityName(hass, link.entity) : furnitureName(hass, f.type),
          text: st ? stateText(hass, st) : power !== null ? formatPower(hass, Math.max(0, power)) : "",
          active: st ? isActive(st) : (power ?? 0) > 5,
          unavailable: st ? isUnavailable(st) : false,
          glow: null,
          fromFurniture: true,
        });
      }
    }
    return { markers, consumers, screens, targets };
  }

  /** A lamp: its 3D model glows with the linked light and is tapped directly. */
  private lampMarker(hass: HomeAssistant, floor: Building["floors"][number], f: Furniture, entity: string | null): DeviceMarker & { fromFurniture: boolean } {
    const st = entity ? hass.states[entity] : undefined;
    const model = LAMP_MODEL[f.type];
    const base = model === "table" ? surfaceHeight(floor, f.x, f.z) : model === "bollard" || model === "garden" ? outdoorGround(floor, f.x, f.z) : 0;
    const room = floor.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const H = floor.height;
    const y = {
      ceiling: H - 0.3,
      downlight: H - 0.25,
      spot: H - 0.35,
      panel: H - 0.25,
      pendant: Math.max(0.6, H - f.h - 0.25),
      floor: f.h + 0.25,
      uplight: f.h + 0.25,
      table: base + f.h + 0.2,
      wall: 2.1,
      strip: H - 0.25,
      bollard: base + f.h + 0.25,
      garden: base + f.h + 0.25,
    }[model];
    return {
      // a lamp without a light keeps a key of its own (it is drawn, but not tappable)
      id: entity ?? `lamp:${f.id}`,
      floorId: floor.id,
      roomId: room?.id ?? null,
      x: f.x,
      z: f.z,
      y,
      icon: iconSvg("light"),
      name: entity ? entityName(hass, entity) : furnitureName(hass, f.type),
      text: st ? stateText(hass, st) : "",
      active: st ? isActive(st) : false,
      unavailable: st ? isUnavailable(st) : false,
      glow: st ? lightGlow(st) : null,
      lamp: model,
      rotation: f.rotation,
      size: [f.w, f.d, f.h],
      base,
      pickable: !!entity,
      furnitureId: f.id,
      effect: !!st && st.state === "on" && typeof st.attributes.effect === "string" && !/^(none|off|solid|static|normal)$/i.test(st.attributes.effect),
      variant: f.variant,
      fromFurniture: true,
    };
  }

  /**
   * Marker rule: "important" leaves out devices that their 3D object stands for (lamps, a TV that is
   * off) and keeps devices without an object (sensors, heating, switches) and values (watts, the app).
   */
  private showPin(m: DeviceMarker & { fromFurniture?: boolean }): boolean {
    if (this.markerMode === "none") return false;
    if (this.markerMode === "all") return true;
    if (m.lamp) return false;
    const kind = kindOf(m.id);
    if (kind === "light") return false;
    if (m.fromFurniture) return (m.power ?? 0) >= 1 || (kind === "media" && m.active);
    return true;
  }

  /** Tapping a window opens its blind (or contact); a door or garage door its cover or contact. */
  private openingTargets(): Map<string, string> {
    const out = new Map<string, string>();
    for (const [id, e] of this.openingLinks ?? []) {
      const target = e.cover ?? e.contact ?? e.tilt;
      if (target) out.set(id, target);
    }
    return out;
  }

  /** Long press: the quick menu at the device, or the details for devices without one. */
  private onDeviceHold(entityId: string, x: number, y: number): void {
    const kind = kindOf(entityId);
    if (kind === "light" || kind === "cover" || kind === "switch" || kind === "fan" || kind === "lock") this._menu = { entity: entityId, x, y };
    else openMoreInfo(this, entityId);
  }

  /** Swipe up or down on a lamp (brightness) or a blind (position). */
  private onDeviceSwipe(entityId: string, phase: "start" | "move" | "end", dy: number, x: number, y: number): boolean {
    const st = this.hass?.states[entityId];
    if (phase === "start") {
      if (!st || isUnavailable(st)) return false;
      const kind = kindOf(entityId);
      if (kind === "light" && lightAbilities(st).dim) {
        const pct = st.state === "on" ? (typeof st.attributes.brightness === "number" ? Math.round((st.attributes.brightness as number) / 2.55) : 100) : 0;
        this._swipe = { entity: entityId, kind: "light", start: pct, value: pct, x, y };
        return true;
      }
      if (kind === "cover" && coverPositionable(st)) {
        const pos = st.attributes.current_position as number;
        this._swipe = { entity: entityId, kind: "cover", start: pos, value: pos, x, y };
        return true;
      }
      return false;
    }
    const s = this._swipe;
    if (!s || s.entity !== entityId) return false;
    if (phase === "move") {
      // the whole range over about 220 pixels; up = brighter / blind up
      const value = Math.round(Math.min(100, Math.max(0, s.start - (dy / 220) * 100)));
      if (value !== s.value) this._swipe = { ...s, value };
      // at most a few calls per second while the finger moves
      const now = performance.now();
      if (now - this.swipeSent > 350) {
        this.swipeSent = now;
        this.applySwipe();
      }
    } else {
      this.applySwipe();
      clearTimeout(this.swipeTimer);
      this.swipeTimer = setTimeout(() => (this._swipe = null), 700);
    }
    return true;
  }

  private applySwipe(): void {
    const s = this._swipe;
    if (!s || !this.hass) return;
    if (s.kind === "light") {
      if (s.value <= 0) void this.hass.callService("light", "turn_off", { entity_id: s.entity });
      else void this.hass.callService("light", "turn_on", { entity_id: s.entity, brightness_pct: s.value });
    } else void this.hass.callService("cover", "set_cover_position", { entity_id: s.entity, position: s.value });
  }

  /** Fly to a search result: rooms are selected, devices shown on their floor and flashing. */
  private goTo(item: SearchItem): void {
    this._find = null;
    if (item.kind === "room") {
      this.fire("room-tap", { floorId: item.floorId, roomId: item.roomId });
      return;
    }
    if (this.floorId !== item.floorId) this.fire("floor-tap", { floorId: item.floorId });
    // after the host has switched the floor (its own camera flight starts first)
    setTimeout(() => this.viewer?.focus(item.floorId, item.x, item.z, item.y, item.entity), 120);
  }

  private renderFind() {
    const b = this.building;
    if (!b || !this.hass) return nothing;
    if (this._find === null) {
      return html`<button class="fp3d-find-btn" title=${translate(this.hass, "find")} aria-label=${translate(this.hass, "find")} @click=${() => (this._find = "")}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;
    }
    const results = searchItems(searchIndex(this.hass, b), this._find);
    return html`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${translate(this.hass, "find_placeholder")}
        .value=${this._find}
        @input=${(e: Event) => (this._find = (e.target as HTMLInputElement).value)}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Escape") this._find = null;
          if (e.key === "Enter" && results[0]) this.goTo(results[0]);
        }}
      />
      <button class="fp3d-find-close" aria-label=${translate(this.hass, "close")} @click=${() => (this._find = null)}>✕</button>
      ${this._find.trim()
        ? html`<div class="fp3d-find-list">
            ${results.length
              ? results.map(
                  (it) => html`<button @click=${() => this.goTo(it)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${it.icon ? iconPath(it.icon) : "M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${it.name}</b>${it.where ? html`<small>${it.where}</small>` : nothing}</span>
                  </button>`,
                )
              : html`<p>${translate(this.hass, "find_none")}</p>`}
          </div>`
        : nothing}
    </div>`;
  }

  private renderSwipe() {
    const s = this._swipe;
    if (!s || !this.hass) return nothing;
    const off = s.kind === "light" && s.value <= 0;
    return html`<div class="fp3d-swipe" style="left:${s.x}px;top:${s.y}px">
      <span>${entityName(this.hass, s.entity)}</span>
      <b>${off ? translate(this.hass, "swipe_off") : `${s.value} %`}</b>
      <i><em style="height:${s.value}%"></em></i>
    </div>`;
  }

  private renderMenu() {
    const m = this._menu;
    if (!m || !this.hass) return nothing;
    const stage = this.renderRoot.querySelector(".fp3d-stage") as HTMLElement | null;
    const w = stage?.clientWidth ?? 800;
    const h = stage?.clientHeight ?? 600;
    const left = Math.max(8, Math.min(w - 240, m.x - 116));
    const top = Math.max(8, Math.min(h - 360, m.y - 170));
    return html`<div class="fp3d-menu-backdrop" @click=${() => (this._menu = null)}></div>
      <fp3d-quick-menu style="left:${left}px;top:${top}px" .hass=${this.hass} .entity=${m.entity} @close=${() => (this._menu = null)}></fp3d-quick-menu>`;
  }

  private onDeviceTap(entityId: string): void {
    const kind = kindOf(entityId);
    if (kind && TOGGLE_KINDS.has(kind)) void toggleEntity(this.hass, entityId);
    else openMoreInfo(this, entityId);
  }

  resetView(): void {
    this.viewer?.resetView();
  }

  private fire(type: string, detail: unknown): void {
    this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  }

  private toggleFlows(): void {
    this._flows = !this._flows;
    try {
      localStorage.setItem("floorplan_3d.flows", this._flows ? "1" : "0");
    } catch {
      // private mode: the choice lasts for this page only
    }
    this.syncDevices(true);
  }

  private renderEnergy() {
    const e = this._energy;
    if (!e || this.roomId || !this.showEnergy) return nothing;
    const t = (k: Parameters<typeof translate>[1]) => translate(this.hass, k);
    const items: { cls: string; label: string; value: string }[] = [];
    if (e.consumption !== null) items.push({ cls: "total", label: t("energy_consumption"), value: formatPower(this.hass, e.consumption) });
    if (e.grid !== null) {
      const exporting = e.grid < 0;
      items.push({ cls: exporting ? "export" : "grid", label: t(exporting ? "energy_grid_export" : "energy_grid_import"), value: formatPower(this.hass, Math.abs(e.grid)) });
    }
    if (e.solar !== null) items.push({ cls: "solar", label: t("energy_solar"), value: formatPower(this.hass, e.solar) });
    if (e.battery !== null || e.soc !== null) {
      const parts = [e.battery !== null ? formatPower(this.hass, Math.abs(e.battery)) : null, e.soc !== null ? `${Math.round(e.soc)} %` : null].filter(Boolean);
      items.push({ cls: "battery", label: t("energy_battery"), value: parts.join(" · ") });
    }
    if (e.tariff) items.push({ cls: "tariff", label: t("energy_tariff"), value: `${formatNumber(this.hass, e.tariff.value, 3)} ${e.tariff.unit}`.trim() });
    return html`<div class="fp3d-energy" aria-live="off">
      ${items.map((i) => html`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows !== null
        ? nothing
        : html`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows ? "flow_on" : "flow_off")})`} aria-label=${t("flows")} @click=${() => this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
    </div>`;
  }

  private renderLegend() {
    if (this.heatMode === "none") return nothing;
    const scale = HEAT_SCALES[this.heatMode];
    const lo = scale.stops[0][0];
    const hi = scale.stops[scale.stops.length - 1][0];
    const t = (k: Parameters<typeof translate>[1]) => translate(this.hass, k);
    return html`<div class="fp3d-legend">
      <b>${t(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${heatGradient(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${formatNumber(this.hass, lo, 0)} ${scale.unit}</span><span>${formatNumber(this.hass, hi, 0)} ${scale.unit}</span></span>
      ${this.heatValues.size ? nothing : html`<span class="fp3d-legend-none">${t("heat_none_found")}</span>`}
    </div>`;
  }

  protected render() {
    // night: deep blue-black; day: a lighter, bluer sky behind the house
    const sky = this._sky;
    const mix = (a: number[], b: number[]) => `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * sky)).join(",")})`;
    const stage = STAGE[this.theme] ?? STAGE.neon;
    const style = `--fp3d-sky:${mix(stage.night[0], stage.day[0])};--fp3d-ground:${mix(stage.night[1], stage.day[1])}`;
    return html`<div class="fp3d-stage" style=${style}>
      ${this._error ? html`<p class="fp3d-error">${this._error}</p>` : nothing} ${this.renderEnergy()} ${this.renderLegend()}
      ${this.renderFind()} ${this.renderSwipe()} ${this.renderMenu()}
      ${this.showStats && this._stats
        ? html`<span class="fp3d-stats"
            ><b>${this._stats.fps ? translate(this.hass, "stats_fps", { fps: this._stats.fps, ms: this._stats.worstMs }) : translate(this.hass, "stats_idle")}</b> ·
            ${translate(this.hass, "stats", { calls: this._stats.calls, tris: this._stats.triangles.toLocaleString() })} ·
            ${translate(this.hass, this._stats.low ? "stats_low" : "stats_full", { r: formatNumber(this.hass, this._stats.pixelRatio, 2) })}</span
          >`
        : nothing}
    </div>`;
  }

  static styles = [
    tokens,
    css`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: 600 12px var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: 10px;
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: 10px;
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        bottom: 60px;
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      @media (max-width: 600px) {
        .fp3d-energy-item:nth-child(n + 4) {
          display: none;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: 8px;
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
    `,
  ];
}

if (!customElements.get("fp3d-view3d")) customElements.define("fp3d-view3d", Fp3dView3d);

/** Power as "850 W" or "1,2 kW". */
function formatPower(hass: HomeAssistant | undefined, w: number): string {
  return Math.abs(w) >= 1000 ? `${formatNumber(hass, w / 1000, 1)} kW` : `${Math.round(w)} W`;
}

/** Marker height above furniture: in front of a screen, above wall units, else just above the top. */
function markerHeight(f: Furniture): number {
  if (f.type === "tv_board") return f.h + 0.9;
  if (f.type === "tv_wall") return 1.3 + f.h / 2 + 0.25;
  if (f.type === "kitchen_wall") return 1.45 + f.h + 0.25;
  return f.h + 0.35;
}
