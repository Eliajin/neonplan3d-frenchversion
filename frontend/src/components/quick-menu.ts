// Quick menu at a device (long press in 3D): a ring of colours around a power button for lights,
// up/stop/down for blinds, on/off for switches, with a slider and a way to the full details.

import { css, html, LitElement, nothing } from "lit";
import { entityName, isUnavailable, kindOf } from "../devices.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { openMoreInfo, stateText } from "../markers.ts";
import { tokens } from "../styles.ts";
import type { HassEntity, HomeAssistant } from "../types.ts";

const COLORS: [number, number, number][] = [
  [255, 181, 71],
  [255, 236, 210],
  [55, 224, 255],
  [91, 124, 255],
  [190, 90, 255],
  [255, 95, 210],
  [255, 70, 70],
  [120, 255, 150],
];
const KELVINS = [2200, 2700, 3200, 4000, 5000, 6500];
const COLOR_MODES = ["hs", "rgb", "rgbw", "rgbww", "xy"];
const COVER_SET_POSITION = 4;

/** What a light can do, from its supported colour modes. */
export function lightAbilities(st: HassEntity): { dim: boolean; color: boolean; temp: boolean } {
  const modes = (st.attributes.supported_color_modes as string[] | undefined) ?? [];
  const color = modes.some((m) => COLOR_MODES.includes(m));
  return { dim: modes.some((m) => m !== "onoff"), color, temp: modes.includes("color_temp") };
}

/** Whether a cover can be moved to a position. */
export function coverPositionable(st: HassEntity): boolean {
  return (((st.attributes.supported_features as number) ?? 0) & COVER_SET_POSITION) !== 0 && typeof st.attributes.current_position === "number";
}

export class Fp3dQuickMenu extends LitElement {
  static properties = {
    hass: { attribute: false },
    entity: { attribute: false },
  };

  declare hass: HomeAssistant;
  declare entity: string;

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  private call(domain: string, service: string, data: Record<string, unknown> = {}): void {
    void this.hass.callService(domain, service, { entity_id: this.entity, ...data });
  }

  private close(): void {
    this.dispatchEvent(new CustomEvent("close", { bubbles: true, composed: true }));
  }

  private details(): void {
    openMoreInfo(this, this.entity);
    this.close();
  }

  /** Buttons spread on a ring around the centre. */
  private ring(items: ReturnType<typeof html>[]) {
    const n = items.length;
    return items.map((item, i) => {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      return html`<div class="qm-at" style="left:${50 + Math.cos(a) * 39}%;top:${50 + Math.sin(a) * 39}%">${item}</div>`;
    });
  }

  private renderLight(st: HassEntity) {
    const can = lightAbilities(st);
    const on = st.state === "on";
    const pct = on && typeof st.attributes.brightness === "number" ? Math.round((st.attributes.brightness as number) / 2.55) : on ? 100 : 0;
    const swatches = can.color
      ? COLORS.map(
          (c) => html`<button class="qm-swatch" style="background:rgb(${c.join(",")})" aria-label=${`RGB ${c.join(", ")}`} @click=${() => this.call("light", "turn_on", { rgb_color: c })}></button>`,
        )
      : can.temp
        ? KELVINS.map(
            (k) => html`<button class="qm-swatch" style="background:${kelvinCss(k)}" aria-label=${`${k} K`} @click=${() => this.call("light", "turn_on", { color_temp_kelvin: k })}></button>`,
          )
        : [];
    return html`<div class="qm-ring ${swatches.length ? "" : "qm-ring-small"}">
        ${this.ring(swatches)}
        <button class="qm-power ${on ? "qm-on" : ""}" aria-pressed=${on} @click=${() => this.call("light", "toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${on ? `${pct} %` : this.t("qm_off")}</b>
        </button>
      </div>
      ${can.dim
        ? html`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1, pct))}
            aria-label=${this.t("brightness")}
            @change=${(e: Event) => this.call("light", "turn_on", { brightness_pct: Number((e.target as HTMLInputElement).value) })}
          />`
        : nothing}`;
  }

  private renderCover(st: HassEntity) {
    const pos = typeof st.attributes.current_position === "number" ? (st.attributes.current_position as number) : null;
    return html`<div class="qm-ring qm-ring-cover">
        <div class="qm-at" style="left:50%;top:14%"><button class="qm-round" aria-label=${this.t("cover_open")} @click=${() => this.call("cover", "open_cover")}>▲</button></div>
        <button class="qm-power" aria-label=${this.t("cover_stop")} @click=${() => this.call("cover", "stop_cover")}>
          <b>${pos !== null ? `${pos} %` : stateText(this.hass, st)}</b><small>■ ${this.t("cover_stop")}</small>
        </button>
        <div class="qm-at" style="left:50%;top:86%"><button class="qm-round" aria-label=${this.t("cover_close")} @click=${() => this.call("cover", "close_cover")}>▼</button></div>
      </div>
      ${coverPositionable(st)
        ? html`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(pos ?? 0)}
            aria-label=${this.t("position")}
            @change=${(e: Event) => this.call("cover", "set_cover_position", { position: Number((e.target as HTMLInputElement).value) })}
          />`
        : nothing}`;
  }

  private renderToggle(st: HassEntity) {
    const on = st.state === "on" || st.state === "unlocked" || st.state === "playing";
    const domain = st.entity_id.split(".")[0];
    return html`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${on ? "qm-on" : ""}"
        aria-pressed=${on}
        @click=${() => (domain === "lock" ? this.call("lock", on ? "lock" : "unlock") : this.call("homeassistant", "toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${stateText(this.hass, st)}</b>
      </button>
    </div>`;
  }

  protected render() {
    const st = this.hass?.states[this.entity];
    if (!st) return nothing;
    const kind = kindOf(this.entity);
    const body = isUnavailable(st)
      ? html`<p class="qm-note">${stateText(this.hass, st)}</p>`
      : kind === "light"
        ? this.renderLight(st)
        : kind === "cover"
          ? this.renderCover(st)
          : this.renderToggle(st);
    return html`<div class="qm" role="dialog" aria-label=${entityName(this.hass, this.entity)}>
      <div class="qm-title">${entityName(this.hass, this.entity)}</div>
      ${body}
      <button class="qm-details" @click=${() => this.details()}>${this.t("details")} …</button>
    </div>`;
  }

  static styles = [
    tokens,
    css`
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `,
  ];
}

function kelvinCss(k: number): string {
  const t = Math.min(1, Math.max(0, (k - 2200) / 4300));
  const mix = (a: number, b: number) => Math.round(a + (b - a) * t);
  return `rgb(${mix(255, 200)},${mix(170, 225)},${mix(80, 255)})`;
}

if (!customElements.get("fp3d-quick-menu")) customElements.define("fp3d-quick-menu", Fp3dQuickMenu);
