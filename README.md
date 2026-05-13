# Stuventaa

A bilingual (DE/EN) marketing website for **Stuventaa** — a platform connecting international students with mandatory internships across Germany and Europe. Includes a dedicated B2B landing page targeting companies seeking pre-qualified intern candidates.

**Live:** [stuventaa.de](https://stuventaa.de) &nbsp;·&nbsp; **B2B:** [stuventaa.de/b2b](https://stuventaa.de/b2b)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Routing | React Router v7 |
| Styling | Tailwind CSS v3 + Radix UI |
| Animations | Framer Motion |
| i18n | i18next + react-i18next (DE / EN) |
| Icons | Lucide React |
| SEO | react-helmet |
| Hosting | Hostinger (static) |

---

## Features

- **Bilingual UI** — full German/English support with browser language detection and manual switcher
- **Animated sections** — scroll-triggered fade/slide animations via Framer Motion
- **B2B landing page** — standalone page at `/b2b` targeting companies, distinct design with Syne display font
- **SEO-ready** — per-page meta tags, Open Graph, noindex on internal pages
- **SPA routing** — `.htaccess` configured for clean client-side routing on shared hosting
- **Component architecture** — reusable components, shared layout with conditional footer
- **Responsive** — mobile-first design, animated hamburger menu

---

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.jsx    # Sticky nav with scroll-to-section + language switcher
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── WhoWeAre.jsx
│   └── ui/           # Radix UI primitives (toast, button, etc.)
├── pages/
│   ├── HomePage.jsx
│   ├── Privacy.jsx
│   ├── Impressum.jsx
│   └── b2b/
│       └── V2.jsx    # B2B landing page
├── layout/
│   └── MainLayout.jsx
├── i18n/
│   └── locales/
│       ├── de.json
│       └── en.json
└── App.jsx
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Dev server runs on `http://localhost:3000`.

---

## Deployment

Build output goes to `dist/`. Upload the contents of `dist/` to `public_html/` on Hostinger. The included `public/.htaccess` handles SPA routing so all routes (e.g. `/b2b`, `/privacy`) work correctly on page reload.

---

## Design Decisions

- **Syne font** — used exclusively for B2B display headings to create visual distinction from the main site
- **B2B page without footer** — shares the global header for navigation but omits the footer to keep focus on conversion
- **Direct contracts** — Stuventaa acts as a matching/placement agency only; internship contracts are signed directly between the candidate and the company
