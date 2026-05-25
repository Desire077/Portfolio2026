import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

/* ── Section wrapper avec id pour ancres ─────────────────────── */
export function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  )
}

/* ── Eyebrow ────────────────────────────────────────────────── */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[--color-ink-200] font-mono">
      <span className="inline-block h-px w-8 bg-[--color-ink-400]" />
      {children}
    </div>
  )
}

/* ── Section title ──────────────────────────────────────────── */
export function SectionTitle({
  index,
  eyebrow,
  title,
  emphasis,
  description,
}: {
  index?: string
  eyebrow: string
  title: string
  emphasis?: string
  description?: string
}) {
  return (
    <div className="mb-16 md:mb-20">
      <div className="flex items-baseline gap-6 mb-5">
        {index && (
          <span className="font-mono text-xs text-[--color-ink-300] tabular-nums">
            {index}
          </span>
        )}
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[--color-ink-50] max-w-3xl">
        {title}
        {emphasis && (
          <>
            {' '}
            <span className="font-serif-italic text-[--color-accent]">
              {emphasis}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-6 text-[--color-ink-200] max-w-2xl text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

/* ── Badge / tag ────────────────────────────────────────────── */
export function Badge({
  children,
  variant = 'default',
}: {
  children: ReactNode
  variant?: 'default' | 'accent' | 'outline'
}) {
  const styles = {
    default:
      'bg-[--color-ink-700] text-[--color-ink-100] border border-[--color-ink-600]',
    accent:
      'bg-[--color-accent]/10 text-[--color-accent] border border-[--color-accent]/30',
    outline: 'border border-[--color-ink-500] text-[--color-ink-200] bg-transparent',
  } as const
  return (
    <span
      className={`inline-flex items-center font-mono text-[11px] px-2.5 py-1 rounded-full ${styles[variant]}`}
    >
      {children}
    </span>
  )
}

/* ── Bouton principal ───────────────────────────────────────── */
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  as?: 'a' | 'button'
  href?: string
  download?: string
  target?: string
  rel?: string
  children: ReactNode
  className?: string
  onClick?: () => void
}
export function Button({
  variant = 'primary',
  as = 'button',
  href,
  download,
  target,
  rel,
  children,
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 group focus-visible:outline-2 focus-visible:outline-offset-2'
  const styles = {
    primary:
      'bg-[--color-accent] text-[--color-ink-950] hover:bg-[--color-accent-soft] hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-[--color-ink-700] text-[--color-ink-50] border border-[--color-ink-500] hover:border-[--color-ink-300] hover:bg-[--color-ink-600]',
    ghost:
      'text-[--color-ink-100] hover:text-[--color-accent] hover:bg-[--color-ink-800]',
  } as const

  const cls = `${base} ${styles[variant]} ${className}`
  if (as === 'a' && href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={cls}
      >
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

/* ── Reveal on scroll - une seule fois ──────────────────────── */
export function Reveal({
  children,
  delay = 0,
  className = '',
  y = 16,
  ...rest
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
} & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* ── Status pill avec ping ──────────────────────────────────── */
export function StatusPill({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-[--color-ink-600] bg-[--color-ink-800]/60 backdrop-blur px-3.5 py-1.5">
      <span className="relative inline-flex h-2 w-2">
        <span className="absolute inset-0 rounded-full bg-[--color-accent] pulse-dot" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[--color-accent]" />
      </span>
      <span className="text-xs font-mono uppercase tracking-wider text-[--color-ink-100]">
        {children}
      </span>
    </div>
  )
}
