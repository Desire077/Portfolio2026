import { motion, type Variants } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { Github, Linkedin } from '../ui/BrandIcons'
import { profile, stats } from '../../data/profile'
import { StatusPill } from '../ui/Primitives'
import TerminalCard from './TerminalCard'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: EASE },
  }),
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] pt-28 md:pt-32 pb-20 flex flex-col"
    >
      <div className="container-pf flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ─── Colonne texte ────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="mb-8"
            >
              <StatusPill>Disponible — alternance / stage</StatusPill>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-[--color-ink-50]"
            >
              {profile.hero.headline}{' '}
              <span className="font-serif-italic text-[--color-accent]">
                {profile.hero.headlineEmphasis}
              </span>
              {profile.hero.headlineSuffix}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-8 max-w-xl text-[--color-ink-200] text-base md:text-lg leading-relaxed"
            >
              {profile.hero.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[--color-accent] text-[--color-ink-950] text-sm font-medium hover:bg-[--color-accent-soft] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Voir les projets
                <ArrowDown size={16} />
              </a>
              <a
                href="#documents"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[--color-ink-500] text-[--color-ink-50] text-sm font-medium hover:border-[--color-ink-300] hover:bg-[--color-ink-800] transition-all"
              >
                CV &amp; tableau de synthèse
                <ArrowUpRight size={16} />
              </a>
              <div className="flex items-center gap-1 ml-1">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[--color-ink-200] hover:text-[--color-ink-50] hover:bg-[--color-ink-800] rounded-full transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-[--color-ink-200] hover:text-[--color-ink-50] hover:bg-[--color-ink-800] rounded-full transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={profile.socials.email}
                  className="p-2.5 text-[--color-ink-200] hover:text-[--color-ink-50] hover:bg-[--color-ink-800] rounded-full transition-all"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ─── Colonne terminal ─────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="lg:col-span-5"
          >
            <TerminalCard />
          </motion.div>
        </div>

        {/* ─── Stats bar ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 pt-10 border-t border-[--color-ink-800] grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <div className="text-2xl md:text-3xl font-display text-fade tabular-nums">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-[--color-ink-100]">{s.label}</div>
              <div className="text-xs text-[--color-ink-300] font-mono mt-0.5">
                {s.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="container-pf mt-10 flex justify-center md:justify-end"
      >
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[--color-ink-300]">
          <span>Défiler</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </div>
      </motion.div>
    </section>
  )
}
