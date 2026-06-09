import { timeline } from '../data/content'
import { Reveal } from './motion'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-marker section-marker--title-only">
          <span className="label"><span className="idx">05</span> / Career Timeline</span>
        </div>

        <Reveal>
          <div className="exp-table">
            {timeline.map((t, i) => (
              <div className={`exp-row ${t.kind}`} key={i}>
                <span className="exp-period">{t.period}</span>
                <span className="exp-role">{t.role}</span>
                <span className="exp-org">{t.org} · {t.place}</span>
                <span className="exp-kind">{t.kind === 'edu' ? 'Edu' : 'Role'}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
