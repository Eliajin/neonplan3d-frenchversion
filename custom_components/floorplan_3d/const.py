"""Constants for Floorplan 3D."""

from __future__ import annotations

DOMAIN = "floorplan_3d"

STORAGE_VERSION = 1
# minor versions of the building store; each step has a migration in storage.py
STORAGE_MINOR_VERSION = 2
STORAGE_KEY_BUILDING = f"{DOMAIN}.building"
STORAGE_KEY_IMAGES = f"{DOMAIN}.images"
STORAGE_KEY_HISTORY = f"{DOMAIN}.history"

# restore points: at most this many, and a new one only after this pause since the last one
HISTORY_MAX = 20
HISTORY_INTERVAL = 600

URL_BASE = "/floorplan_3d_static"
MAIN_BUNDLE = "floorplan-3d.js"
PANEL_URL_PATH = "floorplan-3d"
PANEL_COMPONENT = "floorplan-3d-panel"
PANEL_ICON = "mdi:floor-plan"
PANEL_TITLE = "Floorplan 3D"

SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"
