// English copy. Same keys as it.ts.
import type { Testi } from './it';

const en: Testi = {
  meta: {
    home: { titolo: '', descrizione: '' },
    contatti: { titolo: '', descrizione: '' },
    progetto: { titolo: '', descrizione: '' },
  },

  ruolo: '',

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
      testo: '',
      bottoneContatti: 'Get in touch',
      bottoneProgetto: 'See the projects',
    },
    scheda: [
      { voce: 'Focus', valore: '' },
      { voce: 'Markets', valore: '' },
      { voce: 'Languages', valore: '' },
      { voce: 'Based in', valore: '' },
    ],
    profilo: { titolo: '', paragrafi: [''] },
    invito: { titolo: '', testo: '', bottone: 'Get in touch' },
  },

  progetti: [
    {
      titolo: '',
      breve: '',
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
