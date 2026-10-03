"""French fork: the check for a newer release of the original NeonPlan 3D."""

from __future__ import annotations

from homeassistant.core import HomeAssistant
from homeassistant.helpers import issue_registry as ir
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry
from pytest_homeassistant_custom_component.test_util.aiohttp import AiohttpClientMocker

from custom_components.neonplan3d import upstream
from custom_components.neonplan3d.const import DOMAIN, UPSTREAM_BASE_VERSION

URL = "https://github.com/Mastershort/neonplan3d/releases/tag/v99.0.0"


def test_newer() -> None:
    assert upstream.newer("v1.8.1", "1.8.0")
    assert upstream.newer("1.10.0", "1.9.0")
    assert not upstream.newer("v1.8.0", "1.8.0")
    assert not upstream.newer("v1.7.9", "1.8.0")
    assert not upstream.newer("nightly", "1.8.0")


async def test_newer_release_raises_issue(hass: HomeAssistant, aioclient_mock: AiohttpClientMocker) -> None:
    aioclient_mock.get(upstream.LATEST_RELEASE_API, json={"tag_name": "v99.0.0", "html_url": URL})
    result = await upstream.async_check(hass)
    assert result == {"base": UPSTREAM_BASE_VERSION, "latest": "99.0.0", "url": URL}
    issue = ir.async_get(hass).async_get_issue(DOMAIN, upstream.ISSUE_ID)
    assert issue is not None
    assert issue.translation_placeholders == result


async def test_same_release_clears_issue(hass: HomeAssistant, aioclient_mock: AiohttpClientMocker) -> None:
    aioclient_mock.get(upstream.LATEST_RELEASE_API, json={"tag_name": "v99.0.0", "html_url": URL})
    await upstream.async_check(hass)
    aioclient_mock.clear_requests()
    aioclient_mock.get(upstream.LATEST_RELEASE_API, json={"tag_name": f"v{UPSTREAM_BASE_VERSION}"})
    assert await upstream.async_check(hass) is None
    assert ir.async_get(hass).async_get_issue(DOMAIN, upstream.ISSUE_ID) is None


async def test_failed_request_keeps_result(hass: HomeAssistant, aioclient_mock: AiohttpClientMocker) -> None:
    aioclient_mock.get(upstream.LATEST_RELEASE_API, json={"tag_name": "v99.0.0", "html_url": URL})
    first = await upstream.async_check(hass)
    aioclient_mock.clear_requests()
    aioclient_mock.get(upstream.LATEST_RELEASE_API, status=403)
    assert await upstream.async_check(hass) == first


async def test_websocket_admin_only(hass: HomeAssistant, hass_ws_client, hass_admin_user, aioclient_mock) -> None:
    MockConfigEntry(domain=DOMAIN).add_to_hass(hass)
    assert await async_setup_component(hass, DOMAIN, {})
    await hass.async_block_till_done()
    aioclient_mock.get(upstream.LATEST_RELEASE_API, json={"tag_name": "v99.0.0", "html_url": URL})
    await upstream.async_check(hass)

    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": "neonplan3d/upstream/get"})
    msg = await client.receive_json()
    assert msg["success"]
    assert msg["result"]["latest"] == "99.0.0"

    hass_admin_user.groups = []
    await client.send_json_auto_id({"type": "neonplan3d/upstream/get"})
    msg = await client.receive_json()
    assert not msg["success"]
