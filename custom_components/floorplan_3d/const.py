"""Constants for Floorplan 3D."""

from __future__ import annotations

DOMAIN = "floorplan_3d"

STORAGE_VERSION = 1
STORAGE_KEY_BUILDING = f"{DOMAIN}.building"
STORAGE_KEY_IMAGES = f"{DOMAIN}.images"

URL_BASE = "/floorplan_3d_static"
MAIN_BUNDLE = "floorplan-3d.js"
PANEL_URL_PATH = "floorplan-3d"
PANEL_COMPONENT = "floorplan-3d-panel"
PANEL_ICON = "mdi:floor-plan"
PANEL_TITLE = "Floorplan 3D"

SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"
