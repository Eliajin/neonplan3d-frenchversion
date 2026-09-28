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
  entity("cover.kueche", "kueche", "open", { friendly_name: "Rollladen Küche", current_position: 40, supported_features: 15 }),
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
  entity("binary_sensor.wohnzimmer_terrasse", "wohnzimmer", "on", { friendly_name: "Terrassentür", device_class: "opening" }),
  entity("binary_sensor.schlafzimmer_fenster", "schlafzimmer", "on", { friendly_name: "Schlafzimmer Fenster", device_class: "window" }),
  entity("binary_sensor.schlafzimmer_kipp", "schlafzimmer", "on", { friendly_name: "Schlafzimmer Fenster gekippt", device_class: "window" }),
  entity("scene.wohnzimmer_film", "wohnzimmer", "2024-01-01T00:00:00", { friendly_name: "Wohnzimmer Film" }),
  entity("scene.wohnzimmer_lesen", "wohnzimmer", "2024-01-01T00:00:00", { friendly_name: "Wohnzimmer Lesen" }),
  entity("script.gute_nacht", "schlafzimmer", "off", { friendly_name: "Gute Nacht" }),
  // energy (invented values)
  entity("sensor.netz_leistung", "flur", "420", { friendly_name: "Netz Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.pv_leistung", "flur", "1150", { friendly_name: "PV Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.akku_leistung", "flur", "-300", { friendly_name: "Akku Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.akku_ladestand", "flur", "64", { friendly_name: "Akku Ladestand", device_class: "battery", unit_of_measurement: "%" }),
  entity("sensor.strompreis", null, "0.29", { friendly_name: "Strompreis", device_class: "monetary", unit_of_measurement: "€/kWh" }),
  entity("sensor.fernseher_leistung", "wohnzimmer", "95", { friendly_name: "Fernseher Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.kaffeemaschine_leistung", "kueche", "0.9", { friendly_name: "Kaffeemaschine Leistung", device_class: "power", unit_of_measurement: "kW" }),
  entity("sensor.kuehlschrank_leistung", "kueche", "85", { friendly_name: "Kühlschrank Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.waschmaschine_leistung", "bad", "430", { friendly_name: "Waschmaschine Leistung", device_class: "power", unit_of_measurement: "W" }),
  entity("sensor.pc_leistung", "arbeitszimmer", "70", { friendly_name: "Computer Leistung", device_class: "power", unit_of_measurement: "W" }),
  // people and their room sensors (as ESPresense or Bermuda would report them)
  entity("person.mia", null, "home", { friendly_name: "Mia" }),
  entity("person.tom", null, "home", { friendly_name: "Tom Beispiel" }),
  entity("person.lea", null, "not_home", { friendly_name: "Lea" }),
  entity("sensor.mia_raum", null, "Wohnzimmer", { friendly_name: "Mia Raum" }),
  entity("sensor.tom_raum", null, "Küche", { friendly_name: "Tom Raum" }),
  entity("sensor.lea_raum", null, "not_home", { friendly_name: "Lea Raum" }),
];
// devices with a power sensor of their own
for (const [id, device] of [
  ["media_player.fernseher", "d_tv"],
  ["sensor.fernseher_leistung", "d_tv"],
  ["switch.kaffeemaschine", "d_kaffee"],
  ["sensor.kaffeemaschine_leistung", "d_kaffee"],
]) {
  DEVICES.find((d) => d.entry.entity_id === id).entry.device_id = device;
}

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
DEMO_BUILDING.floors[0].placements.push(
  place("sensor.kuehlschrank_leistung", 6.35, 0.8),
  place("sensor.waschmaschine_leistung", 6.4, 6.9),
  place("sensor.akku_leistung", 7.3, 8.8),
);
DEMO_BUILDING.floors[1].placements = [place("light.kinderzimmer", 2.9, 2.8), place("light.schreibtisch", 6.2, 1.2), place("sensor.pc_leistung", 7.8, 0.9)];
DEMO_BUILDING.energy = {
  meter: { floor_id: "eg", x: 9.75, z: 5.0 },
  grid: "sensor.netz_leistung",
  grid_invert: false,
  solar: "sensor.pv_leistung",
  battery: "sensor.akku_leistung",
  battery_invert: false,
  battery_soc: "sensor.akku_ladestand",
  tariff: "sensor.strompreis",
};
DEMO_BUILDING.presence = [
  { person: "person.mia", sensor: "sensor.mia_raum" },
  { person: "person.tom", sensor: "sensor.tom_raum" },
  { person: "person.lea", sensor: "sensor.lea_raum" },
];

// Invented doors, windows and furniture for the preview.
let openingId = 0;
const hole = (type, room_id, edge, offset, width, extra = {}) => ({
  id: `o${++openingId}`,
  room_id,
  edge,
  offset,
  width,
  type,
  sill: type === "door" ? 0 : 0.9,
  height: type === "door" ? 2.05 : 1.3,
  hinge: "left",
  cover: null,
  contact: null,
  tilt: null,
  ...extra,
});
const terrace = { sill: 0, height: 2.15 };
DEMO_BUILDING.floors[0].openings = [
  hole("window", "wohnen", 0, 1.6, 1.4, { contact: "none" }),
  hole("window", "wohnen", 0, 4.3, 1.8, { ...terrace, contact: "binary_sensor.wohnzimmer_terrasse", hinge: "right" }),
  hole("window", "wohnen", 3, 2.3, 1.2, { contact: "none" }),
  hole("door", "wohnen", 1, 3.4, 0.9),
  hole("door", "wohnen", 2, 4.2, 0.9),
  hole("window", "kueche", 0, 2.4, 1.2),
  hole("window", "kueche", 1, 2.6, 1.0),
  hole("door", "kueche", 2, 1.6, 0.9),
  hole("window", "schlafen", 2, 2.2, 1.4, { contact: "binary_sensor.schlafzimmer_fenster", tilt: "binary_sensor.schlafzimmer_kipp" }),
  hole("window", "schlafen", 3, 1.7, 1.0, { contact: "none" }),
  hole("window", "bad", 2, 1.2, 0.8, { sill: 1.3, height: 0.8 }),
  hole("door", "bad", 1, 1.2, 0.8),
  hole("door", "flur", 4, 0.8, 1.0),
];
DEMO_BUILDING.floors[1].openings = [
  hole("window", "kind", 0, 2.2, 1.2),
  hole("window", "arbeit", 0, 2.8, 1.6),
  hole("window", "gast", 2, 3.0, 1.2),
  hole("door", "kind", 1, 3.3, 0.9),
];

let furnitureId = 0;
const item = (type, x, z, w, d, h, rotation = 0) => ({ id: `m${++furnitureId}`, type, x, z, w, d, h, rotation, variant: null });
DEMO_BUILDING.floors[0].furniture = [
  item("rug", 2.4, 2.3, 2.6, 1.7, 0.01),
  item("sofa", 2.4, 3.7, 2.3, 0.92, 0.82, 180),
  item("armchair", 0.75, 2.2, 0.85, 0.85, 0.8, 270),
  item("tv_board", 2.4, 0.25, 1.8, 0.42, 0.5),
  item("plant", 5.55, 0.45, 0.5, 0.5, 1.2),
  item("shelf", 5.8, 2.6, 0.9, 0.35, 1.9, 90),
  item("fridge", 6.35, 0.36, 0.6, 0.66, 1.85),
  item("kitchen", 7.25, 0.31, 1.2, 0.62, 0.92),
  item("stove", 8.15, 0.31, 0.6, 0.62, 0.92),
  item("sink", 8.9, 0.31, 0.9, 0.62, 0.92),
  item("kitchen", 9.65, 0.31, 0.6, 0.62, 0.92),
  item("table", 8.0, 2.9, 1.4, 0.85, 0.75),
  item("chair", 7.6, 2.2, 0.45, 0.5, 0.9),
  item("chair", 8.4, 2.2, 0.45, 0.5, 0.9),
  item("chair", 7.6, 3.6, 0.45, 0.5, 0.9, 180),
  item("chair", 8.4, 3.6, 0.45, 0.5, 0.9, 180),
  item("bed", 2.2, 6.97, 1.6, 2.05, 0.9, 180),
  item("nightstand", 1.1, 7.78, 0.45, 0.4, 0.5, 180),
  item("nightstand", 3.3, 7.78, 0.45, 0.4, 0.5, 180),
  item("wardrobe", 0.31, 5.55, 1.6, 0.6, 2.1, 270),
  item("bathtub", 5.6, 7.6, 1.7, 0.75, 0.58, 180),
  item("wc", 4.72, 5.35, 0.38, 0.6, 0.8, 270),
  item("washbasin", 6.55, 5.3, 0.6, 0.46, 0.85, 90),
  item("stairs", 9.42, 6.3, 1.0, 3.2, 2.75),
  item("wardrobe", 7.1, 6.4, 1.2, 0.4, 2.0, 270),
];
DEMO_BUILDING.floors[1].furniture = [
  item("bed", 1.0, 1.4, 1.0, 2.05, 0.8, 90),
  item("desk", 2.8, 3.8, 1.2, 0.6, 0.75, 180),
  item("rug", 2.2, 2.6, 1.6, 1.2, 0.01),
  item("desk", 7.2, 0.36, 1.6, 0.7, 0.75),
  item("chair", 7.2, 1.1, 0.46, 0.5, 0.9, 180),
  item("shelf", 9.8, 2.1, 1.2, 0.35, 1.9, 90),
  item("sofa", 5.4, 3.6, 1.9, 0.85, 0.8, 180),
  item("bed", 5.0, 6.9, 1.4, 2.0, 0.85, 180),
  item("wardrobe", 3.72, 5.4, 1.4, 0.6, 2.1, 270),
  item("bathtub", 0.45, 6.1, 1.7, 0.75, 0.58, 90),
  item("washbasin", 2.1, 4.5, 0.6, 0.46, 0.85),
];
