import { useEffect, useCallback } from "react";

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const count = images.length;

  const goNext = useCallback(() => {
    onNavigate((index + 1) % count);
  }, [index, count, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + count) % count);
  }, [index, count, onNavigate]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goNext, goPrev]);

  if (!images[index]) return null;
  const current = images[index];

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        ✕
      </button>

      {count > 1 && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={current.image} alt={current.label} className="lightbox__img" />
        {current.label && <figcaption className="lightbox__caption">{current.label}</figcaption>}
      </figure>

      {count > 1 && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {count > 1 && (
        <div className="lightbox__counter">
          {index + 1} / {count}
        </div>
      )}
    </div>
  );
}
