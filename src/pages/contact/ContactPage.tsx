import { Mail, MapPin, Phone} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kencyoseguera7@gmail.com',
    href: 'mailto:kencyoseguera7@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telefono',
    value: '+504 8797-3377',
    href: 'tel:+504 8797-3377',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Tegucigalpa, Honduras',
  },
]

const socialLinks = [
  {
    icon: Mail,
    label: 'GitHub',
    href: 'https://github.com/KencyOseguera',
    username: '@KencyOseguera',
  },
  {
    icon: Mail,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kency-oseguera',
    username: '/in/kency-oseguera',
  },
]

export default function ContactoPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
        Contacto
      </h1>
      <div className="w-20 h-1 bg-primary mb-8" />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Estoy disponible para proyectos, oportunidades laborales o consultas relacionadas 
            con desarrollo de software. Puede contactarme por cualquiera de estos medios.
          </p>

          <div className="space-y-4 mb-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Redes Sociales</h3>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
              >
                <social.icon size={24} className="text-primary" />
                <div>
                  <p className="font-medium text-foreground">{social.label}</p>
                  <p className="text-sm text-muted-foreground">{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}
