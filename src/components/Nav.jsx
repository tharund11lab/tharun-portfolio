import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'capabilities', label: 'Skills' },
  { id: 'experience', label: 'Career Timeline' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="#top" className="topbar-brand">
          <span className="sq" />
          {profile.name}
        </a>
        <nav className="topbar-nav">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'is-active' : ''}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
