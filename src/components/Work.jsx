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
              {p.image ? (
                <img src={p.image} alt={`${p.name} overview`} className="mockup" />
              ) : (
                <DeviceMockup label={`${p.name} overview`} pattern={p.gallery?.[0]?.pattern || "dashboard"} />
              )}
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
                <a href={`#/project/${p.id}`} className="link-arrow">
                  View case study
                </a>
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
