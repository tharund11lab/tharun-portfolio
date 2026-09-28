import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger, prefersReducedMotion } from './lib/anim'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Capabilities from './components/Capabilities'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  const [ready, setReady] = useState(false)
  const lenisRef = useRef(null)

  // Lenis smooth scroll driven by the GSAP ticker so ScrollTrigger
  // and the scroll position never disagree.
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Pinned sections change layout height — refresh after preloader exit.
  useEffect(() => {
    if (ready) ScrollTrigger.refresh()
  }, [ready])

  // Site-wide motion polish: masked section-heading reveals, a scroll
  // progress line, and magnetic hero buttons.
  useEffect(() => {
    if (!ready || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.shead').forEach((head) => {
        const parts = head.querySelectorAll('.shead__num, .shead__slash, .shead__title')
        gsap.timeline({ scrollTrigger: { trigger: head, start: 'top 85%', once: true } })
          .fromTo(parts,
            { yPercent: 110, clipPath: 'inset(0 0 100% 0)' },
            { yPercent: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.9, ease: 'expo.out', stagger: 0.08 })
          .fromTo(head.querySelector('.shead__note'), { autoAlpha: 0, x: 12 }, { autoAlpha: 1, x: 0, duration: 0.6 }, '-=0.5')
      })

      gsap.fromTo('.scroll-progress', { scaleX: 0 }, {
        scaleX: 1, ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: true },
      })
    })

    if (!window.matchMedia('(hover: hover)').matches) return () => ctx.revert()
    const cleanups = [...document.querySelectorAll('.hero__ctas .btn')].map((btn) => {
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })
      const move = (e) => {
        const r = btn.getBoundingClientRect()
        xTo((e.clientX - (r.left + r.width / 2)) * 0.3)
        yTo((e.clientY - (r.top + r.height / 2)) * 0.3)
      }
      const leave = () => { xTo(0); yTo(0) }
      btn.addEventListener('mousemove', move)
      btn.addEventListener('mouseleave', leave)
      return () => {
        btn.removeEventListener('mousemove', move)
        btn.removeEventListener('mouseleave', leave)
      }
    })
    return () => { ctx.revert(); cleanups.forEach((fn) => fn()) }
  }, [ready])

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <Nav lenis={lenisRef} />
      <main>
        <Hero ready={ready} />
        <About />
        <Experience lenis={lenisRef} />
        <Capabilities />
        <Education />
        <Contact />
      </main>
    </>
  )
}
