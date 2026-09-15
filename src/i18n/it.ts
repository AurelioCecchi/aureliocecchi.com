// Testi italiani. Le stringhe vuote ('') sono tue: finché ne resta una, la build si ferma.
// null invece indica un campo assente di proposito (non ancora, ma per scelta): il motore
// i18n lo lascia passare senza bloccare la build. Le altre stringhe sono etichette
// d'interfaccia: modificale pure.

interface Decisione {
  scelta: string;
  perche: string;
  alternativa: string;
}

// Struttura di un case study. progetti[0].sottotitolo, .architettura, .risultati
// e .risultati.aggiornamento possono essere null: la pagina li omette senza lasciare
// un buco nel layout. Per aggiungerne uno: nuovo elemento in progetti + nuova rotta
// in i18n/index.ts (rotte.progetto) + nuova pagina in src/pages.
interface CaseStudy {
  titolo: string;       // h1 della pagina di dettaglio
  titoloBreve: string;  // titolo del quadrato in home: più corto, stesso progetto
  sottotitolo: string | null; // una riga, sotto il titolo
  breve: string;         // 1 frase per il quadrato in home

  metadati: {
    cliente: string;
    settore: string;
    periodo: string;
    ruolo: string;        // il mio ruolo nel progetto (non il ruolo del sito, vedi sopra)
    stack: string[];      // tag, non testo corrente
  };

  problema: string[];     // paragrafi, 3-4 brevi

  architettura: {
    paragrafi: string[];
    immagine: {
      src: string | null; // null finché non c'è un file reale: mostra un contenitore segnaposto
      alt: string;
      didascalia: string;
    };
  } | null;

  decisioni: Decisione[]; // 3-4 elementi, la sezione con più peso visivo

  consegne: string[];     // 6-10 voci brevi, molte con numeri

  risultati: {
    strutturali: string[];
    aggiornamento: { data: string; testo: string } | null;
  } | null;

  link: { url: string; testo: string };            // primario, verso il sito del progetto
  linkAutore: { url: string; testo: string } | null; // secondario, pagina autore su quel sito
}

