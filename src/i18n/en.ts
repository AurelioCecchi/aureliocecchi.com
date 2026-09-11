// English copy. Same keys as it.ts.
import type { Testi } from './it';

const en: Testi = {
  meta: {
    home: {
      titolo: 'Aurelio Cecchi — Salesforce, Integrations & Organic Growth',
      descrizione: 'Freelance developer: CRM systems, integrations and content architectures designed for organic search. Salesforce specialist, working across Italy and Spain.',
    },
    contatti: {
      titolo: 'Contact — Aurelio Cecchi',
      descrizione: "Get in touch about a process to automate, an integration, or a Salesforce project. I reply to everyone, usually within a few business days.",
    },
    progetto: {
      titolo: 'Case study: content architecture for international recruitment',
      descrizione: 'How I designed the taxonomy and content for a lead-generation portal aimed at international students, for Alma Mater Europaea: 51 articles, 29 EU/EEA states.',
    },
  },

  ruolo: 'CRM systems & automation',

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
      { voce: 'Availability', valore: 'From May 2027' },
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
          "During implementation I also had to solve two problems unrelated to the content itself: a hosting-side anti-bot filter blocking the programmatic connection, isolated through targeted testing and cleared via a support ticket; and a cache layer that wasn't invalidating predictably after each change, rebuilt and stabilised before production work could continue.",
        ],
        immagine: {
          src: '/case-studies/physiotherapist-university-taxonomy.svg',
          alt: 'Diagram of the three-axis taxonomy — Countries, Subjects, EU Regulations — with each axis’s sub-groups and an example of how a country page links to the two hubs',
          didascalia: 'The three taxonomy axes with their sub-groups, and an example of how a country page links to the topic hubs and to every other country page via the Article 11 table.',
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
        {
          scelta: 'SEO optimisation pushed to a full score on both Yoast checklists',
          perche: "The audience is practising physiotherapists: the text had to hold a technical register. Readability rules pull the other way, toward short sentences and plain language — the real work was rewriting until it satisfied both constraints without flattening the content. About 25 criteria per article, across 51 articles, repeated at every revision cycle: over 1,250 individual interventions on the corpus.",
          alternativa: 'Stopping at a green light on the SEO analysis alone and leaving the text as it was: a fraction of the time, but a flat register for an audience that expects technical precision.',
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
        'Hosting-side anti-bot filter unblocked',
        'Cache invalidation diagnosed and fixed',
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
      linkAutore: null,
    },
  ],

  contatti: {
    titolo: 'Get in touch',
    testo: "Got a process that still runs by hand, a tool that doesn't talk to the others, or a Salesforce project you'd like to discuss? Write to me below. I reply to everyone.",
    etichettaEmail: 'Email',
    bottone: 'Send an email',
    voci: [
      { voce: 'Working languages', valore: 'Italian, Spanish, English' },
      { voce: 'Response time', valore: 'Usually within 1-2 business days' },
      { voce: 'Availability', valore: 'Freelance work from May 2027' },
    ],
  },
};

export default en;
