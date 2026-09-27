// Loads the building, follows changes made elsewhere and saves edits (debounced).

import type { ReactiveController, ReactiveControllerHost } from "lit";
import { fetchBuilding, saveBuilding, subscribeBuilding } from "./api.ts";
import type { Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

export type SaveState = "idle" | "saving" | "saved" | "error";

const SAVE_DELAY = 700;

export class BuildingController implements ReactiveController {
  building: Building | null = null;
  error: string | null = null;
  saveState: SaveState = "idle";

  private readonly host: ReactiveControllerHost;
  private hass: HomeAssistant | null = null;
  private revision = -1;
  private ownRevisions = new Set<number>();
  private unsubscribe: (() => Promise<void>) | null = null;
  private saveTimer: ReturnType<typeof setTimeout> | undefined;
  private pending: Building | null = null;
  private saving: Promise<void> | null = null;
  private connected = false;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  /** Call whenever the host receives a new hass object. */
  setHass(hass: HomeAssistant): void {
    const first = this.hass === null;
    this.hass = hass;
    if (first && this.connected) void this.start();
  }

  hostConnected(): void {
    this.connected = true;
    if (this.hass) void this.start();
  }

  hostDisconnected(): void {
    this.connected = false;
    void this.flush();
    void this.unsubscribe?.();
    this.unsubscribe = null;
  }

  /** Local edit: shown immediately, saved after a short pause. */
  edit(building: Building): void {
    this.building = building;
    this.pending = building;
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => void this.flush(), SAVE_DELAY);
    this.host.requestUpdate();
  }

  async flush(): Promise<void> {
    clearTimeout(this.saveTimer);
    if (this.saving) await this.saving;
    const building = this.pending;
    if (!building || !this.hass) return;
    this.pending = null;
    this.saveState = "saving";
    this.host.requestUpdate();
    this.saving = (async () => {
      try {
        const revision = await saveBuilding(this.hass!, building);
        this.ownRevisions.add(revision);
        this.revision = revision;
        this.saveState = this.pending ? "saving" : "saved";
      } catch (err) {
        this.saveState = "error";
        this.error = errorText(err);
      }
      this.host.requestUpdate();
    })();
    await this.saving;
    this.saving = null;
  }

  private async start(): Promise<void> {
    if (!this.hass) return;
    await this.reload();
    if (!this.unsubscribe && this.connected) {
      try {
        this.unsubscribe = await subscribeBuilding(this.hass, (revision) => {
          if (this.ownRevisions.has(revision) || revision === this.revision) return;
          if (this.pending || this.saving) return; // our own edits win; they are saved next
          void this.reload();
        });
      } catch {
        // older backend or connection loss: changes from elsewhere show after a reload
      }
    }
  }

  private async reload(): Promise<void> {
    if (!this.hass) return;
    try {
      const res = await fetchBuilding(this.hass);
      this.building = res.building;
      this.revision = res.revision;
      this.error = null;
    } catch (err) {
      this.error = errorText(err);
    }
    this.host.requestUpdate();
  }
}

function errorText(err: unknown): string {
  if (err && typeof err === "object" && "message" in err) return String((err as { message: unknown }).message);
  return String(err);
}
