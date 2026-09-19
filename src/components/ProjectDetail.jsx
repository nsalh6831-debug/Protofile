import { useState, useEffect } from "react";
import DeviceMockup from "./DeviceMockup.jsx";
import Lightbox from "./Lightbox.jsx";

export default function ProjectDetail({ project }) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const gallery = project.gallery || [];

  // Category tabs: only shown when gallery photos have a `category` field
  // (large galleries like Masa Beauty / TransGo). Falls back to one flat list otherwise.
  const categories = Array.from(new Set(gallery.map((g) => g.category).filter(Boolean)));
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredIndices = gallery
    .map((_, i) => i)
    .filter((i) => activeCategory === "All" || gallery[i].category === activeCategory);

  useEffect(() => {
    if (!filteredIndices.includes(activeImage)) {
      setActiveImage(filteredIndices[0] ?? 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  // Hero photo: set project.heroImage in data.js to swap it independently of
  // gallery order/index 0. Falls back to project.image, then the first gallery photo.
  const heroSrc = project.heroImage || project.image || gallery[0]?.image;
  const heroInGallery = gallery.some((g) => g.image === heroSrc);
  // Images the lightbox can flip through. If the hero photo isn't already
  // one of the gallery photos, it's added at the front so it's still viewable.
  const lightboxImages = heroInGallery || !heroSrc
    ? gallery
    : [{ label: `${project.name} overview`, image: heroSrc }, ...gallery];
  const galleryOffset = heroInGallery || !heroSrc ? 0 : 1;
  const heroLightboxIndex = heroInGallery
    ? lightboxImages.findIndex((g) => g.image === heroSrc)
    : 0;

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

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
          {heroSrc ? (
            <button
              className="mockup-frame"
              onClick={() => openLightbox(heroLightboxIndex)}
              aria-label={`Open ${project.name} image`}
            >
              <img src={heroSrc} alt={`${project.name} hero`} className="mockup mockup--photo" />
              <span className="mockup-frame__hint">⤢ View full size</span>
            </button>
          ) : (
            <DeviceMockup label={`${project.name} hero`} pattern={gallery[0]?.pattern || "dashboard"} tall />
          )}
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

            {categories.length > 1 && (
              <div className="gallery__tabs">
                {["All", ...categories].map((cat) => (
                  <button
                    key={cat}
                    className={`gallery__tab ${activeCategory === cat ? "is-active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            <div className="gallery">
              <div className="gallery__main">
                {gallery[activeImage].image ? (
                  <button
                    className="mockup-frame"
                    onClick={() => openLightbox(activeImage + galleryOffset)}
                    aria-label={`Open ${gallery[activeImage].label}`}
                  >
                    <img
                      src={gallery[activeImage].image}
                      alt={gallery[activeImage].label}
                      className="mockup mockup--photo"
                    />
                    <span className="mockup-frame__hint">⤢ View full size</span>
                  </button>
                ) : (
                  <DeviceMockup
                    label={gallery[activeImage].label}
                    pattern={gallery[activeImage].pattern}
                    tall
                  />
                )}
              </div>
              {filteredIndices.length > 1 && (
                <div className="gallery__thumbs">
                  {filteredIndices.map((i) => {
                    const g = gallery[i];
                    return (
                      <button
                        key={g.label}
                        className={`gallery__thumb ${i === activeImage ? "is-active" : ""}`}
                        onClick={() => setActiveImage(i)}
                        aria-label={g.label}
                      >
                        {g.image ? (
                          <img src={g.image} alt={g.label} className="mockup" />
                        ) : (
                          <DeviceMockup label={g.label} pattern={g.pattern} />
                        )}
                      </button>
                    );
                  })}
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

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onNavigate={setLightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
