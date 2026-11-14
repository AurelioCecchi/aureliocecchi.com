// Textos en español. Reescritura, no traducción: mismas claves que it.ts.
import type { Testi } from './it';

const es: Testi = {
  meta: {
    home: {
      titolo: 'Aurelio Cecchi — Automatización con IA, Salesforce y CRM',
      descrizione: 'Diseño automatizaciones con IA que funcionan en local, procesos en Salesforce e integraciones entre sistemas CRM, entre Italia y España.',
    },
    contatti: {
      titolo: 'Contacto — Aurelio Cecchi',
      descrizione: 'Escríbeme para hablar de un proceso que automatizar, una integración o un proyecto de Salesforce. Respondo a todos, normalmente en pocos días laborables.',
    },
    progetto: {
      titolo: 'Caso de estudio: arquitectura de contenidos para captación internacional',
      descrizione: 'Cómo diseñé la taxonomía y los contenidos de un portal de generación de leads para estudiantes internacionales, para una universidad europea: 51 artículos, 29 Estados UE/EEE.',
    },
    progetto2: {
      titolo: 'Caso de estudio: asistente de IA local para una oficina de admisiones',
      descrizione: 'Cómo diseñé y puse en producción un asistente RAG totalmente local en un mini PC de 800 €: responde por WhatsApp solo con frases verificadas.',
    },
  },

  ruolo: 'Automatización con IA y sistemas CRM',

  interfaccia: {
    saltaAlContenuto: 'Saltar al contenido',
    lingua: 'Idioma',
    contatti: 'Contacto',
    home: 'Inicio',
    pagine: 'Páginas',
    link: 'Enlaces',
    tornaSu: 'Volver arriba',
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
      aggiornamentoAl: 'Actualizado a',
    },
  },

  home: {
    hero: {
      titolo: 'Automatización con IA para CRM y Salesforce.',
      testo: 'Diseño automatizaciones con IA que funcionan en la infraestructura del cliente, procesos en Salesforce e integraciones entre el CRM y los sistemas que lo rodean. Trabajo en italiano, español e inglés.',
      bottoneProgetto: 'Los casos de estudio',
    },
    scheda: [
      { voce: 'Ámbito', valore: 'Automatización con IA, Salesforce, CRM' },
      { voce: 'Idiomas', valore: 'Italiano, español, inglés' },
      { voce: 'Ubicación', valore: 'Toscana (Italia) · en remoto' },
      { voce: 'Disponibilidad', valore: 'A partir de mayo de 2027' },
    ],
    profilo: {
      titolo: 'Perfil',
      paragrafi: [
        'Trabajo en automatización con IA y sistemas CRM. Me interesa un punto concreto: poner un modelo a trabajar dentro de un proceso real sin que los datos salgan de la empresa y sin que una respuesta equivocada llegue al cliente. Por eso diseño primero los controles y después la automatización: qué puede salir solo, qué pasa por una persona, qué queda registrado.',
        {
          prima: 'En 2026 puse en producción un asistente de IA que funciona por completo en un servidor local y responde por WhatsApp solo con frases verificadas, y construí la arquitectura de contenidos del portal internacional de una universidad europea. Cuando necesito una integración que todavía no existe, la escribo y la publico en mi ',
          link: { url: 'https://github.com/AurelioCecchi', testo: 'GitHub' },
          dopo: '.',
        },
        'En Salesforce estoy construyendo experiencia de Administrator sobre el terreno, de cara a la certificación en 2027, y lo próximo en mi agenda es una implementación completa para una organización sin ánimo de lucro. Ahí se encuentran las dos mitades: el CRM como el lugar donde viven los datos, y la automatización con IA como el trabajo que funciona por encima.',
      ],
    },
    invito: {
      titolo: 'Contacto',
      testo: 'Para un proceso que automatizar con IA, un CRM que poner en orden o un proyecto de Salesforce que poner en marcha, escríbeme.',
      bottone: 'Escríbeme',
    },
  },

  progetti: [
    {
      titolo: 'Arquitectura de contenidos para la captación de estudiantes internacionales',
      titoloBreve: 'Arquitectura de contenidos para un portal universitario',
      sottotitolo: 'Taxonomía, contenidos y SEO técnico para un portal de captación internacional.',
      breve: 'Para una universidad europea, un portal de generación de leads con cobertura de 29 Estados UE/EEE: tres clústeres temáticos en una taxonomía jerárquica, 51 artículos optimizados on-page.',

      metadati: {
        cliente: 'Universidad europea',
        settore: 'Educación superior',
        periodo: 'Julio – septiembre de 2026',
        ruolo: 'Arquitectura de contenidos, implementación',
        stack: ['WordPress', 'Yoast', 'MCP', 'HTML/CSS'],
      },

      problema: [
        'La universidad necesitaba un portal capaz de captar la búsqueda orgánica de estudiantes internacionales interesados en cursar sus estudios, en un mercado cubierto por universidades en 29 Estados de la UE y el EEE.',
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
          '60 páginas que reciben tráfico orgánico',
          '561 visitantes y 758 páginas vistas entre el 29 de septiembre y el 28 de octubre de 2026, un 30 % más de visitantes que en los treinta días anteriores',
          '9 solicitudes de información cualificadas en el mismo periodo',
        ],
        aggiornamento: {
          data: '2026-10-28',
          testo: 'Datos obtenidos del analytics del portal. El periodo de medición empieza después de la entrega, por lo que las cifras describen el portal ya en funcionamiento, no una comparación antes/después.',
        },
      },

      link: { url: 'https://physiotherapist.university/', testo: 'Visitar physiotherapist.university' },
      linkAutore: null,
    },
    {
      titolo: 'Un asistente de IA local para la oficina de admisiones',
      titoloBreve: 'Asistente de IA local en WhatsApp',
      sottotitolo: 'RAG totalmente local en un mini PC de 800 €: responde a los estudiantes por WhatsApp solo con frases verificadas, y el modelo, la búsqueda y el archivo no salen de la red de la oficina.',
      breve: 'Para una oficina de admisiones universitaria, un sistema RAG que funciona por completo en un mini PC de 800 €: responde por WhatsApp solo con frases verificadas, y en las pruebas ningún dato inventado superó los controles.',

      metadati: {
        cliente: 'Oficina de admisiones universitaria',
        settore: 'Educación superior',
        periodo: 'Otoño de 2026',
        ruolo: 'Diseño y realización, del hardware a la puesta en producción',
        stack: ['Ubuntu Server', 'llama.cpp', 'Gemma 4 26B', 'HHEM-2.1', 'Python', 'SQLite', 'systemd', 'WhatsApp Cloud API', 'Tailscale'],
      },

      problema: [
        'La oficina de admisiones recibía por WhatsApp un flujo constante de preguntas repetitivas sobre plazos, documentos, tasas y pasos de la matrícula, para un grado impartido en inglés. Quería aliviar esa carga sin cambiar su forma de trabajar: el mismo número y la misma aplicación en el teléfono de la oficina.',
        'Tres condiciones descartaban desde el principio un modelo en la nube: los datos de los estudiantes no debían salir de la red de la oficina, el coste debía ser bajo y previsible, sin tarifas por uso ni estaciones de trabajo con GPU, y la máquina debía ser silenciosa y estar siempre disponible.',
        'El riesgo real era otro. Un asistente de admisiones falla de una manera concreta y cara: comunica un plazo, una tasa o un requisito plausible pero falso. Todo el proyecto está construido en torno a ese único error que no se puede cometer.',
      ],

      architettura: {
        paragrafi: [
          'El servidor es un mini PC de 800 € (Ryzen 5 7640HS, 32 GB de RAM), con Ubuntu Server instalado desde cero. La inferencia es solo por CPU: dos servidores llama.cpp gestionados por systemd y accesibles únicamente en local, uno para el modelo generativo (Gemma 4 26B, unos 23 GB) y otro para los embeddings, más un clasificador de fidelidad. La limitación no era la potencia sino la memoria: todo debía caber en RAM, sin swap, durante una sesión de pruebas completa.',
          'El principio de la pipeline es que el sistema nunca responde «con poca seguridad»: un mensaje supera todos los controles o pasa a una persona. El modelo se trata como un extractor del que no se confía: elige qué frases de los documentos aprobados responden a la pregunta, pero al estudiante solo le llegan frases copiadas literalmente de la base de conocimiento, después de que un programa haya verificado cada afirmación: la cita existe en el pasaje, los números y las fechas coinciden, y el clasificador confirma que la cita respalda la afirmación.',
          'La integración usa la API oficial de WhatsApp en coexistencia: la oficina sigue usando la aplicación en el teléfono y, si un operador responde primero, el sistema lo detecta y no envía nada. Hacia fuera solo hay una ruta HTTPS secreta para los mensajes entrantes; los modelos, el panel y SSH se quedan en la red local o en una VPN privada. Con cada mensaje, el receptor comprueba en vivo, en la hoja de Google de la oficina, que el número sea de un estudiante del grado, sin guardar una copia: quien no está en la lista ni siquiera se archiva.',
          'De día la máquina trabaja a pleno rendimiento; de 18:00 a 9:00 detiene los modelos y se queda a la escucha con unos 0,9 GB de RAM, recogiendo los mensajes para la mañana. La oficina lo gestiona todo desde una sola página: borradores por aprobar, estado de los servicios, registro de cada decisión, editor de la base de conocimiento y un botón de parada.',
          'Tres investigaciones cambiaron el proyecto sobre la marcha. La memoria: durante una prueba de 185 preguntas la swap crecía hasta 2–4 GB; la causa era el modelo mapeado en memoria, que se cargaba poco a poco, y solo se veía midiendo bajo carga completa, no al arrancar. La propia medición: al leer a mano 55 casos divergentes descubrí que 27 de los 39 «errores» eran errores en las etiquetas de la prueba, y que un control parecía eficaz solo porque las mismas preguntas de la prueba estaban en su lista; de ahí la decisión de simplificar la pipeline. La privacidad: al conectarse, WhatsApp sincronizó en el servidor la agenda del teléfono, 5.569 contactos, detectada y borrada de inmediato.',
        ],
        immagine: {
          src: '/case-studies/local-rag-pipeline.svg',
          alt: 'Esquema del recorrido de un mensaje: descomposición, exclusión, búsqueda y respuesta restringida, verificación y control de aprobación, con una salida hacia el operador en cada paso',
          didascalia: 'El recorrido de un mensaje. Cada control solo puede detenerlo y pasarlo a una persona; se convierte en respuesta automática únicamente si los supera todos y se parece a una respuesta ya aprobada por la oficina.',
        },
      },

      decisioni: [
        {
          scelta: 'RAG sobre los documentos de la oficina, nunca fine-tuning',
          perche: 'El fine-tuning enseña el estilo, no los hechos: un modelo entrenado con los chats antiguos generaría fechas e importes que parecen correctos. Los hechos deben venir de documentos que la oficina controla y puede corregir. El archivo histórico de chats sirvió solo para saber qué preguntas llegan, nunca como fuente de respuestas.',
          alternativa: 'Entrenar un modelo con el archivo de conversaciones pasadas: parece el camino más directo, pero produce respuestas plausibles que nadie ha verificado.',
        },
        {
          scelta: 'Modelo elegido por fidelidad a los documentos, no por potencia',
          perche: 'El único criterio era con qué frecuencia un modelo añade algo que los documentos no dicen. Gemma 4 26B es un modelo Mixture-of-Experts: activa unos 4.000 millones de parámetros por token, así que en CPU responde a la velocidad de un modelo pequeño con la comprensión de uno mucho mayor. Razonamiento desactivado, temperatura cero y cuantización nunca por debajo de Q5: cada respuesta es reproducible y se puede volver a comprobar.',
          alternativa: 'Un modelo denso de 8.000 millones de parámetros, algo más fiel sobre el papel pero mucho más débil al entender preguntas reformuladas o con varias partes; o un denso de 27.000 millones, mejor en la forma pero más lento y al límite de la memoria.',
        },
        {
          scelta: 'Al estudiante solo le llegan citas verificadas',
          perche: 'Para cada afirmación, el modelo debe indicar el pasaje y la frase exacta de la que la extrae. Un programa, sin ningún modelo generativo, comprueba que la frase existe, que los números y las fechas coinciden y que un clasificador de fidelidad la confirma. Basta una afirmación rechazada para que todo el mensaje pase a una persona. En las pruebas la separación es clara: puntuación mediana de 0,90 en las afirmaciones aceptadas y de 0,17 en las rechazadas.',
          alternativa: 'Enviar la respuesta escrita por el modelo por encima de cierto umbral de confianza: más cobertura desde el primer día, pero las palabras del modelo llegarían al estudiante sin que nadie las hubiera comprobado.',
        },
        {
          scelta: 'La autonomía se gana respuesta a respuesta',
          perche: 'Una respuesta verificada sale en automático solo si se parece mucho a una respuesta ya aprobada por la oficina y cita los mismos pasajes; si no, se queda como borrador. Cada borrador aprobado desde el panel amplía lo que puede volverse automático. Así, un error de enrutamiento cuesta un borrador de más, no un mensaje equivocado a un estudiante.',
          alternativa: 'Un clasificador que decide de antemano si responder o pasar al operador. Construí y medí tres: el mejor enrutaba bien 115 preguntas de 136 y nunca llegaba al 100 %.',
        },
        {
          scelta: 'API oficial de WhatsApp, en coexistencia con la aplicación',
          perche: 'La oficina sigue usando WhatsApp Business en el teléfono como antes, mientras el servidor recibe los mensajes directamente de Meta. Cuesta 12 dólares al mes, respeta las normas de la plataforma y el proveedor no conserva el contenido de los mensajes.',
          alternativa: 'Automatizar WhatsApp Web con un navegador controlado por software: más barato sobre el papel, pero contrario a las condiciones de uso, frágil y con el riesgo real de que bloqueen el número de la oficina.',
        },
      ],

      consegne: [
        'Mini PC de 800 € configurado como servidor de IA',
        'Pipeline RAG de 4 controles, con verificación de cada afirmación',
        'Base de conocimiento: 38 categorías, 71 pasajes, 479 preguntas de ejemplo',
        'Conjunto de prueba de 136 preguntas, revisadas con 93 decisiones razonadas',
        'Integración con WhatsApp en coexistencia, con receptor activo las 24 horas',
        'Filtro del registro de estudiantes en vivo: 5.397 filas leídas en 1 segundo, sin copia local',
        'Panel para la oficina: borradores, aprobación, registro, editor y parada de emergencia',
        'Dos modos de funcionamiento: horario de oficina y escucha nocturna con unos 0,9 GB de RAM',
        '56 pruebas automáticas sobre la capa de integración, todas superadas',
        'Registro de auditoría de cada decisión y borrador del aviso de privacidad',
      ],

      risultati: {
        strutturali: [
          '0 datos inventados superaron la verificación, en todas las rondas de evaluación',
          '0 preguntas reservadas al operador se habrían enviado en automático, en todas las combinaciones de umbrales probadas con 185 preguntas',
          'Búsqueda: el pasaje correcto está entre los 3 primeros en 67 casos de 73 y entre los 8 primeros en 71 de 73 (97 %)',
          '26–33 segundos por mensaje, solo con CPU y con dos llamadas al modelo',
          'Primera respuesta real enviada, entregada y leída en 12 segundos',
          'En producción desde noviembre de 2026: respuesta automática en los temas aprobados, borrador para todo lo demás',
        ],
        aggiornamento: {
          data: '2026-11-14',
          testo: 'Cifras medidas en los conjuntos de prueba y en el sistema en funcionamiento. Las etiquetas de las pruebas las revisé yo y la oficina aún no las ha validado. Por prudencia, todo lo que no se parece a una respuesta ya aprobada se queda igualmente como borrador para el operador.',
        },
      },

      link: null,
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
