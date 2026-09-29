# Möbel-Packs

Möbel-Packs bringen zusätzliche Möbel in Floorplan 3D. Sie werden wie die eingebauten Möbel aus
Quadern und Zylindern gebaut und laufen deshalb genauso flüssig auf schwachen Tablets.

Nur Packs, die mit dem Herausgeber-Schlüssel unterschrieben sind, lassen sich importieren. Der
öffentliche Schlüssel steht in `custom_components/floorplan_3d/packs.py` (`PACK_PUBLIC_KEYS`); der
geheime Schlüssel liegt nur beim Herausgeber und gehört nie ins Repo.

## Ablauf

1. Pack-Quelle schreiben (JSON, Format unten), z. B. `private/packs/kueche.json`
   (`private/` wird von Git ignoriert).
2. Unterschreiben:

   ```
   python tools/fp3dpack.py sign private/packs/kueche.json --key %USERPROFILE%\.floorplan3d\pack-signing-key.pem
   ```

   Mit `--licensee "Name oder E-Mail"` wird der Käufer mit unterschrieben und beim Import angezeigt.
3. Prüfen: `python tools/fp3dpack.py verify private/packs/kueche.fp3dpack`
4. Die `.fp3dpack`-Datei verteilen. Import in Home Assistant: Editor → **Möbel** →
   **Möbel-Pack importieren …**

Den geheimen Schlüssel sicher aufbewahren (Backup, z. B. Passwort-Manager): Geht er verloren, können
keine neuen Packs mehr unterschrieben werden. Mit `keygen` einen neuen zu erzeugen hilft nur, wenn
dessen öffentlicher Schlüssel zusätzlich in `PACK_PUBLIC_KEYS` eingetragen und ausgeliefert wird.

## Format

```json
{
  "format": "fp3dpack",
  "version": 1,
  "id": "mastershort.kueche",
  "name": "Küchen-Pack",
  "publisher": "Mastershort",
  "description": "optional",
  "items": [
    {
      "id": "retro_fridge",
      "name": { "de": "Retro-Kühlschrank", "en": "Retro fridge" },
      "size": [0.6, 0.65, 1.5],
      "electric": true,
      "parts": [{ "shape": "box", "x": 0, "z": 0, "w": 1, "d": 1, "y": 0, "h": 1, "color": "white", "edges": true }],
      "symbol": [{ "shape": "rect", "x": 0, "z": 0, "w": 1, "d": 1 }]
    }
  ]
}
```

- `size`: Standardgröße in Metern (Breite, Tiefe, Höhe). Im Plan lässt sich jedes Möbel danach frei
  skalieren; alle Teile wachsen mit.
- `parts` (max. 60): `box`, `cyl` oder `loft`. Alle Maße sind **Anteile der Möbelgröße**: `x`/`z`
  Mitte (−0,5 … 0,5, vorne ist +z), `w`/`d` Breite/Tiefe (0 … 1), `y` Unterkante und `h` Höhe (0 … 1
  der Höhe). Ein Zylinder hat den kleineren Wert von `w` und `d` als Durchmesser; mit `axis: "x"` oder
  `"z"` liegt er (Räder, Rollen – die Länge ist die Ausdehnung entlang der Achse, der Durchmesser der
  kleinere Wert aus Querausdehnung und `h`). Ein `loft` ist ein Quader, dessen Oberseite ein anderes
  Rechteck ist (`tx`/`tz` Mitte, `tw`/`td` Größe; Standard wie unten) – für schräge Flächen wie
  Motorhauben, Windschutzscheiben oder Lampenschirme.
- `color`: `#rrggbb` oder eine Rolle der eingebauten Palette (`body`, `fabric`, `cushion`, `wood`,
  `white`, `metal`, `dark`, `glass`, `plant`, `pot`, `accent`) – Rollen passen zum Look. `top` setzt
  eine eigene Farbe für die Oberseite, `edges` zeichnet leuchtende Kanten (`true`: dezent blau,
  `"glow"`: cyan wie die Wände, `"faint"`: sehr zart).
- `symbol` (optional, max. 40): Draufsicht im Plan aus `rect` (`fill` für gefüllt), `circle` (`r` als
  Anteil der kleineren Seite) und `line` (`x1`, `z1`, `x2`, `z2`). Ohne Symbol zeichnet der Plan die
  Teile von oben.
- `electric`: das Möbel lässt sich mit einem Schalter und Leistungssensor verknüpfen.
- `mount`: wo das Möbel sitzt – `floor` (Standard), `surface` (auf dem Möbel darunter, z. B.
  Kaffeemaschine auf der Arbeitsplatte), `wall` (Unterkante bei `wall_y` Metern, z. B. Wallbox) oder
  `ceiling` (hängt von der Decke, z. B. Dunstabzug, Pendelleuchten).
- `surface`: die Oberseite trägt andere Möbel (Tisch, Kücheninsel, Werkbank).
- `light`: das Möbel ist eine Leuchte und wird mit einem Licht (oder Schalter) verknüpft. Der Wert sagt,
  wie das Licht den Raum ausleuchtet (`ceiling`, `pendant`, `floor`, `table`, `wall`, `spot`, `garden` …).
  Teile mit `"glow": true` leuchten in Farbe und Helligkeit des Lichts.

## Shop-Bilder

`cd frontend && node pack-images.mjs <pack.json>... --out <ordner>` rendert mit der echten 3D-Grafik
(vorher `npm run build`) je Pack ein Übersichtsbild (`overview.png`, 3200 × 2400) und ein freigestelltes
PNG pro Möbel (`items/<id>.png`).

Möbel eines entfernten Packs bleiben im Plan als einfache Kästen stehen und erscheinen wieder, wenn das
Pack erneut importiert wird.
