# Projekt-Prompt: 3D-Wohnungsplan für Home Assistant (Arbeitstitel „Floorplan 3D“)

> So startest du: In diesem Ordner eine neue Claude-Code-Sitzung öffnen und schreiben
> „Lies PROMPT.md und leg mit Phase 1 los.“ Der Name ist ein Arbeitstitel und kann jederzeit geändert werden.

## 1. Ziel

Baue eine **eigenständige Home-Assistant-Integration** (HACS, Open Source, MIT), mit der man seine Wohnung bzw. sein Haus **direkt in Home Assistant zeichnet** und als **richtig schöne 3D-Ansicht** anzeigt und bedient. Keine externen Tools (kein Sweet Home 3D, kein Blender), keine Cloud.

Anspruch in drei Sätzen:
- Es muss **unglaublich gut aussehen**: ein stilisierter, hochwertiger **Neon-Look** (dunkel, leuchtende Kanten, glühende Räume, animierte Energieflüsse) – keine Strichzeichnung, kein Kitsch.
- Es muss **unglaublich gut bedienbar** sein: drehen, zoomen, per Antippen in Räume fliegen, schnell zwischen Räumen und Etagen wechseln, Geräte direkt schalten – mit Maus und Touch.
- Es muss **leicht** sein: flüssig auf einem **Amazon Fire HD 10** (Fully Kiosk / Silk) als Wandtablet, im Ruhezustand praktisch 0 % Last.

Sprachen: Oberfläche Deutsch und Englisch (Deutsch zuerst). Code, Bezeichner und Kommentare auf Englisch.

## 2. Look: Neon (verbindlich)

Referenz: die Stil-Demo „Stilprobe 3D-Wohnung“ (Look „Neon“, Version 2 mit hohen Wänden, Rollläden, Fenstersensoren und Energiefluss) unter https://claude.ai/artifact/X23mncajZKLwMZRoWco2KE – mit dem Artifact-Tool (`action: "read"`) lesbar. Deren Techniken (Wegklappen der Wände, Fenster-Rigs, Energiefluss-Shader in einem Draw-Call, Rendern bei Bedarf) sind ausdrücklich zur Übernahme gedacht. Der Nutzer hat Neon gewählt, möchte es aber **feiner gezeichnet**, und er möchte **Energieflüsse** wie auf einem Referenzbild: leuchtende Leitungen von der Hauszuleitung durch die Wände zu den Verbrauchern, Watt-Angaben an Geräten, Gesamtverbrauch, Solarerzeugung, aktueller Tarif.

Gestaltungsregeln:
- Dunkler Grund (Richtwert `#070b14`), Böden fast schwarz mit feinem Raster, Wände dunkel mit **leuchtenden Oberkanten** (Cyan `#37e0ff`), Möbel dunkel mit **zarten Leuchtkanten** (Blau `#5b7cff`, geringe Deckkraft).
- **Feiner als die Demo:**
  - Möbel mit mehr Details: Polster, Beine, Fasen, Griffe, Küchenzeile mit Fronten.
  - Dünnere, sauberere Kanten; Fenster mit Rahmen und Glas, Türen als Öffnung mit Zarge.
  - Leichte Unterschiede in den Materialhelligkeiten, damit Tiefe entsteht.
- **Zustände leuchten:** Lampe an → warmer Lichtschein am Boden (Richtwert `#ffb547`). Aktiver Raum heller. Personen als pinkfarbene Marker mit Schein (`#ff5fd2`). Temperatur optional als Raumfärbung (kalt blau, warm orange).
- **Energieflüsse** (siehe Abschnitt 6):
  - Leuchtende Leitungen mit **animiertem Fluss**; Geschwindigkeit und Helligkeit folgen der Leistung.
  - Farben: Bezug aus dem Netz Cyan, Einspeisung oder Solar Gelb, Akku Grün.
  - Watt-Schilder an den Geräten.
- Beschriftungen als saubere HTML-Overlays (Schrift z. B. „Bricolage Grotesque“ für Titel, „Figtree“ für UI), nicht als Text-Texturen.
- Kein Kitsch: keine Verläufe um der Verläufe willen, keine Emojis in der fertigen Oberfläche (in der Demo waren sie Platzhalter), Icons als eigene SVGs.
- Ein heller Tag-Modus ist optional (Phase 6). Standard ist Neon, auch tagsüber.

