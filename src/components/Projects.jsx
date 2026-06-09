import { projects } from '../data/content'
import { Reveal } from './motion'

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-marker section-marker--title-only">
          <span className="label"><span className="idx">03</span> / Experience</span>
        </div>

        <div className="work-list">
          {projects.map((p) => (
            <Reveal key={p.id} className="project">
              <div className="project-head">
                <span className="project-num">{p.index}</span>
                <div>
                  <div className="project-company">{p.company} — {p.region}</div>
                  <h3 className="project-title">{p.title}</h3>
                </div>
                <span className="project-period">{p.period}</span>
              </div>

              <div className="project-body">
                <div>
                  <p className="project-blurb">{p.blurb}</p>
                  <div className="metric-table">
                    {p.metrics.map((m, j) => (
                      <div className="metric-row" key={j}>
                        <span className="metric-val">{m.value}</span>
                        <span className="metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <ul className="highlights">
                    {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                  <div className="chips">
                    {p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
