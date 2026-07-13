import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/resume'

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.08]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-sm text-ink/60 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}  
          {/* /* Built with React, Tailwind &amp; Framer Motion. */}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-amber transition-colors">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-amber transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-amber transition-colors">
            <Mail size={18} />
          </a>
          <span className="flex items-center gap-1 text-ink/50">
            <MapPin size={16} /> {profile.location}
          </span>
        </div>
      </div>
    </footer>
  )
}
