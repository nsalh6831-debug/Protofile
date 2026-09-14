import { skills } from "../data.js";
import Stop from "./Stop.jsx";

export default function Skills() {
  return (
    <Stop index="03" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skills-group" key={group.group}>
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Stop>
  );
}
