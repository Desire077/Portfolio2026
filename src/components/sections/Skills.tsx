import { motion } from 'framer-motion'
import { Shield, Lock, Server, Code2, Wifi, Monitor } from 'lucide-react'
import { skills } from '../../data/profile'
import { Section, SectionTitle, Reveal } from '../ui/Primitives'

const icons = {
  governance: Shield,
  security: Lock,
  devops: Server,
  dev: Code2,
  network: Wifi,
  office: Monitor,
} as const

export default function Skills() {
  const entries = (Object.entries(skills) as [keyof typeof skills, typeof skills[keyof typeof skills]][]).map(
    ([key, value]) => ({ key, ...value }),
  )

  return (
    <Section id="skills">
      <div className="container-pf">
        <SectionTitle
          index="01 / 06"
          eyebrow="Stack &amp; compétences"
          title="Une lecture dev d'abord,"
          emphasis="puis technique"
          description="Je commence par la cartographie et la politique, je termine par l'implémentation. Voici ce que je sais faire, classé du pourquoi vers le comment."
        />

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {entries.map((axis, i) => {
            const Icon = icons[axis.key]
            return (
              <motion.div
                key={axis.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl border border-[--color-ink-800] bg-[--color-ink-900]/40 p-6 md:p-7 card-lift overflow-hidden"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-accent]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-10 w-10 rounded-lg bg-[--color-ink-700] border border-[--color-ink-600]">
                      <Icon size={18} className="text-[--color-accent]" />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-[--color-ink-50]">
                      {axis.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[--color-ink-300] tabular-nums">
                    0{i + 1}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {axis.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 rounded-full border border-[--color-ink-700] bg-[--color-ink-800]/60 text-[13px] text-[--color-ink-100] hover:border-[--color-ink-500] hover:text-[--color-ink-50] transition-colors cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Phrase éditoriale */}
        <Reveal className="mt-16" delay={0.2}>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-[--color-ink-100] leading-relaxed">
              <span className="font-serif-italic text-[--color-accent] text-2xl md:text-3xl mr-1">
                "
              </span>
              On ne protège pas ce qu'on ne connaît pas. C'est pourquoi mon
              premier réflexe sur un système est l'inventaire — humain,
              technique, contractuel.
              <span className="font-serif-italic text-[--color-accent] text-2xl md:text-3xl ml-1">
                "
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
