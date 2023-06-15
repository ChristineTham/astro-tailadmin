import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
// import alpinejs from "@astrojs/alpinejs";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: 'https://astro-base.netlify.app',
  integrations: [sitemap(), tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    config: { applyBaseStyles: false },
  })]
});