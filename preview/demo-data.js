// Invented demo home for the preview page (not anyone's real floor plan).

const rect = (id, name, area_id, x0, z0, x1, z1, floor_material = "wood") => ({
  id,
  name,
  area_id,
  points: [
    [x0, z0],
    [x1, z0],
    [x1, z1],
    [x0, z1],
  ],
  floor_material,
});

const floor = (id, name, elevation, rooms) => ({
  id,
  name,
  elevation,
  height: 2.5,
  cut_height: 1.15,
  rooms,
  openings: [],
  furniture: [],
  placements: [],
  background: null,
});

export const DEMO_AREAS = {
  wohnzimmer: { area_id: "wohnzimmer", name: "Wohnzimmer" },
  kueche: { area_id: "kueche", name: "Küche" },
  schlafzimmer: { area_id: "schlafzimmer", name: "Schlafzimmer" },
  bad: { area_id: "bad", name: "Bad" },
  flur: { area_id: "flur", name: "Flur" },
  kinderzimmer: { area_id: "kinderzimmer", name: "Kinderzimmer" },
  arbeitszimmer: { area_id: "arbeitszimmer", name: "Arbeitszimmer" },
};

export const DEMO_BUILDING = {
  version: 1,
  settings: { wall_exterior: 0.24, wall_interior: 0.12, grid: 0.05 },
  floors: [
    floor("eg", "Erdgeschoss", 0, [
      rect("wohnen", "Wohnzimmer", "wohnzimmer", 0, 0, 6, 4.6),
      rect("kueche", "Küche", "kueche", 6, 0, 10, 4.6, "tiles"),
      rect("schlafen", "Schlafzimmer", "schlafzimmer", 0, 4.6, 4.4, 8, "carpet"),
      rect("bad", "Bad", "bad", 4.4, 4.6, 6.8, 8, "tiles"),
      {
        id: "flur",
        name: "Flur",
        area_id: "flur",
        points: [
          [6.8, 4.6],
          [10, 4.6],
          [10, 8],
          [8.4, 8],
          [8.4, 9.2],
          [6.8, 9.2],
        ],
        floor_material: "oak",
      },
    ]),
    floor("og", "Obergeschoss", 2.75, [
      rect("kind", "Kinderzimmer", "kinderzimmer", 0, 0, 4.4, 4.2, "carpet"),
      rect("arbeit", "Arbeitszimmer", "arbeitszimmer", 4.4, 0, 10, 4.2, "oak"),
      rect("badog", "Bad oben", null, 0, 4.2, 3.4, 8, "tiles"),
      rect("gast", "Gästezimmer", null, 3.4, 4.2, 10, 8),
    ]),
  ],
};

// Invented devices: registry entries, states and placements for the preview.
const light = (id, name, area, on, extra = {}) => ({
  entry: { entity_id: `light.${id}`, area_id: area },
  state: {
    entity_id: `light.${id}`,
    state: on ? "on" : "off",
    attributes: {
      friendly_name: name,
      supported_color_modes: ["color_temp", "hs"],
      color_mode: "color_temp",
      min_color_temp_kelvin: 2200,
      max_color_temp_kelvin: 6500,
      ...(on ? { brightness: 180, color_temp_kelvin: 2700 } : {}),
      ...extra,
    },
  },
});
const entity = (entity_id, area, state, attributes) => ({ entry: { entity_id, area_id: area }, state: { entity_id, state, attributes } });

