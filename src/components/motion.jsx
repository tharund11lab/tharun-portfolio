import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Apple-style fade + rise on scroll-in
export const EASE = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 16, className, as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </M>
  )
}

// Number that counts up once it enters the viewport
export function CountUp({ to, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20%' })
  const mv = useMotionValue(0)
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration, mv])

  return (
    <span ref={ref} className="stat-num">
      {val}
      <span className="sfx">{suffix}</span>
    </span>
  )
}
