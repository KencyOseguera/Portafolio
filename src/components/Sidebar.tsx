import { NavLink } from 'react-router-dom'
import { Mail, Home, User, Briefcase, FolderKanban, Send, Menu, X, Download } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'

const navItems = [
  { href: '/', icon: Home, label: 'Inicio' },
  { href: '/sobre-mi', icon: User, label: 'Sobre mí' },
  { href: '/experiencia', icon: Briefcase, label: 'Experiencia' },
  { href: '/proyectos', icon: FolderKanban, label: 'Proyectos' },
  { href: '/contacto', icon: Send, label: 'Contacto' },
]

const socialLinks = [
  { href: 'https://github.com/KencyOseguera', icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/kency-oseguera', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:kencyoseguera7@gmail.com', icon: Mail, label: 'Email' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  // ✅ Se elimina useEffect — el cierre se maneja directamente en onClick de NavLink
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-60 p-2 bg-card border border-border rounded-lg lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-card border-r border-border z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Profile Section */}
        <div className="p-6 border-b border-border">
          <NavLink to="/" onClick={closeMenu} className="block">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden ring-2 ring-primary ring-offset-2 ring-offset-card">
                <img
                  src="/profile-pic.png"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-xl font-bold text-foreground">
                Kency Oseguera<span className="text-primary">.</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Ingeniera en Sistemas</p>
            </div>
          </NavLink>

          {/* CV Download Button */}
          <a
            href="/CV_Kency_Oseguera.pdf"
            download="CV_Kency_Oseguera.pdf"
            className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download size={16} />
            Descargar CV
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`
                  }
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-4 border-t border-border">
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}