const DEVICES = [
  light("wohnzimmer_decke", "Wohnzimmer Deckenlicht", "wohnzimmer", true),
  light("stehlampe", "Stehlampe", "wohnzimmer", true, { brightness: 90, color_mode: "hs", rgb_color: [255, 150, 60] }),
  light("kueche", "Küchenlicht", "kueche", false),
  light("schlafzimmer", "Schlafzimmer Decke", "schlafzimmer", false),
  light("nachttisch", "Nachttisch", "schlafzimmer", true, { brightness: 60 }),
  light("bad", "Spiegelleuchte", "bad", false),
  light("flur", "Flurlicht", "flur", true, { brightness: 120 }),
  light("kinderzimmer", "Kinderzimmer Decke", "kinderzimmer", true, { brightness: 150 }),
  light("schreibtisch", "Schreibtischlampe", "arbeitszimmer", true, { color_temp_kelvin: 4500 }),
  entity("cover.wohnzimmer", "wohnzimmer", "open", { friendly_name: "Wohnzimmer Rollladen", current_position: 70, supported_features: 15 }),
  entity("cover.kueche", "kueche", "closed", { friendly_name: "Rollladen Küche", current_position: 0, supported_features: 15 }),
  entity("climate.wohnzimmer", "wohnzimmer", "heat", {
    friendly_name: "Wohnzimmer Heizung",
    current_temperature: 21.4,
    temperature: 21.5,
    hvac_modes: ["off", "heat", "auto"],
    hvac_action: "heating",
    min_temp: 5,
    max_temp: 30,
    target_temp_step: 0.5,
  }),
  entity("climate.schlafzimmer", "schlafzimmer", "heat", {
    friendly_name: "Schlafzimmer Heizung",
    current_temperature: 18.2,
    temperature: 18,
    hvac_modes: ["off", "heat"],
    hvac_action: "idle",
    min_temp: 5,
    max_temp: 30,
  }),
  entity("media_player.fernseher", "wohnzimmer", "playing", { friendly_name: "Fernseher", media_title: "Nachrichten", media_artist: "Kanal 1", volume_level: 0.35 }),
  entity("switch.kaffeemaschine", "kueche", "on", { friendly_name: "Kaffeemaschine" }),
  entity("sensor.wohnzimmer_temperatur", "wohnzimmer", "21.4", { friendly_name: "Wohnzimmer Temperatur", device_class: "temperature", unit_of_measurement: "°C" }),
  entity("sensor.wohnzimmer_feuchte", "wohnzimmer", "48", { friendly_name: "Wohnzimmer Luftfeuchtigkeit", device_class: "humidity", unit_of_measurement: "%" }),
  entity("binary_sensor.kueche_fenster", "kueche", "on", { friendly_name: "Küche Fenster", device_class: "window" }),
  entity("binary_sensor.flur_bewegung", "flur", "off", { friendly_name: "Flur Bewegung", device_class: "motion" }),
  entity("scene.wohnzimmer_film", "wohnzimmer", "2024-01-01T00:00:00", { friendly_name: "Wohnzimmer Film" }),
  entity("scene.wohnzimmer_lesen", "wohnzimmer", "2024-01-01T00:00:00", { friendly_name: "Wohnzimmer Lesen" }),
  entity("script.gute_nacht", "schlafzimmer", "off", { friendly_name: "Gute Nacht" }),
];

export const DEMO_ENTITIES = Object.fromEntries(DEVICES.map((d) => [d.entry.entity_id, d.entry]));
export const DEMO_STATES = Object.fromEntries(DEVICES.map((d) => [d.state.entity_id, d.state]));

const place = (entity_id, x, z) => ({ entity_id, x, z, y: null });
DEMO_BUILDING.floors[0].placements = [
  place("light.wohnzimmer_decke", 3.6, 2.6),
  place("light.stehlampe", 5.3, 0.7),
  place("cover.wohnzimmer", 1.6, 0.4),
  place("climate.wohnzimmer", 0.5, 2.2),
  place("media_player.fernseher", 3.0, 0.4),
  place("light.kueche", 8.6, 2.9),
  place("switch.kaffeemaschine", 9.4, 0.6),
  place("binary_sensor.kueche_fenster", 7.2, 0.4),
  place("light.schlafzimmer", 2.9, 6.8),
  place("light.nachttisch", 0.5, 5.3),
  place("light.bad", 5.5, 7.2),
  place("light.flur", 8.8, 6.9),
];
DEMO_BUILDING.floors[1].placements = [place("light.kinderzimmer", 2.9, 2.8), place("light.schreibtisch", 6.2, 1.2)];
