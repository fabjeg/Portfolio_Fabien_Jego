import "./style.css";
import openClassRoom from "../../assets/images/openclassroom.png";
import { ButtonDiploma } from "../buttons/button-diploma";
import { useTranslation } from 'react-i18next';

export function Training() {
    const { t } = useTranslation();
  return (
    <div className="section" id="formation">
      <h4 className="h5-title">{t('formation')}</h4>
      <div className="container_picture_ocr">
      <img src={openClassRoom} alt="OpenClassRoom" className="picture_ocr" />
      </div>
      <article>
        {t('textDiploma')}
      </article>
      <div className="trainnin_button_diploma">
        <ButtonDiploma/>
      </div>
    </div>
  );
}
