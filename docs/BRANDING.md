# Branding

Dieses Dokument beschreibt die visuellen und sprachlichen Richtlinien von Stuventaa, abgeleitet aus dem tatsächlichen Code-Stand. Alle Angaben sind code-konsistent und direkt aus den Komponenten, CSS-Dateien und Übersetzungen belegt.

---

## Farbpalette

| Rolle | Hex | Verwendung im Code |
|---|---|---|
| Primär (Navy) | `#003366` | Nav-Text, Services-Section-Hintergrund, Bild-Overlay, Legal-Page-Überschriften |
| Primär (Orange) | `#FF6600` | CTA-Button (primär), Hover-Zustände, Kicker-Texte, Bullet-Marker, aktiver Sprachumschalter |
| Orange Hover | `#E55A00` | Hover-State des primären Buttons |
| Footer-Hintergrund | `#0b1120` | Footer-Section (sehr dunkles Navy, fast Schwarz) |
| Seiten-Hintergrund | `#ffffff` | Grundlayout, Legal Pages, Header |
| Abschnitt-Hintergrund | `#f8fafc` | WhoWeAre-Section (helles Grau-Blau) |
| Fliesstext | `#1a1a1a` | Body-Default (index.css) |
| Fliesstext (Hero) | `text-slate-900` | Hero-Titel und -Untertitel |
| Unterstützungstexte | `text-gray-600 / 700 / 800` | Body-Copy in Sections |
| Footer-Subtext | `text-white/40` | Copyright, Legal-Links im Footer |

### Einsatzregeln Farbe

- **Orange** (`#FF6600`) ist ausschliesslich für Handlungsaufforderungen (CTAs), Akzente und aktive Zustände. Nie als Flächenfarbe für Textblöcke.
- **Navy** (`#003366`) ist die Hauptfarbe für strukturgebende Elemente (Navigation, Sektionshintergründe, Überschriften auf hellen Flächen).
- **Weiss** ist der neutrale Standardhintergrund. Nur der Footer bricht mit `#0b1120` aus diesem Muster aus.
- Keine zusätzlichen Markenfarben einführen ohne Eintrag im `docs/DECISION_LOG.md`.

---

## Typografie

### Schriftart

- **Primärschrift:** Inter (Google Fonts, Gewichte 300–900, geladen via `index.css`)
- **Fallback-Stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

### Hierarchie und Stile

| Ebene | Klassen (Tailwind) | Kontext |
|---|---|---|
| Hero-Überschrift (H1) | `font-extrabold text-4xl–7xl tracking-tight` | Hero-Section |
| Kicker (Obertitel) | `font-bold text-sm tracking-widest uppercase text-[#FF6600]` | WhoWeAre, Services, Legal Pages |
| Abschnitts-Überschrift (H2/H3) | `font-extralight text-3xl–5xl` | WhoWeAre, Services |
| Navigation | `font-semibold text-sm uppercase tracking-wider` | Header-Links |
| Buttons | `font-bold uppercase tracking-wider` | Alle CTAs |
| Fliesstext (Body) | `font-light` oder `font-normal`, `leading-relaxed` | Sections, Footer |
| Footer-Slogan | `font-extralight tracking-[0.2em] uppercase` | Footer-Titel |

### Regeln

- Überschriften in Sections verwenden `font-extralight` — das erzeugt bewussten Kontrast zum fettgedruckten Kicker darüber.
- Kicker-Texte sind immer Grossbuchstaben, orange, kleinste Schriftgrösse (`text-sm`).
- CTA-Texte sind immer Grossbuchstaben mit `tracking-wider`.

---

## UI-Prinzipien nach Komponente

### Header
- Weisser Hintergrund (`bg-white`), sticky, leichter Schatten (`shadow-sm`), Höhe 80px.
- Navigation: Navy-Text (`#003366`), Hover auf Orange (`#FF6600`), semibold, uppercase.
- Sprachumschalter DE | EN: Aktive Sprache orange, inaktive Navy.
- Mobile: Hamburger-Menü mit `AnimatePresence`-Animation. Gleiches Farbschema.

### Hero
- Vollbild-Section (`100vh - 80px`), Mindesthöhe 600px.
- Hintergrundbild mit Weiss-Gradient-Overlay (`from-white/80 via-white/20 to-white/80`), Bildopazität 60%.
- Text dunkel (`text-slate-900`) auf hellem Overlay — kein weisser Text auf Bild.
- Zwei Buttons nebeneinander (ab sm): Orange (primär, Services-Anker) + Dark-Outline (sekundär, Contact-Anker).
- Buttons: `rounded-sm` (kein `rounded-full`), Grossbuchstaben, `tracking-wider`, `shadow-lg` beim primären.

### WhoWeAre
- Hintergrund `#f8fafc` (nicht weiss, nicht navy).
- Zweispaltig: Bild links, Text rechts. Auf Mobile: Text oben, Bild unten.
- Bild: `rounded-lg`, `shadow-2xl`, leichtes schwarzes Overlay (`bg-black/15`).
- Bullet-Marker: kleine orangefarbene Punkte (`bg-[#FF6600]`, `w-2 h-2`, `rounded-full`).
- Highlight-Text am Ende der Section: `text-[#FF6600] font-semibold`.

