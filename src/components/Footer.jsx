import { MapPin, Mail, Phone, Accessibility } from 'lucide-react'

const navigation = [
  { href: '#academico', label: 'Académico' },
  { href: '#portal', label: 'Portal Alumnos' },
  { href: '#admision', label: 'Admisión' },
  { href: '#noticias', label: 'Noticias y Circulares' },
]

// Placeholder contact data: replace with the institution's official details.
const contact = {
  address: 'Castro, Chiloé, Chile',
  phone: '+56 65 000 0000',
  email: 'contacto@liceo-castro.cl',
}

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-navy-900/5 bg-white dark:border-white/5 dark:bg-navy-900/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-semibold tracking-tight">Liceo Politécnico Castro</p>
          <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-navy-100/60">
            Formando el futuro tecnológico de Chiloé.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="text-sm font-semibold">Navegación</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-navy-500 hover:text-accent dark:text-navy-100/70 dark:hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Contacto</h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-500 dark:text-navy-100/70">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {contact.address}
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-accent dark:hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-accent dark:hover:text-white">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Redes sociales</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {/* Replace the # links with the official profiles. */}
            <li><a href="#" className="text-navy-500 hover:text-accent dark:text-navy-100/70 dark:hover:text-white">Instagram</a></li>
            <li><a href="#" className="text-navy-500 hover:text-accent dark:text-navy-100/70 dark:hover:text-white">Facebook</a></li>
            <li><a href="#" className="text-navy-500 hover:text-accent dark:text-navy-100/70 dark:hover:text-white">YouTube</a></li>
          </ul>
          <a
            href="#inicio"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy-900/10 px-4 py-2 text-sm font-medium text-navy-700 hover:bg-navy-900/5 dark:border-white/10 dark:text-navy-100 dark:hover:bg-white/5"
          >
            <Accessibility className="size-4" aria-hidden="true" />
            Declaración de accesibilidad
          </a>
        </div>
      </div>

      <div className="border-t border-navy-900/5 px-4 py-5 text-center text-xs text-navy-500 dark:border-white/5 dark:text-navy-100/50">
        © {new Date().getFullYear()} Liceo Politécnico Castro. Todos los derechos reservados.
      </div>
    </footer>
  )
}
