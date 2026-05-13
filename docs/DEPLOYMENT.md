# Deployment

Dieses Dokument beschreibt den realen Deployment-Prozess für die Stuventaa-Website: lokale Entwicklung, Production-Build und Upload auf Hostinger als statisches Hosting.

---

## Voraussetzungen

| Tool | Empfohlene Version |
|---|---|
| Node.js | LTS (20.x oder höher) |
| npm | kommt mit Node.js |

Prüfen:
```bash
node -v
npm -v
```

---

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die App läuft danach auf `http://localhost:3000` (konfiguriert in `package.json`: `--port 3000`).

---

## Production-Build

```bash
npm run build
```

- Ausgabe liegt im Ordner `dist/`
- `dist/` wird automatisch generiert — **nicht in Git committen** (ist in `.gitignore`)
- Vite optimiert automatisch: Code-Splitting, Tree-Shaking, Asset-Hashing

### Build lokal prüfen (vor Upload empfohlen)

```bash
npm run preview
```

Öffnet einen lokalen Preview-Server auf `http://localhost:3000` mit dem `dist/`-Inhalt. Damit lässt sich das fertige Build testen, bevor es auf Hostinger geht.

---

## Deployment auf Hostinger

### Schritte

1. Build erstellen: `npm run build`
2. In das Hostinger-Control-Panel einloggen
3. **File Manager** öffnen (oder FTP-Client wie FileZilla verwenden)
4. In den Ordner `public_html/` navigieren
5. Bestehende Dateien löschen (falls vorhanden) — **Achtung:** nur Website-Dateien, keine Hostinger-Systemdateien
6. Den **Inhalt** des lokalen `dist/`-Ordners hochladen (nicht den Ordner selbst, sondern was darin ist)
7. Nach Upload prüfen: `index.html` muss direkt in `public_html/` liegen, nicht in einem Unterordner

### Korrekte Struktur nach Upload

```
public_html/
├── index.html          ← Einstiegspunkt
├── assets/             ← JS, CSS, Bilder (hashed filenames)
└── ...                 ← weitere statische Dateien
```

---

## SPA-Routing auf Hostinger (wichtig)

Die App nutzt React Router (`react-router-dom`). Das bedeutet: Routen wie `/privacy` und `/impressum` existieren **nur clientseitig** — der Webserver kennt diese Pfade nicht.

**Problem:** Wenn jemand `/privacy` direkt aufruft oder die Seite dort neu lädt, liefert Hostinger eine 404-Fehlermeldung, weil keine Datei `privacy/index.html` existiert.

**Lösung: `.htaccess`-Datei in `public_html/`**

Eine Datei `.htaccess` mit folgendem Inhalt in `public_html/` anlegen (oder in `public/` im Repo ablegen, dann wird sie automatisch in `dist/` kopiert):

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

Diese Regel leitet alle nicht gefundenen Pfade auf `index.html` um, wodurch React Router die Kontrolle übernimmt.

**Empfehlung:** `.htaccess` im Ordner `public/` des Repos ablegen:

```
public/
└── .htaccess
```

Vite kopiert alles aus `public/` automatisch in `dist/` beim Build.

---

## Kurzcheck nach Deploy

Nach jedem Upload folgende Seiten manuell prüfen:

| Prüfpunkt | URL | Erwartetes Ergebnis |
|---|---|---|
| Startseite | `https://stuventaa.de/` | Hero, Navigation, alle Sections sichtbar |
| Datenschutz | `https://stuventaa.de/privacy` | Datenschutz-Seite lädt, kein 404 |
| Impressum | `https://stuventaa.de/impressum` | Impressum-Seite lädt, kein 404 |
| Sprachumschalter | Startseite | DE/EN wechselt korrekt |
| Navigation (extern) | `/privacy` direkt im Browser eingeben | Kein 404 (setzt `.htaccess` voraus) |

---

## Troubleshooting

### 404 auf `/privacy` oder `/impressum`

**Ursache:** `.htaccess` fehlt oder ist nicht korrekt in `public_html/` vorhanden.  
**Lösung:** `.htaccess`-Datei (siehe oben) in `public_html/` anlegen. Danach Route direkt im Browser testen.

---

### Seite zeigt alten Stand nach Upload

**Ursache:** Browser-Cache oder Hostinger-CDN-Cache.  
**Lösung:**
1. Seite mit `Strg + Shift + R` (Hard Reload) neu laden.
2. Im Hostinger-Panel unter **Cache** den Cache leeren, falls aktiviert.
3. Prüfen, ob die richtigen Dateien hochgeladen wurden: `index.html` in `public_html/` muss ein aktuelles Build-Datum tragen.

---

### Falscher Upload-Pfad (häufigster Fehler)

**Falsch:** Den `dist/`-Ordner selbst hochladen → erzeugt `public_html/dist/index.html` → Site nicht erreichbar.  
**Richtig:** Den **Inhalt** von `dist/` hochladen → `public_html/index.html` direkt sichtbar.

---

### Build schlägt fehl

```bash
# Abhängigkeiten neu installieren
rm -rf node_modules
npm install
npm run build
```

Falls Fehler zu spezifischen Paketen erscheinen: Node.js-Version mit `node -v` prüfen. LTS (20.x) verwenden.
