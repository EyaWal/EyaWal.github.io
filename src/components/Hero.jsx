import { profile } from "../data/content.js";
import AsciiPortrait from "./AsciiPortrait.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1>{profile.headline}</h1>
          <p className="lede">{profile.lede}</p>
          <ul className="chips" aria-label="Technologies">
            {profile.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
          <a className="button" href="#contact">
            Me contacter
          </a>
        </div>
        <div className="hero-portrait">
          <AsciiPortrait label={profile.portraitLabel} />
        </div>
      </div>
    </section>
  );
}
