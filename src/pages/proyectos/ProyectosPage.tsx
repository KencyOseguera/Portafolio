import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '../../assets/js/proyectos'

export default function ProyectosPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
        Proyectos
      </h1>
      <div className="w-20 h-1 bg-primary mb-4" />
      <p className="text-muted-foreground mb-8">
        Una seleccion de proyectos en los que he trabajado. Haz clic en cada uno para ver mas detalles.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/proyectos/${project.slug}`}
            className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-72 h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
                </div>
                <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-primary text-sm font-medium">
                  Ver detalles
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}