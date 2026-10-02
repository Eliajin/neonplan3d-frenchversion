# Changelog

All notable changes to NeonPlan 3D. The full notes in German and English are on the
[releases page](https://github.com/Mastershort/neonplan3d/releases). Ideas and votes:
[Discussions → Ideas](https://github.com/Mastershort/neonplan3d/discussions/categories/ideas).

## 1.3.0 – unreleased

### New

- **More sensors:** gas and water meters, energy, illuminance, pressure and air quality can be placed; values use Home Assistant's decimals (#7).
- **TV on a smart plug:** TVs and media walls may link a switch instead of a media player (#5).
- **Marker in 3D per device:** automatic, always, without watts or hidden.
- **Highlight when closed** for doors and windows (WC, child's room).

### Fixes

- Furniture and lamps with a linked entity can be dragged in 3D again (grabbing the item or its marker).

## 1.2.0

### New

- **Wall height per wall:** parapets, counters and half-height dividers. Rooms get a *Wall heights* box with every wall, free walls a height field.
- **Doors and windows in free walls:** the *Door & window* tool now also works on free-standing walls.
- **Height above floor** for wall lights and LED strips; strips below 1 m shine upwards.
- **Ridge direction** of gable roofs: along the long or the short side (terraced houses, #1).
- **Arrow keys** nudge the selection in the plan editor: one grid step, Shift 10 cm, Alt 1 cm.

### Fixes

- Several lamps linked to the same light no longer stay green in 3D; all follow the light.

### Community

- Issue templates, this changelog and an Ideas section for feature requests with voting.

## 1.1.1

### New

- **Door style "Opening (no door)":** a passage between two rooms, just a gap in the wall without frame or leaf.

## 1.1.0

### New

- **Free-standing walls:** the *Wall* tool draws a partition through part of a room.

## 1.0.2

### Fixes

- Floor openings show from above; their rim glows like the wall tops.
- The editor warns when a floor opening reaches across a room boundary.

## 1.0.1

### New

- Manual links in the app, in your Home Assistant language (German or English).

## 1.0.0

The first public release: plan editor in Home Assistant, live neon 3D view, 40 built-in furniture models,
cameras, wall tablet features, dashboard card with three looks, optional furniture packs and Pro add-ons.
