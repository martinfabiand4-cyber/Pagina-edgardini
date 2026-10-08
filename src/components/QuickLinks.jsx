import { Newspaper, Users, MonitorPlay, GraduationCap, ArrowUpRight } from 'lucide-react'

// Bento layout: the first card spans two columns and the rest fill the grid.
const cards = [
  {
    id: 'noticias',
    title: 'Noticias y Circulares',
    description: 'Comunicados oficiales, calendario y avisos de la semana.',
    href: '#noticias',
    icon: Newspaper,
    span: 'md:col-span-2',
    tone: 'bg-navy-700 text-white dark:bg-accent',
  },
  {
    id: 'apoderados',
    title: 'Portal de Apoderados',
    description: 'Asistencia, notas y reuniones.',
    href: '#portal',
    icon: Users,
    span: '',
    tone: 'bg-white text-navy-900 dark:bg-white/5 dark:text-white',
  },
  {
    id: 'aula',
    title: 'Aula Virtual',
    description: 'Tareas, material y entregas.',
    href: '#aula',
    icon: MonitorPlay,
    span: '',
    tone: 'bg-white text-navy-900 dark:bg-white/5 dark:text-white',
  },
  {
    id: 'admision',
    title: 'Admisión 2026',
    description: 'Requisitos, fechas y postulación en línea.',
    href: '#admision',
    icon: GraduationCap,
    span: 'md:col-span-2',
    tone: 'bg-white text-navy-900 dark:bg-white/5 dark:text-white',
  },
]

export default function QuickLinks() {
  return (
    <section id="portal" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="sr-only">Accesos rápidos</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map(({ id, title, description, href, icon: Icon, span, tone }) => (
          <a
            key={id}
            href={href}
            className={`group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-3xl border border-navy-900/5 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 ${span} ${tone}`}
          >
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-2xl bg-current/10">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <ArrowUpRight
                className="size-5 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-1 text-sm opacity-70">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