**Ehrliche Grenze:** Das Referenzbild ist fotorealistisch gerendert. Das geht auf einem Fire-Tablet nicht in Echtzeit. Ziel ist dessen **Wirkung** (dunkles Schnittmodell, leuchtende Leitungen, Werte an Geräten), umgesetzt mit den Leichtgewichts-Techniken aus Abschnitt 5.

## 3. Funktionsumfang

1. **Zeichnen in HA (2D-Editor)**
   - Etagen mit Höhe und Reihenfolge; Räume als Rechteck oder freie Form, Maße in Metern exakt eintippbar, Einrasten an Raster und Ecken, Ecken ziehen, Punkt auf Kante einfügen, Rückgängig (Strg+Z), Duplizieren, Löschen.
   - Jeder Raum wird mit einem **HA-Bereich** verknüpft.
   - **Wände entstehen automatisch** aus den Räumen: Wandstärke innen und außen, gemeinsame Kanten werden zu einer Wand zusammengelegt, Ecken sauber verbunden.
   - **Türen und Fenster** per Drag auf eine Wand (Breite, Position, Brüstungshöhe bei Fenstern).
   - **Möbel** aus einer eigenen Bibliothek per Drag platzieren, drehen, skalieren: Sofa, Sessel, Tisch, Stuhl, Bett, Nachttisch, Schrank, Regal, Küchenzeile, Kühlschrank, Herd, Spüle, Badewanne, Dusche, WC, Waschtisch, Schreibtisch, TV-Board, Pflanze, Teppich.
   - **Geräte-Platzierung:** Entitäten des verknüpften Bereichs werden vorgeschlagen und automatisch im Raum verteilt, von Hand verschiebbar (Lampen, Schalter, Steckdosen, Sensoren, Rollläden, Thermostate, Medien, Kameras).
   - Optional ein **Bild als Vorlage** (Grundriss-Foto) mit Maßstab und Deckkraft zum Nachzeichnen.
   - Bedienung mit Maus und Touch (Pinch-Zoom, zwei Finger verschieben).
2. **3D-Ansicht (Neon)**
   - **Volle Wandhöhe mit automatischem Wegklappen (Standard)**:
     - Wände sind raumhoch (z. B. 2,5 m). Wände, die zwischen Kamera und Raum stehen (Außenwand-Normale zeigt zur Kamera), werden automatisch auf Hüfthöhe (ca. 1,15 m) gekürzt, die hinteren bleiben hoch.
     - Im Raum-Modus gilt das auch für die Innenwände des gewählten Raums.
     - Alternativ ein Schalter „Schnitt“ (alle Wände niedrig).
     - Umsetzung: pro Wand ein unterer Teil (immer sichtbar) und ein oberer Teil (Sichtbarkeit abhängig vom Blickwinkel, nur bei Änderung umschalten).
   - **Mehrere Etagen in drei Stufen** (so in der Stil-Demo umgesetzt):
     1. **Haus**: alle Etagen übereinander, standardmäßig **auseinandergezogen** (zusätzlicher Abstand ca. 2,4 m), umschaltbar auf „gestapelt“. An jeder Etage ein Schild „Obergeschoss · 5 Räume · 3 Licht an · 2 offen · 1 Pers.“ zum Antippen. Nur Etagen- und Raumschilder, keine Geräte-Schilder (sonst überdecken sich die Etagen).
     2. **Etage**: Etagen darüber fahren weich nach oben und blenden aus, Etagen darunter bleiben abgedunkelt (ca. 20 % Deckkraft) als Orientierung. Raum-Chips zeigen nur die Räume dieser Etage.
     3. **Raum**: Kameraflug in den Raum der gewählten Etage.
     - Eine Stufe zurück per Doppeltipp, Esc oder Schließen-Knopf (Raum → Etage → Haus).
     - Treppen als eigenes Element (Position, Laufrichtung, Stufenzahl) mit **Deckenöffnung** in der Etage darüber und Geländer.
     - Umsetzung: pro Etage eine Gruppe, deren Höhe und Deckkraft animiert wird. Materialien merken sich ihre Grund-Deckkraft. Treffer-Tests nur auf sichtbaren Etagen.
     - Draw-Calls: in der Haus-Ansicht zählen alle Etagen zusammen → Fensterflügel, Rollläden, Lichtscheine und Glas **pro Etage zusammenfassen** (die Demo liegt mit zwei Etagen bei ca. 105 Draw-Calls, das ist zu viel; Ziel bleibt unter 60).
   - Kamera: Übersicht → Etage → Raum mit weichen Flügen (ca. 700 ms), Drehen mit Trägheit, Zoom, Verschieben, Doppeltipp zurück, Raum-Chips für schnellen Wechsel.
   - Raum antippen → Flug hinein + **Raum-Bedienfeld** (rechts, auf schmalen Geräten unten).
