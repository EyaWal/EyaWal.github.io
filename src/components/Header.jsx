export default function Header() {
  return (
    <header className="titlebar">
      <span className="pips" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </span>
      <span>Eya WALHA :~</span>
      <nav aria-label="Navigation principale">
        <a href="#projets">projets</a>
        <a href="#parcours">parcours</a>
        <a href="#competences">stack</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
  );
}
