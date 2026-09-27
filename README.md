# Floorplan 3D

Draw your home directly in Home Assistant and see it as a 3D model in a neon look. No external tools, no cloud.

> **Status: early development (Phase 2 of 6).** The data model, automatic walls, the 2D editor and the neon 3D view with floors and camera flights work. Device control, doors and windows, furniture, energy flow and presence follow in later phases (see [docs/plan.md](docs/plan.md), in German).

## Features (so far)

- **2D editor in Home Assistant**
  - Floors with name, elevation and ceiling height.
  - Rooms as rectangles or free shapes.
  - Snapping to the grid, to corners and edges of other rooms, and to corner alignments.
  - Exact values can be typed in, in metres.
  - Undo and redo, duplicate, delete.
  - Mouse and touch: pinch to zoom, pan with two fingers.
- **Automatic walls**: each shared edge becomes an interior wall, outer edges become exterior walls. Corners and T-junctions are mitred. Wall thickness is configurable.
- **Area link**: each room can be linked to a Home Assistant area.
- **Floor plan image as template**: an image of your floor plan can be placed under the drawing, with scale and opacity.
- **3D view (neon look)**:
  - Walls in front of the camera fold down automatically; a "Cut" mode shows all walls low.
  - Fine glowing top edges, faint corner lines and wall shadows baked into the floor.
  - Three levels: the whole house (floors pulled apart or stacked, with a label per floor), one floor (floors above fly away, floors below stay dimmed) and one room.
  - Tap a floor label or a room to go in; double tap, Esc or *Back* goes one level up.
  - Quality levels *Auto*, *Tablet* and *High* (remembered per device).
  - Only renders when something changes, so it uses no GPU while idle.
- **Sidebar page and dashboard card**: `custom:floorplan-3d-card` is loaded automatically, no resource needed.

## Installation

### HACS (custom repository)

1. HACS → ⋮ → *Custom repositories* → add `https://github.com/Mastershort/floorplan-3d` as **Integration**.
2. Install *Floorplan 3D* and restart Home Assistant.
3. *Settings → Devices & services → Add integration → Floorplan 3D*.

### Manual

Copy `custom_components/floorplan_3d` into your `config/custom_components/` folder and restart Home Assistant.

## Dashboard card

```yaml
type: custom:floorplan-3d-card
floor: floor_ab12cd34   # optional: show a single floor (id from the editor)
height: 420             # optional: height in pixels
walls: auto             # optional: auto | cut
explode: true           # optional: pull floors apart in the house view (default true)
quality: auto           # optional: auto | low | high
```

## Development

```bash
cd frontend
npm install
npm test          # wall generation and other pure logic
npm run typecheck
npm run build     # writes the bundles to custom_components/floorplan_3d/frontend
npm run screenshot  # renders preview/index.html (invented demo data) with a local Chrome/Edge
```

- **Preview without Home Assistant**: open `preview/index.html` through any local web server.
- **Deploy to a Home Assistant instance**: create `deploy.local.json` with `{"target": "<config>/custom_components/floorplan_3d"}`, then run `npm run deploy` in `frontend/`.
- **Python tests** run in CI (Linux) with `pytest-homeassistant-custom-component`.

## Licence

MIT
