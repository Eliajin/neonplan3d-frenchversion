// Lovelace card (loaded automatically by the integration, no resource needed).

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { BuildingController } from "./building-controller.ts";
import "./components/view3d.ts";
import { translate } from "./i18n.ts";
import { tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";
import type { Quality, WallMode } from "./viewer/viewer3d.ts";

interface CardConfig {
  type: string;
  floor?: string;
  height?: number;
  walls?: WallMode;
  /** Pull floors apart in the house view (default true). */
  explode?: boolean;
  quality?: Quality;
}

export class Floorplan3dCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _roomId: { state: true },
    _floorId: { state: true },
  };

  declare hass: HomeAssistant;
  private declare _config: CardConfig;
  private declare _roomId: string | null;
  /** Floor chosen by tapping its label in the house view (when no floor is configured). */
  private declare _floorId: string | null;

  private readonly data = new BuildingController(this);

  constructor() {
    super();
    this._roomId = null;
    this._floorId = null;
  }

  static getStubConfig(): CardConfig {
    return { type: "custom:floorplan-3d-card" };
  }

  setConfig(config: CardConfig): void {
    if (config.height !== undefined && !(config.height > 100)) throw new Error("height must be a number of pixels above 100");
    this._config = config;
  }

  getCardSize(): number {
    return Math.ceil((this._config?.height ?? 420) / 50);
  }

  getGridOptions() {
    return { columns: "full", rows: Math.ceil((this._config?.height ?? 420) / 56), min_rows: 4 };
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
    return html`<ha-card>
      <div class="fp3d-card-body" style="height:${height}px">
        ${b && b.floors.some((f) => f.rooms.length)
          ? html`<fp3d-view3d
              .hass=${this.hass}
              .building=${b}
              .floorId=${floorId}
              .roomId=${this._roomId}
              .wallMode=${this._config?.walls ?? "auto"}
              .explode=${this._config?.explode ?? true}
              .quality=${this._config?.quality ?? "auto"}
              @room-tap=${(e: CustomEvent<{ floorId: string; roomId: string | null }>) => {
                if (!e.detail.roomId) return;
                if (!floorId && !this._config?.floor) this._floorId = e.detail.floorId;
                this._roomId = e.detail.roomId === this._roomId ? null : e.detail.roomId;
              }}
              @floor-tap=${(e: CustomEvent<{ floorId: string }>) => {
                this._floorId = e.detail.floorId;
                this._roomId = null;
              }}
              @back=${() => this.back()}
            ></fp3d-view3d>`
          : html`<p class="fp3d-card-msg">${this.data.error ?? (b ? translate(this.hass, "no_building") : translate(this.hass, "loading"))}</p>`}
        ${canGoBack ? html`<button class="fp3d-card-back" @click=${() => this.back()}>${translate(this.hass, "back")}</button>` : nothing}
      </div>
    </ha-card>`;
  }

  static styles = [
    tokens,
    css`
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
      .fp3d-card-back {
        position: absolute;
        right: 10px;
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
