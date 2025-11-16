// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://revopsjet.com',
  output: 'static',
  trailingSlash: 'never',
  adapter: vercel({
    maxDuration: 300
  }),

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/draft') && !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        // Set different priorities based on page type
        if (item.url === 'https://revopsjet.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url === 'https://revopsjet.com/blog') {
          item.priority = 0.9;
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.7;
        } else {
          item.priority = 0.5;
        }
        return item;
      }
    }),
    mdx()
  ],

  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
