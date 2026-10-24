import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher" aria-label="Language selection">
      <button
        type="button"
        className={language === "fr" ? "active" : ""}
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
      >
        FR
      </button>

      <span aria-hidden="true">/</span>

      <button
        type="button"
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}