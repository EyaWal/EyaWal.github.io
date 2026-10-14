import { journey } from "../data/content.js";

export default function Journey() {
  return (
    <section id="parcours" className="pad">
      <h2>Parcours</h2>
      {journey.map((item) => (
        <div className="path" key={item.title}>
          <span className="when">{item.when}</span>
          <div>
            <b>{item.title}</b>
            <span>{item.text}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
