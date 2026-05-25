import { FileText, Download, Eye, Calendar, FileBadge } from 'lucide-react'
import { cv, synthesis } from '../../data/profile'
import { Section, SectionTitle, Reveal } from '../ui/Primitives'

export default function Documents() {
  return (
    <Section id="documents" className="bg-[--color-ink-950]">
      <div className="container-pf">
        <SectionTitle
          index="04 / 06"
          eyebrow="Documents officiels"
          title="CV &amp; tableau"
          emphasis="de synthèse"
          description="Deux documents pensés pour les recruteurs et les jurys. Aperçu inline, téléchargement direct, pas de redirection inutile."
        />

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {/* ─── CV ─────────────────────────────────────────────── */}
          <Reveal>
            <DocumentCard
              tag="CV"
              tagAccent
              title={cv.title}
              description={cv.description}
              fileName={cv.fileName}
              filePath={cv.filePath}
              updatedAt={cv.updatedAt}
            >
              {/* Aperçu visuel d'un CV */}
              <CVPreview />
            </DocumentCard>
          </Reveal>

          {/* ─── Tableau de synthèse ───────────────────────────── */}
          <Reveal delay={0.1}>
            <DocumentCard
              tag="Synthèse"
              title={synthesis.title}
              description={synthesis.description}
              fileName={synthesis.fileName}
              filePath={synthesis.filePath}
              updatedAt="Mai 2026"
            >
              <SynthesisPreview />
            </DocumentCard>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

/* ── Carte document générique ───────────────────────────────── */
function DocumentCard({
  tag,
  tagAccent,
  title,
  description,
  fileName,
  filePath,
  updatedAt,
  children,
}: {
  tag: string
  tagAccent?: boolean
  title: string
  description: string
  fileName: string
  filePath: string
  updatedAt: string
  children: React.ReactNode
}) {
  return (
    <article className="group relative rounded-2xl border border-[--color-ink-800] bg-[--color-ink-900]/40 overflow-hidden card-lift">
      {/* Header */}
      <div className="px-6 md:px-7 pt-6 md:pt-7 pb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid place-items-center h-10 w-10 rounded-lg bg-[--color-ink-700] border border-[--color-ink-600]">
            <FileText size={18} className="text-[--color-accent]" />
          </div>
          <div>
            <span
              className={`inline-block font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 rounded ${
                tagAccent
                  ? 'bg-[--color-accent]/10 text-[--color-accent] border border-[--color-accent]/30'
                  : 'border border-[--color-ink-500] text-[--color-ink-200]'
              }`}
            >
              {tag}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-[--color-ink-300]">
          <Calendar size={12} />
          {updatedAt}
        </div>
      </div>

      <div className="px-6 md:px-7 pb-5">
        <h3 className="text-xl md:text-2xl font-medium text-[--color-ink-50] tracking-tight">
          {title}
        </h3>
        <p className="text-[--color-ink-200] mt-2 text-[14.5px] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Aperçu */}
      <div className="px-6 md:px-7 pb-5">{children}</div>

      {/* Footer actions */}
      <div className="px-6 md:px-7 pb-6 pt-2 border-t border-[--color-ink-800] mt-2 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-[--color-ink-300]">
          <FileBadge size={13} />
          {fileName}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs rounded-full border border-[--color-ink-500] text-[--color-ink-100] hover:border-[--color-ink-300] hover:bg-[--color-ink-800] transition-all"
          >
            <Eye size={13} />
            Aperçu
          </a>
          <a
            href={filePath}
            download={fileName}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs rounded-full bg-[--color-accent] text-[--color-ink-950] font-medium hover:bg-[--color-accent-soft] transition-all"
          >
            <Download size={13} />
            Télécharger
          </a>
        </div>
      </div>
    </article>
  )
}

/* ── Aperçu CV — wireframe simulé ──────────────────────────── */
function CVPreview() {
  return (
    <div className="aspect-[1/1.2] md:aspect-[5/6] rounded-lg border border-[--color-ink-700] bg-gradient-to-br from-[--color-ink-800] to-[--color-ink-900] p-5 md:p-6 overflow-hidden relative">
      {/* "page" du CV stylisée */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="h-4 w-32 rounded bg-[--color-ink-50]/80 mb-1.5" />
          <div className="h-2.5 w-44 rounded bg-[--color-ink-300]/60" />
        </div>
        <div className="text-right space-y-1">
          <div className="h-2 w-20 rounded bg-[--color-ink-400]/50 ml-auto" />
          <div className="h-2 w-24 rounded bg-[--color-ink-400]/50 ml-auto" />
          <div className="h-2 w-16 rounded bg-[--color-ink-400]/50 ml-auto" />
        </div>
      </div>

      <div className="h-px bg-[--color-ink-700] my-3" />

      {/* Section "Expérience" */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-1 rounded-full bg-[--color-accent]" />
          <div className="h-2 w-20 rounded bg-[--color-ink-100]/80" />
        </div>
        <div className="space-y-1.5 pl-3">
          <div className="h-2 w-full rounded bg-[--color-ink-400]/40" />
          <div className="h-2 w-5/6 rounded bg-[--color-ink-400]/40" />
          <div className="h-2 w-4/6 rounded bg-[--color-ink-400]/40" />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-1 rounded-full bg-[--color-accent]" />
          <div className="h-2 w-24 rounded bg-[--color-ink-100]/80" />
        </div>
        <div className="space-y-1.5 pl-3">
          <div className="h-2 w-full rounded bg-[--color-ink-400]/40" />
          <div className="h-2 w-3/4 rounded bg-[--color-ink-400]/40" />
        </div>
      </div>

      {/* Footer skills */}
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex flex-wrap gap-1">
          {[16, 24, 20, 28, 18, 22].map((w, i) => (
            <div
              key={i}
              className="h-3 rounded-full bg-[--color-ink-700] border border-[--color-ink-600]"
              style={{ width: `${w * 2}px` }}
            />
          ))}
        </div>
      </div>

      {/* Stamp "PDF" */}
      <div className="absolute top-5 right-5 opacity-50">
        <div className="rotate-12 font-mono text-[10px] uppercase tracking-widest border border-[--color-accent]/40 text-[--color-accent]/70 px-2 py-0.5 rounded">
          PDF · A4
        </div>
      </div>
    </div>
  )
}

/* ── Aperçu Tableau de synthèse ─────────────────────────────── */
function SynthesisPreview() {
  return (
    <div className="aspect-[1/1.2] md:aspect-[5/6] rounded-lg border border-[--color-ink-700] bg-gradient-to-br from-[--color-ink-800] to-[--color-ink-900] p-5 md:p-6 overflow-hidden relative">
      <div className="mb-4">
        <div className="font-mono text-[10px] uppercase tracking-wider text-[--color-ink-300] mb-1">
          Tableau de synthèse
        </div>
        <div className="h-3 w-40 rounded bg-[--color-ink-50]/80" />
      </div>

      <div className="rounded border border-[--color-ink-700] overflow-hidden">
        {synthesis.rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-5 gap-2 px-3 py-2.5 ${
              i % 2 === 0 ? 'bg-[--color-ink-900]/60' : 'bg-[--color-ink-800]/40'
            } ${i !== synthesis.rows.length - 1 ? 'border-b border-[--color-ink-700]' : ''}`}
          >
            <div className="col-span-2 text-[11px] font-mono text-[--color-ink-200] truncate">
              {row.label}
            </div>
            <div className="col-span-3 text-[11px] text-[--color-ink-50] truncate">
              {row.value}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono text-[--color-ink-300]">
        <span>BTS SIO — SLAM</span>
        <span className="text-[--color-accent]">v2026.1</span>
      </div>
    </div>
  )
}
