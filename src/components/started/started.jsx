import { ButtonContact } from "../buttons/button-contact";
import { ButtonCv } from "../buttons/button-cv";
import { LanguageSelector } from "../langueSelector/langueSelector";
import "./style.css";
import { useTranslation } from 'react-i18next';

export function Started() {
  const { t } = useTranslation();
  return (
    <div className="section started">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="container-title">
            <h1 className="h-title">
              Fabien <br /> JÉGO
            </h1>
            <div className="selectLanguage">
            <LanguageSelector/>
            </div>
            <div className="buttonCv">
              <ButtonCv />
            </div>
          </div>
          <h2 className="h2-title">{t('developerTitle')}</h2>
          <article>
            {t('description')}
          </article>
          <div className="buton-started">
            <ButtonContact />
          </div>
        </div>
      </div>
    </div>
  );
}
