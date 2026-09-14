import { useState } from "react";
import DeviceMockup from "./DeviceMockup.jsx";

export default function ProjectDetail({ project }) {
  const [activeImage, setActiveImage] = useState(0);
  const gallery = project.gallery || [];

  const goTo = (i) => setActiveImage((i + gallery.length) % gallery.length);

  return (
    <div className="detail">
      <div className="wrap">
        <a href="#work" className="detail__back">
          ← Back
        </a>
      </div>

      <div className="detail__hero wrap">
        <span className="mono-tag mono-tag--muted">{project.category}</span>
        <h1 className="detail__title">{project.name}</h1>
        <p className="detail__subtitle">{project.subtitle}</p>
        <div className="detail__hero-art">
          <DeviceMockup label={`${project.name} hero`} pattern={gallery[0]?.pattern || "dashboard"} tall />
        </div>
      </div>

      <div className="wrap">
        <div className="detail__meta">
          <div>
            <span className="detail__meta-label">Role</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span className="detail__meta-label">Duration</span>
            <strong>{project.duration}</strong>
          </div>
          <div>
            <span className="detail__meta-label">Category</span>
            <strong>{project.category}</strong>
          </div>
          <div>
            <span className="detail__meta-label">Tools</span>
            <strong>{project.tools.slice(0, 2).join(", ")}</strong>
          </div>
        </div>

        <section className="detail__section">
          <h2 className="section-title">Overview</h2>
          <p className="detail__overview">{project.overview}</p>
          <p className="case-study__context">{project.context}</p>
        </section>

        {project.highlights?.length > 0 && (
          <section className="detail__section">
            <h2 className="section-title">Key highlights</h2>
            <ol className="highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ol>
          </section>
        )}

        <section className="detail__section">
          <h2 className="section-title">Challenge &amp; solution</h2>
          <h3 className="case-study__label">The problem</h3>
          <p>{project.problem}</p>

          <h3 className="case-study__label" style={{ marginTop: 28 }}>
            The solution
          </h3>
          <div className="solution-steps">
            {project.solutionSteps.map((s, i) => (
              <div className="solution-step" key={s.title}>
                <span className="solution-step__num">{i + 1}</span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {gallery.length > 0 && (
          <section className="detail__section">
            <h2 className="section-title">Project gallery</h2>
            <div className="gallery">
              <div className="gallery__main">
                <DeviceMockup
                  label={gallery[activeImage].label}
                  pattern={gallery[activeImage].pattern}
                  tall
                />
              </div>
              {gallery.length > 1 && (
                <div className="gallery__thumbs">
                  {gallery.map((g, i) => (
                    <button
                      key={g.label}
                      className={`gallery__thumb ${i === activeImage ? "is-active" : ""}`}
                      onClick={() => goTo(i)}
                      aria-label={g.label}
                    >
                      <DeviceMockup label={g.label} pattern={g.pattern} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        <section className="detail__section">
          <h2 className="section-title">Tools &amp; technologies</h2>
          <div className="tag-row tag-row--wrap">
            {project.tools.map((t) => (
              <span className="mono-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </section>

        <div className="detail__links">
          {project.liveDemo && (
            <a className="btn btn--primary" href={project.liveDemo} target="_blank" rel="noreferrer">
              Live demo
            </a>
          )}
          {project.github && (
            <a className="btn" href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          <a className="btn" href="#work">
            ← Back to work
          </a>
        </div>
      </div>
    </div>
  );
}
