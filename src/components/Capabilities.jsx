import { stackGroups } from '../data/content'
import { Reveal } from './motion'

export default function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="wrap">
        <div className="section-marker section-marker--title-only">
          <span className="label"><span className="idx">04</span> / Technical Skills</span>
        </div>

        <Reveal>
          <div className="cap-grid">
            {stackGroups.map((g) => (
              <div className="cap-col" key={g.label}>
                <h3>{g.label}</h3>
                <ul>
                  {g.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
