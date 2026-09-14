import { projects } from "../data.js";
import DeviceMockup from "./DeviceMockup.jsx";
import Stop from "./Stop.jsx";

const featurePatterns = {
  Dashboard: "dashboard",
  "Trips Management": "map",
  Bookings: "list",
  "Financial Reports": "cards",
  Notifications: "list",
  "Live Tracking": "map",
};

export default function CaseStudy() {
  const transgo = projects.find((p) => p.id === "transgo");
  if (!transgo) return null;

  return (
    <Stop index="02" id="transgo-case-study">
      <span className="mono-tag mono-tag--muted">Case study</span>
      <h2 className="section-title">{transgo.name}</h2>
      <p className="section-lead">{transgo.subtitle}</p>

      <div className="case-study__art">
        <DeviceMockup label="TransGo — main dashboard" pattern="dashboard" tall />
      </div>

      <div className="case-study__grid">
        <div>
          <h3 className="case-study__label">Overview</h3>
          <p>{transgo.summary}</p>
        </div>
        <div>
          <h3 className="case-study__label">My role</h3>
          <p>{transgo.role}</p>
          <p className="case-study__context">{transgo.context}</p>
        </div>
      </div>

      <h3 className="case-study__label">Tech stack</h3>
      <div className="tag-row tag-row--wrap">
        {transgo.stack.map((t) => (
          <span className="mono-tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <h3 className="case-study__label case-study__label--features">Key features</h3>
      <div className="features">
        {transgo.features.map((f) => (
          <div className="feature" key={f.name}>
            <DeviceMockup label={f.name} pattern={featurePatterns[f.name] || "cards"} />
            <h4>{f.name}</h4>
            <p>{f.note}</p>
          </div>
        ))}
      </div>
    </Stop>
  );
}
