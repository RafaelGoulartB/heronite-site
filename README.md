# heronite.app

The website of [Heronite](https://github.com/RafaelGoulartB/Heronite), built with [Astro](https://astro.build) and published to GitHub Pages at <https://heronite.app>.

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static site in dist/
npm run check:links  # after a build: every internal link and #anchor must resolve
npm run preview      # serve dist/
```

## Where things are

| Path | What it holds |
|---|---|
| `src/pages/index.astro` | The home page |
| `src/pages/download.astro` | The download page |
| `src/content/features/` | Feature pages, `/features/<file>/` |
| `src/content/guides/` | How-to guides, `/guides/<file>/` |
| `src/content/compare/` | Comparisons with other launchers, `/compare/<file>/` |
| `src/content/docs/` | The documentation, `/docs/<file>/` |
| `src/content.config.ts` | The frontmatter each of those needs |
| `src/layouts/` | `Base` (the `<head>`, SEO and structured data), `ArticleLayout`, `DocLayout` |
| `src/assets/screenshots/` | App screenshots; Astro turns them into AVIF and smaller sizes at build time |
| `public/og/` | Social cards, one per page (see below) |

### Adding a page

Add a Markdown file to `features`, `guides` or `compare` and copy the frontmatter of a neighbour. A few rules keep the pages ranking well:

- `title` under about 60 characters, with the search phrase first; `description` 140 to 160 characters.
- In `headline`, wrap the words to colour in `*asterisks*`.
- `related` may only list pages that exist; the build fails otherwise.
- Pictures go in the body as `![alt](../../assets/screenshots/name.webp)`, alone in a paragraph, with an optional `*caption*` paragraph after it.

New docs need `section` and `order` to take their place in the sidebar.

### Social cards

`npm run og` draws `public/og/<page>.jpg` from each page's eyebrow, headline and hero screenshot. It needs Chromium and ImageMagick, so it does not run in the build: run it after adding a page or changing a headline, and commit the images.

## Deploy

Every push to `main` builds the site and publishes it through `.github/workflows/deploy.yml`. The custom domain is set by `public/CNAME`.
