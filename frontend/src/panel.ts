// Sidebar page: 3D view and editor.

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { BuildingController } from "./building-controller.ts";
import "./components/editor.ts";
import "./components/room-panel.ts";
import "./components/view3d.ts";
import { translate, type I18nKey } from "./i18n.ts";
import type { Building } from "./model.ts";
import { controls, tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";
import type { MarkerMode } from "./components/view3d.ts";
import type { Quality, WallMode } from "./viewer/viewer3d.ts";

type Mode = "view" | "editor";

/** View preferences belong to the device (a wall tablet wants other settings than a desktop). */
const prefs = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(`floorplan_3d.${key}`);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    try {
      localStorage.setItem(`floorplan_3d.${key}`, value);
    } catch {
      // storage unavailable (private mode): the choice just is not remembered
    }
  },
};

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
    _explode: { state: true },
    _quality: { state: true },
    _stats: { state: true },
    _markers: { state: true },
  };

  declare hass: HomeAssistant;
  declare narrow: boolean;
  declare route: unknown;
  declare panel: unknown;
  private declare _mode: Mode;
  private declare _floorId: string | null;
  private declare _roomId: string | null;
  private declare _wallMode: WallMode;
  private declare _explode: boolean;
  private declare _quality: Quality;
  /** Performance display (per device; also switched on by ?fp3d_stats in the URL). */
  private declare _stats: boolean;
  private declare _markers: MarkerMode;

  private readonly data = new BuildingController(this);


  constructor() {
    super();
    this.narrow = false;
    this._mode = "view";
    this._floorId = null;
    this._roomId = null;
    this._wallMode = "auto";
    this._explode = prefs.get("explode") !== "0";
    const quality = prefs.get("quality");
    this._quality = quality === "low" || quality === "high" ? quality : "auto";
    this._stats = prefs.get("stats") === "1" || new URLSearchParams(location.search).has("fp3d_stats");
    const markers = prefs.get("markers");
    this._markers = markers === "none" || markers === "all" ? markers : "important";
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

  private setExplode(explode: boolean): void {
    this._explode = explode;
    prefs.set("explode", explode ? "1" : "0");
  }

  private setQuality(quality: Quality): void {
    this._quality = quality;
    prefs.set("quality", quality);
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
          ${this._mode === "view" && b?.floors.some((f) => f.rooms.length)
            ? html`<div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${(["auto", "low", "high"] as Quality[]).map(
                  (q) => html`<button aria-pressed=${this._quality === q} @click=${() => this.setQuality(q)}>${this.t(`quality_${q}`)}</button>`,
                )}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${(["none", "important", "all"] as MarkerMode[]).map(
                  (m) =>
                    html`<button
                      aria-pressed=${this._markers === m}
                      title=${this.t("markers")}
                      @click=${() => {
                        this._markers = m;
                        prefs.set("markers", m);
                      }}
                    >
                      ${this.t(`markers_${m}`)}
                    </button>`,
                )}
              </div>
              <div class="fp3d-seg fp3d-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${() => {
                    this._stats = !this._stats;
                    prefs.set("stats", this._stats ? "1" : "0");
                  }}
                >
                  ${this.t("fps")}
                </button>
              </div>`
            : nothing}
          ${this._mode === "editor" && saveState !== "idle"
            ? html`<span class="fp3d-save fp3d-save-${saveState}">${this.t(saveState === "saving" ? "saving" : saveState === "saved" ? "saved" : "save_error")}</span>`
            : nothing}
        </header>
        ${this.renderNotices()}
        ${this.data.error && !b ? html`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>` : nothing}
        ${!b && !this.data.error ? html`<p class="fp3d-message">${this.t("loading")}</p>` : nothing}
        ${b ? (this._mode === "editor" && this.isAdmin ? this.renderEditor(b) : this.renderView(b)) : nothing}
      </div>
    `;
  }

  /** Restart hint, save errors and unsaved edits from an earlier session. */
  private renderNotices() {
    const d = this.data;
    const notices = [];
    if (d.needsRestart) notices.push(html`<div class="fp3d-notice fp3d-notice-warn">${d.backendVersion ? this.t("needs_restart", { version: d.backendVersion }) : this.t("needs_restart_old")}</div>`);
    if (d.saveState === "error" && d.saveError) {
      notices.push(html`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail", { error: d.saveError })}</div>`);
    }
    if (d.draft && this.isAdmin) {
      const at = new Date(d.draft.savedAt).toLocaleString(this.hass?.language);
      notices.push(
        html`<div class="fp3d-notice">
          <span>${this.t("draft_found", { time: at })}</span>
          <button class="fp3d-btn fp3d-primary" @click=${() => d.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${() => d.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`,
      );
    }
    return notices.length ? html`<div class="fp3d-notices">${notices}</div>` : nothing;
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
          .explode=${this._explode}
          .markerMode=${this._markers}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @floor-tap=${(e: CustomEvent<{ floorId: string }>) => {
            this._floorId = e.detail.floorId;
            this._roomId = null;
          }}
          @back=${() => this.back()}
        ></fp3d-view3d>
        ${this._roomId
          ? html`<fp3d-room-panel
              class="fp3d-room-panel"
              .hass=${this.hass}
              .room=${b.floors.flatMap((f) => f.rooms).find((r) => r.id === this._roomId) ?? null}
              @close=${() => (this._roomId = null)}
            ></fp3d-room-panel>`
          : nothing}
        <div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode === "auto"} @click=${() => (this._wallMode = "auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode === "cut"} @click=${() => (this._wallMode = "cut")}>${this.t("walls_cut")}</button>
          </div>
          ${b.floors.length > 1 && !this._floorId
            ? html`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${() => this.setExplode(true)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${() => this.setExplode(false)}>${this.t("floors_stacked")}</button>
              </div>`
            : nothing}
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
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
        height: 100vh;
        height: 100dvh;
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
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
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
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom */
      @media (max-width: 700px), (orientation: portrait) and (max-width: 1000px) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
      }
      .fp3d-overlay {
        position: absolute;
        right: 14px;
        top: 10px;
        left: 14px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
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
