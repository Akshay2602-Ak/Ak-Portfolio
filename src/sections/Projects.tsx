import { Github } from 'lucide-react'
import { Reveal, Pill } from '../components/UI'
import { projects, profile } from '../data/resume'

export function Projects() {
  return (
    <section id="projects" className="border-t border-ink/[0.08] py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">Projects</p>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Selected work.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.07}>
              <div className="group rounded-2xl border border-ink/[0.08] bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/30 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{project.title}</h3>
                  <span className="eyebrow whitespace-nowrap pt-1">{project.period}</span>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/65 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">Features</p>
                    <ul className="space-y-1.5">
                      {project.features.map((f) => (
                        <li key={f} className="text-sm text-ink/65">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">Architecture</p>
                    <p className="text-sm leading-relaxed text-ink/65">{project.architecture}</p>
                    <p className="mt-4 mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">
                      Learning outcome
                    </p>
                    <p className="text-sm leading-relaxed text-ink/65">{project.outcome}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-umber"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-ink/[0.12] px-4 py-2 text-sm font-medium transition-colors hover:bg-amber hover:text-white"
                  >
                  Live Demo
                  </a>
                  <button
                    disabled
                    title="No case study document provided in source resume"
                    className="rounded-lg border border-ink/[0.12] px-4 py-2 text-sm font-medium text-ink/30"
                  >
                    Case Study
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
