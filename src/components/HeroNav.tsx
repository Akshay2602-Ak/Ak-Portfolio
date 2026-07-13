import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export function HeroNav() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // The big name: shrinks, drifts upward, and settles as scroll proceeds.
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 0.26])
  const nameY = useTransform(scrollYProgress, [0, 1], ['0vh', '-42vh'])
  const nameOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.9])
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const taglineY = useTransform(scrollYProgress, [0, 0.3], [0, 20])
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  // The nav bar: fades in and becomes interactive once the hero has mostly scrolled by.
  const navOpacity = useTransform(scrollYProgress, [0.55, 1], [0, 1])
  const navPointerEvents = useTransform(scrollYProgress, (v) => (v > 0.55 ? 'auto' : 'none'))

  return (
    <>
      {/* Sticky nav — crossfades in as the hero name shrinks away */}
      <motion.header
        style={{ opacity: navOpacity, pointerEvents: navPointerEvents as any }}
        className="fixed inset-x-0 top-0 z-50 border-b border-ink/[0.08] bg-canvas/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight text-ink">
            AK
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-amber"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            aria-label="Toggle navigation menu"
            className="rounded-md p-2 text-ink lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-ink/[0.08] px-6 py-4 lg:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink/70"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </motion.header>

      {/* Hero — tall scroll track so the name has room to cinematically settle */}
      <div id="home" ref={heroRef} className="relative h-[220vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
          <motion.p
            style={{ opacity: taglineOpacity }}
            className="eyebrow mb-6"
          >
            Oracle Apps DBA · Cloud &amp; Networking 
          </motion.p>

          <motion.h1
            style={{ scale: nameScale, y: nameY, opacity: nameOpacity }}
            className="font-display text-[14vw] font-semibold leading-[0.95] tracking-tight text-ink sm:text-[9vw] lg:text-[7.5rem]"
          >
            AKSHAY
            <br />
            KUMAR
          </motion.h1>

          <motion.p
            style={{ opacity: taglineOpacity, y: taglineY }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink/60 sm:text-lg"
          >
            {/* Building reliable enterprise systems — from Oracle databases to cloud networks — with a growing focus on
            applied AI. */}
          </motion.p>

          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="absolute bottom-10 flex flex-col items-center gap-2 text-ink/40"
          >
            <span className="eyebrow">Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="h-8 w-px bg-ink/30"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}
