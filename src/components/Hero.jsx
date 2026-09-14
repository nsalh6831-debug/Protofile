import { profile } from "../data.js";
import DeviceMockup from "./DeviceMockup.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__text">
        <h1 className="hero__title">
          {profile.name}
          <span className="hero__role">{profile.role}</span>
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            View my work
          </a>
          <a className="btn" href={profile.cvFile} download>
            Download CV
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="hero__art">
        <DeviceMockup label="TransGo dashboard" pattern="dashboard" tall />
      </div>
    </section>
  );
}
