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
  },

  home: {
    hero: {
      titolo: '',
      testo: 'Construyo sistemas que eliminan el trabajo manual de los procesos. Trabajo principalmente con Salesforce, integraciones entre herramientas que no se comunican entre sí y arquitecturas de contenidos pensadas para la búsqueda orgánica.',
      bottoneContatti: 'Escríbeme',
      bottoneProgetto: 'Ver los proyectos',
    },
    scheda: [
      { voce: 'Ámbito', valore: 'Salesforce, integraciones, SEO' },
      { voce: 'Idiomas', valore: 'Italiano, español, inglés' },
      { voce: 'Ubicación', valore: 'Toscana (Italia) · en remoto' },
    ],
    profilo: { titolo: '', paragrafi: [''] },
    invito: {
      titolo: 'Escríbeme',
      testo: 'Si tienes un proceso que se hace a mano, una herramienta que no se comunica con las demás, o un proyecto de Salesforce del que te gustaría hablar, escríbeme. Respondo a todos.',
      bottone: 'Escríbeme',
    },
  },

  progetti: [
    {
      titolo: 'Arquitectura SEO por clústeres temáticos en WordPress',
      breve: 'Para Alma Mater Europaea, un portal de generación de leads con cobertura de 29 Estados UE/EEE: tres clústeres temáticos en una taxonomía jerárquica, 51 artículos optimizados on-page.',
      paragrafi: [''],
      dettagli: [
        { voce: 'Cliente', valore: 'Alma Mater Europaea' },
        { voce: 'Sector', valore: '' },
        { voce: 'Periodo', valore: 'Julio – septiembre de 2026' },
      ],
      titoloConsegne: 'Qué entregué',
      consegne: [''],
      url: 'https://physiotherapist.university/',
      link: 'Visitar physiotherapist.university',
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
