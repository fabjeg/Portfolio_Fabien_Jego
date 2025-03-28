import { ButtonContact } from "../buttons/button-contact";
import { ButtonCv } from "../buttons/button-cv";
import "./style.css";
import { useTranslation } from "react-i18next";

export function Started() {
  const { t } = useTranslation();
  return (
    <div className="section started" id="home">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="container-title">
            <h1 className="h-title">
              Fabien <br /> JÉGO
            </h1>
            <div className="container-strong">
              <strong className="strong">
              {t("search")}
              </strong>
            </div>
          </div>
          <h2 className="h2-title">{t("developerTitle")}</h2>
          <article>{t("description")}</article>
          <div className="buton-started">
            <ButtonContact />
            <ButtonCv />
          </div>
        </div>
      </div>
    </div>
  );
}
