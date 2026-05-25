import { motion } from 'framer-motion'
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react'
import { Github, Linkedin } from '../ui/BrandIcons'
import { useState } from 'react'
import { profile } from '../../data/profile'
import { Section, Eyebrow, StatusPill } from '../ui/Primitives'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* ignore */
    }
  }

  return (
    <Section id="contact" className="bg-[--color-ink-950]">
      <div className="container-pf">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="mb-8">
              <Eyebrow>06 / 06 — Contact</Eyebrow>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-[--color-ink-50] tracking-[-0.04em] leading-[0.95]"
            >
              Un projet, une équipe,{' '}
              <span className="font-serif-italic text-[--color-accent]">
                une opportunité
              </span>{' '}
              ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-[--color-ink-200] text-base md:text-lg max-w-xl leading-relaxed"
            >
              Je réponds en moins de 24 heures. Pour un poste, une alternance,
              un audit junior, ou simplement échanger sur le développement web — la
              porte est ouverte.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center justify-between gap-4 px-6 py-4 rounded-full bg-[--color-accent] text-[--color-ink-950] font-medium hover:bg-[--color-accent-soft] transition-all"
              >
                <span className="flex items-center gap-2.5">
                  <Mail size={18} />
                  Écrire un message
                </span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <button
                onClick={copyEmail}
                className="group inline-flex items-center justify-between gap-4 px-6 py-4 rounded-full border border-[--color-ink-500] text-[--color-ink-50] font-mono text-sm hover:border-[--color-ink-300] hover:bg-[--color-ink-800] transition-all"
              >
                <span>{profile.email}</span>
                {copied ? (
                  <Check size={16} className="text-[--color-accent]" />
                ) : (
                  <Copy size={16} className="text-[--color-ink-200]" />
                )}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex items-center gap-2 flex-wrap"
            >
              <SocialLink href={profile.socials.github} icon={Github}>
                GitHub
              </SocialLink>
              <SocialLink href={profile.socials.linkedin} icon={Linkedin}>
                LinkedIn
              </SocialLink>
            </motion.div>
          </div>

          {/* ─── Carte récap ───────────────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="rounded-2xl border border-[--color-ink-700] bg-gradient-to-br from-[--color-ink-800]/60 to-[--color-ink-900]/40 backdrop-blur p-6 md:p-7">
              <div className="flex items-center justify-between mb-6">
                <StatusPill>Open to work</StatusPill>
                <div className="font-mono text-xs text-[--color-ink-300]">
                  v2026
                </div>
              </div>

              <dl className="space-y-4 text-sm">
                <div className="flex justify-between items-baseline gap-4 border-b border-[--color-ink-700] pb-3">
                  <dt className="text-[--color-ink-300] font-mono text-xs uppercase tracking-wider">
                    Nom
                  </dt>
                  <dd className="text-[--color-ink-50] font-medium">
                    Désiré Nguembet
                  </dd>
                </div>
                <div className="flex justify-between items-baseline gap-4 border-b border-[--color-ink-700] pb-3">
                  <dt className="text-[--color-ink-300] font-mono text-xs uppercase tracking-wider">
                    Statut
                  </dt>
                  <dd className="text-[--color-ink-50]">Étudiant BTS SIO</dd>
                </div>
                <div className="flex justify-between items-baseline gap-4 border-b border-[--color-ink-700] pb-3">
                  <dt className="text-[--color-ink-300] font-mono text-xs uppercase tracking-wider">
                    Recherche
                  </dt>
                  <dd className="text-[--color-ink-50]">
                    Alternance / stage Cyber
                  </dd>
                </div>
                <div className="flex justify-between items-baseline gap-4 border-b border-[--color-ink-700] pb-3">
                  <dt className="text-[--color-ink-300] font-mono text-xs uppercase tracking-wider">
                    Localisation
                  </dt>
                  <dd className="text-[--color-ink-50]">France · mobile</dd>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <dt className="text-[--color-ink-300] font-mono text-xs uppercase tracking-wider">
                    Réponse
                  </dt>
                  <dd className="text-[--color-accent] font-mono text-xs">
                    &lt; 24h
                  </dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>
      </div>
    </Section>
  )
}

function SocialLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: typeof Github
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-ink-700] text-sm text-[--color-ink-100] hover:border-[--color-ink-500] hover:text-[--color-ink-50] hover:bg-[--color-ink-800] transition-all"
    >
      <Icon size={15} />
      {children}
      <ArrowUpRight
        size={13}
        className="text-[--color-ink-300] group-hover:text-[--color-accent] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
      />
    </a>
  )
}
