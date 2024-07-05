export default {
  global: {
    componenteFormativo:
      'Mercadeo estratégico y costeo de la gestión comercial',
    descripcionCurso:
      'El éxito empresarial de cualquier entidad económica depende en gran medida de la adecuada estructuración de sus procesos, tanto productivos como administrativos. Por consiguiente, es crucial comprender e identificar cada uno de los componentes de este proceso para asegurar el logro de los objetivos establecidos por la organización en el futuro.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Análisis de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tabulación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas ofimáticas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Direccionamiento estratégico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<i>E-commerce</i>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Gestión comercial',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Plan de mercado',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Costos y gastos',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_15_123500_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2. Herramientas ofimáticas',
      referencia:
        'Cano Contreras, O. F. (2022). Propuesta de una herramienta de <i>Business Intelligence</i> para mejorar la gestión comercial en una empresa de la industria pesquera. ',
      tipo: 'Artículo',
      link:
        'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cybertesis.unmsm.edu.pe/backend/api/core/bitstreams/8f0155a4-86a0-40a0-a654-63a0336eed52/content',
    },
    {
      tema: '2.2 E-commerce',
      referencia:
        'Cubo Pons, S., Bernadich Márquez. M. & Sarda. X. (2022). Impacto del personal de contacto en la experiencia y satisfacción del cliente en el e-commerce.',
      tipo: 'Artículo ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8477230',
    },
  ],
  glosario: [
    {
      termino: 'Demografía',
      significado:
        'Conjunto de condiciones sociales que caracterizan a un individuo o grupo de individuos.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Conjunto de acciones definidas a fin de alcanzar un objetivo.',
    },
    {
      termino: 'Fidelización',
      significado: 'Acciones encaminadas a generar preferencia por algo.',
    },
    {
      termino: 'Población',
      significado: 'Grupo de indiviso de un área determinada.',
    },
  ],
  referencias: [
    {
      referencia: 'Revista Venezolana de Gerencia.',
      link: '',
    },
    {
      referencia:
        'Chica Rico, E. A. & Guevara Velásquez, M. A. (2021). Perfilación y caracterización de consumo de los Centennials en Pereira.',
      link:
        'https://repositorio.utp.edu.co/items/8c8e2a6c-0f42-4128-b200-b75323cea5e7/full',
    },
    {
      referencia:
        'San Francisco State University. (s.f.). Captura de datos, interpretación estadística y preparación del reporte final. Autor.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Metodológico y Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jair Yovanny Castro Morales',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez ',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Ernesto Navarro Jaimes  ',
          cargo: 'Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín  ',
          cargo: 'Desarrollador <i>Fullstack</i>',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador <i>Fullstack</i>',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de Contenidos Inclusivos y Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y Vinculador de Recursos Educativos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
