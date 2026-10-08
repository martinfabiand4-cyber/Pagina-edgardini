import { useId, useState } from 'react'
import { BookOpen, ExternalLink } from 'lucide-react'
import { resources } from '../data/resources.js'

export default function Resources() {
  const selectId = useId()
  const [selected, setSelected] = useState('')
  const current = resources.find((r) => r.id === selected)

  return (
    <section id="recursos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-8 rounded-[2rem] border border-navy-900/5 bg-white p-8 shadow-sm md:grid-cols-2 md:items-center md:p-12 dark:border-white/10 dark:bg-white/5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Para alumnos</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Recursos de autoaprendizaje</h2>
          <p className="mt-3 text-navy-500 dark:text-navy-100/70">
            Elige una asignatura y accede al material para practicar en casa.
          </p>
        </div>

        <div>
          <label htmlFor={selectId} className="text-sm font-semibold">
            Asignatura o tema
          </label>
          <div className="relative mt-2">
            <BookOpen className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-navy-500" aria-hidden="true" />
            <select
              id={selectId}
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-navy-900/10 bg-off-white py-3.5 pl-12 pr-10 text-base outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20 dark:border-white/10 dark:bg-navy-900 dark:text-white"
            >
              <option value="">Selecciona un recurso…</option>
              {resources.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.subject}: {r.title}
                </option>
              ))}
            </select>
          </div>

          {current && (
            <a
              href={current.href}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-hover"
            >
              Abrir recurso
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
