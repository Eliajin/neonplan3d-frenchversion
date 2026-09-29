# Floorplan 3D

Draw your home directly in Home Assistant and see it as a 3D model in a neon look. No external tools, no cloud.

> **Status: early development (Phase 5 of 6).** The data model, automatic walls, the 2D editor, the neon 3D view with floors and camera flights, device control, doors and windows, furniture, stairs, energy flow and presence work. Kiosk mode, a light theme and the release follow in the last phase (see [docs/plan.md](docs/plan.md), in German).

## Features (so far)

- **2D editor in Home Assistant**
  - Floors with name, elevation and ceiling height.
  - Rooms as rectangles or free shapes.
  - Snapping to the grid, to corners and edges of other rooms, and to corner alignments.
  - "By measure": tap a starting point, then type each wall's length and pick its direction (arrow buttons or arrow keys); "rectangle by size" adds a room from width × depth.
  - "Close gaps" joins rooms drawn up to 60 cm apart (e.g. measured inside dimensions) at one shared wall and takes the gap as interior wall thickness.
  - Exact values can be typed in, in metres.
  - Undo and redo, duplicate, delete.
  - Mouse and touch: pinch to zoom, pan with two fingers.
- **Automatic walls**: each shared edge becomes an interior wall, outer edges become exterior walls. Corners and T-junctions are mitred. Wall thickness is configurable.
- **Doors, windows and garage doors**: tap a wall with the door, window or garage door tool, then drag them along the wall. Width, sill, height and hinge side are adjustable; a window with sill 0 is a terrace door.
- **Furniture library** of 40 detailed low-poly models in six sections (living, dining, kitchen, sleeping, bath & laundry, work), e.g. sofa, corner bench, bar stool, office chair, wall and tall kitchen units with oven, kitchen island, dishwasher, washing machine, dryer, bunk bed, chest of drawers, coat rack, wall TV and stairs.
  - Top-view symbols in the plan show how an item is turned; a handle in front of the selected item rotates it (15° steps).
  - Dragged near a wall, an item turns its back (or side) to the wall and sits flush; Alt moves freely.
  - Electric furniture can be linked to entities (automatically from the room's area, or by hand): a TV shows its media player, with the picture the media player provides (app icon or cover art) on its screen, glowing in the colour of the running app, and the app or title on its label; a power sensor adds watts and an energy cable.
- **Room packages**: "Furnish …" on a room places a set of furniture against its walls – kitchen row, L-shaped kitchen, bathroom, bedroom, living room, dining room, office, kids' room, hall – including lamps linked to the area's lights.
- **Furnish in 3D** (admins): drag furniture and lamps in the 3D view; they snap to walls like in the editor; turn by 45° or delete from the bar.
- **Stairs** open the ceiling of the floor above.
- **Floor materials** (wood, oak, tiles, carpet, stone, concrete) show as subtle patterns in 3D.
- **Outdoor areas**: lawn, terrace, path, driveway, pool, flower bed, hedge and fence, drawn with the "Outdoor" tool; path lights, garden spots and outdoor wall lights light the outdoor areas and the facade.
- **Roof**: flat or gable over the top floor (settings); shown in the house view, it lifts and fades when you zoom in.
- **Daylight**: with north set in the settings, sunlight from `sun.sun` falls through the windows facing the sun as soft patches on the floor (smaller when blinds are down); the sky behind the house gets lighter by day.
- **Looks**: *Neon* (default), *Blueprint* (white lines on blue) and *Day* (a light architectural model); switched instantly, remembered per device, card option `theme`. Lit lamps, open windows and other signal colours keep their colour in every look.
- **Heatmap**: floors coloured by temperature, humidity or CO₂ of the room's sensors, with a legend.
- **Living devices**: a radiator linked to a thermostat glows while it heats; washing machine, dryer and dishwasher glow while they run.
- **Area link**: each room can be linked to a Home Assistant area.
- **Devices**: the area's lights, switches, covers, thermostats, media players, sensors and cameras can be placed in the room automatically and moved by hand in the plan.
  - Lists are grouped by device: the main entity first, further entities (LED indicators, effects, …) behind "+n more"; with a search field.
  - Lights are placed as lamps from the furniture library (ceiling, pendant, floor, table, wall light, LED strip), linked to a light automatically or by hand. Their 3D model glows in the light colour; table lamps stand on the furniture below, wall lights and strips snap to the wall. Lights placed as devices in earlier versions become lamps automatically.
  - More lamp types: downlight, surface spot, LED panel and floor uplight; "Place spots" puts a grid of lamps into a room at once, all following one light (spots on one dimmer). Several lamps can follow the same light.
  - Room lighting: floors and the inner faces of walls are lit by the lamps of their room, in the lamps' colours and brightness (two RGB ceiling lights mix in between); light reaches the next room only through doors. Computed on the CPU when a light changes – no real-time lights, so it stays light for wall tablets.
  - Colour effects (colour loop …) are animated in 3D; lit lamps get a soft halo (not at the tablet level) and spots show light cones at the level *High*; pendants come as shade, globe, cone or drum.
  - Tap a lamp in 3D to switch it (it flashes briefly), long press for details; linked furniture (TV, …), windows, doors and garage doors can be tapped directly as well.
  - Markers: *None*, *Important* (default: only devices without a 3D object and values such as watts or the running app) or *All*; remembered per device, card option `markers`.
- **Floor plan image as template**: an image of your floor plan can be placed under the drawing, with scale and opacity.
- **3D view (neon look)**:
  - Walls stay full height; the ones in front of the camera turn into tinted glass, so rooms, doors and windows stay whole. A "Cut" mode shows all walls cut at hip height instead.
  - Fine glowing top edges, faint corner lines and wall shadows baked into the floor.
  - Three levels: the whole house (floors pulled apart or stacked, with a label per floor), one floor (floors above fly away, floors below stay dimmed) and one room.
  - Tap a floor label or a room to go in; double tap, Esc or *Back* goes one level up.
  - Windows with frames and glass, door frames, window sills.
  - Door leaves swing open with a door contact (half open without one); garage doors follow a garage cover or contact, the open part lying under the ceiling.
  - Blinds are drawn in front of their windows and follow the cover position; window contacts open or tilt the sash (a second sensor can mark "tilted"); open windows glow warm. Blinds and contacts are matched with windows automatically by area and can be set by hand.
  - Device markers with their state; lights that are on cast a glow on the floor that follows brightness and colour.
  - Tap a light or switch to toggle it; a long press opens Home Assistant's details dialog.
  - The *Tablet* level (also chosen automatically on Fire tablets) leaves out floor patterns, baked floor shadows, the ground grid and the wide cable glow.
  - Quality levels *Auto*, *Tablet* and *High* and an *FPS* display (frame rate, slowest frame, draw calls, quality level), both remembered per device.
- **Room panel** (next to the 3D view, at the bottom on phones and portrait tablets): lights with brightness, colour temperature and colours, covers, heating, media, switches, cameras (snapshots every few seconds, a tap opens the live view), sensors, scenes and scripts of the room's area.
  - Only renders when something changes, so it uses no GPU while idle.
- **Energy flow**: place the meter in the editor and choose power sensors for grid, solar, battery (with charge level) and an optional tariff sensor.
  - Glowing cables run from the meter along the wall bases and through the walls to every placed device that reports power (its own sensor or a power sensor of the same device); cables shared by several devices carry their sum.
  - Stripes move with the power (still at 0 W); grid import is cyan, solar and export yellow, battery green. The animation runs at about 30 fps and stops when nothing flows or the page is hidden.
  - Watt labels at the devices and an energy bar with consumption, grid, solar, battery and tariff.
- **Presence**: per person a room sensor (e.g. ESPresense, Bermuda) whose state names the room or area; people at home show as pink markers in their room. Floor labels count rooms, lights on, open windows and people.
- **Backup**: restore points while editing (at most one every 10 minutes, the last 20 are kept), export and import as a JSON file, and "share as template" without areas, devices, sensors and images.
- **Updates without restart trouble**: fields added by newer versions are passed through, so saving keeps working after an update until Home Assistant restarts.
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
stats: false            # optional: show the performance display
markers: important      # optional: none | important | all
heatmap: none           # optional: none | temperature | humidity | co2
theme: neon             # optional: neon | blueprint | day
energy: true            # optional: energy values at the top
flows: false            # optional: power flow lines always on/off (without it: a switch in the card)
room_panel: true        # optional: tapping a room opens its details
fill: false             # optional: fill the screen below the dashboard header instead of a height
controls: true          # optional: switches in the card, or a list of walls, floors, temperature, humidity, co2
room_names: true        # optional: room names in 3D
floor_stack: dim        # optional: floors below an opened floor: dim | stacked | single
fullscreen_button: false
floor_thumbs: true      # optional: floor pictures to switch floors (default: on without a start floor)
alerts: true            # optional: smoke, gas, CO, water, alarm and windows open in the rain pulse
alert_jump: false       # optional: jump to the room of a new warning
scenes: true            # optional: scene and script buttons of the selected room
idle_return: 0          # optional: kiosk – seconds without a touch until the start view returns
night: "off"            # optional: kiosk – dim at night: off | sun | "22:00-06:00"
idle_orbit: false       # optional: kiosk – slow camera turn after the idle return
```

All options can also be set in the card's visual editor (no YAML needed).

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
