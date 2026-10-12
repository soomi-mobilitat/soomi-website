# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:8080
npm run build      # Production build (client build + prerender of index.html, see below)
npm run build:dev  # Development build
npm run lint       # ESLint with zero warnings tolerance
npm run preview    # Preview production build
```

There are no tests configured in this project.

## Architecture

Single-page React app (Vite + TypeScript + Tailwind) for the Soomi website — a carpooling platform for local communities.

**Single page, section-based layout.** The only real route is `/` (`src/pages/Index.tsx`), which renders all sections vertically: `Header → Hero → Features → Mission → Services → Contact → Footer`. Navigation uses anchor links (`#inici`, `#caracteristiques`, `#missio-valors`, `#serveis`, `#contacte`). `src/App.tsx` just renders `Index` (no router or providers: GitHub Pages serves its own 404 for unknown paths). A single `IntersectionObserver` in `Index.tsx` reveals `.animate-on-scroll` elements; the hero is not animated that way so it paints straight from the prerendered HTML.

**Prerendered at build time.** `npm run build` renders `<App />` to static HTML (`src/entry-server.tsx` → `scripts/prerender.mjs`), injects it into `dist/index.html` with the CSS inlined and the font preloaded; `src/main.tsx` then hydrates it (the dev server still renders client-side). Components must therefore render without browser APIs: only touch `window`/`document` inside effects or event handlers (see `useIsMobile`, which uses `useSyncExternalStore` with a server fallback), and keep the first render identical on server and client.

**Content/component separation.** Each section component has a co-located `*.data.js` file holding all copy/content (in Catalan). To change text, edit the `.data.js` file — not the component. Example: `src/components/hero/Hero.data.js` + `src/components/hero/Hero.tsx`.

**Data files:**
- `src/components/layout/Layout.data.js` — nav items and footer content (shared by Header and Footer)
- `src/components/hero/Hero.data.js`
- `src/components/features/Features.data.js`
- `src/components/mission/Mission.data.js`
- `src/components/services/Services.data.js`
- `src/components/contact/Contact.data.js`

**Styling conventions:**
- `@` alias resolves to `src/`
- Custom brand colors: `soomi-*` (yellow, #FFD400 as 500) and `secondary-*` (green, #4F772D as 500)
- Font: Montserrat
- Scroll-triggered animations use the class `animate-on-scroll` + `visible` toggled by an `IntersectionObserver` in `Index.tsx`
- `cn()` from `src/lib/utils.ts` for conditional Tailwind classes (clsx + tailwind-merge)

**UI components** in `src/components/ui/` are shadcn/ui-style components. `SpacedSoomiLogo` in `src/components/ui/spaced-soomi-logo.tsx` applies corporate logo spacing rules (margin factors differ between `"main"` and `"secondary"` logo types).

**Assets** live in `public/assets/`: SVG icons in `/assets/icons/`, images in `/assets/images/`. Everything under `public/` is deployed, so only put optimized, referenced files there (e.g. resized WebP). Source originals (full-size PNG captures, etc.) go in `design/` at the repo root, e.g. `design/screenshots/`, which is not deployed.
