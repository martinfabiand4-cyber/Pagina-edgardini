import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      {/* Background: replace this layer with a cinematic <video> of the lab/campus when the footage is available. */}
      <div aria-hidden="true" className="mesh absolute inset-0 -z-10" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-24 text-center sm:px-6 sm:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white/70 px-4 py-1.5 text-sm font-medium text-navy-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-navy-100">
          <Sparkles className="size-4 text-warm" aria-hidden="true" />
          Admisión 2026 abierta
        </span>

        <h1 className="mt-8 max-w-3xl text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl lg:text-7xl dark:text-white">
          Formando el <span className="text-accent">Futuro Tecnológico</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-navy-500 dark:text-navy-100/70">
          Una comunidad educativa en Castro donde estudiantes aprenden a programar, mantener y conectar
          la tecnología que mueve el mundo.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#admision"
            className="group inline-flex items-center gap-2 rounded-full bg-warm px-7 py-3.5 font-semibold text-white shadow-lg shadow-warm/25 transition-all hover:-translate-y-0.5 hover:bg-warm-hover"
          >
            Postular ahora
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#academico"
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white/60 px-7 py-3.5 font-semibold text-navy-700 backdrop-blur transition-colors hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Conocer la oferta
          </a>
        </div>
      </div>
    </section>
  )
}
