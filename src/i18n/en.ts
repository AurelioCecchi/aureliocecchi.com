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

    caseStudio: {
      cliente: 'Client',
      settore: 'Sector',
      periodo: 'Period',
      ruolo: 'Role',
      stack: 'Stack',
      problema: 'The problem',
      architettura: 'The architecture',
      immagineInArrivo: 'Image coming soon',
      decisioni: 'The decisions',
      alternativaScartata: 'Alternative considered',
      consegne: 'What I delivered',
      risultati: 'Results',
    },
  },

  home: {
    hero: {
      titolo: 'CRM systems, integrations, and organic growth.',
      testo: "I build systems that take manual work out of processes. My work centres on Salesforce, integrations between tools that don't talk to each other, and content architectures designed for organic search.",
      bottoneContatti: 'Get in touch',
      bottoneProgetto: 'See the projects',
    },
    scheda: [
      { voce: 'Focus', valore: 'Salesforce, integrations, SEO' },
      { voce: 'Languages', valore: 'Italian, Spanish, English' },
      { voce: 'Based in', valore: 'Tuscany, Italy · remote' },
    ],
    profilo: {
      titolo: 'Profile',
      paragrafi: [
        "I'm a freelance developer working on CRM systems, integrations and content architecture.",
        "I've designed and built the content architecture behind a European university's international recruitment site, and I write MCP connectors — open source on GitHub — when the integration I need doesn't exist yet.",
        "Right now I'm working toward the Salesforce Platform Administrator certification and building a full Salesforce implementation for a nonprofit organisation. Available for freelance work from May 2027.",
      ],
    },
    invito: {
      titolo: 'Get in touch',
      testo: "Got a process that still runs by hand, a tool that doesn't talk to the others, or a Salesforce project you'd like to discuss? Get in touch. I reply to everyone.",
      bottone: 'Get in touch',
    },
  },

  progetti: [
    {
      titolo: 'Content architecture for international student recruitment',
      sottotitolo: 'Taxonomy, content and technical SEO for an international recruitment portal.',
      breve: 'For Alma Mater Europaea, a lead-generation portal covering 29 EU/EEA states: three topic clusters on a hierarchical taxonomy, 51 articles optimised on-page.',

      metadati: {
        cliente: 'Alma Mater Europaea',
        settore: 'Higher education',
        periodo: 'July – September 2026',
        ruolo: 'Content architecture, implementation',
        stack: ['WordPress', 'Yoast', 'MCP', 'HTML/CSS'],
      },

      problema: [
        'Alma Mater Europaea needed a portal able to capture organic search from international students interested in enrolling, in a market covered by universities across 29 EU and EEA states.',
        "Existing content was fragmented: isolated pages, no topical hierarchy, almost no internal linking. The site told neither Google nor readers which topics it was building authority on.",
        'The main risk was cannibalisation: different pages competing for the same queries, with no plan linking pillar content to supporting content.',
      ],

      architettura: {
        paragrafi: [
          "I set up a hierarchical taxonomy along three axes — topic, geographic area, content type — and reorganised existing content around three topic clusters, each with a pillar page and supporting articles linked in both directions.",
          'URL structure and internal linking follow the taxonomy hierarchy, so both crawlers and readers can move from a specific piece of content up to the general topic in a single step.',
        ],
        immagine: {
          src: null,
          alt: 'Diagram of the three-axis taxonomy: topic, geographic area, content type',
          didascalia: 'Simplified taxonomy diagram: three topic clusters, each with a pillar page and its linked supporting articles.',
        },
      },

      decisioni: [
        {
          scelta: 'Categories instead of tags',
          perche: 'WordPress categories create an explicit URL hierarchy that mirrors the taxonomy and helps search engines understand how pages relate to one another.',
          alternativa: 'Tags, already in use across part of the site, impose no hierarchy at all: useful for cross-cutting labels, but unable on their own to communicate a cluster structure.',
        },
        {
          scelta: 'Inline HTML tables, not a downloadable document',
          perche: 'Each programme had to include the data required under Article 11 in a table that was indexable, readable on mobile, and could be updated page by page without touching an external file.',
          alternativa: 'A PDF per programme, the approach used previously: faster to produce in bulk, but invisible to search engines and awkward on mobile.',
        },
        {
          scelta: 'Hand-coded homepage in HTML/CSS',
          perche: 'The homepage gets the most traffic and needed to stay light: no block-builder scripts to load, better response times, and a direct effect on Core Web Vitals.',
          alternativa: "The visual page builder already installed on the theme: easier to edit without touching code, but with a script and CSS weight that's unnecessary for a single static page.",
        },
      ],

      consegne: [
        '26 new articles',
        '25 articles rewritten, URLs and dates preserved',
        '51 pieces optimised on-page',
        '29 Article 11 tables',
        'Three-axis taxonomy',
        'Hand-coded homepage',
        'Theme restyling',
        'Custom MCP integration',
        'Anti-bot block and cache invalidation',
      ],

      risultati: {
        strutturali: [
          'Three topic clusters published and linked to each other',
          'Taxonomy live across every page of the portal',
          'Site currently being indexed in Google Search Console',
        ],
        aggiornamento: null,
      },

      link: { url: 'https://physiotherapist.university/', testo: 'Visit physiotherapist.university' },
      linkAutore: {
        url: 'https://physiotherapist.university/author/aurelio-cecchi/',
        testo: 'My author page on physiotherapist.university',
      },
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
