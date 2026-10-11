import { journey } from "../data/content.js";

export default function Journey() {
  return (
    <section id="parcours" className="section">
      <div className="wrap">
        <h2>Parcours</h2>
        <ol className="timeline">
          {journey.map((item) => (
            <li key={item.title}>
              <span className="when">{item.when}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
