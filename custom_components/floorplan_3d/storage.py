"""Persistence for Floorplan 3D.

The building (rooms, walls, furniture, placements) and the background images live in separate
stores so frequent saves from the editor never rewrite the large image data.
"""

from __future__ import annotations

import logging
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.storage import Store

from .const import (
    SIGNAL_BUILDING_UPDATED,
    STORAGE_KEY_BUILDING,
    STORAGE_KEY_IMAGES,
    STORAGE_VERSION,
)
from .schema import empty_building, image_ids

_LOGGER = logging.getLogger(__name__)


def _stores(hass: HomeAssistant) -> tuple[Store, Store]:
    return (
        Store(hass, STORAGE_VERSION, STORAGE_KEY_BUILDING),
        Store(hass, STORAGE_VERSION, STORAGE_KEY_IMAGES),
    )


class FloorplanData:
    """Building and images of one installation."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialise the stores."""
        self.hass = hass
        self._building_store, self._image_store = _stores(hass)
        self.building: dict[str, Any] = empty_building()
        self.revision = 0
        self._images: dict[str, str] = {}

    async def async_load(self) -> None:
        """Load both stores and drop images no floor refers to any more."""
        stored = await self._building_store.async_load()
        if stored:
            self.building = stored.get("building") or empty_building()
            self.revision = int(stored.get("revision", 0))
        images = await self._image_store.async_load()
        self._images = dict((images or {}).get("images", {}))
        unused = set(self._images) - image_ids(self.building)
        if unused:
            _LOGGER.debug("Removing %d unused background images", len(unused))
            for image_id in unused:
                self._images.pop(image_id)
            await self._save_images()

    async def async_save_building(self, building: dict[str, Any]) -> int:
        """Store a validated building, bump the revision and notify subscribers."""
        self.building = building
        self.revision += 1
        await self._building_store.async_save({"revision": self.revision, "building": building})
        async_dispatcher_send(self.hass, SIGNAL_BUILDING_UPDATED, self.revision)
        return self.revision

    def get_image(self, image_id: str) -> str | None:
        """Return an image as data URL."""
        return self._images.get(image_id)

    async def async_set_image(self, image_id: str, data: str) -> None:
        """Store an image."""
        self._images[image_id] = data
        await self._save_images()

    async def async_delete_image(self, image_id: str) -> None:
        """Remove an image."""
        if self._images.pop(image_id, None) is not None:
            await self._save_images()

    async def _save_images(self) -> None:
        await self._image_store.async_save({"images": self._images})


async def async_remove_stores(hass: HomeAssistant) -> None:
    """Delete every store of the integration."""
    for store in _stores(hass):
        await store.async_remove()
