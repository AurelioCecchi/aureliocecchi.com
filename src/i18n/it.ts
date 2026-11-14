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

  decisioni: Decisione[]; // 3-5 elementi, la sezione con più peso visivo

  consegne: string[];     // 6-10 voci brevi, molte con numeri

  risultati: {
    strutturali: string[];
    aggiornamento: { data: string; testo: string } | null; // data ISO (AAAA-MM-GG): la pagina la scrive per esteso
  } | null;

  link: { url: string; testo: string } | null;     // primario, verso il sito del progetto; null se non c'è nulla di pubblico
  linkAutore: { url: string; testo: string } | null; // secondario, pagina autore su quel sito
}

const it = {
  meta: {
    home: {
      titolo: 'Aurelio Cecchi — Automazione, integrazioni e crescita organica',
      descrizione: 'Lavoro su Salesforce, integrazioni e architetture di contenuti, tra Italia e Spagna.',
    },
    contatti: {
      titolo: 'Contatti — Aurelio Cecchi',
      descrizione: 'Scrivimi per parlare di un processo da automatizzare, un’integrazione o un progetto Salesforce. Rispondo a tutti, di solito entro pochi giorni lavorativi.',
    },
    progetto: {
      titolo: 'Case study: architettura di contenuti per il recruiting internazionale',
      descrizione: 'Come ho progettato la tassonomia e i contenuti di un portale di lead generation per studenti internazionali, per un’università europea: 51 articoli, 29 Stati UE/SEE.',
    },
    progetto2: {
      titolo: 'Case study: assistente AI locale per un ufficio ammissioni',
      descrizione: 'Come ho progettato e messo in produzione un assistente RAG interamente locale su un mini PC da 800 €: risponde su WhatsApp solo con frasi verificate.',
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
      aggiornamentoAl: 'Aggiornato al',
    },
  },

  home: {
    hero: {
      titolo: 'Automazione, integrazioni e crescita organica.',
      testo: 'Progetto automazioni su Salesforce, integrazioni tra sistemi e architetture di contenuti per la ricerca organica. Lavoro in italiano, spagnolo e inglese.',
      bottoneProgetto: 'I case study',
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
        {
          prima: 'La maggior parte del mio lavoro è su Salesforce. Di recente ho progettato e costruito l’architettura dei contenuti dietro il portale di acquisizione internazionale di studenti di un’università europea — tassonomia a tre assi, 51 articoli ottimizzati, componenti su misura — consegnato a settembre 2026. Quando mi serve un’integrazione che non esiste ancora, la scrivo e la pubblico sul mio ',
          link: { url: 'https://github.com/AurelioCecchi', testo: 'GitHub' },
          dopo: '.',
        },
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
      breve: 'Per un’università europea, un portale di lead generation su 29 Stati UE/SEE: tre cluster tematici su tassonomia gerarchica, 51 articoli ottimizzati on-page.',

      metadati: {
        cliente: 'Università europea',
        settore: 'Istruzione superiore',
        periodo: 'Luglio – settembre 2026',
        ruolo: 'Architettura dei contenuti, implementazione',
        stack: ['WordPress', 'Yoast', 'MCP', 'HTML/CSS'],
      },

      problema: [
        'L’università aveva bisogno di un portale in grado di intercettare la ricerca organica di studenti internazionali interessati a un percorso di studi, in un mercato coperto da università in 29 Stati tra UE e SEE.',
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
          '60 pagine che ricevono traffico organico',
          '561 visitatori e 758 visualizzazioni nel periodo 29 settembre – 28 ottobre 2026, +30% di visitatori rispetto ai trenta giorni precedenti',
          '9 richieste di informazioni qualificate nello stesso periodo',
        ],
        aggiornamento: {
          data: '2026-10-28', // fine del periodo di misurazione
          testo: 'Dati rilevati sull’analytics del portale. Il periodo di misurazione inizia dopo la consegna, quindi i numeri descrivono il portale a regime, non un confronto prima/dopo.',
        },
      },

      link: { url: 'https://physiotherapist.university/', testo: 'Visita physiotherapist.university' },
      linkAutore: null,
    },
    {
      titolo: 'Un assistente AI locale per l’ufficio ammissioni',
      titoloBreve: 'Assistente AI locale su WhatsApp',
      sottotitolo: 'RAG interamente in locale su un mini PC da 800 €: risponde agli studenti su WhatsApp solo con frasi verificate, e modello, ricerca e archivio non escono dalla rete dell’ufficio.',
      breve: 'Per un ufficio ammissioni universitario, un sistema RAG che gira per intero su un mini PC da 800 €: risponde su WhatsApp solo con frasi verificate, e nei test nessun fatto inventato ha superato i controlli.',

      metadati: {
        cliente: 'Ufficio ammissioni universitario',
        settore: 'Istruzione superiore',
        periodo: 'Autunno 2026',
        ruolo: 'Progettazione e realizzazione, dall’hardware alla messa in produzione',
        stack: ['Ubuntu Server', 'llama.cpp', 'Gemma 4 26B', 'HHEM-2.1', 'Python', 'SQLite', 'systemd', 'WhatsApp Cloud API', 'Tailscale'],
      },

      problema: [
        'L’ufficio ammissioni riceveva su WhatsApp un flusso continuo di domande ripetitive su scadenze, documenti, tasse e passaggi dell’iscrizione, per un corso di laurea in lingua inglese. Voleva alleggerire quel carico senza cambiare il modo di lavorare: stesso numero, stessa app sul telefono dell’ufficio.',
        'Tre vincoli escludevano fin dall’inizio un modello in cloud: i dati degli studenti non dovevano lasciare la rete dell’ufficio, il costo doveva essere basso e prevedibile, senza tariffe a consumo né workstation con GPU, e la macchina doveva essere silenziosa e sempre raggiungibile.',
        'Il rischio vero era un altro. Un assistente per le ammissioni sbaglia in un modo preciso e costoso: comunica una scadenza, una tassa o un requisito plausibile ma falso. Tutto il progetto è costruito attorno a questo unico errore da non commettere.',
      ],

      architettura: {
        paragrafi: [
          'Il server è un mini PC da 800 € (Ryzen 5 7640HS, 32 GB di RAM), con Ubuntu Server installato da zero. L’inferenza è solo su CPU: due server llama.cpp gestiti da systemd e in ascolto soltanto in locale, uno per il modello generativo (Gemma 4 26B, circa 23 GB) e uno per gli embedding, più un classificatore di fedeltà. Il vincolo non era la potenza ma la memoria: tutto doveva stare in RAM, senza swap, durante un’intera sessione di test.',
          'Il principio della pipeline è che il sistema non risponde mai «con poca sicurezza»: un messaggio supera ogni controllo, oppure va a una persona. Il modello è trattato come un estrattore di cui non ci si fida: sceglie quali frasi dei documenti approvati rispondono alla domanda, ma allo studente arrivano solo frasi copiate alla lettera dalla base di conoscenza, dopo che un programma ha verificato ogni affermazione: la citazione esiste nel passaggio, numeri e date coincidono, e il classificatore conferma che la citazione sostiene l’affermazione.',
          'L’integrazione usa l’API ufficiale di WhatsApp in coesistenza: l’ufficio continua a usare l’app sul telefono e, se un operatore risponde per primo, il sistema se ne accorge e non invia nulla. All’esterno è esposto un solo percorso HTTPS segreto per i messaggi in arrivo; modelli, cruscotto e SSH restano sulla rete locale o su una VPN privata. A ogni messaggio il ricevitore controlla dal vivo, sul foglio Google dell’ufficio, che il numero sia di uno studente del corso, senza tenerne una copia: chi non è in elenco non viene nemmeno archiviato.',
          'Di giorno la macchina lavora a pieno regime; dalle 18 alle 9 ferma i modelli e resta in ascolto con circa 0,9 GB di RAM, raccogliendo i messaggi per il mattino. L’ufficio governa tutto da un’unica pagina: bozze da approvare, stato dei servizi, registro di ogni decisione, editor della base di conoscenza e un pulsante di arresto.',
          'Tre indagini hanno cambiato il progetto strada facendo. La memoria: durante un test da 185 domande la swap cresceva fino a 2–4 GB; la causa era il modello mappato in memoria, che si caricava un pezzo alla volta, e si vedeva solo misurando sotto carico completo, non all’avvio. La misura stessa: leggendo a mano 55 casi divergenti ho scoperto che 27 dei 39 «errori» erano errori nelle etichette del test, e che un controllo sembrava efficace solo perché le stesse domande del test erano nella sua lista; da lì la scelta di semplificare la pipeline. La privacy: alla connessione WhatsApp ha sincronizzato sul server la rubrica del telefono, 5.569 contatti, individuata e cancellata subito.',
        ],
        immagine: {
          src: '/case-studies/local-rag-pipeline.svg',
          alt: 'Schema del percorso di un messaggio: scomposizione, esclusione, ricerca e risposta vincolata, verifica e controllo di approvazione, con un’uscita verso l’operatore a ogni passo',
          didascalia: 'Il percorso di un messaggio. Ogni controllo può solo fermarlo e passarlo a una persona; diventa una risposta automatica soltanto se li supera tutti ed è vicino a una risposta già approvata dall’ufficio.',
        },
      },

      decisioni: [
        {
          scelta: 'RAG sui documenti dell’ufficio, mai fine-tuning',
          perche: 'Il fine-tuning insegna lo stile, non i fatti: un modello addestrato sulle vecchie chat genererebbe date e importi che sembrano giusti. I fatti devono venire da documenti che l’ufficio controlla e può correggere. L’archivio storico delle chat è servito solo a capire quali domande arrivano, mai come fonte di risposte.',
          alternativa: 'Addestrare un modello sull’archivio delle conversazioni passate: sembra la via più diretta, ma produce risposte plausibili che nessuno ha verificato.',
        },
        {
          scelta: 'Modello scelto per fedeltà ai documenti, non per potenza',
          perche: 'L’unico criterio era quanto spesso un modello aggiunge qualcosa che i documenti non dicono. Gemma 4 26B è un modello Mixture-of-Experts: attiva circa 4 miliardi di parametri per token, quindi su CPU risponde alla velocità di un modello piccolo con la comprensione di uno molto più grande. Ragionamento disattivato, temperatura zero, quantizzazione mai sotto Q5: ogni risposta è riproducibile e si può ricontrollare.',
          alternativa: 'Un modello denso da 8 miliardi di parametri, di poco più fedele sulla carta ma molto più debole nel capire domande riformulate o in più parti; oppure un denso da 27 miliardi, migliore nella forma ma più lento e al limite della memoria.',
        },
        {
          scelta: 'Allo studente arrivano solo citazioni verificate',
          perche: 'Per ogni affermazione il modello deve indicare il passaggio e la frase esatta da cui la ricava. Un programma, senza alcun modello generativo, controlla che la frase esista, che numeri e date coincidano e che un classificatore di fedeltà la confermi. Basta un’affermazione respinta perché l’intero messaggio passi a una persona. Nei test la separazione è netta: punteggio mediano 0,90 per le affermazioni accettate, 0,17 per quelle respinte.',
          alternativa: 'Inviare la risposta scritta dal modello sopra una certa soglia di confidenza: più copertura subito, ma le parole del modello arriverebbero allo studente senza che nessuno le abbia controllate.',
        },
        {
          scelta: 'L’autonomia si guadagna una risposta alla volta',
          perche: 'Una risposta verificata parte in automatico solo se è molto vicina a una risposta già approvata dall’ufficio e cita gli stessi passaggi; altrimenti resta una bozza. Ogni bozza approvata dal cruscotto allarga ciò che può diventare automatico. Così un errore di instradamento costa una bozza in più, non un messaggio sbagliato a uno studente.',
          alternativa: 'Un classificatore che decide a monte se rispondere o passare all’operatore. Ne ho costruiti e misurati tre: il migliore instradava bene 115 domande su 136 e non arrivava mai al 100 %.',
        },
        {
          scelta: 'API ufficiale di WhatsApp, in coesistenza con l’app',
          perche: 'L’ufficio continua a usare WhatsApp Business sul telefono come prima, mentre il server riceve i messaggi direttamente da Meta. Costa 12 dollari al mese, rispetta le regole della piattaforma e il fornitore non conserva il contenuto dei messaggi.',
          alternativa: 'Automatizzare WhatsApp Web con un browser pilotato: più economico sulla carta, ma contrario ai termini d’uso, fragile e con il rischio concreto che il numero dell’ufficio venga bloccato.',
        },
      ],

      consegne: [
        'Mini PC da 800 € configurato come server AI',
        'Pipeline RAG a 4 controlli, con verifica di ogni affermazione',
        'Base di conoscenza: 38 categorie, 71 passaggi, 479 domande d’esempio',
        'Set di prova da 136 domande, riviste con 93 decisioni motivate',
        'Integrazione WhatsApp in coesistenza, con ricevitore attivo 24 ore su 24',
        'Filtro anagrafica dal vivo: 5.397 righe lette in circa 1 secondo, nessuna copia locale',
        'Cruscotto per l’ufficio: bozze, approvazione, registro, editor, arresto di emergenza',
        'Due modalità operative: orario d’ufficio e ascolto notturno a circa 0,9 GB di RAM',
        '56 test automatici sullo strato di integrazione, tutti superati',
        'Registro di audit di ogni decisione e bozza dell’informativa privacy',
      ],

      risultati: {
        strutturali: [
          '0 fatti inventati hanno superato la verifica, in tutti i round di valutazione',
          '0 domande riservate all’operatore sarebbero partite in automatico, in ogni combinazione di soglie provata su 185 domande',
          'Ricerca: il passaggio giusto è tra i primi 3 in 67 casi su 73 e tra i primi 8 in 71 su 73 (97 %)',
          '26–33 secondi per messaggio, su sola CPU e con due chiamate al modello',
          'Prima risposta reale inviata, consegnata e letta in 12 secondi',
          'In produzione da novembre 2026: risposta automatica sugli argomenti approvati, bozza per tutto il resto',
        ],
        aggiornamento: {
          data: '2026-11-14', // giorno della messa in produzione
          testo: 'Numeri misurati sui set di prova e sul sistema in esercizio. Le etichette dei test sono state riviste da me e l’ufficio non le ha ancora validate. Per prudenza, tutto ciò che non è vicino a una risposta già approvata resta comunque una bozza per l’operatore.',
        },
      },

      link: null, // il repository non è pubblico: la pagina si chiude con l'invito a scrivere
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
