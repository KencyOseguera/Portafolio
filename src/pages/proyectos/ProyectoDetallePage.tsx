import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Mail, CheckCircle2 } from 'lucide-react'
import { projects } from '../../assets/js/proyectos'

export default function ProyectoDetallePage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/proyectos" replace />
  }

  return (
    <div className="max-w-4xl">
      <Link
        to="/proyectos"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft size={18} />
        Volver a proyectos
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            {project.title}
          </h1>
          <span className="text-muted-foreground font-mono">{project.year}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="mb-8 rounded-lg overflow-hidden border border-border">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto"
        />
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 mb-8">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <Mail size={18} />
            Ver codigo
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ExternalLink size={18} />
            Ver demo
          </a>
        )}
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Descripcion</h2>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Caracteristicas</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {project.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
            >
              <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}