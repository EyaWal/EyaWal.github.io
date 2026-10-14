import { skills } from "../data/content.js";

export default function Skills() {
  return (
    <section id="competences" className="pad">
      <h2>Stack</h2>
      <div className="stack">
        {skills.map((s) => (
          <p key={s.group}>
            <em>{s.group.toLowerCase()} :</em> {s.items.join(", ").toLowerCase()}
          </p>
        ))}
      </div>
    </section>
  );
}
