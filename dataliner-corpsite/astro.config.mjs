// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import astrobook from 'astrobook';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), astrobook({ subpath: '/astrobook', directory: 'story' })],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
});
