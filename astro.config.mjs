import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aureliocecchi.com',

  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'es'],
    routing: { prefixDefaultLocale: false }
  },

  integrations: [sitemap({
  i18n: {
    defaultLocale: 'it',
    locales: { it: 'it-IT', es: 'es-ES' }
  }
})]
});