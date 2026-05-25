import { useEffect, useState, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'

import Loader from './components/ui/Loader'
import ScrollProgress from './components/ui/ScrollProgress'
import Navigation from './components/sections/Navigation'
import Hero from './components/sections/Hero'

// Below the fold — lazy
const Skills = lazy(() => import('./components/sections/Skills'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Internship = lazy(() => import('./components/sections/Internship'))
const Documents = lazy(() => import('./components/sections/Documents'))
const TechWatch = lazy(() => import('./components/sections/TechWatch'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/sections/Footer'))

const SectionFallback = () => (
  <div className="py-32 flex items-center justify-center">
    <span className="h-2 w-2 rounded-full bg-[--color-ink-500] pulse-dot" />
  </div>
)

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Charge minimum 700ms pour effet propre, max attendre images
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative">
          {/* Background atmosphérique fixe */}
          <div className="bg-grid" aria-hidden />
          <div className="bg-vignette" aria-hidden />
          <div className="scan-line" aria-hidden />

          {/* Progress bar */}
          <ScrollProgress />

          {/* Nav */}
          <Navigation />

          <main className="relative z-10">
            <Hero />

            <Suspense fallback={<SectionFallback />}>
              <Skills />
              <Projects />
              <Internship />
              <Documents />
              <TechWatch />
              <Contact />
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  )
}
