import { profile } from "../data/content.js";
import AsciiPortrait from "./AsciiPortrait.jsx";

export default function Hero() {
  return (
    <section id="top" className="pad hero">
      <div>
        <h1>
          {profile.name}
          <span className="cursor" aria-hidden="true"></span>
        </h1>
        <p className="tagline">{profile.headline}</p>
        <p className="lede">{profile.lede}</p>
        <a className="btn" href="#contact">
          me contacter
        </a>
      </div>
      <div className="portrait-wrap">
        <AsciiPortrait label={profile.portraitLabel} />
      </div>
    </section>
  );
}
