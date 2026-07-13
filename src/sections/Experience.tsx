import { Reveal, Pill } from '../components/UI'
import { experience } from '../data/resume'

export function Experience() {
  return (
    <section id="experience" className="border-t border-ink/[0.08] py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Where I've worked and what I built.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-6 border-t border-ink/[0.08] pt-8 sm:grid-cols-[1fr_2fr]">
                <div>
                  <p className="eyebrow mb-2">{job.duration}</p>
                  <h3 className="font-display text-lg font-semibold text-ink">{job.role}</h3>
                  <p className="mt-1 text-sm text-umber">{job.company}</p>
                </div>
                <div>
                  <ul className="space-y-2.5">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="text-sm leading-relaxed text-ink/65">
                        {r}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
