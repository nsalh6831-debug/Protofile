import { projects } from "../data.js";
import DeviceMockup from "./DeviceMockup.jsx";
import Stop from "./Stop.jsx";

export default function Work() {
  return (
    <Stop index="01" id="work">
      <h2 className="section-title">Selected work</h2>
      <p className="section-lead">
        Two projects, shown the way I'd walk you through them: what they do, and exactly
        what I built.
      </p>

      <div className="projects">
        {projects.map((p) => (
          <article className="project-card" key={p.id}>
            <div className="project-card__art">
              <DeviceMockup label={`${p.name} overview`} pattern="dashboard" />
            </div>
            <div className="project-card__body">
              <div className="project-card__heading">
                <h3>{p.name}</h3>
                <span className="project-card__subtitle">{p.subtitle}</span>
              </div>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span className="mono-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <p>{p.summary}</p>
              <div className="project-card__links">
                {p.id === "transgo" ? (
                  <a href="#transgo-case-study" className="link-arrow">
                    View case study
                  </a>
                ) : p.github ? (
                  <a href={p.github} target="_blank" rel="noreferrer" className="link-arrow">
                    View on GitHub
                  </a>
                ) : (
                  <span className="link-arrow link-arrow--pending">Case study coming soon</span>
                )}
                {p.liveDemo && (
                  <a href={p.liveDemo} target="_blank" rel="noreferrer" className="link-arrow">
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Stop>
  );
}
