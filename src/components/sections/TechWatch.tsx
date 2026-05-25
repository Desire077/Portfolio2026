import { motion } from 'framer-motion'
import { Section, SectionTitle, Badge, Reveal } from '../ui/Primitives'
import { techWatch } from '../../data/profile'

export default function TechWatch() {
  return (
    <Section id="watch">
      <div className="container-pf">
        <SectionTitle
          index="05 / 06"
          eyebrow="Veille technologique"
          title={techWatch.title}
          emphasis="—"
          description={techWatch.intro}
        />

        {/* ─── Sous-titre éditorial ─────────────────────────────── */}
        <Reveal>
          <div className="mb-12 flex items-baseline gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[--color-accent]">
              Focus
            </span>
            <span className="font-mono text-xs text-[--color-ink-300]">
              {techWatch.subtitle}
            </span>
          </div>
        </Reveal>

        {/* ─── 3 blocs concepts ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5 mb-16">
          {techWatch.blocks.map((b, i) => (
            <motion.article
              key={b.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-[--color-ink-800] bg-[--color-ink-900]/40 p-6 md:p-7 card-lift flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs uppercase tracking-wider text-[--color-accent] border border-[--color-accent]/30 bg-[--color-accent]/10 px-2 py-0.5 rounded">
                  {b.tag}
                </span>
                <span className="font-mono text-xs text-[--color-ink-300] tabular-nums">
                  0{i + 1}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-medium text-[--color-ink-50] mb-3 leading-snug">
                {b.title}
              </h3>

              <p className="text-[14.5px] text-[--color-ink-200] leading-relaxed mb-5 flex-1">
                {b.summary}
              </p>

              <ul className="space-y-2 mb-5">
                {b.bullets.map((bl, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-[13.5px] text-[--color-ink-100]"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-[--color-accent] shrink-0" />
                    {bl}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[--color-ink-800] flex flex-wrap gap-1.5">
                {b.tools.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* ─── Pipeline visuel ─────────────────────────────────── */}
        <Reveal>
          <div className="rounded-2xl border border-[--color-ink-800] bg-gradient-to-br from-[--color-ink-900]/60 to-[--color-ink-900]/20 p-6 md:p-8">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="font-display text-xl md:text-2xl text-[--color-ink-50]">
                Pipeline de production sécurisée
              </h3>
              <span className="font-mono text-xs text-[--color-ink-300]">
                Source → Déploiement
              </span>
            </div>

            <div className="overflow-x-auto no-scrollbar -mx-2 px-2">
              <div className="flex items-stretch gap-2 md:gap-3 min-w-max">
                {techWatch.pipeline.map((s, i) => (
                  <div key={s.step} className="flex items-stretch gap-2 md:gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="relative w-[140px] md:w-[160px] rounded-xl border border-[--color-ink-700] bg-[--color-ink-800]/60 p-4 hover:border-[--color-accent]/50 transition-colors group"
                    >
                      <div className="font-mono text-xs text-[--color-accent] mb-2">
                        {s.step}
                      </div>
                      <div className="text-sm font-medium text-[--color-ink-50] leading-tight mb-1">
                        {s.label}
                      </div>
                      <div className="text-[11px] font-mono text-[--color-ink-300]">
                        {s.detail}
                      </div>
                    </motion.div>
                    {i < techWatch.pipeline.length - 1 && (
                      <div className="flex items-center text-[--color-ink-500]">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-[--color-ink-800] bg-[--color-ink-900]/40 p-6 md:p-8 mt-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-[--color-ink-50]">
                  {techWatch.rss.feedTitle}
                </h3>
                <p className="text-[14px] text-[--color-ink-300] mt-2">
                  {techWatch.rss.feedDescription}
                </p>
              </div>
              <a
                href={techWatch.rss.feedUrl}
                className="font-mono text-xs uppercase tracking-[0.18em] text-[--color-accent] hover:text-[--color-ink-50]"
              >
                Flux RSS du portfolio
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {techWatch.rss.feeds.map((feed) => (
                <a
                  key={feed.url}
                  href={feed.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[--color-ink-700] bg-[--color-ink-950]/40 p-5 transition hover:border-[--color-accent]/50"
                >
                  <div className="text-sm font-semibold text-[--color-ink-50] mb-2">
                    {feed.name}
                  </div>
                  <p className="text-[13.5px] text-[--color-ink-300] leading-relaxed">
                    {feed.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
