
import { journey } from "../data/content.js";

export default function Journey() {
  return (
    <section id="parcours" className="pad">
      <h2>Expérience & Formation</h2>

      {journey.map((item) => (
        <div className="path" key={item.title}>
          <span className="when">{item.when}</span>

          <div className="journey-content">
            <b>{item.title}</b>

            {item.sections ? (
              <div className="journey-sections">
                {item.sections.map((section) => (
                  <div
                    className="journey-card"
                    key={section.title}
                  >
                    <div className="journey-card-header">
                      <h3>{section.title}</h3>

                      {section.status && (
                        <span className="journey-status">
                          {section.status}
                        </span>
                      )}
                    </div>

                    <p>{section.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <span>{item.text}</span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
