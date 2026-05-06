import { Layers, Smartphone, Database, RefreshCw } from 'lucide-react'

const stats = [
{ icon: Layers, label: 'Desarrollo Web', value: 'Apps completas' },
{ icon: Smartphone, label: 'UI Responsiva', value: 'Interfaces adaptables' },
{ icon: Database, label: 'Gestión de Datos', value: 'Diseño y consultas BD' },
{ icon: RefreshCw, label: 'Mantenimiento', value: 'Mejora de sistemas existentes' },
]

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'SQL Server', 'Oracle',
  'PHP', 'Git', 'MySQL', '.NET', 'JavaScript', 'HTML', 'CSS'
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
            Soy ingeniera en sistemas con experiencia en desarrollo de software, principalmente en aplicaciones web. 
            Me enfoco en crear soluciones funcionales, con código ordenado y fácil de mantener.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
           He participado en distintos proyectos que me han permitido trabajar tanto en frontend como en backend, 
           así como en el manejo de bases de datos. Mi enfoque se centra en crear herramientas eficaces que 
           resuelvan necesidades específicas de manera clara.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Tengo experiencia utilizando lenguajes como JavaScript, Python y .NET, apoyándome en frameworks como React 
            para el desarrollo de interfaces. Busco oportunidades donde pueda seguir aprendiendo y aportar en el desarrollo 
            de soluciones.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 bg-card border border-border rounded-lg text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-xl font-bold text-foreground mb-1">{stat.value}</div>
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