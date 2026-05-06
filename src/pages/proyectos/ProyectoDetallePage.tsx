import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../../assets/js/proyectos'
import { useState } from 'react'

export default function ProyectoDetallePage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    return <Navigate to="/proyectos" replace />
  }

  const imagesToDisplay = project.images && project.images.length > 0 ? project.images : [project.image]
  const currentImage = imagesToDisplay[currentImageIndex]

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? imagesToDisplay.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === imagesToDisplay.length - 1 ? 0 : prev + 1))
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

      {/* Image Gallery */}
      <div className="mb-8 rounded-lg overflow-hidden border border-border bg-secondary">
        <div className="relative">
          <img
            src={currentImage}
            alt={`${project.title} - ${currentImageIndex + 1}`}
            className="w-full max-h-96 object-contain"
          />
          {imagesToDisplay.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded transition-colors"
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {imagesToDisplay.length}
              </div>
            </>
          )}
        </div>
        {imagesToDisplay.length > 1 && (
          <div className="flex gap-2 p-3 overflow-x-auto bg-background">
            {imagesToDisplay.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded border-2 overflow-hidden transition-all ${
                  index === currentImageIndex ? 'border-primary' : 'border-border hover:border-primary/50'
                }`}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
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