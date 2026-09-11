// Textos en español. Reescritura, no traducción: mismas claves que it.ts.
import type { Testi } from './it';

const es: Testi = {
  meta: {
    home: { titolo: '', descrizione: '' },
    contatti: { titolo: '', descrizione: '' },
    progetto: { titolo: '', descrizione: '' },
  },

  ruolo: 'Salesforce y automatización',

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
        ],
        immagine: {
          src: null,
          alt: 'Esquema de la taxonomía en tres ejes: tema, área geográfica, tipo de contenido',
          didascalia: 'Esquema simplificado de la taxonomía: tres clústeres temáticos, cada uno con una página pilar y los artículos de apoyo enlazados.',
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
        'Bloqueo antibots e invalidación de caché',
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
      linkAutore: {
        url: 'https://physiotherapist.university/author/aurelio-cecchi/',
        testo: 'Mi página de autor en physiotherapist.university',
      },
    },
  ],

  contatti: {
    titolo: '',
    testo: '',
    etichettaEmail: 'Correo',
    bottone: 'Enviar un correo',
    voci: [
      { voce: 'Idiomas de trabajo', valore: '' },
      { voce: 'Plazo de respuesta', valore: '' },
    ],
  },
};

export default es;