const it = {
  meta: {
    home: {
      titolo: 'Aurelio Cecchi — Salesforce, integrazioni e crescita organica',
      descrizione: 'Lavoro su Salesforce, integrazioni e architetture di contenuti, tra Italia e Spagna.',
    },
    contatti: {
      titolo: 'Contatti — Aurelio Cecchi',
      descrizione: 'Scrivimi per parlare di un processo da automatizzare, un’integrazione o un progetto Salesforce. Rispondo a tutti, di solito entro pochi giorni lavorativi.',
    },
    progetto: {
      titolo: 'Case study: architettura di contenuti per il recruiting internazionale',
      descrizione: 'Come ho progettato la tassonomia e i contenuti di un portale di lead generation per studenti internazionali, per Alma Mater Europaea: 51 articoli, 29 Stati UE/SEE.',
    },
  },

  // Il mestiere in poche parole. Compare sopra il titolo della home,
  // nel footer e nei dati strutturati (jobTitle).
  ruolo: 'Sistemi CRM e automazione',

  interfaccia: {
    saltaAlContenuto: 'Vai al contenuto',
    lingua: 'Lingua',
    contatti: 'Contatti',
    home: 'Home',
    pagine: 'Pagine',
    link: 'Link',
    tornaSu: 'Torna su',
    partitaIva: 'P.IVA',
    paginaAutore: 'Pagina autore su physiotherapist.university',
    oggettoEmail: 'Contatto da aureliocecchi.com',
    progetti: 'Progetti',
    leggiCaseStudy: 'Leggi il case study',

    // Etichette fisse della pagina di dettaglio progetto: uguali per ogni case study.
    caseStudio: {
      cliente: 'Cliente',
      settore: 'Settore',
      periodo: 'Periodo',
      ruolo: 'Ruolo',
      stack: 'Stack',
      problema: 'Il problema',
      architettura: 'L’architettura',
      immagineInArrivo: 'Immagine in arrivo',
      decisioni: 'Le decisioni',
      alternativaScartata: 'Alternativa scartata',
      consegne: 'Cosa ho consegnato',
      risultati: 'Risultati',
    },
  },

  home: {
    hero: {
      titolo: 'Sistemi CRM, integrazioni e crescita organica.',
      testo: 'Progetto automazioni su Salesforce, integrazioni tra sistemi e architetture di contenuti per la ricerca organica. Lavoro in italiano, spagnolo e inglese.',
      bottoneProgetto: 'Il case study',
    },
    // Scheda a lato del titolo. Le voci si possono togliere o aggiungere.
    scheda: [
      { voce: 'Ambito', valore: 'Salesforce, integrazioni, SEO' },
      { voce: 'Lingue', valore: 'Italiano, spagnolo, inglese' },
      { voce: 'Base', valore: 'Toscana · da remoto' },
      { voce: 'Disponibilità', valore: 'Da maggio 2027' },
    ],
    profilo: {
      titolo: 'Profilo',
      paragrafi: [
        'Mi occupo di sistemi CRM, integrazioni e architettura dei contenuti per la ricerca organica. Le due metà sembrano mestieri diversi, ma sono lo stesso problema visto due volte: decidere come strutturare l’informazione perché un sistema — o una persona — riesca a orientarsi. Da una parte lo si fa con oggetti, permessi e automazioni; dall’altra con tassonomie, gerarchie e link interni.',
        'La maggior parte del mio lavoro è su Salesforce. Di recente ho progettato e costruito l’architettura dei contenuti dietro il portale di acquisizione internazionale di studenti di un’università europea — tassonomia a tre assi, 51 articoli ottimizzati, componenti su misura — consegnato a settembre 2026. Quando mi serve un’integrazione che non esiste ancora, la scrivo e la pubblico: https://github.com/AurelioCecchi/mcp-google-sheets.',
        'Al momento sto costruendo competenza su Salesforce Administrator sul campo, in vista della certificazione nel 2027, e il prossimo lavoro in programma è un’implementazione Salesforce completa per un’organizzazione non profit.',
      ],
    },
    invito: {
      titolo: 'Contatti',
      testo: 'Per un processo da automatizzare, due sistemi da collegare o un progetto Salesforce da impostare, scrivimi.',
      bottone: 'Scrivimi',
    },
  },

  progetti: [
    {
      titolo: 'Architettura dei contenuti per l’acquisizione di studenti internazionali',
      titoloBreve: 'Architettura dei contenuti per un portale universitario',
      sottotitolo: 'Tassonomia, contenuti e SEO tecnica per un portale di recruiting internazionale.',
      breve: 'Per Alma Mater Europaea, un portale di lead generation su 29 Stati UE/SEE: tre cluster tematici su tassonomia gerarchica, 51 articoli ottimizzati on-page.',

      metadati: {
        cliente: 'Alma Mater Europaea',
        settore: 'Istruzione superiore',
        periodo: 'Luglio – settembre 2026',
        ruolo: 'Architettura dei contenuti, implementazione',
        stack: ['WordPress', 'Yoast', 'MCP', 'HTML/CSS'],
      },

      problema: [
        'Alma Mater Europaea aveva bisogno di un portale in grado di intercettare la ricerca organica di studenti internazionali interessati a un percorso di studi, in un mercato coperto da università in 29 Stati tra UE e SEE.',
        'I contenuti esistenti erano frammentati: pagine isolate, nessuna gerarchia tematica, link interni quasi assenti. Il sito non comunicava a Google, né ai lettori, quali fossero i temi su cui costruiva autorevolezza.',
        'Il rischio principale era la cannibalizzazione: pagine diverse in competizione per le stesse query, senza un piano di collegamento tra contenuti pillar e contenuti di supporto.',
      ],

      architettura: {
        paragrafi: [
          'Ho impostato una tassonomia gerarchica a tre assi — argomento, area geografica, tipo di contenuto — e riorganizzato i contenuti esistenti attorno a tre cluster tematici, ciascuno con una pagina pillar e articoli di supporto collegati in entrambe le direzioni.',
          'La struttura degli URL e l’internal linking seguono la gerarchia della tassonomia, così che crawler e lettori possano risalire dal contenuto specifico al tema generale in un solo passaggio.',
          'Durante l’implementazione ho dovuto risolvere anche due problemi indipendenti dal contenuto: un filtro anti-bot lato hosting che bloccava l’operatività del collegamento programmatico, isolato con test mirati e rimosso tramite un ticket con l’assistenza; e un layer di cache che non invalidava in modo prevedibile dopo ogni modifica, ricostruito e stabilizzato prima di continuare la produzione.',
        ],
        immagine: {
          src: '/case-studies/physiotherapist-university-taxonomy.svg',
          alt: 'Schema della tassonomia a tre assi — Countries, Subjects, EU Regulations — con i sottogruppi di ciascun asse e un esempio di collegamento fra una scheda paese e i due hub tematici',
          didascalia: 'I tre assi della tassonomia con i rispettivi sottogruppi, e un esempio di come una scheda paese si collega agli hub tematici e a tutte le altre schede paese tramite la tabella Articolo 11.',
        },
      },

      decisioni: [
        {
          scelta: 'Categorie invece di tag',
          perche: 'Le categorie WordPress creano una gerarchia di URL esplicita, che rispecchia la tassonomia e aiuta i motori di ricerca a capire come le pagine si relazionano tra loro.',
          alternativa: 'I tag, già in uso su parte del sito, non impongono nessuna gerarchia: utili per etichettare trasversalmente, ma incapaci da soli di comunicare una struttura a cluster.',
        },
        {
          scelta: 'Tabelle informative in HTML inline, non un documento scaricabile',
          perche: 'Ogni programma doveva includere i dati previsti dall’Articolo 11 in una tabella indicizzabile, leggibile da mobile e aggiornabile pagina per pagina senza toccare un file esterno.',
          alternativa: 'Un PDF per programma, l’approccio in uso in precedenza: più rapido da produrre in blocco, ma invisibile ai motori di ricerca e scomodo su mobile.',
        },
        {
          scelta: 'Home page scritta a mano in HTML/CSS',
          perche: 'La home è la pagina con più traffico e doveva restare leggera: nessuno script di un builder a blocchi da caricare, tempi di risposta migliori e un impatto diretto sul Core Web Vitals.',
          alternativa: 'Il page builder visuale già installato sul tema: più comodo da modificare senza toccare codice, ma con un peso di script e CSS superfluo per una singola pagina statica.',
        },
        {
          scelta: 'Ottimizzazione SEO fino al punteggio pieno su entrambe le checklist Yoast',
          perche: 'Il pubblico sono fisioterapisti in esercizio: il testo doveva reggere un registro tecnico. Le regole di leggibilità spingono nella direzione opposta, verso frasi brevi e lessico piano — il lavoro vero è stato riscrivere fino a soddisfare entrambi i vincoli senza banalizzare i contenuti. Circa 25 criteri per articolo, su 51 articoli, ripetuti a ogni ciclo di revisione: oltre 1.250 interventi puntuali sul corpus.',
          alternativa: 'Fermarsi al solo semaforo verde sull’analisi SEO e lasciare il testo com’era: una frazione del tempo, ma un registro piatto per un pubblico che si aspetta precisione tecnica.',
        },
      ],

      // Materiale dal brief: 26 articoli nuovi; 25 riscritti conservando URL e date;
      // 51 ottimizzati on-page (somma dei due); 29 tabelle Articolo 11; tassonomia a tre
      // assi; home in HTML/CSS; restyling del tema; integrazione MCP; blocco anti-bot
      // (sblocco via ticket hosting); invalidazione cache.
      consegne: [
        '26 articoli nuovi',
        '25 articoli riscritti, URL e date conservate',
        '51 contenuti ottimizzati on-page',
        '29 tabelle Articolo 11',
        'Tassonomia a tre assi',
        'Home page scritta a mano',
        'Restyling del tema',
        'Integrazione MCP su misura',
        'Sblocco del filtro anti-bot lato hosting',
        'Diagnosi e correzione dell’invalidazione cache',
      ],

      risultati: {
        strutturali: [
          'Tre cluster tematici pubblicati e collegati tra loro',
          'Tassonomia attiva su tutte le pagine del portale',
          'Sito in fase di indicizzazione su Google Search Console',
        ],
        aggiornamento: null, // niente metriche ancora: il blocco datato resta assente finché non arrivano
      },

      link: { url: 'https://physiotherapist.university/', testo: 'Visita physiotherapist.university' },
      linkAutore: null,
    },
  ] as CaseStudy[],

  contatti: {
    titolo: 'Scriviamoci',
    testo: 'Se hai un processo che gira a mano, uno strumento che non si parla con gli altri, o un progetto Salesforce di cui vorresti discutere, scrivimi direttamente qui sotto. Rispondo a tutti.',
    etichettaEmail: 'Email',
    bottone: 'Scrivi un’email',
    voci: [
      { voce: 'Lingue di lavoro', valore: 'Italiano, spagnolo, inglese' },
      { voce: 'Tempi di risposta', valore: 'Di solito entro 1-2 giorni lavorativi' },
      { voce: 'Disponibilità', valore: 'Per lavori freelance da maggio 2027' },
    ],
  },
};

export type Testi = typeof it;
export default it;
