// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://heronite.app',
  // Every page is a folder with an index.html, so URLs always end in a slash.
  // One form per page keeps canonicals, the sitemap and internal links in step.
  trailingSlash: 'always',
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  image: {
    // Markdown and <Image> pictures get a srcset, so phones download small files.
    layout: 'constrained',
    responsiveStyles: false,
  },
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
  integrations: [
    sitemap({ filter: (page) => !page.endsWith('/404/') }),
  ],
});
