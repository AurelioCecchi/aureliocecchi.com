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
      testo: '',
      bottoneContatti: 'Escríbeme',
      bottoneProgetto: 'Ver los proyectos',
    },
    scheda: [
      { voce: 'Ámbito', valore: 'Salesforce, automatización, contenidos SEO' },
      { voce: 'Idiomas', valore: 'Italiano, español, inglés' },
      { voce: 'Ubicación', valore: 'Toscana (Italia) · en remoto' },
    ],
    profilo: { titolo: '', paragrafi: [''] },
    invito: { titolo: '', testo: '', bottone: 'Escríbeme' },
  },

  progetti: [
    {
      titolo: '',
      breve: '',
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
