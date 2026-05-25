import { useEffect, useState } from 'react'

/** Détecte si on est sur un device tactile pour adapter le comportement. */
export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    const check = () =>
      setIsTouch(
        'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia('(pointer: coarse)').matches,
      )
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isTouch
}

/** Détecte si on doit réduire les animations. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}
