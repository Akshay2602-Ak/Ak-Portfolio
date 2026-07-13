import { HeroNav } from './components/HeroNav'
import { Footer } from './components/Footer'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Certifications } from './sections/Certifications'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas font-body text-ink">
      <HeroNav />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
