import { Mail, Linkedin, Github, Download, MapPin } from 'lucide-react'
import { Reveal } from '../components/UI'
import { profile } from '../data/resume'

const CARDS = [
  // { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin, external: true },
  { icon: Github, label: 'GitHub', value: 'View my repositories', href: profile.github, external: true },
  { icon: Download, label: 'Resume', value: 'Download PDF', href: '/Akshaya_Kumar_T_Resume.pdf', download: true },
  // { icon: MapPin, label: 'Location', value: profile.location },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-ink/[0.08] bg-white/40 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Let's connect.</h2>
          <p className="mx-auto mt-4 max-w-lg text-ink/60">
            Open to Network, Cloud, DevOps, Python, and AI engineering roles.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => {
            const content = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10 text-amber transition-colors group-hover:bg-amber group-hover:text-white">
                  <card.icon size={20} />
                </span>
                <div>
                  <p className="eyebrow">{card.label}</p>
                  <p className="mt-1 text-sm font-medium text-ink/75 break-all">{card.value}</p>
                </div>
              </>
            )
            const cardClasses = 'group flex flex-col items-center gap-3 rounded-2xl border border-ink/[0.08] bg-card p-8 shadow-card transition-all duration-300'

            if (!card.href) return <div key={card.label} className={cardClasses}>{content}</div>

            return (
              <a key={card.label} href={card.href} target={card.external ? '_blank' : undefined}
                 rel={card.external ? 'noreferrer' : undefined} download={card.download}
                 className={`${cardClasses} hover:-translate-y-1 hover:border-amber/30`}>
                {content}
              </a>
            )
          })}
        </Reveal>

        <Reveal delay={0.18} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-umber">
            <Mail size={16} /> Email Me
          </a>
          <a href="/Akshaya_Kumar_T_Resume.pdf" download className="inline-flex items-center gap-2 rounded-lg border border-ink/[0.12] px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-amber hover:text-amber">
            <Download size={16} /> Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  )
}