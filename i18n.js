import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationFR from './local/fr/translationFR.json';
import translationEN from './local/en/translationEN.json';

const savedLanguage = localStorage.getItem('language') || 'fr';

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: translationFR },
    en: { translation: translationEN },
  },
  lng: savedLanguage, 
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
