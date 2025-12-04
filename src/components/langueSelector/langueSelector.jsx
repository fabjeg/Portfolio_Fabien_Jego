import { useTranslation } from 'react-i18next';
import { FR, GB } from 'country-flag-icons/react/3x2';
import './style.css';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="language-container">
      <div className="language-toggle">
        <div className={`toggle-slider ${currentLang === 'en' ? 'slide-right' : 'slide-left'}`}></div>
        <button
          onClick={() => changeLanguage('fr')}
          className={`toggle-option ${currentLang === 'fr' ? 'active' : ''}`}
          aria-label="Français"
          title="Français"
        >
          <FR className="flag-icon-toggle" />
          <span className="toggle-text">FR</span>
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`toggle-option ${currentLang === 'en' ? 'active' : ''}`}
          aria-label="English"
          title="English"
        >
          <GB className="flag-icon-toggle" />
          <span className="toggle-text">EN</span>
        </button>
      </div>
    </div>
  );
}
