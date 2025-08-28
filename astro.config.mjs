import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com', // ← עדכן לכתובת הדומיין שלך
  integrations: [
    tailwind({ applyBaseStyles: true }),
    mdx(),
    sitemap()
  ]
});