3. **Steuerung** (echte HA-Dienste)
   - Licht: an/aus, Helligkeit, Farbe/Farbtemperatur; der Lichtschein folgt Helligkeit und Farbe.
   - **Rollläden sichtbar in 3D**:
     - Lamellen fahren von oben bis zur eingestellten Position vor jedem Fenster bzw. jeder Terrassentür, mit Rollladenkasten.
     - Position live aus `cover`-Entitäten, Steuerung per Schieberegler und Auf/Ab/Stopp.
     - Rollläden werden Fenstern zugeordnet (automatisch per Bereich, manuell änderbar).
   - **Fenster und Türen mit Kontaktsensoren**:
     - `binary_sensor` (device_class window/door/opening) wird einem Fenster/einer Tür zugeordnet. Zustände: zu / gekippt / offen; „gekippt“ über einen zweiten Sensor oder ein Attribut, falls vorhanden.
     - In 3D klappt der Flügel sichtbar auf (Drehung um die Scharnier-Seite) bzw. kippt (Drehung um die Unterkante); die Terrassentür schwenkt auf.
     - Offene Fenster leuchten warm (z. B. `#ffb547`), der Raum zeigt „2 offen“, die Übersicht kann „alle offenen Fenster“ markieren.
   - Heizung (Soll/Ist, Modus), Medien (Play/Pause, Titel, Lautstärke), Schalter/Steckdosen, Szenen und Skripte des Bereichs.
   - Direkt in 3D: Antippen einer Lampe schaltet sie; lange drücken öffnet Details.
4. **Anwesenheit**
   - Personen im Raum aus `person`/`device_tracker` sowie Raum-Sensoren (ESPresense, Bermuda – Sensor mit Raumnamen als Zustand, per Konfiguration einem Bereich zugeordnet).
5. **Energie** (siehe Abschnitt 6).
6. **Dashboard-Karte und Seitenleiste**
   - Eigene Seite in der Seitenleiste (`panel_custom`) plus Lovelace-Karte (automatisch geladen, keine Ressource nötig).
   - Kiosk-Modus für Wandtablets: Vollbild, nur 3D, großer Touch-Bereich, Nachtdimmung.

## 4. Architektur (bewährt aus dem Projekt „Zigbee Health“)

- **Backend (Python)**
  - `custom_components/<domain>/`, Config Flow ohne YAML.
  - Speicher über `homeassistant.helpers.storage.Store`, **getrennt nach Größe**: Gebäude (Räume, Wände, Möbel, Platzierungen) in einem kleinen Store, Hintergrundbilder in einem eigenen Store. Häufiges Speichern im Editor darf nie Bilder neu schreiben.
  - Websocket-Befehle (`websocket_api`): `building/get`, `building/save`, `building/image`, … mit voluptuous-Schema. Ändernde Befehle mit `@require_admin`.
  - Beim Entfernen der Integration (`async_remove_entry`) **alle** Stores löschen.
- **Frontend**: Lit 3 + TypeScript, gebündelt mit esbuild.
  - Haupt-Bundle: Karte, Panel, Editor.
  - **three.js als eigenes Bundle**, erst beim Öffnen der 3D-Ansicht nachgeladen (`import(new URL("./…-3d.js", import.meta.url))`, Version über `?v=` mitgeben).
  - Beide Dateien als statische Pfade registrieren (`async_register_static_paths`), Karte per `add_extra_js_url` laden.
- **Dienste und Zustände**: Die Karte bekommt `hass` vom Frontend, liest Zustände aus `hass.states` und ruft Dienste über `hass.callService`. Nur Änderungen an sichtbaren Entitäten lösen ein Neuzeichnen aus.
- **Datenmodell** (Meter, x nach rechts, z nach unten):
  - `floors[]`: id, name, elevation, height, cut_height, rooms[], openings[], furniture[], placements[], background?
  - `room`: id, name, area_id, points[[x,z]…], floor_material
  - `opening`: id, wall_ref (Raum-Kante oder Wand-ID), offset, width, type (door/window), sill, height
  - `furniture`: id, type, x, z, rotation, w, d, h, variant
  - `placement`: entity_id, x, z, y?, floor
  - `energy`: meter-Position, Leitungsführung (auto oder manuell), Sensor-Zuordnung (siehe Abschnitt 6)

