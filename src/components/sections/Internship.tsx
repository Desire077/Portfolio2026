import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ChevronRight, Sparkles } from 'lucide-react'
import { internships } from '../../data/profile'
import { Section, SectionTitle, Badge, Reveal } from '../ui/Primitives'

export default function Internship() {
  return (
    <Section id="internship" className="bg-[--color-ink-950]">
      <div className="container-pf">
        <SectionTitle
          index="03 / 06"
          eyebrow="Expérience en entreprise"
          title="Stages professionnels —"
          emphasis="développement web & infrastructure cloud"
          description="Développement d'une plateforme web dynamique avec AJAX et découverte d'environnements cloud modernes."
        />

        {internships.map((internship, index) => (
          <div key={`${internship.company}-${index}`} className="space-y-16">
            {/* ─── Bandeau identité du stage ────────────────────────── */}
            <Reveal>
              <div className="relative rounded-2xl border border-[--color-ink-700] bg-gradient-to-br from-[--color-ink-800]/60 to-[--color-ink-900]/40 backdrop-blur-sm overflow-hidden">
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[--color-accent] via-[--color-accent]/40 to-transparent" />

                <div className="p-6 md:p-8 grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="grid place-items-center h-10 w-10 rounded-lg bg-[--color-ink-700] border border-[--color-ink-600]">
                        <Briefcase size={18} className="text-[--color-accent]" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-[--color-ink-300]">
                          Entreprise
                        </div>
                        <div className="text-xl md:text-2xl font-medium text-[--color-ink-50]">
                          {internship.company}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-[--color-ink-100] mb-5">
                      {internship.role}
                    </div>

                    <p className="text-[--color-ink-200] leading-relaxed text-[15px]">
                      {internship.pitch}
                    </p>
                  </div>

                  <div className="md:col-span-5 md:border-l border-[--color-ink-700] md:pl-8 flex flex-col gap-4 justify-center">
                    <div className="flex items-center gap-3">
                      <Clock
                        size={15}
                        className="text-[--color-ink-300] shrink-0"
                      />
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-[--color-ink-300]">
                          Période
                        </div>
                        <div className="text-sm text-[--color-ink-50]">
                          {internship.period} · {internship.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin
                        size={15}
                        className="text-[--color-ink-300] shrink-0"
                      />
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-[--color-ink-300]">
                          Lieu
                        </div>
                        <div className="text-sm text-[--color-ink-50]">
                          {internship.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles
                        size={15}
                        className="text-[--color-ink-300] shrink-0 mt-0.5"
                      />
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-[--color-ink-300]">
                          Environnement
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {internship.stack.map((t) => (
                            <Badge key={t} variant="outline">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ─── Contexte mission ─────────────────────────────────── */}
            <Reveal className="mt-10">
              <div className="rounded-2xl border border-[--color-ink-800] p-6 md:p-8 bg-[--color-ink-900]/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-px w-6 bg-[--color-accent]" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[--color-accent]">
                    Contexte
                  </span>
                </div>
                <p className="text-[--color-ink-100] leading-relaxed text-[15px] max-w-3xl">
                  {internship.context}
                </p>
              </div>
            </Reveal>

            {/* ─── Timeline des missions ───────────────────────────── */}
            <div className="mt-14">
              <div className="flex items-baseline justify-between mb-8">
                <h3 className="font-display text-2xl md:text-3xl text-[--color-ink-50]">
                  Missions
                </h3>
                <span className="font-mono text-xs text-[--color-ink-300] tabular-nums">
                  {internship.missions.length.toString().padStart(2, '0')}{' '}
                  interventions documentées
                </span>
              </div>

              <div className="relative">
                {/* Ligne verticale */}
                <div
                  aria-hidden
                  className="absolute left-4 md:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-[--color-ink-700] via-[--color-ink-700] to-transparent"
                />

                <div className="space-y-4">
                  {internship.missions.map((m, i) => (
                    <motion.article
                      key={m.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative pl-12 md:pl-16 group"
                    >
                      {/* Marker */}
                      <div className="absolute left-0 top-2 grid place-items-center">
                        <div className="relative h-9 w-9 rounded-full border border-[--color-ink-600] bg-[--color-ink-900] grid place-items-center font-mono text-[11px] text-[--color-ink-200] group-hover:border-[--color-accent] group-hover:text-[--color-accent] transition-colors">
                          {(i + 1).toString().padStart(2, '0')}
                        </div>
                      </div>

                      <div className="rounded-xl border border-[--color-ink-800] bg-[--color-ink-900]/40 p-5 md:p-6 card-lift hover:bg-[--color-ink-900]/70">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <h4 className="text-lg font-medium text-[--color-ink-50] leading-snug">
                            {m.title}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {m.tags.map((t) => (
                              <Badge key={t}>{t}</Badge>
                            ))}
                          </div>
                        </div>
                        <p className="text-[--color-ink-200] leading-relaxed text-sm md:text-[15px]">
                          {m.detail}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── Ce que j'ai appris ──────────────────────────────── */}
            <div className="mt-16">
              <Reveal>
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="font-display text-2xl md:text-3xl text-[--color-ink-50]">
                    Ce que j'en retiens
                  </h3>
                  <span className="font-mono text-xs text-[--color-ink-300]">
                    Mémo personnel
                  </span>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-3">
                {internship.learnings.map((l, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="rounded-xl border border-[--color-ink-800] bg-[--color-ink-900]/40 p-5 hover:border-[--color-ink-600] transition-colors">
                      <div className="flex items-start gap-3">
                        <ChevronRight
                          size={16}
                          className="text-[--color-accent] shrink-0 mt-0.5"
                        />
                        <p className="text-[--color-ink-100] text-[15px] leading-relaxed">
                          {l}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
