import { timeline, certifications } from '../data/content'
import { Reveal } from './motion'

export default function Education() {
  const educationItems = timeline.filter((item) => item.kind === 'edu')

  return (
    <section className="section" id="education">
      <div className="wrap">
        <div className="education-panel">
          <div className="section-marker section-marker--title-only">
            <span className="label"><span className="idx">06</span> / Education and certifications</span>
          </div>

          <Reveal>
            <div className="education-grid">
              <div className="education-block">
                <h3>Education</h3>
                <div className="education-list">
                  {educationItems.map((item) => (
                    <div className="education-item" key={`${item.org}-${item.period}`}>
                      <span className="education-degree">{item.role}</span>
                      <span className="education-org">{item.org}</span>
                      <span className="education-period">{item.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cert-block">
                <h3>Certifications</h3>
                <ul className="cert-list">
                  {certifications.map((cert) => (
                    <li className="cert-item" key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
