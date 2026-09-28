// Lit wrapper around the lazily loaded 3D viewer.

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { translate } from "../i18n.ts";
import { kindOf, openingEntities, openingState, TOGGLE_KINDS, type OpeningEntities } from "../devices.ts";
import { load3d } from "../load3d.ts";
import { buildMarkers, openMoreInfo, placedEntities, toggleEntity } from "../markers.ts";
import type { Building } from "../model.ts";
import { tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";
import type { FloorplanViewer, Quality, ViewerStats, WallMode } from "../viewer/viewer3d.ts";

export class Fp3dView3d extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    floorId: { attribute: false },
    roomId: { attribute: false },
    wallMode: { attribute: false },
    explode: { type: Boolean },
    quality: { attribute: false },
    showStats: { type: Boolean },
    _stats: { state: true },
    _error: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building | null;
  declare floorId: string | null;
  declare roomId: string | null;
  declare wallMode: WallMode;
  declare explode: boolean;
  declare quality: Quality;
  declare showStats: boolean;
  private declare _stats: ViewerStats | null;
  private declare _error: string | null;

  private viewer: FloorplanViewer | null = null;
  private starting = false;
  /** States of the placed entities as last sent to the viewer. */
  private shownStates = new Map<string, HassEntity | undefined>();
  /** Entities of each door and window, and the registry they were matched with. */
  private openingLinks: Map<string, OpeningEntities> | null = null;
  private linkedRegistry: HomeAssistant["entities"] | undefined;

  constructor() {
    super();
    this.building = null;
    this.floorId = null;
    this.roomId = null;
    this.wallMode = "auto";
    this.explode = true;
    this.quality = "auto";
    this.showStats = false;
    this._stats = null;
    this._error = null;
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
        onDeviceHold: (id) => openMoreInfo(this, id),
        onStats: this.showStats ? (s) => (this._stats = s) : undefined,
      });
      this.viewer.setWallMode(this.wallMode);
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
    if (changed.has("building") && this.building) v.setBuilding(this.building);
    if (changed.has("building") || changed.has("hass")) this.syncDevices(changed.has("building"));
    if (changed.has("floorId")) v.setFloor(this.floorId);
    if (changed.has("roomId") && (this.roomId || changed.get("roomId"))) v.selectRoom(this.roomId);
    if (changed.has("wallMode")) v.setWallMode(this.wallMode);
    if (changed.has("explode")) v.setExplode(this.explode);
    if (changed.has("quality") && changed.get("quality") !== undefined) v.setQuality(this.quality);
  }

  /**
   * Send device markers and door/window states to the viewer when a relevant entity changed (or the
   * building). Openings are matched with entities again when the building or the registry changes.
   */
  private syncDevices(force: boolean): void {
    const v = this.viewer;
    if (!v || !this.building || !this.hass) return;
    if (force || !this.openingLinks || this.linkedRegistry !== this.hass.entities) {
      this.openingLinks = openingEntities(this.hass, this.building.floors);
      this.linkedRegistry = this.hass.entities;
      force = true;
    }
    const links = [...this.openingLinks.values()].flatMap((e) => [e.cover, e.contact, e.tilt]).filter((id): id is string => !!id);
    const ids = [...placedEntities(this.building), ...links];
    const changed = force || ids.length !== this.shownStates.size || ids.some((id) => this.shownStates.get(id) !== this.hass.states[id]);
    if (!changed) return;
    this.shownStates = new Map(ids.map((id) => [id, this.hass.states[id]]));
    v.setDevices(buildMarkers(this.hass, this.building));
    v.setOpeningStates(new Map([...this.openingLinks].map(([id, e]) => [id, openingState(this.hass, e)])));
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

  protected render() {
    return html`<div class="fp3d-stage">
      ${this._error ? html`<p class="fp3d-error">${this._error}</p>` : nothing}
      ${this.showStats && this._stats
        ? html`<span class="fp3d-stats"
            >${translate(this.hass, "stats", { fps: this._stats.fps, calls: this._stats.calls, tris: this._stats.triangles.toLocaleString() })}</span
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
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 72%);
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
      .fp3d-stats {
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
