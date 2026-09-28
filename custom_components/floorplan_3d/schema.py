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
_ENTITY_REF = vol.Any(None, vol.All(str, vol.Length(max=255)))

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
        vol.Required("type"): vol.In(["door", "window", "garage"]),
        vol.Required("sill"): _LENGTH,
        vol.Required("height"): _LENGTH,
        # window sash hinge as seen from the room; entities: None = assign automatically by area,
        # "none" = no entity
        vol.Optional("hinge", default="left"): vol.In(["left", "right"]),
        vol.Optional("cover", default=None): _ENTITY_REF,
        vol.Optional("contact", default=None): _ENTITY_REF,
        vol.Optional("tilt", default=None): _ENTITY_REF,
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
        # lights: how the lamp is mounted (None = ceiling)
        vol.Optional("mount", default=None): vol.Any(None, vol.In(["ceiling", "floor", "table", "wall"])),
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

_ENTITY = vol.Any(None, vol.All(str, vol.Length(max=255)))

METER_SCHEMA = vol.Schema({vol.Required("floor_id"): _ID, vol.Required("x"): _COORD, vol.Required("z"): _COORD})

ENERGY_DEFAULTS = {
    "meter": None,
    "grid": None,
    "grid_invert": False,
    "solar": None,
    "battery": None,
    "battery_invert": False,
    "battery_soc": None,
    "tariff": None,
}

# Power sensors in watts: grid positive = import, battery positive = discharging (both can be inverted)
ENERGY_SCHEMA = vol.Schema(
    {
        vol.Optional("meter", default=None): vol.Any(None, METER_SCHEMA),
        vol.Optional("grid", default=None): _ENTITY,
        vol.Optional("grid_invert", default=False): bool,
        vol.Optional("solar", default=None): _ENTITY,
        vol.Optional("battery", default=None): _ENTITY,
        vol.Optional("battery_invert", default=False): bool,
        vol.Optional("battery_soc", default=None): _ENTITY,
        vol.Optional("tariff", default=None): _ENTITY,
    }
)

# Which sensor tells the room of a person (ESPresense, Bermuda: the state is a room or area name)
PRESENCE_SCHEMA = vol.Schema(
    {vol.Required("person"): vol.All(str, vol.Length(max=255)), vol.Required("sensor"): _ENTITY}
)

BUILDING_SCHEMA = vol.Schema(
    {
        vol.Required("version"): 1,
        vol.Required("floors"): vol.All([FLOOR_SCHEMA], vol.Length(max=MAX_FLOORS)),
        vol.Required("settings"): SETTINGS_SCHEMA,
        vol.Optional("energy", default=lambda: dict(ENERGY_DEFAULTS)): ENERGY_SCHEMA,
        vol.Optional("presence", default=list): vol.All([PRESENCE_SCHEMA], vol.Length(max=50)),
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
        "energy": dict(ENERGY_DEFAULTS),
        "presence": [],
    }


def image_ids(building: dict) -> set[str]:
    """Return the ids of all background images referenced by a building."""
    return {floor["background"]["image_id"] for floor in building.get("floors", []) if floor.get("background")}
