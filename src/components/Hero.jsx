
import { useState } from "react";
import { profile } from "../data/content.js";
import AsciiPortrait from "./AsciiPortrait.jsx";
import "./Hero.css";

export default function Hero() {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <section id="top" className="pad hero">
      <div>
        <h1>
          {profile.name}
          <span className="cursor" aria-hidden="true"></span>
        </h1>

        <p className="tagline">{profile.headline}</p>
        <p className="lede">{profile.lede}</p>

        <div className="hero-actions">
          <a className="btn" href="#contact">
            &gt; me contacter
          </a>

          <a
            className="btn"
            href="/documents/CV_Eya_Walha.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ voir mon CV
          </a>
        </div>

      </div>

      <div className="portrait-wrap">
        <button
          type="button"
          className={`portrait-toggle ${showPhoto ? "show-photo" : ""}`}
          onClick={() => setShowPhoto((current) => !current)}
          aria-label={
            showPhoto
              ? "Afficher le portrait ASCII"
              : "Afficher la photo réelle"
          }
          aria-pressed={showPhoto}
        >
          <div className="portrait-ascii" aria-hidden={showPhoto}>
            <AsciiPortrait label={profile.portraitLabel} />
          </div>

          <img
            className="portrait-photo"
            src="/photo_profil.png"
            alt="Portrait professionnel d'Eya Walha"
            aria-hidden={!showPhoto}
          />

          <span className="portrait-hint" aria-hidden="true">
            {showPhoto ? "↩ MODE ASCII" : "↗ REVEAL PHOTO"}
          </span>
        </button>
      </div>
    </section>
  );
}
