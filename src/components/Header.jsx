import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { t, language } = useLanguage();

  return (
    <header className="titlebar">
      <span className="pips" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </span>

      <span>Eya WALHA :~</span>

      <nav aria-label={language === "fr" ? "Navigation principale" : "Main navigation"}>
        <a href="#parcours">{t.nav.journey}</a>
        <a href="#projets">{t.nav.projects}</a>
        <a href="#competences">{t.nav.stack}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>

      <LanguageSwitcher />
    </header>
  );
}
