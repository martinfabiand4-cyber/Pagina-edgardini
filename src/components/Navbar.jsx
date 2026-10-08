import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const links = [
  { href: '#academico', label: 'Académico' },
  { href: '#portal', label: 'Portal Alumnos' },
  { href: '#admision', label: 'Admisión' },
]

function readInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
  } catch {
    // Storage can be blocked (private mode); fall back to the system preference.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function Navbar() {
  const [dark, setDark] = useState(readInitialTheme)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      // Ignore: the theme still applies for this visit.
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/5 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:border-white/5 dark:bg-navy-900/60">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2.5 font-semibold tracking-tight">
          {/* Logo placeholder: replace with the institutional mark. */}
          <span className="grid size-8 place-items-center rounded-lg bg-navy-700 text-sm font-bold text-white dark:bg-accent">
            LP
          </span>
          <span className="hidden sm:inline">Liceo Politécnico Castro</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy-500 transition-colors hover:bg-navy-900/5 hover:text-navy-900 dark:text-navy-100/70 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
            className="grid size-10 place-items-center rounded-full text-navy-500 transition-colors hover:bg-navy-900/5 dark:text-navy-100/80 dark:hover:bg-white/5"
          >
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>

          <a
            href="#contacto"
            className="hidden rounded-full bg-warm px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-warm-hover sm:inline-flex"
          >
            Contáctanos
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label="Abrir menú"
            className="grid size-10 place-items-center rounded-full md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-navy-900/5 px-4 pb-4 pt-2 md:hidden dark:border-white/5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium text-navy-700 hover:bg-navy-900/5 dark:text-navy-100 dark:hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-warm px-5 py-3 text-center font-semibold text-white"
          >
            Contáctanos
          </a>
        </div>
      )}
    </header>
  )
}
