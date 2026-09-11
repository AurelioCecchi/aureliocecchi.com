import it from './it';
import es from './es';
import en from './en';

export const lingue = ['it', 'es', 'en'] as const;
export type Lang = (typeof lingue)[number];

// Percorso di ogni pagina in ogni lingua. Nuova pagina = nuova riga qui.
// Un secondo case study avrà una sua chiave (es. "progetto2") e le sue rotte.
export const rotte = {
  home: { it: '/', es: '/es/', en: '/en/' },
  contatti: { it: '/contatti/', es: '/es/contacto/', en: '/en/contact/' },
  progetto: {
    it: '/progetti/physiotherapist-university/',
    es: '/es/proyectos/physiotherapist-university/',
    en: '/en/projects/physiotherapist-university/',
  },
} as const;
export type Pagina = keyof typeof rotte;

export const lingueSito: Record<Lang, { nome: string; og: string }> = {
  it: { nome: 'Italiano', og: 'it_IT' },
  es: { nome: 'Español', og: 'es_ES' },
  en: { nome: 'English', og: 'en_GB' },
};

// Lingua servita a chi non parla nessuna delle tre.
export const linguaXDefault: Lang = 'en';

// Ogni stringa vuota è un testo mancante.
// In locale (npm run dev) diventa [MANCA percorso], visibile sulla pagina.
// In build interrompe la pubblicazione ed elenca tutti i testi mancanti.
function prepara<T>(testi: T, lang: Lang): T {
  const mancanti: string[] = [];
  const visita = (valore: unknown, percorso: string): unknown => {
    if (typeof valore === 'string') {
      if (valore.trim()) return valore;
      mancanti.push(percorso);
      return `[MANCA ${percorso}]`;
    }
    if (Array.isArray(valore)) return valore.map((v, i) => visita(v, `${percorso}[${i}]`));
    if (valore && typeof valore === 'object') {
      return Object.fromEntries(
        Object.entries(valore).map(([k, v]) => [k, visita(v, `${percorso}.${k}`)]),
      );
    }
    return valore;
  };
  const risultato = visita(testi, lang) as T;
  if (mancanti.length && !import.meta.env.DEV) {
    throw new Error(`Testi mancanti (${mancanti.length}):\n  ${mancanti.join('\n  ')}`);
  }
  return risultato;
}

export const testi = {
  it: prepara(it, 'it'),
  es: prepara(es, 'es'),
  en: prepara(en, 'en'),
};
