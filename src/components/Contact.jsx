import { profile } from "../data.js";
import Stop from "./Stop.jsx";

export default function Contact() {
  return (
    <Stop index="04" id="contact" short end>
      <h2 className="section-title">Have a project in mind?</h2>
      <div className="contact__links">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </div>
      <p className="footer-note">Designed and built by Nawal Saleh.</p>
    </Stop>
  );
}
