import { useTranslation } from 'react-i18next';
import './style.css';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); 
  };

  return (
    <div className="language-container">
      <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language} className='select_button'>
        <option value="en" className='select_option'>English</option>
        <option value="fr" className='select_option'>Français</option>
      </select>
    </div>
  );
}
