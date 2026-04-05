# Project Overview

This repository is the official frontend website for **Stuventaa** — a platform that empowers students to Study, Travel, Work, and complete Internships in Germany.

## Scope

Frontend-only. Focuses on layout, component structure, multilingual content, and SEO. No backend or API layer in this repository.

## Objectives

- Present Stuventaa's services and value proposition clearly to prospective students
- Support German and English audiences via built-in i18n
- Maintain a fast, accessible, and SEO-ready static site
- Keep the codebase component-based, readable, and easy to extend

## Target Audience

Students (primarily German-speaking and international) seeking educational programs, internships, and travel opportunities in Germany.

## Current State

- Core landing page implemented: Hero, WhoWeAre, Services, VisualGallery
- Client-side routing active: `/` (Home), `/privacy` (Privacy Policy), `/impressum` (Legal Notice)
- Page-First-Struktur: jede Route hat eine eigene Datei unter `src/pages/`; gemeinsames Layout in `src/layout/MainLayout.jsx`
- Internationalization live: German (`de`) and English (`en`) via `react-i18next` with browser language detection
- SEO metadata managed via `react-helmet` (pro Page-Datei)
- Reusable UI components (Radix UI + Tailwind CSS) organized under `src/components/ui/`
- Documentation initialized and maintained under `docs/`

## Future Considerations

- Accessibility audit and improvements (WCAG compliance)
- Contact form or lead capture integration
- Additional content sections (team, testimonials, FAQ)
- Integration with external services or APIs if required
