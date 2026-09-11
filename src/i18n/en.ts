// English copy. Same keys as it.ts.
import type { Testi } from './it';

const en: Testi = {
  meta: {
    home: { titolo: '', descrizione: '' },
    contatti: { titolo: '', descrizione: '' },
    progetto: { titolo: '', descrizione: '' },
  },

  ruolo: 'Salesforce & automation',

  interfaccia: {
    saltaAlContenuto: 'Skip to content',
    lingua: 'Language',
    contatti: 'Contact',
    home: 'Home',
    pagine: 'Pages',
    link: 'Links',
    tornaSu: 'Back to top',
    diritti: 'All rights reserved.',
    partitaIva: 'VAT no.',
    paginaAutore: 'Author page on physiotherapist.university',
    oggettoEmail: 'Enquiry from aureliocecchi.com',
    progetti: 'Projects',
    leggiCaseStudy: 'Read the case study',
  },

  home: {
    hero: {
      titolo: '',
      testo: "I build systems that take manual work out of processes. My work centres on Salesforce, integrations between tools that don't talk to each other, and content architectures designed for organic search.",
      bottoneContatti: 'Get in touch',
      bottoneProgetto: 'See the projects',
    },
    scheda: [
      { voce: 'Focus', valore: 'Salesforce, integrations, SEO' },
      { voce: 'Languages', valore: 'Italian, Spanish, English' },
      { voce: 'Based in', valore: 'Tuscany, Italy · remote' },
    ],
    profilo: { titolo: '', paragrafi: [''] },
    invito: {
      titolo: 'Get in touch',
      testo: "Got a process that still runs by hand, a tool that doesn't talk to the others, or a Salesforce project you'd like to discuss? Get in touch. I reply to everyone.",
      bottone: 'Get in touch',
    },
  },

  progetti: [
    {
      titolo: 'Topic-cluster SEO architecture on WordPress',
      breve: 'For Alma Mater Europaea, a lead-generation portal covering 29 EU/EEA states: three topic clusters on a hierarchical taxonomy, 51 articles optimised on-page.',
      paragrafi: [''],
      dettagli: [
        { voce: 'Client', valore: 'Alma Mater Europaea' },
        { voce: 'Sector', valore: '' },
        { voce: 'Period', valore: 'July – September 2026' },
      ],
      titoloConsegne: 'What I delivered',
      consegne: [''],
      url: 'https://physiotherapist.university/',
      link: 'Visit physiotherapist.university',
    },
  ],

  contatti: {
    titolo: '',
    testo: '',
    etichettaEmail: 'Email',
    bottone: 'Send an email',
    voci: [
      { voce: 'Working languages', valore: '' },
      { voce: 'Response time', valore: '' },
    ],
  },
};

export default en;
