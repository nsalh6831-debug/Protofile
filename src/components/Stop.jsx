export default function Stop({ index, id, className = "", short = false, children }) {
  return (
    <div id={id} className={`stop ${short ? "stop--short" : ""} ${className}`}>
      <span className="stop__line" aria-hidden="true" />
      <span className="stop__marker" aria-hidden="true">
        {index}
      </span>
      <div className="stop__content">{children}</div>
    </div>
  );
}
