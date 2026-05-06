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
    slug: 'sistema-inventario',
    title: 'Sistema de Inventario',
    shortDescription: 'Sistema completo de gestion de inventario para empresas.',
    description: 'Sistema completo de gestion de inventario con dashboard analitico, control de stock en tiempo real, alertas automaticas y reportes exportables. Incluye gestion de proveedores, ordenes de compra y seguimiento de productos.',
    image: '/projects/inventario.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
    features: [
      'Dashboard con metricas en tiempo real',
      'Control de stock con alertas automaticas',
      'Gestion de proveedores y ordenes de compra',
      'Reportes exportables en PDF y Excel',
      'API RESTful documentada con Swagger',
      'Autenticacion con roles y permisos',
    ],
    github: 'https://github.com/tuusuario/inventario',
    demo: 'https://inventario-demo.com',
    year: '2024',
  },
  {
    slug: 'plataforma-ecommerce',
    title: 'Plataforma E-commerce',
    shortDescription: 'Tienda online con carrito, pagos y gestion de pedidos.',
    description: 'Plataforma de comercio electronico completa con catalogo de productos, carrito de compras, integracion de pagos con Stripe, gestion de pedidos y panel de administracion para vendedores.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Stripe', 'AWS'],
    features: [
      'Catalogo de productos con busqueda avanzada',
      'Carrito de compras persistente',
      'Integracion de pagos con Stripe',
      'Panel de administracion para vendedores',
      'Sistema de resenas y calificaciones',
      'Notificaciones por email automaticas',
    ],
    github: 'https://github.com/tuusuario/ecommerce',
    demo: 'https://ecommerce-demo.com',
    year: '2023',
  },
  {
    slug: 'dashboard-monitoreo',
    title: 'Dashboard de Monitoreo',
    shortDescription: 'Sistema de monitoreo de infraestructura en tiempo real.',
    description: 'Dashboard de monitoreo para infraestructura cloud con visualizacion de metricas en tiempo real, alertas configurables, integracion con multiples proveedores cloud y generacion de reportes automaticos.',
    image: '/projects/dashboard.jpg',
    technologies: ['React', 'TypeScript', 'Go', 'InfluxDB', 'Grafana'],
    features: [
      'Metricas en tiempo real con WebSockets',
      'Alertas configurables por umbral',
      'Integracion con AWS, Azure y GCP',
      'Visualizaciones personalizables',
      'Historial de incidentes',
      'Reportes automaticos semanales',
    ],
    github: 'https://github.com/tuusuario/monitoring',
    demo: 'https://monitoring-demo.com',
    year: '2023',
  },
  {
    slug: 'cli-automatizacion',
    title: 'CLI de Automatizacion',
    shortDescription: 'Herramienta de linea de comandos para DevOps.',
    description: 'Herramienta de linea de comandos para automatizar tareas de DevOps como despliegues, backups, migraciones de base de datos y configuracion de servidores. Soporta multiples entornos y configuracion via YAML.',
    image: '/projects/cli.jpg',
    technologies: ['Python', 'Click', 'Docker', 'Ansible', 'Shell'],
    features: [
      'Despliegues automatizados',
      'Backups programados de bases de datos',
      'Migraciones de base de datos',
      'Configuracion de servidores',
      'Soporte para multiples entornos',
      'Configuracion via archivos YAML',
    ],
    github: 'https://github.com/tuusuario/devops-cli',
    year: '2022',
  },
  {
    slug: 'api-trading',
    title: 'API de Trading',
    shortDescription: 'API para analisis y senales de trading algoritmico.',
    description: 'API de analisis financiero con algoritmos de trading, senales de compra/venta basadas en indicadores tecnicos, backtesting de estrategias y notificaciones en tiempo real via WebSockets.',
    image: '/projects/trading.jpg',
    technologies: ['Python', 'FastAPI', 'pandas', 'NumPy', 'PostgreSQL'],
    features: [
      'Analisis tecnico automatizado',
      'Senales de compra/venta en tiempo real',
      'Backtesting de estrategias',
      'Integracion con exchanges',
      'Notificaciones via WebSockets',
      'Dashboard de rendimiento',
    ],
    github: 'https://github.com/tuusuario/trading-api',
    year: '2022',
  },
  {
    slug: 'plataforma-lms',
    title: 'Plataforma LMS',
    shortDescription: 'Sistema de gestion de aprendizaje para cursos online.',
    description: 'Plataforma de aprendizaje en linea con gestion de cursos, videos, quizzes interactivos, seguimiento de progreso, certificados automaticos y foro de discusion para estudiantes.',
    image: '/projects/lms.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
    features: [
      'Gestion de cursos y lecciones',
      'Reproductor de video personalizado',
      'Quizzes interactivos',
      'Seguimiento de progreso',
      'Certificados automaticos',
      'Foro de discusion',
    ],
    github: 'https://github.com/tuusuario/lms',
    demo: 'https://lms-demo.com',
    year: '2021',
  },
]