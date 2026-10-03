"""Constants for NeonPlan 3D."""

from __future__ import annotations

DOMAIN = "neonplan3d"
# the integration's earlier name; its stores are taken over once (see storage.py)
LEGACY_DOMAIN = "floorplan_3d"

STORAGE_VERSION = 1
# minor versions of the building store; each step has a migration in storage.py
STORAGE_MINOR_VERSION = 2
STORAGE_KEY_BUILDING = f"{DOMAIN}.building"
STORAGE_KEY_IMAGES = f"{DOMAIN}.images"
STORAGE_KEY_HISTORY = f"{DOMAIN}.history"
STORAGE_KEY_PACKS = f"{DOMAIN}.packs"
STORAGE_KEY_LICENSE = f"{DOMAIN}.license"

# restore points: at most this many, and a new one only after this pause since the last one
HISTORY_MAX = 20
HISTORY_INTERVAL = 600

URL_BASE = "/neonplan3d_static"
MAIN_BUNDLE = "neonplan3d.js"
PANEL_URL_PATH = "neonplan3d"
PANEL_COMPONENT = "neonplan3d-panel"
PANEL_ICON = "mdi:floor-plan"
PANEL_TITLE = "NeonPlan 3D"

SIGNAL_BUILDING_UPDATED = f"{DOMAIN}_building_updated"

# French fork: the original repository and its release this fork is based on (raise it after merging
# a newer release of the original; until then upstream.py reports the newer one)
UPSTREAM_REPO = "Mastershort/neonplan3d"
UPSTREAM_BASE_VERSION = "1.8.0"
