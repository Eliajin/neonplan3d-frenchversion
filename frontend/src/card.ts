// Lovelace card (loaded automatically by the integration, no resource needed).

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { BuildingController } from "./building-controller.ts";
import "./components/room-panel.ts";
import "./components/view3d.ts";
import { translate } from "./i18n.ts";
import { controls, tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";
import type { Quality, WallMode } from "./viewer/viewer3d.ts";

export interface CardConfig {
  type: string;
  floor?: string;
  height?: number;
  walls?: WallMode;
  /** Pull floors apart in the house view (default true). */
  explode?: boolean;
  quality?: Quality;
  /** Show the performance display (frames per second, draw calls). */
  stats?: boolean;
  /** HTML markers: none | important (default) | all. */
  markers?: "none" | "important" | "all";
  /** Heatmap of the rooms: none | temperature | humidity | co2. */
  heatmap?: "none" | "temperature" | "humidity" | "co2";
  /** Look: neon | blueprint | day. */
  theme?: "neon" | "blueprint" | "day";
  /** Energy values at the top (default true). */
  energy?: boolean;
  /** Power flow lines always on or off; without it the card has its own switch. */
  flows?: boolean;
  /** Tapping a room opens its details (lights, blinds, cameras); default true. */
  room_panel?: boolean;
  /** Fill the screen below the dashboard header instead of a fixed height. */
  fill?: boolean;
  /** Switches in the card: walls, floors apart, heatmap (default false). */
  controls?: boolean;
  /** A button for full screen (hides the dashboard around the card). */
  fullscreen_button?: boolean;
  /** Small pictures of the floors to switch between them (default true; not with a fixed floor). */
  floor_thumbs?: boolean;
}

type HeatMode = NonNullable<CardConfig["heatmap"]>;

export class Floorplan3dCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _roomId: { state: true },
    _floorId: { state: true },
    _walls: { state: true },
    _heat: { state: true },
    _explode: { state: true },
    _fullscreen: { state: true },
  };

  declare hass: HomeAssistant;
  private declare _config: CardConfig;
  private declare _roomId: string | null;
  /** Floor chosen by tapping its label in the house view (when no floor is configured). */
  private declare _floorId: string | null;
  /** Choices made with the card's own switches (null: as configured). */
  private declare _walls: WallMode | null;
  private declare _heat: HeatMode | null;
  private declare _explode: boolean | null;
  private declare _fullscreen: boolean;

  private readonly data = new BuildingController(this);

  constructor() {
    super();
    this._roomId = null;
    this._floorId = null;
    this._walls = null;
    this._heat = null;
    this._explode = null;
    this._fullscreen = false;
  }

  private readonly onFullscreen = () => (this._fullscreen = !!document.fullscreenElement && this.shadowRoot?.contains(document.fullscreenElement) === true);

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener("fullscreenchange", this.onFullscreen);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("fullscreenchange", this.onFullscreen);
  }

  private toggleFullscreen(): void {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.();
  }

  /** Visual editor in the dashboard (no YAML needed). */
  static async getConfigElement(): Promise<HTMLElement> {
    await import("./card-editor.ts");
    return document.createElement("floorplan-3d-card-editor");
  }

  static getStubConfig(): CardConfig {
    return { type: "custom:floorplan-3d-card" };
  }

  setConfig(config: CardConfig): void {
    if (config.height !== undefined && !(config.height > 100)) throw new Error("height must be a number of pixels above 100");
    this._config = config;
    this._walls = null;
    this._heat = null;
    this._explode = null;
  }

  getCardSize(): number {
    return Math.ceil((this._config?.height ?? 420) / 50);
  }

  getGridOptions() {
    return { columns: "full", rows: this._config?.fill ? 12 : Math.ceil((this._config?.height ?? 420) / 56), min_rows: 4 };
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass) this.data.setHass(this.hass);
  }

  /** One level up: room -> floor -> house. */
  private back(): void {
    if (this._roomId) this._roomId = null;
    else if (!this._config?.floor) this._floorId = null;
  }

  protected render() {
    const b = this.data.building;
    const height = this._config?.height ?? 420;
    const floorId =
      this._config?.floor ?? (b && b.floors.length === 1 ? b.floors[0].id : b?.floors.some((f) => f.id === this._floorId) ? this._floorId : null);
    const canGoBack = !!this._roomId || (!this._config?.floor && !!this._floorId && (b?.floors.length ?? 0) > 1);
    const c = this._config;
    const walls = this._walls ?? c?.walls ?? "auto";
    const heat = this._heat ?? c?.heatmap ?? "none";
    const explode = this._explode ?? c?.explode ?? true;
    // full screen, the screen below the dashboard header, or a fixed height
    const size = this._fullscreen ? "100vh" : c?.fill ? "calc(100vh - var(--header-height, 56px) - 16px)" : `${height}px`;
    const t = (k: Parameters<typeof translate>[1]) => translate(this.hass, k);
    return html`<ha-card>
      <div class="fp3d-card-body" style="height:${size}">
        ${b && b.floors.some((f) => f.rooms.length)
          ? html`<fp3d-view3d
              .hass=${this.hass}
              .building=${b}
              .packs=${this.data.packs}
              .floorId=${floorId}
              .roomId=${this._roomId}
              .wallMode=${walls}
              .explode=${explode}
              .quality=${this._config?.quality ?? "auto"}
              ?showStats=${this._config?.stats ?? false}
              .markerMode=${this._config?.markers ?? "important"}
              .heatMode=${heat}
              .theme=${this._config?.theme ?? "neon"}
              .showEnergy=${this._config?.energy ?? true}
              .flows=${this._config?.flows ?? null}
              .floorThumbs=${!this._config?.floor && this._config?.floor_thumbs !== false}
              @room-tap=${(e: CustomEvent<{ floorId: string; roomId: string | null }>) => {
                if (!e.detail.roomId) return;
                if (!floorId && !this._config?.floor) this._floorId = e.detail.floorId;
                this._roomId = e.detail.roomId === this._roomId ? null : e.detail.roomId;
              }}
              @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
                this._floorId = e.detail.floorId;
                this._roomId = null;
              }}
              @back=${() => this.back()}
            ></fp3d-view3d>`
          : html`<p class="fp3d-card-msg">${this.data.error ?? (b ? translate(this.hass, "no_building") : translate(this.hass, "loading"))}</p>`}
        ${this._roomId && b && this._config?.room_panel !== false
          ? html`<fp3d-room-panel
              class="fp3d-card-panel"
              .hass=${this.hass}
              .room=${b.floors.flatMap((f) => f.rooms).find((r) => r.id === this._roomId) ?? null}
              .floor=${b.floors.find((f) => f.rooms.some((r) => r.id === this._roomId)) ?? null}
              @close=${() => (this._roomId = null)}
            ></fp3d-room-panel>`
          : nothing}
        ${canGoBack ? html`<button class="fp3d-card-back" @click=${() => this.back()}>${translate(this.hass, "back")}</button>` : nothing}
        ${c?.controls && b && !(this._roomId && c.room_panel !== false)
          ? html`<div class="fp3d-card-controls">
              <div class="fp3d-seg">
                <button aria-pressed=${walls === "auto"} @click=${() => (this._walls = "auto")}>${t("walls_auto")}</button>
                <button aria-pressed=${walls === "cut"} @click=${() => (this._walls = "cut")}>${t("walls_cut")}</button>
              </div>
              ${b.floors.length > 1 && !floorId
                ? html`<div class="fp3d-seg">
                    <button aria-pressed=${explode} @click=${() => (this._explode = true)}>${t("floors_apart")}</button>
                    <button aria-pressed=${!explode} @click=${() => (this._explode = false)}>${t("floors_stacked")}</button>
                  </div>`
                : nothing}
              <div class="fp3d-seg" role="group" aria-label=${t("heatmap")}>
                ${(["none", "temperature", "humidity", "co2"] as HeatMode[]).map(
                  (m) =>
                    html`<button aria-pressed=${heat === m} @click=${() => (this._heat = m)}>
                      ${t(m === "none" ? "heat_off" : (`heat_short_${m}` as Parameters<typeof translate>[1]))}
                    </button>`,
                )}
              </div>
            </div>`
          : nothing}
        ${c?.fullscreen_button && !(this._roomId && c.room_panel !== false)
          ? html`<button class="fp3d-card-full" title=${t(this._fullscreen ? "fullscreen_exit" : "fullscreen")} aria-label=${t(this._fullscreen ? "fullscreen_exit" : "fullscreen")} @click=${() => this.toggleFullscreen()}>
              ${this._fullscreen ? "✕" : "⛶"}
            </button>`
          : nothing}
      </div>
    </ha-card>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      .fp3d-card-back {
        position: absolute;
        left: 10px;
        top: 10px;
        font: 500 13px var(--fp3d-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 6px 12px;
        cursor: pointer;
      }
    `,
  ];
}

if (!customElements.get("floorplan-3d-card")) {
  customElements.define("floorplan-3d-card", Floorplan3dCard);
  const w = window as Window & { customCards?: unknown[] };
  w.customCards = w.customCards ?? [];
  w.customCards.push({
    type: "floorplan-3d-card",
    name: translate(undefined, "card_name"),
    description: translate(undefined, "card_description"),
    preview: false,
  });
}
