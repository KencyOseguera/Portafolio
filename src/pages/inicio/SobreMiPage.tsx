import { Code2, Users, Folder, Calendar } from 'lucide-react'

const stats = [
  { icon: Calendar, value: '5+', label: 'Anos de experiencia' },
  { icon: Folder, value: '30+', label: 'Proyectos completados' },
  { icon: Users, value: '15+', label: 'Clientes satisfechos' },
  { icon: Code2, value: '50K+', label: 'Lineas de codigo' },
]

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker',
  'AWS', 'Git', 'MongoDB', 'Redis', 'GraphQL', 'Kubernetes'
]

export default function SobreMiPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
        Sobre Mi
      </h1>
      <div className="w-20 h-1 bg-primary mb-8" />

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Soy una ingeniera en sistemas apasionada por la tecnologia y el desarrollo 
            de software. Me especializo en crear soluciones innovadoras que resuelven 
            problemas reales y mejoran la vida de las personas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mi trayectoria profesional me ha llevado a trabajar en diversos proyectos, 
            desde aplicaciones web hasta sistemas empresariales complejos. Siempre 
            busco aprender nuevas tecnologias y metodologias para mantenerme actualizada 
            en este campo en constante evolucion.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cuando no estoy programando, disfruto de leer sobre nuevas tendencias 
            tecnologicas, contribuir a proyectos open source y compartir conocimientos 
            con la comunidad de desarrolladores.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 bg-card border border-border rounded-lg text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Tecnologias que uso
        </h2>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-card border border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}