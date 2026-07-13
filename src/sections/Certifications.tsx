import { Award } from 'lucide-react'
import { Reveal } from '../components/UI'
import { certifications } from '../data/resume'

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-ink/[0.08] bg-white/40 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">Certifications</p>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Credentials &amp; achievements.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.05}>
              <div onClick={() => window.open(cert.link, "_blank")}
                  className= "h-full cursor-pointer rounded-2xl border border-ink/[0.08] bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/30">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10 text-amber">
                  <Award size={18} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-ink">{cert.title}</h3>
                <p className="mt-2 text-sm text-ink/55">{cert.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
