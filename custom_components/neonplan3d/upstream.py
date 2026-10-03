"""French fork: notice when the original NeonPlan 3D has a newer release than the one this fork is based on.

Once a day the latest release of the original repository is read from GitHub (no key, nothing about this
installation is sent). A newer one raises a repair issue (Settings → Repairs) and a notice in the panel
for administrators; both go away once the fork has caught up (UPSTREAM_BASE_VERSION in const.py).
"""

from __future__ import annotations

from datetime import timedelta
import logging
from typing import Any

import aiohttp
from awesomeversion import AwesomeVersion, AwesomeVersionException
from homeassistant.core import HomeAssistant
from homeassistant.helpers import issue_registry as ir
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .const import DOMAIN, UPSTREAM_BASE_VERSION, UPSTREAM_REPO

_LOGGER = logging.getLogger(__name__)

LATEST_RELEASE_API = f"https://api.github.com/repos/{UPSTREAM_REPO}/releases/latest"
RELEASES_URL = f"https://github.com/{UPSTREAM_REPO}/releases"
CHECK_INTERVAL = timedelta(hours=24)
FIRST_CHECK_DELAY = 60
ISSUE_ID = "upstream_update"
_TIMEOUT = aiohttp.ClientTimeout(total=30)
# the last result, for the panel: {"base", "latest", "url"} while the original is ahead, else None
_RESULT = f"{DOMAIN}_upstream"


def newer(latest: str, base: str) -> bool:
    """Whether the original's release tag (e.g. "v1.8.1") is newer than the fork's base version."""
    try:
        return AwesomeVersion(latest.removeprefix("v")) > AwesomeVersion(base)
    except AwesomeVersionException:
        return False


async def async_fetch_latest(hass: HomeAssistant) -> dict[str, str] | None:
    """Tag and page of the original's latest release, or None when GitHub cannot tell."""
    session = async_get_clientsession(hass)
    try:
        async with session.get(
            LATEST_RELEASE_API, headers={"Accept": "application/vnd.github+json"}, timeout=_TIMEOUT
        ) as resp:
            if resp.status != 200:
                _LOGGER.debug("Upstream check: GitHub answered %s", resp.status)
                return None
            body: Any = await resp.json()
    except (TimeoutError, aiohttp.ClientError, OSError, ValueError) as err:
        _LOGGER.debug("Upstream check failed: %s", err)
        return None
    tag = body.get("tag_name") if isinstance(body, dict) else None
    if not isinstance(tag, str) or not tag:
        return None
    url = body.get("html_url")
    return {"tag": tag, "url": url if isinstance(url, str) and url.startswith("https://") else RELEASES_URL}


async def async_check(hass: HomeAssistant) -> dict[str, str] | None:
    """Compare the original's latest release with the fork's base and raise or clear the repair issue.

    A failed request keeps the previous result, so a GitHub hiccup does not make the notice flicker.
    """
    release = await async_fetch_latest(hass)
    if release is None:
        return status(hass)
    latest = release["tag"].removeprefix("v")
    if newer(latest, UPSTREAM_BASE_VERSION):
        result = {"base": UPSTREAM_BASE_VERSION, "latest": latest, "url": release["url"]}
        ir.async_create_issue(
            hass,
            DOMAIN,
            ISSUE_ID,
            is_fixable=False,
            is_persistent=False,
            severity=ir.IssueSeverity.WARNING,
            learn_more_url=release["url"],
            translation_key=ISSUE_ID,
            translation_placeholders=result,
        )
        hass.data[_RESULT] = result
    else:
        ir.async_delete_issue(hass, DOMAIN, ISSUE_ID)
        hass.data[_RESULT] = None
    return status(hass)


def status(hass: HomeAssistant) -> dict[str, str] | None:
    """The last result: the original's newer release, or None."""
    result: dict[str, str] | None = hass.data.get(_RESULT)
    return result
