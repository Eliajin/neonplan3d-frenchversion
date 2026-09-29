// Visual editor of the dashboard card: Home Assistant shows it in the card dialog, so nobody has to
// write YAML. It follows Home Assistant's colours (the dialog is light or dark with the user's theme).

import { css, html, LitElement, nothing } from "lit";
import { fetchBuilding } from "./api.ts";
import { CARD_CONTROLS, type CardConfig, type CardControl } from "./card.ts";
import { translate, type I18nKey } from "./i18n.ts";
import type { HomeAssistant } from "./types.ts";

/** Defaults of the card: options at their default are left out of the config. */
const DEFAULTS: Partial<CardConfig> = {
  height: 420,
  walls: "auto",
  explode: true,
  quality: "auto",
  stats: false,
  markers: "important",
  heatmap: "none",
  theme: "neon",
  energy: true,
  room_panel: true,
  fill: false,
  controls: false,
  fullscreen_button: false,
  room_names: true,
  floor_stack: "dim",
};

type Choice = [value: string, label: I18nKey];

export class Floorplan3dCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _floors: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  private declare _config: CardConfig;
  private declare _floors: { id: string; name: string }[];
  private loading = false;

  constructor() {
    super();
    this._config = { type: "custom:floorplan-3d-card" };
    this._floors = [];
  }

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  protected willUpdate(): void {
    // the floors of the plan, for the floor choice
    if (this.hass && !this.loading && !this._floors.length) {
      this.loading = true;
      fetchBuilding(this.hass).then(
        (res) => (this._floors = res.building.floors.map((f) => ({ id: f.id, name: f.name }))),
        () => undefined,
      );
    }
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private get value(): Required<Omit<CardConfig, "floor" | "flows">> & Pick<CardConfig, "floor" | "flows"> {
    return { ...(DEFAULTS as Required<CardConfig>), ...this._config };
  }

  /** Change one option; options back at their default disappear from the YAML. */
  private set<K extends keyof CardConfig>(key: K, value: CardConfig[K] | undefined): void {
    const next: CardConfig = { ...this._config };
    if (value === undefined || value === "" || DEFAULTS[key] === value) delete next[key];
    else next[key] = value;
    this._config = next;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
  }

  private select<K extends keyof CardConfig>(key: K, label: I18nKey, choices: Choice[], current: string) {
    return html`<label class="field"
      >${this.t(label)}
      <select @change=${(e: Event) => this.set(key, (e.target as HTMLSelectElement).value as CardConfig[K])}>
        ${choices.map(([value, text]) => html`<option value=${value} ?selected=${value === current}>${this.t(text)}</option>`)}
      </select>
    </label>`;
  }

  private toggle(key: "explode" | "energy" | "room_panel" | "stats" | "fullscreen_button" | "room_names", label: I18nKey, hint?: I18nKey) {
    const on = this.value[key];
    return html`<label class="toggle">
      <input type="checkbox" .checked=${on} @change=${(e: Event) => this.set(key, (e.target as HTMLInputElement).checked)} />
      <span>${this.t(label)}${hint ? html`<small>${this.t(hint)}</small>` : nothing}</span>
    </label>`;
  }

  /** Floor pictures: on by default without a start floor, off with one (but can be switched on). */
  private renderThumbsToggle() {
    const auto = !this._config.floor;
    const on = this._config.floor_thumbs ?? auto;
    return html`<label class="toggle">
      <input
        type="checkbox"
        .checked=${on}
        @change=${(e: Event) => {
          const checked = (e.target as HTMLInputElement).checked;
          const next: CardConfig = { ...this._config };
          if (checked === auto) delete next.floor_thumbs;
          else next.floor_thumbs = checked;
          this._config = next;
          this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
        }}
      />
      <span>${this.t("card_floor_thumbs")}<small>${this.t(this._config.floor ? "card_floor_thumbs_hint_start" : "card_floor_thumbs_hint")}</small></span>
    </label>`;
  }

  /** Switches in the card: on/off, and which of them. */
  private renderControls() {
    const c = this._config.controls;
    const on = !!c && (c === true || c.length > 0);
    const list: CardControl[] = c === true ? [...CARD_CONTROLS] : Array.isArray(c) ? c : [];
    const setList = (next: CardControl[]) => this.set("controls", next.length === CARD_CONTROLS.length ? true : next.length ? next : undefined);
    return html`<label class="toggle">
        <input type="checkbox" .checked=${on} @change=${(e: Event) => this.set("controls", (e.target as HTMLInputElement).checked ? true : undefined)} />
        <span>${this.t("card_controls")}<small>${this.t("card_controls_hint")}</small></span>
      </label>
      ${on
        ? html`<div class="sub">
            ${CARD_CONTROLS.map(
              (x) => html`<label class="chip">
                <input
                  type="checkbox"
                  .checked=${list.includes(x)}
                  @change=${(e: Event) => setList((e.target as HTMLInputElement).checked ? CARD_CONTROLS.filter((y) => y === x || list.includes(y)) : list.filter((y) => y !== x))}
                />
                ${this.t(`card_control_${x}` as I18nKey)}
              </label>`,
            )}
          </div>`
        : nothing}`;
  }

  protected render() {
    const v = this.value;
    const flows = v.flows === undefined ? "switch" : v.flows ? "on" : "off";
    return html`
      <h3>${this.t("card_section_view")}</h3>
      <div class="grid">
        <label class="field wide"
          >${this.t("card_floor")}
          <select @change=${(e: Event) => this.set("floor", (e.target as HTMLSelectElement).value || undefined)}>
            <option value="" ?selected=${!v.floor}>${this.t("card_floor_house")}</option>
            ${this._floors.map((f) => html`<option value=${f.id} ?selected=${f.id === v.floor}>${f.name}</option>`)}
            ${v.floor && !this._floors.some((f) => f.id === v.floor) ? html`<option value=${v.floor} selected>${v.floor}</option>` : nothing}
          </select>
        </label>
        <label class="field"
          >${this.t("card_size")}
          <select @change=${(e: Event) => this.set("fill", (e.target as HTMLSelectElement).value === "fill")}>
            <option value="fixed" ?selected=${!v.fill}>${this.t("card_size_fixed")}</option>
            <option value="fill" ?selected=${v.fill}>${this.t("card_size_fill")}</option>
          </select>
        </label>
        <label class="field" ?hidden=${v.fill}
          >${this.t("card_height")}
          <input
            type="number"
            min="150"
            max="2000"
            step="10"
            .value=${String(v.height)}
            @change=${(e: Event) => {
              const h = Math.round(Number((e.target as HTMLInputElement).value));
              if (h > 100) this.set("height", h);
            }}
          />
        </label>
        ${this.select("theme", "theme", [["neon", "theme_neon"], ["blueprint", "theme_blueprint"], ["day", "theme_day"]], v.theme)}
        ${this.select("walls", "card_walls", [["auto", "walls_auto"], ["cut", "walls_cut"]], v.walls)}
        ${this.select("quality", "quality", [["auto", "quality_auto"], ["low", "quality_low"], ["high", "quality_high"]], v.quality)}
        ${this.select("floor_stack", "card_floor_stack", [["dim", "floor_stack_dim"], ["stacked", "floor_stack_stacked"], ["single", "floor_stack_single"]], v.floor_stack)}
      </div>
      ${v.fill ? html`<p class="hint">${this.t("card_fill_hint")}</p>` : nothing}
      <p class="hint">${this.t("card_quality_hint")}</p>

      <h3>${this.t("card_section_show")}</h3>
      <div class="grid">
        ${this.select("markers", "markers", [["none", "markers_none"], ["important", "markers_important"], ["all", "markers_all"]], v.markers)}
        ${this.select("heatmap", "heatmap", [["none", "heat_off"], ["temperature", "heat_temperature"], ["humidity", "heat_humidity"], ["co2", "heat_co2"]], v.heatmap)}
        <label class="field wide"
          >${this.t("flows")}
          <select @change=${(e: Event) => {
            const c = (e.target as HTMLSelectElement).value;
            this.set("flows", c === "switch" ? undefined : c === "on");
          }}>
            <option value="switch" ?selected=${flows === "switch"}>${this.t("card_flows_switch")}</option>
            <option value="on" ?selected=${flows === "on"}>${this.t("card_flows_on")}</option>
            <option value="off" ?selected=${flows === "off"}>${this.t("card_flows_off")}</option>
          </select>
        </label>
      </div>
      ${this.renderControls()}
      ${this.renderThumbsToggle()} ${this.toggle("room_names", "card_room_names")}
      ${this.toggle("energy", "card_energy")} ${this.toggle("room_panel", "card_room_panel", "card_room_panel_hint")}
      ${this.toggle("fullscreen_button", "card_fullscreen_button", "card_fullscreen_button_hint")}
      ${this.toggle("explode", "card_explode")} ${this.toggle("stats", "card_stats", "card_stats_hint")}
    `;
  }

  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color);
    }
    h3 {
      margin: 18px 0 8px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--secondary-text-color);
    }
    h3:first-child {
      margin-top: 0;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 12px;
    }
    [hidden] {
      display: none;
    }
    .wide {
      grid-column: 1 / -1;
    }
    .field {
      display: grid;
      gap: 4px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    select,
    input[type="number"] {
      box-sizing: border-box;
      width: 100%;
      min-height: 40px;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 14px;
    }
    .toggle {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      font-size: 14px;
      cursor: pointer;
    }
    .toggle input {
      flex: none;
      width: 18px;
      height: 18px;
      margin: 1px 0 0;
      accent-color: var(--primary-color);
    }
    .sub {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 14px;
      margin: -2px 0 6px 28px;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      cursor: pointer;
    }
    .chip input {
      width: 16px;
      height: 16px;
      margin: 0;
      accent-color: var(--primary-color);
    }
    .toggle small,
    .hint {
      display: block;
      margin: 2px 0 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    @media (max-width: 450px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;
}

if (!customElements.get("floorplan-3d-card-editor")) customElements.define("floorplan-3d-card-editor", Floorplan3dCardEditor);
