// English copy. Same keys as it.ts.
import type { Testi } from './it';

const en: Testi = {
  meta: {
    home: {
      titolo: 'Aurelio Cecchi — Automation, Integrations & Organic Growth',
      descrizione: 'I work on Salesforce, integrations and content architectures, across Italy and Spain.',
    },
    contatti: {
      titolo: 'Contact — Aurelio Cecchi',
      descrizione: "Get in touch about a process to automate, an integration, or a Salesforce project. I reply to everyone, usually within a few business days.",
    },
    progetto: {
      titolo: 'Case study: content architecture for international recruitment',
      descrizione: 'How I designed the taxonomy and content for a lead-generation portal aimed at international students, for a European university: 51 articles, 29 EU/EEA states.',
    },
    progetto2: {
      titolo: 'Case study: a local AI assistant for an admissions office',
      descrizione: 'How I designed and shipped a fully local RAG assistant on a €800 mini PC: it answers on WhatsApp only with verified sentences.',
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
      aggiornamentoAl: 'Updated',
    },
  },

  home: {
    hero: {
      titolo: 'Automation, integrations, and organic growth.',
      testo: "I design Salesforce automations, integrations between systems, and content architectures for organic search. I work in Italian, Spanish and English.",
      bottoneProgetto: 'The case studies',
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
        "I work on CRM systems, integrations, and content architecture for organic search. Those two halves look unrelated, but they are the same problem seen twice: deciding how information should be structured so that a system — or a person — can find its way through it. One does it with objects, permissions and automations; the other with taxonomies, hierarchies and internal links.",
        {
          prima: "Most of my work is on Salesforce. I recently designed and built the content architecture behind a European university's international student acquisition portal — a three-axis taxonomy, 51 optimised articles, custom components — delivered in September 2026. When an integration I need doesn't exist yet, I write it and publish it on my ",
          link: { url: 'https://github.com/AurelioCecchi', testo: 'GitHub' },
          dopo: '.',
        },
        "Right now I'm building Salesforce Administrator competence hands-on, ahead of certification in 2027, and the next thing on my desk is a full Salesforce implementation for a non-profit.",
      ],
    },
    invito: {
      titolo: 'Contact',
      testo: "For a process to automate, two systems to connect, or a Salesforce project to set up, get in touch.",
      bottone: 'Get in touch',
    },
  },

  progetti: [
    {
      titolo: 'Content architecture for international student recruitment',
      titoloBreve: 'Content architecture for a university portal',
      sottotitolo: 'Taxonomy, content and technical SEO for an international recruitment portal.',
      breve: 'For a European university, a lead-generation portal covering 29 EU/EEA states: three topic clusters on a hierarchical taxonomy, 51 articles optimised on-page.',

      metadati: {
        cliente: 'European university',
        settore: 'Higher education',
        periodo: 'July – September 2026',
        ruolo: 'Content architecture, implementation',
        stack: ['WordPress', 'Yoast', 'MCP', 'HTML/CSS'],
      },

      problema: [
        'The university needed a portal able to capture organic search from international students interested in enrolling, in a market covered by universities across 29 EU and EEA states.',
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
          'Three topic clusters published and interlinked',
          'Taxonomy live across every page of the portal',
          '60 pages receiving organic traffic',
          '561 visitors and 758 page views between 29 September and 28 October 2026, 30% more visitors than the previous thirty days',
          '9 qualified enquiries over the same period',
        ],
        aggiornamento: {
          data: '2026-10-28',
          testo: "Figures from the portal's analytics. The measurement period starts after delivery, so they describe the portal in steady state, not a before/after comparison.",
        },
      },

      link: { url: 'https://physiotherapist.university/', testo: 'Visit physiotherapist.university' },
      linkAutore: null,
    },
    {
      titolo: 'A local AI assistant for the admissions office',
      titoloBreve: 'Local AI assistant on WhatsApp',
      sottotitolo: 'Fully local RAG on a €800 mini PC: it answers students on WhatsApp only with verified sentences, and the model, retrieval and archive never leave the office network.',
      breve: 'For a university admissions office, a RAG system that runs entirely on a €800 mini PC: it answers on WhatsApp only with verified sentences, and in testing no invented fact got past the checks.',

      metadati: {
        cliente: 'University admissions office',
        settore: 'Higher education',
        periodo: 'Autumn 2026',
        ruolo: 'Design and delivery, from hardware to production',
        stack: ['Ubuntu Server', 'llama.cpp', 'Gemma 4 26B', 'HHEM-2.1', 'Python', 'SQLite', 'systemd', 'WhatsApp Cloud API', 'Tailscale'],
      },

      problema: [
        "The admissions office was answering a constant stream of repetitive WhatsApp questions about deadlines, documents, fees and enrolment steps, for a bachelor's programme taught in English. It wanted to lighten that load without changing how it works: same number, same app on the office phone.",
        'Three constraints ruled out a cloud model from day one: student data could not leave the office network, the cost had to be low and predictable, with no per-token billing and no GPU workstation, and the machine had to be quiet and always reachable.',
        'The real risk was something else. An admissions assistant fails in one specific, expensive way: it states a deadline, fee or requirement that is plausible but wrong. The whole project is built around that single mistake it must not make.',
      ],

      architettura: {
        paragrafi: [
          'The server is a €800 mini PC (Ryzen 5 7640HS, 32 GB of RAM) with Ubuntu Server installed from scratch. Inference is CPU-only: two llama.cpp servers run as systemd services and listen on the local machine only, one for the generative model (Gemma 4 26B, about 23 GB) and one for embeddings, plus a faithfulness classifier. The binding constraint was memory, not compute: everything had to fit in RAM, with no swap, through a full test run.',
          'The pipeline’s principle is that the system never answers “with low confidence”: a message either passes every gate or goes to a person. The model is treated as an untrusted extractor. It chooses which sentences of the approved documents answer the question, but the student only ever receives sentences copied word for word from the knowledge base, after a program has checked every claim: the quote exists in the passage, numbers and dates match, and the classifier confirms the quote supports the claim.',
          'The integration uses the official WhatsApp API in coexistence: the office keeps using the app on its phone and, if an operator replies first, the system notices and sends nothing. Only one secret HTTPS path is exposed for incoming messages; the models, the dashboard and SSH stay on the local network or a private VPN. On every message the receiver checks live, against the office’s Google Sheet, that the number belongs to a student of the programme, without keeping a copy: anyone not on the list is never even stored.',
          'During the day the machine runs at full capacity; from 18:00 to 09:00 it stops the models and keeps listening on about 0.9 GB of RAM, collecting messages for the morning. The office runs everything from a single page: drafts to approve, service health, a register of every decision, a knowledge-base editor and a stop button.',
          'Three investigations changed the project along the way. Memory: during a 185-question test run, swap grew to 2–4 GB; the cause was the memory-mapped model loading a piece at a time, visible only when measuring under full load, not at start-up. The measurement itself: reading 55 divergent cases by hand, I found that 27 of the 39 “errors” were errors in the test labels, and that one gate looked effective only because the same test questions were in its own list; that led to simplifying the pipeline. Privacy: on connection, WhatsApp synced the phone’s address book to the server, 5,569 contacts, which was found and deleted straight away.',
        ],
        immagine: {
          src: '/case-studies/local-rag-pipeline.svg',
          alt: 'Diagram of the path of one message: decomposition, exclusion, retrieval and constrained answer, verification and approval gate, with an exit to the operator at every step',
          didascalia: 'The path of one message. Each gate can only stop it and hand it to a person; it becomes an automatic reply only if it passes them all and is close to an answer the office has already approved.',
        },
      },

      decisioni: [
        {
          scelta: 'RAG on the office’s documents, never fine-tuning',
          perche: 'Fine-tuning teaches style, not facts: a model trained on old chats would generate dates and amounts that look right. Facts have to come from documents the office controls and can correct. The historical chat archive was used only to learn which questions arrive, never as a source of answers.',
          alternativa: 'Training a model on the archive of past conversations: it looks like the most direct route, but it produces plausible answers nobody has verified.',
        },
        {
          scelta: 'A model chosen for faithfulness to the documents, not raw power',
          perche: 'The only criterion was how often a model adds something the documents do not say. Gemma 4 26B is a Mixture-of-Experts model: it activates about 4 billion parameters per token, so on CPU it answers at the speed of a small model with the comprehension of a much larger one. Reasoning off, temperature zero, quantisation never below Q5: every answer is reproducible and can be re-audited.',
          alternativa: 'A dense 8-billion-parameter model, slightly more faithful on paper but far weaker at understanding rephrased or multi-part questions; or a dense 27-billion one, better phrased but slower and at the limit of the memory.',
        },
        {
          scelta: 'The student only receives verified quotes',
          perche: 'For every claim, the model must give the passage and the exact sentence it comes from. A program, with no generative model involved, checks that the sentence exists, that numbers and dates match and that a faithfulness classifier confirms it. One rejected claim sends the whole message to a person. In testing the separation is clean: a median score of 0.90 for accepted claims against 0.17 for rejected ones.',
          alternativa: 'Sending the model’s own answer above a confidence threshold: more coverage from day one, but the model’s words would reach the student without anyone having checked them.',
        },
        {
          scelta: 'Autonomy is earned one answer at a time',
          perche: 'A verified answer is sent automatically only if it is very close to an answer the office has already approved and cites the same passages; otherwise it stays a draft. Every draft approved in the dashboard widens what can become automatic. That way a routing mistake costs one extra draft, not a wrong message to a student.',
          alternativa: 'A classifier that decides up front whether to answer or hand over to the operator. I built and measured three: the best routed 115 questions out of 136 correctly and never reached 100%.',
        },
        {
          scelta: 'The official WhatsApp API, in coexistence with the app',
          perche: 'The office keeps using WhatsApp Business on its phone as before, while the server receives messages directly from Meta. It costs 12 dollars a month, follows the platform’s rules, and the provider never stores message content.',
          alternativa: 'Automating WhatsApp Web with a scripted browser: cheaper on paper, but against the terms of use, fragile, and with a real risk of the office number being banned.',
        },
      ],

      consegne: [
        '€800 mini PC set up as an AI server',
        '4-gate RAG pipeline, with every claim verified',
        'Knowledge base: 38 categories, 71 passages, 479 example questions',
        '136-question test set, revised with 93 reasoned decisions',
        'WhatsApp integration in coexistence, with a receiver running 24/7',
        'Live student-registry filter: 5,397 rows read in about 1 second, no local copy',
        'Office dashboard: drafts, approval, register, editor, emergency stop',
        'Two operating modes: office hours and a night listener on about 0.9 GB of RAM',
        '56 automated tests on the integration layer, all passing',
        'Audit log of every decision and a draft privacy notice',
      ],

      risultati: {
        strutturali: [
          '0 invented facts passed verification, across all evaluation rounds',
          '0 operator-only questions would have been sent automatically, in every threshold combination tried on 185 questions',
          'Retrieval: the right passage is in the top 3 in 67 cases out of 73 and in the top 8 in 71 out of 73 (97%)',
          '26–33 seconds per message, on CPU only and with two model calls',
          'First real reply sent, delivered and read in 12 seconds',
          'In production since November 2026: automatic replies on approved topics, drafts for everything else',
        ],
        aggiornamento: {
          data: '2026-11-14',
          testo: 'Figures measured on the test sets and on the running system. The test labels were reviewed by me and the office has not yet signed them off. To stay on the safe side, anything not close to an already approved answer still stays a draft for the operator.',
        },
      },

      link: null,
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
