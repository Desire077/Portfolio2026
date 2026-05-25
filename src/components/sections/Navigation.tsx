import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#work', label: 'Projets' },
  { href: '#internship', label: 'Stage' },
  { href: '#documents', label: 'CV & Synthèse' },
  { href: '#watch', label: 'Veille' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock scroll quand menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-[--color-ink-700]/80 bg-[--color-ink-950]/70 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <div className="container-pf flex items-center justify-between h-16">
          <a
            href="#top"
            className="flex items-center gap-2.5 group"
            aria-label="Accueil"
          >
            <div className="relative">
              <div className="h-7 w-7 rounded-md border border-[--color-ink-500] grid place-items-center font-mono text-xs text-[--color-accent]">
                DN
              </div>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-medium text-[--color-ink-50]">
                Désiré Nguembet
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[--color-ink-300]">
                Développeur Web
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm text-[--color-ink-200] hover:text-[--color-ink-50] transition-colors rounded-md hover:bg-[--color-ink-800]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-[--color-accent] text-[--color-ink-950] px-4 py-1.5 text-sm font-medium hover:bg-[--color-accent-soft] transition-colors"
            >
              Disponible
              <span className="h-1.5 w-1.5 rounded-full bg-[--color-ink-950]" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-[--color-ink-50]"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-[--color-ink-950]/95 backdrop-blur-xl pt-16"
          >
            <nav className="container-pf py-8 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="block py-4 text-2xl font-medium text-[--color-ink-50] border-b border-[--color-ink-800]"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
