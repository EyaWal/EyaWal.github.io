import { profile } from "../data/content.js";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <nav aria-label="Navigation principale">
          <a href="#projets">Projets</a>
          <a href="#parcours">Parcours</a>
          <a href="#competences">Compétences</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
