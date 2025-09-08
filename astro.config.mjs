// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://chameleon.run',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify()
});