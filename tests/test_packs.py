"""Furniture packs: signature check, content check and import through the websocket."""

from __future__ import annotations

import base64
import copy
import json

from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
import pytest
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.neonplan3d import packs
from custom_components.neonplan3d.const import DOMAIN

PAYLOAD = {
    "format": "fp3dpack",
    "version": 1,
    "id": "test.starter",
    "name": "Starter",
    "publisher": "Test",
    "items": [
        {
            "id": "cube_chair",
            "name": {"de": "Würfelsessel", "en": "Cube chair"},
            "size": [0.8, 0.8, 0.75],
            "parts": [
                {"shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 0.55, "color": "fabric"},
                {"shape": "box", "x": 0, "z": -0.4, "w": 1, "d": 0.2, "y": 0.55, "h": 0.45, "color": "#223355"},
            ],
        }
    ],
}


def _key() -> tuple[Ed25519PrivateKey, dict[str, str]]:
    private = Ed25519PrivateKey.generate()
    raw = private.public_key().public_bytes(serialization.Encoding.Raw, serialization.PublicFormat.Raw)
    return private, {packs.key_id(raw): base64.b64encode(raw).decode()}


def _sign(private: Ed25519PrivateKey, keys: dict[str, str], payload: dict) -> str:
    sig = base64.b64encode(private.sign(packs.canonical(payload))).decode()
    return json.dumps({"payload": payload, "signature": {"key": next(iter(keys)), "sig": sig}})


def test_signed_pack_is_accepted() -> None:
    private, keys = _key()
    payload = packs.verify_pack(_sign(private, keys, PAYLOAD), keys)
    assert payload["items"][0]["parts"][0]["edges"] is False
    assert payload["licensee"] is None


def test_changed_or_foreign_packs_are_rejected() -> None:
    private, keys = _key()
    text = _sign(private, keys, PAYLOAD)
    # a changed file breaks the signature
    changed = json.loads(text)
    changed["payload"]["name"] = "Mine now"
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(json.dumps(changed), keys)
    assert err.value.code == "bad_signature"
    # signed with another key: the publisher is unknown
    other, other_keys = _key()
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(_sign(other, other_keys, PAYLOAD), keys)
    assert err.value.code == "unknown_publisher"
    # another key claiming the known key id
    forged = json.loads(_sign(other, other_keys, PAYLOAD))
    forged["signature"]["key"] = next(iter(keys))
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(json.dumps(forged), keys)
    assert err.value.code == "bad_signature"
    # without a signature, or not a pack at all
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(json.dumps({"payload": PAYLOAD}), keys)
    assert err.value.code == "unsigned"
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack("{}", keys)
    assert err.value.code == "not_a_pack"


def test_sloped_and_lying_parts_are_accepted() -> None:
    private, keys = _key()
    shaped = copy.deepcopy(PAYLOAD)
    box = {"x": 0, "z": 0.2, "w": 1, "d": 0.6, "y": 0, "h": 0.5, "color": "body"}
    shaped["items"][0]["parts"] = [
        {"shape": "loft", **box, "tx": 0, "tz": 0.1, "tw": 0.9, "td": 0.2, "edges": "glow"},
        {"shape": "cyl", "axis": "x", **box, "edges": "faint"},
    ]
    payload = packs.verify_pack(_sign(private, keys, shaped), keys)
    assert payload["items"][0]["parts"][0]["edges"] == "glow"
    assert payload["items"][0]["parts"][1]["axis"] == "x"
    bad = copy.deepcopy(shaped)
    bad["items"][0]["parts"][1]["axis"] = "w"
    with pytest.raises(packs.PackError):
        packs.verify_pack(_sign(private, keys, bad), keys)


def test_pack_content_is_checked() -> None:
    private, keys = _key()
    heavy = copy.deepcopy(PAYLOAD)
    heavy["items"][0]["parts"] *= 31  # more than 60 parts
    with pytest.raises(packs.PackError) as err:
        packs.verify_pack(_sign(private, keys, heavy), keys)
    assert err.value.code == "invalid_content"
    twice = copy.deepcopy(PAYLOAD)
    twice["items"].append(copy.deepcopy(twice["items"][0]))
    with pytest.raises(packs.PackError):
        packs.verify_pack(_sign(private, keys, twice), keys)


async def test_import_list_and_remove(hass: HomeAssistant, hass_ws_client, monkeypatch: pytest.MonkeyPatch) -> None:
    private, keys = _key()
    monkeypatch.setattr(packs, "PACK_PUBLIC_KEYS", keys)
    await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    client = await hass_ws_client(hass)

    await client.send_json_auto_id(
        {"type": "neonplan3d/packs/import", "pack": _sign(private, keys, {**PAYLOAD, "licensee": "Anna"})}
    )
    result = await client.receive_json()
    assert result["success"]
    assert result["result"] == {
        "id": "test.starter",
        "name": "Starter",
        "publisher": "Test",
        "licensee": "Anna",
        "items": 1,
    }

    await client.send_json_auto_id({"type": "neonplan3d/packs/import", "pack": "{}"})
    result = await client.receive_json()
    assert not result["success"] and result["error"]["code"] == "not_a_pack"

    await client.send_json_auto_id({"type": "neonplan3d/packs/list"})
    listed = (await client.receive_json())["result"]["packs"]
    assert [p["id"] for p in listed] == ["test.starter"]
    assert listed[0]["items"][0]["name"]["de"] == "Würfelsessel"

    await client.send_json_auto_id({"type": "neonplan3d/packs/remove", "pack_id": "test.starter"})
    assert (await client.receive_json())["success"]
    await client.send_json_auto_id({"type": "neonplan3d/packs/list"})
    assert (await client.receive_json())["result"]["packs"] == []


def test_publisher_key_is_configured() -> None:
    # the published integration accepts packs of the publisher's key only
    assert len(packs.PACK_PUBLIC_KEYS) >= 1
    for kid, public in packs.PACK_PUBLIC_KEYS.items():
        assert packs.key_id(base64.b64decode(public)) == kid
