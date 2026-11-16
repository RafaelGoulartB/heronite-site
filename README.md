# heronite.app

The website of [Heronite](https://github.com/RafaelGoulartB/Heronite), built with [Astro](https://astro.build) and published to GitHub Pages at <https://heronite.app>.

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static site in dist/, then the Pagefind search index
npm run check:links  # after a build: every internal link and #anchor must resolve
npm run preview      # serve dist/
```

## Where things are

| Path | What it holds |
|---|---|
| `src/views/` | The home, download and index pages, shared by every language |
| `src/pages/` | Routes: English at the root, the other languages in `[lang]/` |
| `src/pages/changelog.astro` | Release notes, read from GitHub at build time |
| `src/content/features/<lang>/` | Feature pages, `/features/<file>/` |
| `src/content/guides/<lang>/` | How-to guides, `/guides/<file>/` |
| `src/content/compare/<lang>/` | Comparisons with other launchers, `/compare/<file>/` |
| `src/content/docs/<lang>/` | The documentation, `/docs/<file>/` |
| `src/i18n/` | The languages and every piece of interface text (`en.ts`, `pt-br.ts`, `es.ts`, `fr.ts`) |
| `src/data/releases.json` | A saved copy of the GitHub releases, used when the build cannot reach GitHub |
| `src/content.config.ts` | The frontmatter each of those needs |
| `src/layouts/` | `Base` (the `<head>`, SEO and structured data), `ArticleLayout`, `DocLayout` |
| `src/assets/screenshots/` | App screenshots; Astro turns them into AVIF and smaller sizes at build time |
| `public/og/` | Social cards, one per page (see below) |

### Adding a page

Add a Markdown file to `features`, `guides` or `compare` and copy the frontmatter of a neighbour. A few rules keep the pages ranking well:

- `title` under about 60 characters, with the search phrase first; `description` 140 to 160 characters.
- In `headline`, wrap the words to colour in `*asterisks*`.
- `related` may only list pages that exist; the build fails otherwise.
- Pictures go in the body as `![alt](../../../assets/screenshots/name.webp)`, alone in a paragraph, with an optional `*caption*` paragraph after it.

New docs need `section` and `order` to take their place in the sidebar.

### Languages

The site is in English (at the root), Brazilian Portuguese (`/pt-br/`), Spanish (`/es/`) and French (`/fr/`). Every page lists its other
language versions with `hreflang` links, and the sitemap does too, so Google shows each visitor the right one.

- A page in another language is the same file name in that language's folder, like `src/content/guides/es/steam-deck.md`.
  Keep `related` and FAQ links as English paths (they are localized when rendered); links in the body point to the same language (`/es/docs/faq/`).
- Interface text lives in `src/i18n/`. `pt-br.ts`, `es.ts` and `fr.ts` must have the same keys as `en.ts` (their `Dict` type checks it in the editor).
- Name app buttons and settings the way the app does in that language
  (Heronite's `crates/i18n/locales/<lang>/*.json`).
  If the app does not support that language yet, keep its English button and setting names so readers can find them.

### Releases and search

- The changelog, the version on the home and download pages and the download count come from the GitHub API at build time.
  If GitHub cannot be reached, the build uses `src/data/releases.json`; `npm run releases` refreshes that copy.
- The docs search is [Pagefind](https://pagefind.app): `npm run build` indexes every article and doc after Astro builds
  the site, one index per language. It works on the built site only (`npm run preview`), not in `npm run dev`.

### Social cards

`npm run og` draws `public/og/<page>.jpg` (and `public/og/<lang>/<page>.jpg`) from each page's eyebrow, headline and hero screenshot. It needs Chromium and ImageMagick, so it does not run in the build: run it after adding a page or changing a headline, and commit the images.

## Deploy

Every push to `main` builds the site and publishes it through `.github/workflows/deploy.yml`. The custom domain is set by `public/CNAME`.
