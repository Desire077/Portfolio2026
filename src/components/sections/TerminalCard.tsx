import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Line =
  | { type: 'cmd'; text: string }
  | { type: 'out'; text: string; tone?: 'default' | 'accent' | 'muted' | 'ok' }
  | { type: 'sep' }

const script: Line[] = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'desire.nguembet', tone: 'accent' },
  { type: 'sep' },
  { type: 'cmd', text: 'status --short' },
  { type: 'out', text: 'role     : développeur web' },
  { type: 'out', text: 'cursus   : BTS SIO — option SLAM' },
  { type: 'out', text: 'focus    : gouvernance SSI, GRC, dev sécurisé' },
  { type: 'out', text: 'location : France' },
  { type: 'sep' },
  { type: 'cmd', text: 'availability --check' },
  { type: 'out', text: '✓ disponible immédiatement', tone: 'ok' },
]

export default function TerminalCard() {
  const [shown, setShown] = useState<number[]>([])
  const [typing, setTyping] = useState<{ idx: number; text: string } | null>(
    null,
  )

  useEffect(() => {
    let cancelled = false
    let timeouts: number[] = []

    async function run() {
      // petit délai initial pour matcher l'animation hero
      await new Promise<void>((r) => {
        const t = window.setTimeout(r, 700)
        timeouts.push(t)
      })

      for (let i = 0; i < script.length; i++) {
        if (cancelled) return
        const line = script[i]

        if (line.type === 'cmd') {
          // animation de frappe
          for (let c = 1; c <= line.text.length; c++) {
            if (cancelled) return
            setTyping({ idx: i, text: line.text.slice(0, c) })
            await new Promise<void>((r) => {
              const t = window.setTimeout(r, 35)
              timeouts.push(t)
            })
          }
          setTyping(null)
          setShown((s) => [...s, i])
          await new Promise<void>((r) => {
            const t = window.setTimeout(r, 220)
            timeouts.push(t)
          })
        } else {
          setShown((s) => [...s, i])
          await new Promise<void>((r) => {
            const t = window.setTimeout(r, line.type === 'sep' ? 60 : 90)
            timeouts.push(t)
          })
        }
      }
    }

    run()
    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="relative">
      {/* Halo accent très léger */}
      <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-[--color-accent]/5 via-transparent to-transparent blur-xl" />

      <motion.div
        className="rounded-xl border border-[--color-ink-700] bg-[--color-ink-900]/70 backdrop-blur-md overflow-hidden shadow-2xl"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[--color-ink-700] bg-[--color-ink-800]/50">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="font-mono text-[11px] text-[--color-ink-300]">
            ~/profile — zsh
          </div>
          <div className="w-10" />
        </div>

        {/* Body */}
        <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[320px]">
          {script.map((line, i) => {
            const isShown = shown.includes(i)
            const isTyping = typing?.idx === i

            if (!isShown && !isTyping) return null

            if (line.type === 'sep') {
              return <div key={i} className="h-3" />
            }

            if (line.type === 'cmd') {
              const text = isTyping ? typing!.text : line.text
              return (
                <div key={i} className="flex gap-2">
                  <span className="text-[--color-accent] shrink-0">$</span>
                  <span className="text-[--color-ink-50]">{text}</span>
                  {isTyping && (
                    <span className="inline-block w-1.5 h-4 bg-[--color-accent] translate-y-[2px] cursor-blink" />
                  )}
                </div>
              )
            }

            const toneClass =
              line.tone === 'accent'
                ? 'text-[--color-accent]'
                : line.tone === 'ok'
                ? 'text-[--color-success]'
                : line.tone === 'muted'
                ? 'text-[--color-ink-300]'
                : 'text-[--color-ink-100]'

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className={`pl-4 ${toneClass}`}
              >
                {line.text}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
