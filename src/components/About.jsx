import { profile, principles } from '../data/content'
import { Reveal } from './motion'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-marker section-marker--title-only">
          <span className="label"><span className="idx">02</span> / About</span>
        </div>
        <hr className="rule" />

        <div className="about-body" style={{ marginTop: 'clamp(28px,4vw,48px)' }}>
          <Reveal>
            <p className="about-lead">
              4+ years turning ambiguous product ideas into production systems that serve millions.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="about-text">{profile.intro}</p>
            <div className="principles">
              {principles.map((p) => (
                <div className="principle" key={p.k}>
                  <h3>{p.k}</h3>
                  <p>{p.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
