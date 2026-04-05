# Architecture

This document describes the high-level architecture and structure of the frontend application.

## Overview

A single-page application (SPA) built with a modern JavaScript toolchain. Uses client-side routing, component-based architecture, and a built-in i18n layer. Clear separation between page layout, reusable UI components, translations, and static assets.

## Technology Stack

| Layer | Library / Tool | Version |
|---|---|---|
| Build & Dev Server | Vite | ^4.4.5 |
| UI Framework | React | ^18.3.1 |
| Routing | react-router-dom | ^7.12.0 |
| Styling | Tailwind CSS | ^3.4.17 |
| UI Primitives | Radix UI | various |
| Animations | framer-motion | ^11.15.0 |
| Internationalization | i18next + react-i18next + i18next-browser-languagedetector | ^25 / ^16 / ^8 |
| SEO / Head Management | react-helmet | ^6.1.0 |
| Icons | lucide-react | ^0.469.0 |
| CSS Processing | PostCSS + autoprefixer | ^8.4 / ^10.4 |

## Routing

Routing ist in `src/App.jsx` definiert. Alle Routen sind unter einem gemeinsamen Layout-Wrapper verschachtelt:

```
App
└── MainLayout  (Header, ScrollToTop, Footer, Toaster)
    ├── /           → HomePage
    ├── /privacy    → Privacy
    └── /impressum  → Impressum
```

| Path | Page-Datei | Beschreibung |
|---|---|---|
| `/` | `src/pages/HomePage.jsx` | Hero, WhoWeAre, Services, VisualGallery |
| `/privacy` | `src/pages/Privacy.jsx` | Datenschutzerklärung |
| `/impressum` | `src/pages/Impressum.jsx` | Impressum |

`Header`, `Footer` und `Toaster` sind in `src/layout/MainLayout.jsx` zentralisiert und erscheinen auf jeder Route über React Routers `<Outlet />`.  
`ScrollToTop` lebt ebenfalls in `MainLayout` und scrollt bei jedem Routenwechsel nach oben, außer wenn `location.state.scrollTo` gesetzt ist — in diesem Fall übernimmt `HomePage` den section-genauen Smooth-Scroll.

## Internationalization (i18n)

Language support is configured in `src/i18n/config.js`:
- Supported languages: `en` (English, fallback), `de` (German)
- Detection order: `localStorage` → browser `navigator` → `htmlTag`
- Translations live in `src/i18n/locales/en.json` and `src/i18n/locales/de.json`

## Folder Structure

```
src/
├── assets/           Static resources (images, logos)
├── components/       Page-level React components (Hero, Header, Footer, etc.)
│   └── ui/           Generic, reusable Radix UI-based primitives (Button, Toast, etc.)
├── i18n/
│   ├── config.js     i18next initialization and language detection
│   └── locales/
│       ├── en.json   English translations
│       └── de.json   German translations
├── layout/
│   └── MainLayout.jsx  Shared layout: Header, ScrollToTop, Outlet, Footer, Toaster
├── pages/            Eine Datei pro Route
│   ├── HomePage.jsx  Startseite (/)
│   ├── Privacy.jsx   Datenschutzerklärung (/privacy)
│   └── Impressum.jsx Impressum (/impressum)
├── lib/
│   └── utils.js      Shared utility functions (e.g. cn() for class merging)
├── App.jsx           Nur Routing — zeigt auf MainLayout und Page-Dateien
├── main.jsx          React entry point — mounts app, wraps with BrowserRouter
└── index.css         Global styles and Tailwind base imports
```

## Architectural Principles

- Components are kept small and focused on a single responsibility
- Reusable UI primitives (`src/components/ui/`) are decoupled from page-specific logic
- All text content goes through i18n — no hardcoded user-facing strings outside translation files
- SEO metadata (`react-helmet`) liegt in der jeweiligen Page-Datei, nicht in `App.jsx`
- No business logic is coupled to styling
- Configuration (i18n setup, routing) lives outside individual components
