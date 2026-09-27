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
