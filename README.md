# lobenkt.github.io

Personal portfolio of Loben Tipan, Growth Engineer at Pearl Talent, served as a static site from GitHub Pages.

Live: https://lobenkt.github.io/

## What's here

```
index.html            Portfolio (single page, static HTML — no framework)
css/main.css          All styles; light/dark via CSS custom properties
js/main.js            ~100 lines: theme toggle, mobile menu, scroll-spy, reveal
images/               Optimised assets (AVIF + JPEG/PNG fallbacks)
Loben-Tipan-Resume.pdf
404.html              Custom not-found page (GitHub Pages picks it up)
sitemap.xml, robots.txt, site.webmanifest, .nojekyll

quiz.html             Big 3 University Quiz (self-contained)
enigma-machine.html   Enigma Machine simulator (self-contained)
projects/             Smaller apps: word-battle, todo, weather, expense logger
special/              Personal one-off pages
```

## Design principles

- **No runtime dependencies on the main page.** No Vue, Bootstrap or Font Awesome.
  Content is plain HTML so it renders before any script runs and is fully indexable.
  The only third-party request is the Inter web font, loaded non-blocking with a
  system-font fallback.
- **Small images.** The hero portrait is served at 320/640 px as AVIF with JPEG
  fallback via `<picture>` + `srcset`. Screenshots and logos are resized to their
  display size. Everything below the fold is `loading="lazy"`.
- **Mobile first.** 16 px gutters, 44 px touch targets, no horizontal scroll,
  fluid type with `clamp()`, `viewport-fit=cover` with safe-area padding.
- **Accessible.** Skip link, semantic landmarks, visible focus rings,
  `prefers-reduced-motion` and `prefers-color-scheme` respected, pinch-zoom allowed.
- **Theme.** Warm off-white light theme and slate dark theme with a single indigo
  accent. The toggle persists to `localStorage` and is applied before first paint.

## Editing content

Everything is in `index.html`:

| Section | Where |
| --- | --- |
| Headline, intro, buttons | `<section id="top">` |
| Jobs | `<article class="role">` blocks inside `#experience` |
| Projects | `<article class="project">` blocks inside `#projects` (add `featured` for the wide card) |
| Publications, skills, education | Their respective sections |

To add a new project image: resize to 1200 px wide, export JPEG and AVIF
(`sips -Z 1200 in.png -s format avif --out images/name.avif` on macOS), and use the
`<picture>` markup from the Harbor.ph card.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.
