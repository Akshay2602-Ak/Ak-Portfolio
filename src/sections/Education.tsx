import { Reveal } from '../components/UI'
import { education } from '../data/resume'

export function Education() {
  return (
    <section id="education" className="border-t border-ink/[0.08] py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">Education</p>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Academic background.
          </h2>
        </Reveal>

        <div className="relative mt-16 border-l border-ink/[0.1] pl-8">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.08} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-amber ring-4 ring-canvas" />
              <p className="eyebrow mb-1">{edu.duration}</p>
              <h3 className="font-display text-lg font-semibold text-ink">{edu.degree}</h3>
              <p className="mt-1 text-sm text-ink/60">{edu.school}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
