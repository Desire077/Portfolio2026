import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { Github } from '../ui/BrandIcons'
import { projects } from '../../data/profile'
import { Section, SectionTitle, Badge, Reveal } from '../ui/Primitives'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <Section id="work">
      <div className="container-pf">
        <SectionTitle
          index="02 / 06"
          eyebrow="Projets sélectionnés"
          title="Du code mis"
          emphasis="en production"
          description="Quelques travaux représentatifs. Chacun a été livré, déployé ou évalué. Pas de side-projects abandonnés au tiroir."
        />

        {/* Featured grid */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} featured />
          ))}
        </div>

        {/* Autres projets en liste compacte */}
        {others.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-display text-xl md:text-2xl text-[--color-ink-50]">
                  Autres travaux
                </h3>
                <span className="font-mono text-xs text-[--color-ink-300]">
                  Projets scolaires / d'exploration
                </span>
              </div>
            </Reveal>
            <div className="rounded-xl border border-[--color-ink-800] overflow-hidden divide-y divide-[--color-ink-800]">
              {others.map((p, i) => (
                <CompactRow key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}

/* ── Carte projet "featured" ──────────────────────────────── */
function ProjectCard({
  project: p,
  index,
  featured: _featured,
}: {
  project: (typeof projects)[number]
  index: number
  featured?: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative rounded-2xl border border-[--color-ink-800] bg-[--color-ink-900]/40 overflow-hidden card-lift"
    >
      {/* Visual zone : "schéma" généré CSS — pas de placeholder bidon */}
      <ProjectVisual project={p} />

      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[--color-ink-300]">
              {p.category}
            </span>
            <span className="text-[--color-ink-500]">·</span>
            <span className="font-mono text-[11px] text-[--color-ink-300]">
              {p.year}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {p.links.github && (
              <a
                href={p.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[--color-ink-300] hover:text-[--color-ink-50] hover:bg-[--color-ink-700] rounded-md transition-colors"
                aria-label="Code source"
              >
                <Github size={14} />
              </a>
            )}
            {p.links.demo && (
              <a
                href={p.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[--color-ink-300] hover:text-[--color-ink-50] hover:bg-[--color-ink-700] rounded-md transition-colors"
                aria-label="Voir le projet"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-medium text-[--color-ink-50] tracking-tight">
          {p.title}
        </h3>
        <p className="text-sm text-[--color-ink-200] mt-1">{p.subtitle}</p>

        <p className="text-[15px] text-[--color-ink-100] leading-relaxed mt-4">
          {p.summary}
        </p>

        <ul className="mt-5 space-y-2">
          {p.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[13.5px] text-[--color-ink-200]"
            >
              <span
                aria-hidden
                className="mt-2 h-1 w-3 bg-[--color-accent]/70 shrink-0 rounded-full"
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-[--color-ink-800] flex flex-wrap items-center gap-1.5">
          {p.stack.map((s) => (
            <Badge key={s} variant="outline">
              {s}
            </Badge>
          ))}
        </div>

        {p.links.demo && (
          <a
            href={p.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm text-[--color-accent] hover:text-[--color-accent-soft] link-underline"
          >
            Visiter le projet
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </motion.article>
  )
}

/* ── Visual abstrait par projet (pas d'image lourde, perf++) ─ */
function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  return (
    <div
      className="relative h-44 md:h-52 overflow-hidden border-b border-[--color-ink-800] bg-[--color-ink-900]"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, ${project.accent}18, transparent 50%), radial-gradient(circle at 80% 80%, ${project.accent}10, transparent 50%)`,
      }}
    >
      {/* Grille subtile */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* "Indicateur d'état" projet */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full pulse-dot"
          style={{ background: project.accent }}
        />
        <span className="font-mono text-[10px] uppercase tracking-wider text-[--color-ink-200]">
          {project.id}
        </span>
      </div>

      {/* Gros titre flou en fond — référence éditoriale */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display text-[80px] md:text-[110px] leading-none tracking-tight opacity-[0.07] text-[--color-paper] select-none"
          aria-hidden
        >
          {project.title.split(' ')[0]}
        </span>
      </div>

      {/* Tag rôle */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[--color-ink-200]">
          {project.role}
        </span>
      </div>
    </div>
  )
}

/* ── Ligne compacte projet "other" ──────────────────────────── */
function CompactRow({
  project: p,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="grid grid-cols-12 gap-4 px-5 py-4 md:py-5 hover:bg-[--color-ink-900]/60 transition-colors group"
    >
      <div className="col-span-12 md:col-span-5">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs text-[--color-ink-300] tabular-nums">
            {(index + 3).toString().padStart(2, '0')}
          </span>
          <span className="text-[--color-ink-50] font-medium">{p.title}</span>
        </div>
        <div className="ml-7 text-[13px] text-[--color-ink-300] mt-0.5">
          {p.subtitle}
        </div>
      </div>
      <div className="col-span-6 md:col-span-2 flex items-center text-xs font-mono text-[--color-ink-300]">
        {p.year}
      </div>
      <div className="col-span-6 md:col-span-4 flex items-center flex-wrap gap-1.5">
        {p.stack.slice(0, 3).map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
      <div className="col-span-12 md:col-span-1 flex items-center justify-end gap-1">
        {p.links.github && (
          <a
            href={p.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[--color-ink-300] hover:text-[--color-ink-50] rounded-md transition-colors"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
        )}
      </div>
    </motion.div>
  )
}
