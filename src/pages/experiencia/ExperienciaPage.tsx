import { useState } from 'react'

const experiences = [
  {
    company: 'Tech Company',
    role: 'Senior Software Engineer',
    period: '2022 - Presente',
    description: [
      'Lidere el desarrollo de una plataforma de microservicios que procesa mas de 1M de transacciones diarias',
      'Implemente pipelines de CI/CD reduciendo el tiempo de despliegue en un 60%',
      'Mentore a un equipo de 5 desarrolladores junior en mejores practicas de desarrollo',
      'Disemine la arquitectura de sistemas distribuidos y bases de datos escalables',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    company: 'Startup Innovation',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: [
      'Desarrolle aplicaciones web responsivas utilizando React y TypeScript',
      'Construi APIs RESTful con Node.js y Express para multiples clientes',
      'Optimice consultas de base de datos mejorando el rendimiento en un 40%',
      'Colabore en equipos agiles utilizando metodologias Scrum',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis'],
  },
  {
    company: 'Digital Agency',
    role: 'Junior Developer',
    period: '2018 - 2020',
    description: [
      'Participe en el desarrollo de sitios web para clientes corporativos',
      'Aprendi y aplique mejores practicas de desarrollo de software',
      'Colabore en la integracion de sistemas de terceros mediante APIs',
      'Realize testing y debugging de aplicaciones existentes',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL'],
  },
]

export default function ExperienciaPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
        Experiencia Laboral
      </h1>
      <div className="w-20 h-1 bg-primary mb-8" />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Company Tabs */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-l border-border">
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-left whitespace-nowrap lg:whitespace-normal transition-colors border-b-2 lg:border-b-0 lg:border-l-2 -mb-px lg:mb-0 lg:-ml-px ${
                activeTab === index
                  ? 'border-primary text-primary bg-primary/5'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience Details */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-1">
            {experiences[activeTab].role}{' '}
            <span className="text-primary">@ {experiences[activeTab].company}</span>
          </h3>
          <p className="text-muted-foreground font-mono text-sm mb-4">
            {experiences[activeTab].period}
          </p>
          <ul className="space-y-3 mb-6">
            {experiences[activeTab].description.map((item, index) => (
              <li key={index} className="flex gap-3 text-muted-foreground">
                <span className="text-primary mt-1.5">&#9656;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {experiences[activeTab].technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">Trayectoria</h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border lg:left-1/2" />
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative pl-8 lg:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-auto'
              }`}
            >
              <div
                className={`absolute left-0 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1 lg:left-1/2 lg:-translate-x-1.5`}
              />
              <div
                className={`bg-card border border-border rounded-lg p-6 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}
              >
                <span className="text-primary font-mono text-sm">{exp.period}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}