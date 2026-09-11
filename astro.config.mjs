import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const sito = 'https://aureliocecchi.com';

// Rotte di ogni pagina in ogni lingua. Copia di src/i18n/index.ts (rotte):
// serve qui perché il plugin sitemap non può leggere i18n/index.ts, il cui
// meccanismo automatico di abbinamento per lingua non funziona su questo sito
// (gli slug sono tradotti, non solo prefissati: /contatti/, /es/contacto/,
// /en/contact/). Se cambi una rotta in i18n/index.ts, aggiornala anche qui.
const rotte = {
  home: { it: '/', es: '/es/', en: '/en/' },
  contatti: { it: '/contatti/', es: '/es/contacto/', en: '/en/contact/' },
  progetto: {
    it: '/progetti/physiotherapist-university/',
    es: '/es/proyectos/physiotherapist-university/',
    en: '/en/projects/physiotherapist-university/',
  },
};

export default defineConfig({
  site: sito,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      serialize(item) {
        const percorso = new URL(item.url).pathname;
        for (const perLingua of Object.values(rotte)) {
          if (Object.values(perLingua).includes(percorso)) {
            item.links = [
              ...Object.entries(perLingua).map(([lang, p]) => ({ lang, url: `${sito}${p}` })),
              { lang: 'x-default', url: `${sito}${perLingua.en}` },
            ];
            break;
          }
        }
        return item;
      },
    }),
  ],
});
