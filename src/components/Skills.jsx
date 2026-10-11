import { skills } from "../data/content.js";

export default function Skills() {
  return (
    <section id="competences" className="section">
      <div className="wrap">
        <h2>Compétences</h2>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group}>
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
