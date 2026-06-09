import { profile } from '../data/content'
import { Reveal } from './motion'

export default function Contact() {
  return (
    <section className="section contact" id="contact" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="section-marker section-marker--title-only" style={{ marginBottom: 'clamp(28px,4vw,52px)' }}>
          <span className="label"><span className="idx">06</span> / Contact</span>
        </div>

        <Reveal>
          <h2 className="contact-lead">
            Let's build<span className="accent">something.</span>
          </h2>
        </Reveal>

        <div className="contact-grid">
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="contact-links">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
            ))}
            <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>{profile.phone}</a>
          </div>
        </div>

        <div className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Swiss / Editorial · React · Built from scratch</span>
        </div>
      </div>
    </section>
  )
}
