// Sidebar page: 3D view and editor.

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { BuildingController } from "./building-controller.ts";
import "./components/editor.ts";
import "./components/view3d.ts";
import { translate, type I18nKey } from "./i18n.ts";
import type { Building } from "./model.ts";
import { controls, tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";
import type { WallMode } from "./viewer/viewer3d.ts";

type Mode = "view" | "editor";

export class Floorplan3dPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    narrow: { type: Boolean },
    route: { attribute: false },
    panel: { attribute: false },
    _mode: { state: true },
    _floorId: { state: true },
    _roomId: { state: true },
    _wallMode: { state: true },
  };

  declare hass: HomeAssistant;
  declare narrow: boolean;
  declare route: unknown;
  declare panel: unknown;
  private declare _mode: Mode;
  private declare _floorId: string | null;
  private declare _roomId: string | null;
  private declare _wallMode: WallMode;

  private readonly data = new BuildingController(this);
  private readonly showStats = new URLSearchParams(location.search).has("fp3d_stats");

  constructor() {
    super();
    this.narrow = false;
    this._mode = "view";
    this._floorId = null;
    this._roomId = null;
    this._wallMode = "auto";
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass) this.data.setHass(this.hass);
    const b = this.data.building;
    if (b && this._floorId && !b.floors.some((f) => f.id === this._floorId)) {
      this._floorId = null;
      this._roomId = null;
    }
  }

  private get isAdmin(): boolean {
    return this.hass?.user?.is_admin ?? false;
  }

  private setMode(mode: Mode): void {
    if (mode === this._mode) return;
    if (mode === "view") void this.data.flush();
    this._mode = mode;
  }

  private onRoomTap(e: CustomEvent<{ floorId: string; roomId: string | null }>): void {
    const { floorId, roomId } = e.detail;
    if (!roomId) return;
    if (this._floorId === null && (this.data.building?.floors.length ?? 0) > 1) this._floorId = floorId;
    this._roomId = roomId === this._roomId ? null : roomId;
  }

  private back(): void {
    if (this._roomId) this._roomId = null;
    else if (this._floorId && (this.data.building?.floors.length ?? 0) > 1) this._floorId = null;
    else (this.renderRoot.querySelector("fp3d-view3d") as HTMLElement & { resetView(): void } | null)?.resetView();
  }

  private readonly onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && this._mode === "view") this.back();
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
  }

  protected render() {
    const b = this.data.building;
    const saveState = this.data.saveState;
    return html`
      <div class="fp3d-app">
        <header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Floorplan 3D</h1>
          ${this.isAdmin
            ? html`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode === "view"} @click=${() => this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode === "editor"} @click=${() => this.setMode("editor")}>${this.t("editor")}</button>
              </div>`
            : nothing}
          <span class="fp3d-grow"></span>
          ${this._mode === "editor" && saveState !== "idle"
            ? html`<span class="fp3d-save fp3d-save-${saveState}">${this.t(saveState === "saving" ? "saving" : saveState === "saved" ? "saved" : "save_error")}</span>`
            : nothing}
        </header>
        ${this.data.error && !b ? html`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>` : nothing}
        ${!b && !this.data.error ? html`<p class="fp3d-message">${this.t("loading")}</p>` : nothing}
        ${b ? (this._mode === "editor" && this.isAdmin ? this.renderEditor(b) : this.renderView(b)) : nothing}
      </div>
    `;
  }

  private renderEditor(b: Building) {
    return html`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${b}
      .narrow=${this.narrow}
      @building-changed=${(e: CustomEvent<{ building: Building }>) => this.data.edit(e.detail.building)}
    ></fp3d-editor>`;
  }

  private renderView(b: Building) {
    if (!b.floors.length || !b.floors.some((f) => f.rooms.length)) {
      return html`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin ? "no_building_admin" : "no_building")}</p>
        ${this.isAdmin ? html`<button class="fp3d-btn fp3d-primary" @click=${() => this.setMode("editor")}>${this.t("open_editor")}</button>` : nothing}
      </div>`;
    }
    const floor = b.floors.find((f) => f.id === this._floorId);
    const roomFloors = floor ? [floor] : b.floors;
    return html`
      <nav class="fp3d-nav">
        ${b.floors.length > 1
          ? html`<button class="fp3d-chip" aria-pressed=${this._floorId === null} @click=${() => {
                this._floorId = null;
                this._roomId = null;
              }}>
                ${this.t("all_floors")}
              </button>
              ${[...b.floors].reverse().map(
                (f) => html`<button
                  class="fp3d-chip"
                  aria-pressed=${f.id === this._floorId}
                  @click=${() => {
                    this._floorId = f.id;
                    this._roomId = null;
                  }}
                >
                  ${f.name}
                </button>`,
              )}
              <span class="fp3d-sep"></span>`
          : nothing}
        ${roomFloors.flatMap((f) =>
          f.rooms.map(
            (r) => html`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${r.id === this._roomId}
              @click=${() => {
                if (b.floors.length > 1) this._floorId = f.id;
                this._roomId = r.id === this._roomId ? null : r.id;
              }}
            >
              ${r.name}
            </button>`,
          ),
        )}
      </nav>
      <div class="fp3d-stage-wrap">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.hass}
          .building=${b}
          .floorId=${b.floors.length > 1 ? this._floorId : (b.floors[0]?.id ?? null)}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          ?showStats=${this.showStats}
          @room-tap=${this.onRoomTap}
          @back=${() => this.back()}
        ></fp3d-view3d>
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode === "auto"} @click=${() => (this._wallMode = "auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode === "cut"} @click=${() => (this._wallMode = "cut")}>${this.t("walls_cut")}</button>
          </div>
          ${this._roomId || (this._floorId && b.floors.length > 1)
            ? html`<button class="fp3d-chip" @click=${() => this.back()}>${this.t("back")}</button>`
            : nothing}
        </div>
      </div>
    `;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        height: 100%;
        background: var(--fp3d-bg);
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      .fp3d-nav {
        display: flex;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-overlay {
        position: absolute;
        right: 14px;
        top: 10px;
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `,
  ];
}

if (!customElements.get("floorplan-3d-panel")) customElements.define("floorplan-3d-panel", Floorplan3dPanel);
