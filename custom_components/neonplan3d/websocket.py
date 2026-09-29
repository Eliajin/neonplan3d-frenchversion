"""Websocket commands used by the panel, the card and the editor."""

from __future__ import annotations

from typing import Any

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.loader import async_get_integration
import voluptuous as vol

from .const import DOMAIN, SIGNAL_BUILDING_UPDATED
from .packs import MAX_PACK_SIZE, PackError, verify_pack
from .schema import BUILDING_SCHEMA, IMAGE_DATA
from .storage import FloorplanData, complete

_IMAGE_ID = vol.All(str, vol.Length(min=1, max=64), vol.Match(r"^[A-Za-z0-9_\-.]+$"))


@callback
def async_register_commands(hass: HomeAssistant) -> None:
    """Register all websocket commands."""
    for command in (
        ws_get_building,
        ws_save_building,
        ws_subscribe_building,
        ws_get_image,
        ws_set_image,
        ws_delete_image,
        ws_history_list,
        ws_history_snapshot,
        ws_history_restore,
        ws_packs_list,
        ws_packs_import,
        ws_packs_remove,
    ):
        websocket_api.async_register_command(hass, command)


def _data(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict) -> FloorplanData | None:
    data: FloorplanData | None = hass.data.get(DOMAIN)
    if data is None:
        connection.send_error(msg["id"], "not_loaded", "NeonPlan 3D is not set up")
    return data


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/building/get"})
@websocket_api.async_response
async def ws_get_building(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return the building, its revision and the running integration version.

    The frontend compares the version with its own: after an update the new frontend files are served
    at once, but the backend (and its validation) only changes with a restart.
    """
    if (data := _data(hass, connection, msg)) is None:
        return
    integration = await async_get_integration(hass, DOMAIN)
    connection.send_result(
        msg["id"], {"building": data.building, "revision": data.revision, "version": str(integration.version)}
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/building/save",
        vol.Required("building"): BUILDING_SCHEMA,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_save_building(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Replace the building."""
    if (data := _data(hass, connection, msg)) is None:
        return
    revision = await data.async_save_building(msg["building"])
    connection.send_result(msg["id"], {"revision": revision})


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/building/subscribe"})
@callback
def ws_subscribe_building(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Send the new revision whenever the building changes."""

    @callback
    def forward(revision: int) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"revision": revision}))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_BUILDING_UPDATED, forward)
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/image/get", vol.Required("image_id"): _IMAGE_ID})
@callback
def ws_get_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return a background image as data URL."""
    if (data := _data(hass, connection, msg)) is None:
        return
    image = data.get_image(msg["image_id"])
    if image is None:
        connection.send_error(msg["id"], "not_found", "Image not found")
        return
    connection.send_result(msg["id"], {"data": image})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/image/set",
        vol.Required("image_id"): _IMAGE_ID,
        vol.Required("data"): IMAGE_DATA,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_set_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Store a background image."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_set_image(msg["image_id"], msg["data"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/image/delete", vol.Required("image_id"): _IMAGE_ID})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_delete_image(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove a background image."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_delete_image(msg["image_id"])
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/history/list"})
@websocket_api.require_admin
@callback
def ws_history_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """List the restore points (newest first)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], {"snapshots": data.history()})


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/history/snapshot"})
@websocket_api.require_admin
@websocket_api.async_response
async def ws_history_snapshot(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Keep the current building as a restore point (e.g. before an import)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    await data.async_snapshot()
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/history/restore", vol.Required("snapshot_id"): _IMAGE_ID}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_history_restore(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Go back to a restore point; the current state becomes a restore point itself."""
    if (data := _data(hass, connection, msg)) is None:
        return
    building = data.snapshot(msg["snapshot_id"])
    if building is None:
        connection.send_error(msg["id"], "not_found", "Restore point not found")
        return
    await data.async_snapshot()
    revision = await data.async_save_building(complete(building))
    connection.send_result(msg["id"], {"revision": revision})


@websocket_api.websocket_command({vol.Required("type"): "neonplan3d/packs/list"})
@callback
def ws_packs_list(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Return the imported furniture packs (every user needs them to see the furniture)."""
    if (data := _data(hass, connection, msg)) is None:
        return
    connection.send_result(msg["id"], {"packs": data.packs})


@websocket_api.websocket_command(
    {
        vol.Required("type"): "neonplan3d/packs/import",
        vol.Required("pack"): vol.All(str, vol.Length(max=MAX_PACK_SIZE)),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_packs_import(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Check a pack file's signature and content, then keep it."""
    if (data := _data(hass, connection, msg)) is None:
        return
    try:
        payload = verify_pack(msg["pack"])
    except PackError as err:
        connection.send_error(msg["id"], err.code, err.detail or err.code)
        return
    await data.async_add_pack(payload)
    connection.send_result(
        msg["id"],
        {
            "id": payload["id"],
            "name": payload["name"],
            "publisher": payload["publisher"],
            "licensee": payload["licensee"],
            "items": len(payload["items"]),
        },
    )


@websocket_api.websocket_command(
    {vol.Required("type"): "neonplan3d/packs/remove", vol.Required("pack_id"): vol.All(str, vol.Length(max=64))}
)
@websocket_api.require_admin
@websocket_api.async_response
async def ws_packs_remove(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Remove an imported pack."""
    if (data := _data(hass, connection, msg)) is None:
        return
    if not await data.async_remove_pack(msg["pack_id"]):
        connection.send_error(msg["id"], "not_found", "Pack not found")
        return
    connection.send_result(msg["id"])
