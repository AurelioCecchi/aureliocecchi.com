// Testi italiani. Le stringhe vuote ('') sono tue: finché ne resta una, la build si ferma.
// Le altre sono etichette d'interfaccia: modificale pure.

const it = {
  meta: {
    home: {
      titolo: '',      // <title>: 50-60 caratteri, nome incluso
      descrizione: '', // meta description: 140-155 caratteri
    },
    contatti: { titolo: '', descrizione: '' },
    progetto: { titolo: '', descrizione: '' },
  },

  // Il mestiere in poche parole. Compare sopra il titolo della home,
  // nel footer e nei dati strutturati (jobTitle).
  ruolo: 'Salesforce e automazione',

  interfaccia: {
    saltaAlContenuto: 'Vai al contenuto',
    lingua: 'Lingua',
    contatti: 'Contatti',
    home: 'Home',
    pagine: 'Pagine',
    link: 'Link',
    tornaSu: 'Torna su',
    diritti: 'Tutti i diritti riservati.',
    partitaIva: 'P.IVA',
    paginaAutore: 'Pagina autore su physiotherapist.university',
    oggettoEmail: 'Contatto da aureliocecchi.com',
    progetti: 'Progetti',
    leggiCaseStudy: 'Leggi il case study',
  },

  home: {
    hero: {
      titolo: 'Sistemi CRM, integrazioni e crescita organica.',
      testo: 'Costruisco sistemi che tolgono il lavoro manuale dai processi. Lavoro principalmente su Salesforce, integrazioni tra strumenti che non si parlano e architetture di contenuti pensate per la ricerca organica.',
      bottoneContatti: 'Scrivimi',
      bottoneProgetto: 'Guarda i progetti',
    },
    // Scheda a lato del titolo. Le voci si possono togliere o aggiungere.
    scheda: [
      { voce: 'Ambito', valore: 'Salesforce, integrazioni, SEO' },
      { voce: 'Lingue', valore: 'Italiano, spagnolo, inglese' },
      { voce: 'Base', valore: 'Toscana · da remoto' },
    ],
    profilo: {
      titolo: '',
      paragrafi: [''], // un elemento per paragrafo
    },
    invito: {
      titolo: 'Scrivimi',
      testo: 'Se hai un processo che gira a mano, uno strumento che non si parla con gli altri, o un progetto Salesforce di cui vorresti discutere — scrivimi. Rispondo a tutti.',
      bottone: 'Scrivimi',
    },
  },

  // Case study. Uno per elemento: la home ne mostra un quadrato (titolo + breve),
  // ogni elemento ha una pagina propria. Per aggiungerne uno: nuovo elemento qui
  // + nuova rotta in i18n/index.ts (rotte.progetto) + nuova pagina in src/pages.
  progetti: [
    {
      titolo: 'Architettura dei contenuti per l’acquisizione di studenti internazionali',
      breve: 'Per Alma Mater Europaea, un portale di lead generation su 29 Stati UE/SEE: tre cluster tematici su tassonomia gerarchica, 51 articoli ottimizzati on-page.',
      paragrafi: [''],
      dettagli: [
        { voce: 'Cliente', valore: 'Alma Mater Europaea' },
        { voce: 'Settore', valore: '' },
        { voce: 'Periodo', valore: 'Luglio – settembre 2026' },
      ],
      titoloConsegne: 'Cosa ho consegnato',
      // Una riga per consegna. Materiale dal brief: 26 articoli nuovi; 25 riscritti
      // conservando URL e date; tassonomia a tre assi; home in HTML/CSS; restyling
      // del tema; connettore MCP su WordPress; blocco anti-bot; invalidazione cache.
      // "51 ottimizzati" è la somma di 26 + 25: esporlo accanto agli altri due conta doppio.
      consegne: [''],
      url: 'https://physiotherapist.university/',
      link: 'Visita physiotherapist.university',
    },
  ],

  contatti: {
    titolo: '', // h1
    testo: '',
    etichettaEmail: 'Email',
    bottone: 'Scrivi un’email',
    voci: [
      { voce: 'Lingue di lavoro', valore: '' },
      { voce: 'Tempi di risposta', valore: '' },
    ],
  },
};

export type Testi = typeof it;
export default it;