## 5. Leistung (harte Regeln)

- **Rendern nur bei Bedarf**: kein Dauer-Loop. Gezeichnet wird nur beim Drehen/Zoomen, während Kamera-Flügen, während sichtbarer Fluss-Animationen und bei Zustandsänderungen. Die Energiefluss-Animation läuft mit reduzierter Bildrate (z. B. 20–30 Bilder/s) und stoppt, wenn nichts fließt oder die Seite unsichtbar ist (`visibilitychange`).
- **Geometrie zusammenfassen**: pro Etage wenige Meshes (Wände, Möbel, Kanten, Leitungen) mit Vertex-Farben; Kanten als `LineSegments`.
- **Keine Echtzeit-Schatten, kein teures Post-Processing** auf schwachen Geräten. Glühen über additive Sprites/Planes mit Radial-Textur. Echtes Bloom nur in Qualitätsstufe „Hoch“.
- **Schatten und Umgebungsverdeckung vorberechnen**: Wandkanten und Möbelschatten einmal in die Boden-Textur (Canvas) bzw. in Vertex-Farben backen.
- **Qualitätsstufen** automatisch (deviceMemory, hardwareConcurrency, Fire-/Silk-User-Agent) und manuell: Pixel-Ratio, Antialiasing, Bloom.
- **Budgets**: unter 60 000 Dreiecke pro Etage, unter 60 Draw-Calls, 3D-Bundle unter 650 KB, Haupt-Bundle unter 250 KB. Ziel: 30+ Bilder/s beim Drehen auf einem Fire HD 10, 0 Bilder/s im Leerlauf.
- Eine eingebaute Leistungsanzeige (Bilder/s, Draw-Calls, Dreiecke) für Entwickler, abschaltbar.

## 6. Energiefluss (Neon-Highlight)

- **Konfiguration pro Gerät**: Leistungssensor (W) wird automatisch vorgeschlagen, wenn eine Entität im Bereich `device_class: power` hat oder zum selben Gerät gehört. Dazu gehören Netzbezug/Einspeisung, Solar-Erzeugung, Hausakku (Leistung, Ladestand) und ein optionaler Tarif-Sensor (z. B. aktueller Preis €/kWh, nächster Tarifwechsel). Die Sensoren können aus dem HA-Energie-Dashboard übernommen werden, wo vorhanden.
- **Leitungsführung automatisch**: vom Zählerplatz (im Editor platziert) entlang der Wandfüße über die kürzeste Route (Graph aus Wand-Mittellinien) zu jedem Verbraucher. Manuelle Korrektur im Editor möglich.
- **Darstellung**: leuchtende Linie mit animiertem Streifenmuster (Shader oder Textur-Offset). Geschwindigkeit ∝ Leistung, ab 0 W still und abgedunkelt. Farben: Netzbezug Cyan, Einspeisung/Solar Gelb, Akku Grün.
- **Schilder**: Watt am Gerät; im Übersichtsmodus eine kompakte **Energie-Leiste** mit Gesamtverbrauch, Netzbezug/Einspeisung, Solar, Akku, aktuellem Tarif.
- Werte aktualisieren sich live; Glättung gegen Flackern.

## 7. Phasen (nach jeder Phase lauffähig, Nutzer testet in seinem HA)

1. **Grundlage**:
   - Integration (Config Flow, Stores, Websocket, Panel, Karte), Datenmodell, 2D-Editor für Etagen und Räume, Bereichs-Verknüpfung
   - **Wand-Erzeugung aus Räumen** (zuerst, mit Unit-Tests)
   - einfache 3D-Ansicht
