import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <section id="projets" className="section">
      <div className="wrap">
        <h2>Projets</h2>
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <div className="project-info">
              <h3>{p.title}</h3>
              <span className={`status ${p.status.tone}`}>{p.status.label}</span>
              <p>{p.description}</p>
              <div className="project-links">
                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">
                    Code sur GitHub
                  </a>
                ) : (
                  <span className="muted">Dépôt à venir</span>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer">
                    Démo en ligne
                  </a>
                )}
              </div>
            </div>
            <dl className="project-facts">
              {p.facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
