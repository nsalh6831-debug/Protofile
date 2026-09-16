import Reveal from "./Reveal.jsx";

export default function Stop({ index, id, className = "", short = false, end = false, children }) {
  return (
    <div id={id} className={`stop ${short ? "stop--short" : ""} ${end ? "stop--end" : ""} ${className}`}>
      <span className="stop__line" aria-hidden="true" />
      <span className="stop__marker" aria-hidden="true">
        {index}
      </span>
      <Reveal className="stop__content">{children}</Reveal>
    </div>
  );
}
