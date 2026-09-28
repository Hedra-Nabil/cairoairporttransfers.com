import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cairoairportlimousines.com',
  trailingSlash: 'never',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        if (url === 'https://cairoairportlimousines.com') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.includes('/transfers/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (url.includes('/airports/') || url.includes('/fleet/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (url.includes('/services/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ],
  output: 'static',
  build: {
    format: 'directory'
  }
});
