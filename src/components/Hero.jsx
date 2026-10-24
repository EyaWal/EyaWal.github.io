import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import AsciiPortrait from "./AsciiPortrait.jsx";
import "./Hero.css";

export default function Hero() {
  const [showPhoto, setShowPhoto] = useState(false);
  const { t, content } = useLanguage();
  const { profile } = content;
  

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
            &gt; {t.hero.contact}
          </a>

          <a
            className="btn"
            href="/documents/CV_Eya_Walha.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ {t.hero.cv}
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
              ? t.hero.showAscii
              : t.hero.showPhoto
          }
          aria-pressed={showPhoto}
        >
          <div className="portrait-ascii" aria-hidden={showPhoto}>
            <AsciiPortrait label={profile.portraitLabel} />
          </div>

          <img
            className="portrait-photo"
            src="/photo_profil.png"
            alt={t.hero.photoAlt}
            aria-hidden={!showPhoto}
          />

          <span className="portrait-hint" aria-hidden="true">
            {showPhoto ? t.hero.asciiMode : t.hero.revealPhoto}
          </span>
        </button>
      </div>
    </section>
  );
}