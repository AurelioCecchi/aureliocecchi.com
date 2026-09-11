// Textos en español. Reescritura, no traducción: mismas claves que it.ts.
import type { Testi } from './it';

const es: Testi = {
  meta: {
    home: {
      titolo: 'Aurelio Cecchi — Salesforce, integraciones y crecimiento orgánico',
      descrizione: 'Desarrollador freelance: sistemas CRM, integraciones y arquitecturas de contenidos pensadas para la búsqueda orgánica. Especializado en Salesforce, entre Italia y España.',
    },
    contatti: {
      titolo: 'Contacto — Aurelio Cecchi',
      descrizione: 'Escríbeme para hablar de un proceso que automatizar, una integración o un proyecto de Salesforce. Respondo a todos, normalmente en pocos días laborables.',
    },
    progetto: {
      titolo: 'Caso de estudio: arquitectura de contenidos para captación internacional',
      descrizione: 'Cómo diseñé la taxonomía y los contenidos de un portal de generación de leads para estudiantes internacionales, para Alma Mater Europaea: 51 artículos, 29 Estados UE/EEE.',
    },
  },

  ruolo: 'Sistemas CRM y automatización',

  interfaccia: {
    saltaAlContenuto: 'Saltar al contenido',
    lingua: 'Idioma',
    contatti: 'Contacto',
    home: 'Inicio',
    pagine: 'Páginas',
    link: 'Enlaces',
    tornaSu: 'Volver arriba',
    diritti: 'Todos los derechos reservados.',
    partitaIva: 'NIF-IVA',
    paginaAutore: 'Página de autor en physiotherapist.university',
    oggettoEmail: 'Contacto desde aureliocecchi.com',
    progetti: 'Proyectos',
    leggiCaseStudy: 'Ver el caso de estudio',

    caseStudio: {
      cliente: 'Cliente',
      settore: 'Sector',
      periodo: 'Periodo',
      ruolo: 'Rol',
      stack: 'Stack',
      problema: 'El problema',
      architettura: 'La arquitectura',
      immagineInArrivo: 'Imagen próximamente',
      decisioni: 'Las decisiones',
      alternativaScartata: 'Alternativa descartada',
      consegne: 'Qué entregué',
      risultati: 'Resultados',
    },
  },

  home: {
    hero: {
      titolo: 'Sistemas CRM, integraciones y crecimiento orgánico.',
      testo: 'Construyo sistemas que eliminan el trabajo manual de los procesos. Trabajo principalmente con Salesforce, integraciones entre herramientas que no se comunican entre sí y arquitecturas de contenidos pensadas para la búsqueda orgánica.',
      bottoneContatti: 'Escríbeme',
      bottoneProgetto: 'Ver los proyectos',
    },
    scheda: [
      { voce: 'Ámbito', valore: 'Salesforce, integraciones, SEO' },
      { voce: 'Idiomas', valore: 'Italiano, español, inglés' },
      { voce: 'Ubicación', valore: 'Toscana (Italia) · en remoto' },
      { voce: 'Disponibilidad', valore: 'A partir de mayo de 2027' },
    ],
    profilo: {
      titolo: 'Perfil',
      paragrafi: [
        'Soy desarrollador freelance y trabajo con sistemas CRM, integraciones y arquitectura de contenidos.',
        'He diseñado y construido la arquitectura de contenidos detrás del sitio de captación internacional de estudiantes de una universidad europea, y escribo conectores MCP — de código abierto en GitHub — cuando la integración que necesito todavía no existe.',
        'Ahora mismo estoy preparando la certificación Salesforce Platform Administrator y construyendo una implementación completa de Salesforce para una organización sin ánimo de lucro. Disponible para trabajos freelance a partir de mayo de 2027.',
      ],
    },
    invito: {
      titolo: 'Escríbeme',
      testo: 'Si tienes un proceso que se hace a mano, una herramienta que no se comunica con las demás, o un proyecto de Salesforce del que te gustaría hablar, escríbeme. Respondo a todos.',
      bottone: 'Escríbeme',
    },
  },

  progetti: [
    {
      titolo: 'Arquitectura de contenidos para la captación de estudiantes internacionales',
      sottotitolo: 'Taxonomía, contenidos y SEO técnico para un portal de captación internacional.',
      breve: 'Para Alma Mater Europaea, un portal de generación de leads con cobertura de 29 Estados UE/EEE: tres clústeres temáticos en una taxonomía jerárquica, 51 artículos optimizados on-page.',

      metadati: {
        cliente: 'Alma Mater Europaea',
        settore: 'Educación superior',
        periodo: 'Julio – septiembre de 2026',
        ruolo: 'Arquitectura de contenidos, implementación',
        stack: ['WordPress', 'Yoast', 'MCP', 'HTML/CSS'],
      },

      problema: [
        'Alma Mater Europaea necesitaba un portal capaz de captar la búsqueda orgánica de estudiantes internacionales interesados en cursar sus estudios, en un mercado cubierto por universidades en 29 Estados de la UE y el EEE.',
        'Los contenidos existentes estaban fragmentados: páginas aisladas, sin jerarquía temática, con enlazado interno casi inexistente. El sitio no comunicaba a Google, ni a los lectores, sobre qué temas construía autoridad.',
        'El riesgo principal era la canibalización: páginas distintas compitiendo por las mismas búsquedas, sin un plan de enlazado entre contenidos pilares y contenidos de apoyo.',
      ],

      architettura: {
        paragrafi: [
          'Definí una taxonomía jerárquica en tres ejes — tema, área geográfica, tipo de contenido — y reorganicé los contenidos existentes en torno a tres clústeres temáticos, cada uno con una página pilar y artículos de apoyo enlazados en ambas direcciones.',
          'La estructura de URL y el enlazado interno siguen la jerarquía de la taxonomía, de modo que los rastreadores y los lectores puedan pasar del contenido específico al tema general en un solo paso.',
          'Durante la implementación también tuve que resolver dos problemas ajenos al contenido: un filtro antibots del lado del hosting que bloqueaba la conexión programática, aislado con pruebas específicas y resuelto mediante un ticket de soporte; y una capa de caché que no se invalidaba de forma predecible tras cada cambio, reconstruida y estabilizada antes de continuar la producción.',
        ],
        immagine: {
          src: '/case-studies/physiotherapist-university-taxonomy.svg',
          alt: 'Esquema de la taxonomía en tres ejes — Countries, Subjects, EU Regulations — con los subgrupos de cada eje y un ejemplo de enlace entre una ficha de país y los dos hubs temáticos',
          didascalia: 'Los tres ejes de la taxonomía con sus subgrupos, y un ejemplo de cómo una ficha de país enlaza con los hubs temáticos y con todas las demás fichas de país a través de la tabla del Artículo 11.',
        },
      },

      decisioni: [
        {
          scelta: 'Categorías en lugar de etiquetas',
          perche: 'Las categorías de WordPress crean una jerarquía de URL explícita, que refleja la taxonomía y ayuda a los buscadores a entender cómo se relacionan las páginas entre sí.',
          alternativa: 'Las etiquetas, ya en uso en parte del sitio, no imponen ninguna jerarquía: útiles para etiquetar de forma transversal, pero incapaces por sí solas de comunicar una estructura en clústeres.',
        },
        {
          scelta: 'Tablas informativas en HTML inline, no un documento descargable',
          perche: 'Cada programa debía incluir los datos exigidos por el Artículo 11 en una tabla indexable, legible desde móvil y actualizable página por página sin tocar un archivo externo.',
          alternativa: 'Un PDF por programa, el enfoque usado anteriormente: más rápido de producir en bloque, pero invisible para los buscadores e incómodo en móvil.',
        },
        {
          scelta: 'Página de inicio escrita a mano en HTML/CSS',
          perche: 'La home es la página con más tráfico y debía mantenerse ligera: sin los scripts de un editor visual por bloques, con mejores tiempos de respuesta y un impacto directo en el Core Web Vitals.',
          alternativa: 'El editor visual ya instalado en el tema: más cómodo de modificar sin tocar código, pero con un peso de scripts y CSS innecesario para una sola página estática.',
        },
        {
          scelta: 'Optimización SEO llevada a la puntuación máxima en las dos listas de Yoast',
          perche: 'El público son fisioterapeutas en ejercicio: el texto debía sostener un registro técnico. Las reglas de legibilidad tiran en la dirección contraria, hacia frases cortas y un léxico llano — el trabajo real fue reescribir hasta satisfacer ambos requisitos sin banalizar el contenido. Unos 25 criterios por artículo, en 51 artículos, repetidos en cada ciclo de revisión: más de 1.250 intervenciones puntuales sobre el corpus.',
          alternativa: 'Quedarse solo con la luz verde del análisis SEO y dejar el texto tal cual: una fracción del tiempo, pero un registro plano para un público que espera precisión técnica.',
        },
      ],

      consegne: [
        '26 artículos nuevos',
        '25 artículos reescritos, con URL y fechas conservadas',
        '51 contenidos optimizados on-page',
        '29 tablas del Artículo 11',
        'Taxonomía en tres ejes',
        'Página de inicio escrita a mano',
        'Restyling de la plantilla',
        'Integración MCP a medida',
        'Desbloqueo del filtro antibots del hosting',
        'Diagnóstico y corrección de la invalidación de caché',
      ],

      risultati: {
        strutturali: [
          'Tres clústeres temáticos publicados y enlazados entre sí',
          'Taxonomía activa en todas las páginas del portal',
          'Sitio en proceso de indexación en Google Search Console',
        ],
        aggiornamento: null,
      },

      link: { url: 'https://physiotherapist.university/', testo: 'Visitar physiotherapist.university' },
      linkAutore: null,
    },
  ],

  contatti: {
    titolo: 'Escríbeme',
    testo: 'Si tienes un proceso que se hace a mano, una herramienta que no se comunica con las demás, o un proyecto de Salesforce del que te gustaría hablar, escríbeme aquí abajo. Respondo a todos.',
    etichettaEmail: 'Correo',
    bottone: 'Enviar un correo',
    voci: [
      { voce: 'Idiomas de trabajo', valore: 'Italiano, español, inglés' },
      { voce: 'Plazo de respuesta', valore: 'Normalmente en 1-2 días laborables' },
      { voce: 'Disponibilidad', valore: 'Para trabajos freelance a partir de mayo de 2027' },
    ],
  },
};

export default es;
