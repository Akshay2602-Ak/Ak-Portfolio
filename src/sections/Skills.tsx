import { Reveal } from '../components/UI'
import { skillCategories } from '../data/resume'
import { Code2, Database, Network, Router, Cloud, Sparkles, Wrench } from 'lucide-react'

const ICONS: Record<string, any> = {
  programming: Code2,
  oracle: Database,
  networking: Network,
  cisco: Router,
  'cloud-devops': Cloud,
  ai: Sparkles,
  tools: Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="border-t border-ink/[0.08] bg-white/40 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-4">Skills</p>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Tools of the trade.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = ICONS[cat.id] ?? Code2
            return (
              <Reveal key={cat.id} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-ink/[0.08] bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/30">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10 text-amber">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink">{cat.label}</h3>
                      <p className="text-xs text-ink/45">{cat.context}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-ink/[0.08] bg-canvas px-3 py-1.5 text-xs font-medium text-ink/70 transition-colors hover:border-amber/40 hover:text-amber"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
