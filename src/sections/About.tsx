import { Reveal } from '../components/UI'
import { profile } from '../data/resume'
import { MapPin, Briefcase, GraduationCap } from 'lucide-react'

const FACTS = [
  { icon: Briefcase, label: 'PREVIOUS EXPERIENCE', value: 'Oracle Apps DBA at Cognizant Technology Solutions' },
  { icon: GraduationCap, label: 'Education', value: 'B.Sc. Computer Technology, KG College of Arts & Science' },
  { icon: MapPin, label: 'Based in', value: profile.location },
]

export function About() {
  return (
    <section id="about" className="border-t border-ink/[0.08] py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">About</p>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            A software engineer working at the intersection of enterprise databases, networks, and cloud.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/65">{profile.summary}</p>
        </Reveal>

        <Reveal delay={0.18} className="mt-16 grid grid-cols-1 gap-8 border-t border-ink/[0.08] pt-10 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex items-start gap-3">
              <fact.icon size={18} className="mt-0.5 shrink-0 text-amber" />
              <div>
                <p className="eyebrow mb-1">{fact.label}</p>
                <p className="text-sm leading-relaxed text-ink/70">{fact.value}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