2. **Neon-Look und Kamera**: Schnittmodell, Materialien, Kanten, gebackene Schatten, Kamera-Flüge, Raum-Chips, Etagen, Qualitätsstufen, Rendern bei Bedarf.
3. **Steuerung**: Geräte-Platzierung, Raum-Bedienfeld, Licht mit Lichtschein, Rollläden, Heizung, Medien, Szenen, Schalten direkt in 3D.
4. **Einrichtung**: Türen/Fenster auf Wänden, Möbel-Bibliothek (prozedural erzeugte Low-Poly-Modelle, fein und stimmig im Neon-Look), Bodenmaterialien.
5. **Energie und Anwesenheit**: Energiefluss (Abschnitt 6), Personen-Marker.
6. **Politur und Release**: Kiosk-Modus, optionaler heller Modus, Barrierefreiheit (Tastatur, reduzierte Bewegung), Dokumentation mit Screenshots, CI, HACS-Release.

## 8. Qualität und Arbeitsweise

- **Tests**
  - Reine Geometrie-/Logik-Module ohne HA-Importe mit pytest bzw. TypeScript-Tests: Wand-Erzeugung, Routen der Leitungen, Einrasten, Platzierung.
  - Integrationstests mit `pytest-homeassistant-custom-component`: Websocket, Admin-Prüfung, Stores, Entfernen löscht alles.
- **CI (GitHub Actions)**: Tests, ruff, mypy, `tsc --noEmit`, hassfest, HACS-Validierung.
- **Vorschau-Seite**: eine eigenständige HTML-Datei mit **erfundenen Demodaten** und einem Mock-`hass` (Zustände, `callService`, `callWS`), damit Oberfläche und Look ohne HA geprüft werden können. Screenshots per Headless-Chrome (puppeteer-core) zur Selbstkontrolle.
- **Keine persönlichen Daten** im Repository: keine echten Gerätenamen, IPs, Zugangsdaten oder Grundrisse des Nutzers. Wenn der Nutzer eigene Daten zum Testen liefert, nur lokal und per `.gitignore` ausgeschlossen verwenden.
- Nach jeder Phase: Version erhöhen, committen, pushen, CI prüfen, Vorschau aktualisieren, dem Nutzer auf Deutsch kurz zeigen, was neu ist und wie er es testet.
- Entwicklung unter Windows: HA-Integrationstests laufen zuverlässig nur in der Linux-CI; lokal die HA-freien Tests ausführen.

## 9. Stolpersteine, die im Vorgängerprojekt aufgetreten sind (vermeiden)

- Lit-Komponenten teilen sich Styles: **Klassennamen können mit gemeinsamen Styles kollidieren** (z. B. `.bar`, `.room`) → eigene, eindeutige Klassennamen verwenden.
- Eigenschaften nicht `focus`, `blur`, `hidden` usw. nennen – das kollidiert mit `HTMLElement`.
- `THREE.Color(...).multiplyScalar(k).getHex()` **überläuft** bei Werten über 1 (Weiß wird schwarz) → Kanäle vor `getHex()` auf 1 begrenzen.
- Selektoren wie `[data-look]` treffen auch `<body data-look>` → Selektoren auf Buttons beschränken.
- Eigene Shader: `active` (und weitere Wörter) sind in GLSL ES 3.0 reserviert → Variablen eindeutig benennen; negative Geschwindigkeiten (Fluss rückwärts) mit `abs()` prüfen.
- Kleine Teile (Fensterrahmen, Möbelteile) immer in wenige Meshes zusammenfassen, sonst steigen die Draw-Calls schnell über das Budget.
- CSS-Variablen wie `--title: var(--text)` werden am definierenden Element aufgelöst → pro Look explizit setzen.
- SVG in Meter-Einheiten: Striche und Texte brauchen `vector-effect: non-scaling-stroke` bzw. Mindestgrößen in Pixeln, sonst werden Linien riesig oder Texte winzig.
- Große Daten (Bilder) nie mit den häufig gespeicherten Daten und nie im Rückgängig-Verlauf speichern.
- Beim Entfernen der Integration jeden Store löschen, nicht nur einen.
- HACS braucht ein öffentliches Repository mit Release; `hacs.json`, `manifest.json` (Version, Dokumentation, Issue-Tracker, Codeowner) und README mit Bildern.

## 10. Zuerst tun

1. Kurz bestätigen, dass du den Prompt verstanden hast, und offene Fragen stellen (z. B. Domain-Name der Integration, GitHub-Repo, minimale HA-Version).
2. Die Stil-Demo lesen (Link in Abschnitt 2) und daraus die Neon-Farben und die Kamera-Steuerung übernehmen.
3. Phase 1 planen und umsetzen – beginnend mit dem Datenmodell und der getesteten Wand-Erzeugung.
