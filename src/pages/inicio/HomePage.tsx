import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Database, Server, Terminal, GitBranch } from 'lucide-react'

const skills = [
  {
    category: 'Lenguajes',
    icon: Code2,
    items: ['TypeScript', 'JavaScript', 'Python', 'VB.NET', 'SQL', 'PHP'],
  },
  {
    category: 'Frontend',
    icon: Terminal,
    items: ['React', 'HTML5', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Spring Boot', '.NET Framerwork'],
  },
  {
    category: 'Bases de Datos',
    icon: Database,
    items: [ 'MySQL', 'Oracle', 'SQL Server'],
  },
  {
    category: 'Herramientas',
    icon: GitBranch,
    items: ['Git', 'GitHub', 'Jira', 'Figma', 'VS Code', 'Postman'],
  },
  {
    category: 'Redes',
    icon: Terminal,
    items: ['TCP/IP', 'Cisco Packet Tracer'],
  }
]

export default function HomePage() {
  return (
    <div className="max-w-4xl">
      {/* Hero Section */}
      <section className="mb-16">
        <p className="text-primary font-mono mb-4">Hola, mi nombre es</p>
        <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
          Kency Pamela Oseguera Valdez
        </h1>
        <h2 className="text-2xl lg:text-4xl font-bold text-muted-foreground mb-6">
          Desarrollo aplicaciones web.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Soy ingeniera en sistemas con experiencia en desarrollo de software y bases de datos. 
          Me dedico a construir aplicaciones web funcionales y a trabajar en soluciones tecnológicas que resuelvan necesidades reales.
          Actualmente sigo fortaleciendo mis conocimientos en desarrollo de software, abarcando tanto frontend como backend y herramientas cloud.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Ver Proyectos
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
          >
            Contactar
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h3 className="text-2xl font-bold text-foreground mb-8">
          Habilidades Tecnicas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <skill.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">{skill.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-secondary text-muted-foreground rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
