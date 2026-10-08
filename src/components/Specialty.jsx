import { Code2, Cpu, Network, ShieldCheck } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'Programación',
    text: 'Desarrollo de aplicaciones y sitios web con lenguajes y herramientas actuales.',
  },
  {
    icon: Cpu,
    title: 'Mantención de hardware',
    text: 'Diagnóstico, armado y reparación de equipos computacionales.',
  },
  {
    icon: Network,
    title: 'Redes',
    text: 'Configuración de redes locales, conectividad y administración básica de servidores.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad digital',
    text: 'Buenas prácticas para proteger datos, cuentas y sistemas.',
  },
]

export default function Specialty() {
  return (
    <section id="academico" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white sm:p-12 dark:bg-white/[0.03] dark:ring-1 dark:ring-white/10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-warm">Especialidad</p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Técnico en Informática
          </h2>
          <p className="mt-4 text-pretty text-navy-100/80">
            Una formación práctica que combina programación, hardware y redes para salir del liceo listo para
            trabajar o seguir estudiando.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {skills.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/20 text-blue-300">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-100/70">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
