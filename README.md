# heronite.app

The website of [Heronite](https://github.com/RafaelGoulartB/Heronite), built with [Astro](https://astro.build) and published to GitHub Pages at <https://heronite.app>.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/
```

Pages live in `src/pages/`, the shared `<head>` (SEO, Open Graph, structured data) in `src/layouts/Base.astro`, and images in `public/`.

## Deploy

Every push to `main` builds the site and publishes it through `.github/workflows/deploy.yml`. The custom domain is set by `public/CNAME`.
