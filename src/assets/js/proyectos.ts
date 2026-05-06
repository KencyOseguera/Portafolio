export interface Project {
  slug: string
  title: string
  shortDescription: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  github: string
  demo?: string
  year: string
}

export const projects: Project[] = [
  {
    slug: 'sistema-indicadores',
    title: 'Sistema Indicadores de Gestión Institucional',
    shortDescription: 'Sistema orientado a la formulaciòn y monitoreo de indicadores clave de desempeño (KPIs).',
    description: 'Sistema orientado a la formulaciòn y monitoreo de indicadores clave de desempeño (KPIs), permitiendo la visualización, seguimiento y control de métricas estratégicas para apoyar la toma de decisiones.',
    image: '/image.png',
    technologies: ['VB.NET', 'Asp', '.NET Framework 4.8', 'Azure', 'TFS', 'Oracle', 'Modelo N-Capas'],
    features: [
      'Dashboard con metricas en tiempo real',
      'Control de estados con alertas automáticas',
      'Gestion de tiempos o plazos para completar diccionarios',
      'Reportes exportables en PDF y Excel',
      'Documentación en código y manuales',
      'Autenticacion con roles y permisos',
      'Creación de procedimientos almacenados para automatización de procesos',
      'Creación de jobs para tareas programadas',
      'Diseño de interfaz de usuario responsiva y amigable',
      'Autenticación integrada con Active Directory',
      'Administración de permisos y roles de usuario',
      'Implementación de seguridad en la aplicación y base de datos',
    ],
    github: 'https://github.com/tuusuario/inventario',
    demo: 'https://inventario-demo.com',
    year: '2025- 2026',
  },
  {
    slug: 'pedidos-qr',
    title: 'Startup Meniu',
    shortDescription: 'Sistema para la gestión de pedidos en establecimientos, con acceso al menú mediante código QR y procesamiento automático de órdenes.',
    description: 'Sistema para la gestión de pedidos en establecimientos, con acceso al menú mediante código QR y procesamiento automático de órdenes, permitiendo a los clientes realizar pedidos desde sus dispositivos móviles y a los establecimientos gestionar las órdenes de manera eficiente.',
    image: '/meniu1.png',
    technologies: ['React', 'Tailwind', 'TypeScript', 'MySQL', 'PWA', 'Figma', 'GitHub'],
    features: [
      'Catalogo de productos con acceso mediante QR',
      'Carrito de compras persistente',
      'Visualización de menu en tiempo real',
      'Panel de administración para gestionar productos y pedidos',
      'Manejo de tiempos de preparación y entrega',
      'Control de inventario',
      'Historial de pedidos',
      'Acceso a descarga de aplicativo a traves del navegador',
      'Inicio de sesión con autenticación de usuarios',
      'Registro de establecimientos y su menú'
    ],
    github: 'https://github.com/tuusuario/ecommerce',
    demo: 'https://ecommerce-demo.com',
    year: '2025',
  },
  {
    slug: 'sistema-registro',
    title: 'Sistema de registro y matricula',
    shortDescription: 'Sistema orientado a la automatización de procesos universitarios.',
    description: 'Sistema orientado a la automatización de procesos universitarios, incluyendo gestión de inscripciones, matrícula estudiantil y recursos bibliográficos.',
    image: '/matricula1.png',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Jira', 'GitHub'],
    features: [
      'Gestión de inscripciones y matrícula',
      'Automatización de procesos administrativos',
      'Control de recursos bibliográficos',
      'Panel de administración para personal universitario',
      'Seguimiento de estudiantes, secciones y horarios',
      'Historial académico y gestión de calificaciones',
      'Habilitación de cursos y secciones',
      'Visualización de libros disponibles en la biblioteca',
      'Inicio de sesión para estudiantes y personal administrativo',
      'Administración de roles y permisos de usuario',
    ],
    github: 'https://github.com/tuusuario/monitoring',
    demo: 'https://monitoring-demo.com',
    year: '2025',
  },
  {
    slug: 'tienda-online',
    title: 'Ecommerce',
    shortDescription: 'Tienda en linea para venta de productos tecnológicos.',
    description: 'Tienda en linea para venta de productos tecnológicos, con gestión de inventario, carrito de compras y procesamiento de pagos.',
    image: '/tienda.png',
    technologies: ['PHP', 'Laravel', 'Java', 'Spring Boot', 'MySQL', 'GitHub', 'Swagger', 'Postman', 'WAMP'],
    features: [
      'Catalogo de productos con imágenes y descripciones',
      'Carrito de compras con persistencia',
      'Procesamiento de pagos con creación de factura',
      'Login según el rol del usuario',
      'Control de inventario',
      'Registro de nuevos productos',
    ],
    github: 'https://github.com/tuusuario/devops-cli',
    year: '2024',
  },
]