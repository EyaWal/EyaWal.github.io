import { useLanguage } from "../contexts/LanguageContext";

export default function Projects() {
  const { t, content } = useLanguage();
  const { projects } = content;

  return (
    <section id="projets" className="pad">
      <h2>{t.sections.projects}</h2>

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
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.github}
                </a>
              ) : (
                <span className="muted">
                  {t.projects.comingSoon}
                </span>
              )}

              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.demo}
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}