### Services
- Vollflächiger Navy-Hintergrund (`bg-[#003366]`), weisser Text.
- Drei Karten in Grid (`md:grid-cols-3`). Jede Karte: Bild oben (hover: leichtes Scale-Up), Titel fett weiss, Beschreibung `text-gray-300 font-light`.
- Bild-Overlay im Ruhezustand: `bg-[#003366]/20`. Verschwindet bei Hover.

### Footer
- Hintergrund `#0b1120`.
- Welt-Karte als dekoratives Element (10% Opazität, Hintergrundbild).
- Slogan mittig oben, grosses Lettertracking.
- Kontaktzeilen mit Icon-Bubbles: `bg-white/10` Ruhezustand, Hover auf `#FF6600`.
- Copyright und Legal-Links: `text-white/40`, Hover auf `text-white`.

### Legal Pages (Privacy, Impressum)
- Weisser Hintergrund, maximale Breite `max-w-4xl`, zentriert.
- Kicker: orange, uppercase, `tracking-widest`.
- Seitenüberschrift (H1): `font-bold text-[#003366]`.
- Fliesstext: `text-gray-600`, `text-gray-800`.

---

## Tonalität und Markensprache

### Haltung
- **Klar und direkt:** Keine Marketingfloskeln. Konkrete Aussagen über echte Leistungen.
- **Vertrauenswürdig:** Wir begleiten, nicht wir versprechen. Fokus auf Verlässlichkeit.
- **Inspirierend, nicht aufdringlich:** Horizont erweitern, eigenen Weg gestalten — motivierend ohne Druck.
- **International, aber bodenständig:** Wir reden über Deutschland als Standort, über echte Programme, nicht über abstrakte Globalisierung.

### Sprachregeln
- Zweisprachig: Deutsch (`de`) und Englisch (`en`) — beide Versionen gleichwertig.
- Kein Code-Switching: Innerhalb einer Sprachversion keine Mischung.
- Kicker-Texte: immer Grossbuchstaben, kurze Schlagworte (z. B. "WER WIR SIND", "WAS WIR ANBIETEN").
- CTA-Texte: aktiv und handlungsorientiert ("Programme entdecken", "Jetzt starten").
- Unternehmensname: immer **STUVENTAA** (Grossbuchstaben) in formalen Kontexten, "Stuventaa" in Fliesstext.

### Tonbeispiele

| Falsch | Richtig |
|---|---|
| "Wir bieten weltklasse Erlebnisse für Ihr Potential" | "Wir begleiten junge Menschen auf ihrem Bildungsweg" |
| "Revolutionäre Programme für die Zukunft" | "Praktika, Sprachcamps sowie Bildungs- und Kulturerfahrungen" |
| "Starten Sie Ihre Journey heute!" | "Jetzt starten" |

---

## Bildsprache

### Themen
- Internationale Bildung: Studierende in echten Lernsituationen, Bibliotheken, Universitätscampus.
- Kulturelle Erfahrungen: Städte, Reisen, Begegnungen zwischen Menschen verschiedener Hintergründe.
- Praktische Arbeitswelt: Teams bei der Arbeit, professionelle Umgebungen.
- Natur und Entdeckung: Landschaften, die Aufbruch und Freiheit symbolisieren.

### Technische Vorgaben
- Bilder stammen hauptsächlich von Unsplash. Der Footer verwendet zusätzlich ein Weltkarten-Asset von Wikimedia Commons (`upload.wikimedia.org`). Das Logo liegt lokal unter `src/assets/logo.jpeg`. Bei eigenem Bildmaterial: in `src/assets/` ablegen, vor Commit optimieren.
- Hero-Bild: Querformat, hohe Auflösung, ausreichend neutral für weissen Gradient-Overlay.
- Section-Bilder: Hochformat bevorzugt (WhoWeAre), Querformat für Service-Karten.
- Overlay auf Bilder: Schwarzes Overlay max. `bg-black/15`–`bg-black/20` für Lesbarkeit, nicht schwerer.

---

## Do / Don't

| Do | Don't |
|---|---|
| Orange ausschliesslich für CTAs und aktive Zustände nutzen | Orange als Hintergrundfarbe für ganze Sections verwenden |
| `font-extralight` für grosse Überschriften (Eleganz durch Kontrast) | Überschriften mit `font-bold` auf navy Hintergrund — zu schwer |
| Kicker immer orange, uppercase, `tracking-widest` | Kicker-Texte in Navy oder Grau — verlieren visuelle Funktion |
| Buttons: `rounded-sm`, uppercase, `tracking-wider` | Buttons mit `rounded-full` oder ohne Lettertracking |
| Alle Nutzertexte über i18n-Dateien pflegen | Hardcodierte Strings direkt in JSX-Komponenten |
| `max-w-7xl` als maximale Containerbreite | Unterschiedliche max-width-Werte je Section ohne Begründung |
| Legal-Pages: weisser Hintergrund, `#003366` Hauptüberschrift | Legal-Pages im Navy- oder dunklen Design — Lesbarkeit leidet |
