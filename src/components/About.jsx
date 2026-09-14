import { about } from "../data.js";
import Stop from "./Stop.jsx";

export default function About() {
  return (
    <Stop index="03" id="about">
      <h2 className="section-title">About</h2>
      <p className="about__text">{about.text}</p>
           <div className="about__edu">
        <strong>{about.education.school}</strong>
        <span>{about.education.faculty}</span>
        <span className="mono-tag mono-tag--muted">{about.education.years}</span>
      </div>

      <div className="about__languages">
        {about.languages.map((l) => (
          <div className="about__language" key={l.name}>
            <span>{l.name}</span>
            <span className="mono-tag mono-tag--muted">{l.level}</span>
          </div>
        ))}
      </div>
    </Stop>
  );
}
