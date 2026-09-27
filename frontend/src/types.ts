// The parts of the Home Assistant frontend object this integration uses.

export interface HassArea {
  area_id: string;
  name: string;
  floor_id?: string | null;
}

export interface HassConnection {
  subscribeMessage<T>(callback: (msg: T) => void, msg: Record<string, unknown>): Promise<() => Promise<void>>;
}

export interface HomeAssistant {
  language: string;
  user?: { is_admin: boolean; name: string };
  areas?: Record<string, HassArea>;
  states: Record<string, { entity_id: string; state: string; attributes: Record<string, unknown> }>;
  connection: HassConnection;
  callWS<T>(msg: Record<string, unknown>): Promise<T>;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<unknown>;
}
