import { CalendarDays, ArrowRight } from 'lucide-react'
import { news } from '../data/news.js'

const dateFormat = new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'long', year: 'numeric' })

export default function News() {
  return (
    <section id="noticias" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Para apoderados y alumnos</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Noticias y actualizaciones</h2>
        </div>
        <a href="#noticias" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
          Ver todas
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>

      <ul className="grid gap-4 md:grid-cols-3">
        {news.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="group flex h-full flex-col rounded-3xl border border-navy-900/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center justify-between text-xs font-medium text-navy-500 dark:text-navy-100/60">
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-accent dark:bg-accent/20 dark:text-blue-300">
                  {item.category}
                </span>
                <time dateTime={item.date} className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  {dateFormat.format(new Date(item.date))}
                </time>
              </div>
              <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500 dark:text-navy-100/70">{item.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                Leer más
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
