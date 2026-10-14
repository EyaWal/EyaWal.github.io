import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <section id="projets" className="pad">
      <h2>Projets</h2>
      {projects.map((p) => (
        <article className="project" key={p.title}>
          <div>
            <h3>{p.title}</h3>
            <span className="tag">[{p.status.label}]</span>
          </div>
          <div>
            <p>{p.description}</p>
            <ul className="facts">
              {p.facts.map(([label, value]) => (
                <li key={label}>
                  {label} : {value}
                </li>
              ))}
            </ul>
            <div className="plinks">
              {p.repo ? (
                <a href={p.repo} target="_blank" rel="noopener noreferrer">
                  Code sur GitHub
                </a>
              ) : (
                <span className="muted">dépôt à venir</span>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                  Démo en ligne
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
