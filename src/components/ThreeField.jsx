import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/anim'

// Hero backdrop: particle flow field following a sin/cos vector field.
// Ink-colored streams with sparse vermillion accents; mouse nudges the flow.
export default function ThreeField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const dpr = Math.min(window.devicePixelRatio, 2)

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * dpr
      canvas.height = canvas.offsetHeight * dpr
    }
    resize()
    window.addEventListener('resize', resize)

    const N = 420
    const mkParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      life: Math.random() * 220 + 60,
      speed: Math.random() * 1.1 + 0.35,
      accent: Math.random() < 0.055,
    })
    const particles = Array.from({ length: N }, mkParticle)

    const mouse = { x: 0.5, y: 0.5 }
    const onMove = (e) => {
      mouse.x = e.clientX / window.innerWidth
      mouse.y = e.clientY / window.innerHeight
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    let t = 0
    let raf

    const tick = () => {
      raf = requestAnimationFrame(tick)
      t += 0.004

      // soft fade trail — paper color
      ctx.fillStyle = 'rgba(251,251,249,0.038)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const mx = (mouse.x - 0.5) * 1.4
      const my = (mouse.y - 0.5) * 1.0

      for (const p of particles) {
        const nx = p.x / canvas.width
        const ny = p.y / canvas.height

        // multi-frequency pseudo-noise angle
        const angle =
          (Math.sin(nx * 3.8 + t * 0.75 + mx * 0.9) *
           Math.cos(ny * 2.6 + t * 0.5  + my * 0.7) +
           Math.sin((nx + ny) * 2.2 + t * 0.55) * 0.7 +
           Math.cos(nx * 1.4 - ny * 1.8 + t * 0.35) * 0.5) *
          Math.PI * 1.05

        const dx = Math.cos(angle) * p.speed
        const dy = Math.sin(angle) * p.speed

        const fade = Math.min(p.life / 70, 1)
        const alpha = fade * (p.accent ? 0.72 : 0.28)

        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        p.x += dx
        p.y += dy
        ctx.lineTo(p.x, p.y)
        ctx.strokeStyle = p.accent
          ? `rgba(229,55,31,${alpha})`
          : `rgba(10,9,8,${alpha})`
        ctx.lineWidth = p.accent ? 1.6 : 1.1
        ctx.stroke()

        p.life--
        const out = p.x < -2 || p.x > canvas.width + 2 ||
                    p.y < -2 || p.y > canvas.height + 2
        if (p.life <= 0 || out) Object.assign(p, mkParticle())
      }
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero__canvas"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  )
}
