"""Validation schemas for the building data (mirrors frontend/src/model.ts)."""

from __future__ import annotations

import voluptuous as vol

MAX_FLOORS = 20
MAX_ROOMS = 200
MAX_POINTS = 200
MAX_ITEMS = 1000
MAX_IMAGE_CHARS = 8 * 1024 * 1024

_ID = vol.All(str, vol.Length(min=1, max=64), vol.Match(r"^[A-Za-z0-9_\-.]+$"))
_NAME = vol.All(str, vol.Length(max=100))
_COORD = vol.All(vol.Coerce(float), vol.Range(min=-1000, max=1000))
_LENGTH = vol.All(vol.Coerce(float), vol.Range(min=0, max=100))
_POINT = vol.All([_COORD], vol.Length(min=2, max=2))

ROOM_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("name"): _NAME,
        vol.Required("area_id"): vol.Any(None, vol.All(str, vol.Length(max=255))),
        vol.Required("points"): vol.All([_POINT], vol.Length(min=3, max=MAX_POINTS)),
        vol.Required("floor_material"): vol.All(str, vol.Length(max=32)),
    }
)

OPENING_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("room_id"): _ID,
        vol.Required("edge"): vol.All(int, vol.Range(min=0, max=MAX_POINTS)),
        vol.Required("offset"): _LENGTH,
        vol.Required("width"): _LENGTH,
        vol.Required("type"): vol.In(["door", "window"]),
        vol.Required("sill"): _LENGTH,
        vol.Required("height"): _LENGTH,
    }
)

FURNITURE_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("type"): vol.All(str, vol.Length(max=32)),
        vol.Required("x"): _COORD,
        vol.Required("z"): _COORD,
        vol.Required("rotation"): vol.Coerce(float),
        vol.Required("w"): _LENGTH,
        vol.Required("d"): _LENGTH,
        vol.Required("h"): _LENGTH,
        vol.Required("variant"): vol.Any(None, vol.All(str, vol.Length(max=32))),
    }
)

PLACEMENT_SCHEMA = vol.Schema(
    {
        vol.Required("entity_id"): vol.All(str, vol.Length(max=255)),
        vol.Required("x"): _COORD,
        vol.Required("z"): _COORD,
        vol.Required("y"): vol.Any(None, _LENGTH),
    }
)

BACKGROUND_SCHEMA = vol.Schema(
    {
        vol.Required("image_id"): _ID,
        vol.Required("x"): _COORD,
        vol.Required("z"): _COORD,
        vol.Required("width"): vol.All(vol.Coerce(float), vol.Range(min=0.1, max=1000)),
        vol.Required("opacity"): vol.All(vol.Coerce(float), vol.Range(min=0, max=1)),
    }
)

FLOOR_SCHEMA = vol.Schema(
    {
        vol.Required("id"): _ID,
        vol.Required("name"): _NAME,
        vol.Required("elevation"): vol.All(vol.Coerce(float), vol.Range(min=-100, max=500)),
        vol.Required("height"): vol.All(vol.Coerce(float), vol.Range(min=1, max=20)),
        vol.Required("cut_height"): vol.All(vol.Coerce(float), vol.Range(min=0.2, max=20)),
        vol.Required("rooms"): vol.All([ROOM_SCHEMA], vol.Length(max=MAX_ROOMS)),
        vol.Required("openings"): vol.All([OPENING_SCHEMA], vol.Length(max=MAX_ITEMS)),
        vol.Required("furniture"): vol.All([FURNITURE_SCHEMA], vol.Length(max=MAX_ITEMS)),
        vol.Required("placements"): vol.All([PLACEMENT_SCHEMA], vol.Length(max=MAX_ITEMS)),
        vol.Required("background"): vol.Any(None, BACKGROUND_SCHEMA),
    }
)

SETTINGS_SCHEMA = vol.Schema(
    {
        vol.Required("wall_exterior"): vol.All(vol.Coerce(float), vol.Range(min=0.02, max=1)),
        vol.Required("wall_interior"): vol.All(vol.Coerce(float), vol.Range(min=0.02, max=1)),
        vol.Required("grid"): vol.All(vol.Coerce(float), vol.Range(min=0.01, max=1)),
    }
)

BUILDING_SCHEMA = vol.Schema(
    {
        vol.Required("version"): 1,
        vol.Required("floors"): vol.All([FLOOR_SCHEMA], vol.Length(max=MAX_FLOORS)),
        vol.Required("settings"): SETTINGS_SCHEMA,
    }
)

IMAGE_DATA = vol.All(
    str,
    vol.Length(max=MAX_IMAGE_CHARS),
    vol.Match(r"^data:image/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$"),
)


def empty_building() -> dict:
    """Return a building without floors."""
    return {
        "version": 1,
        "floors": [],
        "settings": {"wall_exterior": 0.24, "wall_interior": 0.12, "grid": 0.05},
    }


def image_ids(building: dict) -> set[str]:
    """Return the ids of all background images referenced by a building."""
    return {floor["background"]["image_id"] for floor in building.get("floors", []) if floor.get("background")}
