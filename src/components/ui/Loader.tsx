import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[--color-ink-950] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <motion.div
            className="h-14 w-14 rounded-full border-2 border-[--color-ink-700] border-t-[--color-accent]"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 grid place-items-center font-mono text-[10px] text-[--color-accent]">
            DN
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs font-mono uppercase tracking-[0.2em] text-[--color-ink-300]"
        >
          Initialisation
        </motion.div>
      </div>
    </motion.div>
  )
}
