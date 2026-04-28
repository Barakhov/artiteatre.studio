# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (localhost:4321)
npm run build      # production build → dist/
npm run preview    # serve the dist/ build locally
```

Linting and formatting are not wired to npm scripts. Run directly:

```bash
npx eslint src/           # lint Astro files (plugin:astro/recommended)
npx prettier --write src/ # format (prettier-plugin-tailwindcss + prettier-plugin-astro)
```

There are no tests.

## Architecture

**Framework:** Astro 4 static site — no React/Vue/Svelte islands. All interactivity is vanilla JS in `<script>` blocks or `is:inline` tags. Astro View Transitions are enabled site-wide via `<ViewTransitions />` in `Layout.astro`.

**Routing:** File-based. Each `.astro` file in `src/pages/` becomes a route. `/posts/[slug].astro` is the only dynamic route and is currently unused (no content exists in the posts collection).

### Page ↔ Data flow

Pages pull content from two sources:

1. **Astro Content Collections** — defined in `src/content/config.ts`. Only one typed collection exists (`posts`). The verano content files (`src/content/verano/*.md`) and `src/content/inicio/inicio.md` are loaded via `getEntry()` / `import.meta.glob` but are **not** typed in the schema — they use raw frontmatter.

2. **Static data** — `src/data/information.ts` (contact info, social links) and `src/data/config.ts` (just `SITE_URL`).

### SEO system

All `<head>` metadata is centralised in `src/components/seo/SEOTags.astro`, which wraps the `astro-seo` package. `Layout.astro` accepts `title`, `description`, `canonical`, and `noindex` props and forwards them to `SEOTags`. Pages that don't pass these props fall back to the defaults defined inside `SEOTags.astro`. Sitemap is generated at build time by `@astrojs/sitemap`.

### Tailwind colour tokens

Each school has its own colour family. Use these tokens — do not use arbitrary hex values:

| School | Primary | Secondary | Light |
|---|---|---|---|
| Tot Teatre (teatro) | `teatro-primary` (#FFD740) | `teatro-secondary` | `teatro-50` |
| El Traç (arte) | `arte-primary` (#FF6E40) | `arte-secondary` | `arte-50` |
| Aula Viva (verano) | `verano-primary` (#B2FF59) | `verano-secondary` | `verano-50` |
| Contacto | `contacto-primary` (#64FFDA) | `contacto-secondary` | `contacto-50` |

Font families: `font-sans` = Hanken Grotesk, `font-serif` = Lora.

### Animations

GSAP 3 (loaded from CDN via `is:inline` in `Layout.astro`) and ScrollTrigger are available globally on every page. All client-side JS must be wrapped in `document.addEventListener("astro:page-load", ...)` — not `DOMContentLoaded` — because View Transitions keep the page shell alive between navigations.

### CMS

A Decap CMS instance lives at `/admin`. It connects to the GitHub repo (`Barakhov/artiteatre.studio`, `main` branch) with editorial workflow. It manages the `inicio` and `verano` content collections. The `posts` collection is commented out in `public/admin/config.yml`.

### Forms

Contact form on `/contacto` uses Netlify Forms (`data-netlify="true"`) with a honeypot field. On submission, Netlify redirects to `/formulario-enviado`. No server-side code is involved.

### Deployment

Netlify. Static output (no SSR adapter). After every deploy, verify `https://artiteatre.studio/sitemap-index.xml` is reachable before submitting to Google Search Console.
