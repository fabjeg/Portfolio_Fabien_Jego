import { ButtonContact } from "../buttons/button-contact";
import { ButtonCv } from "../buttons/button-cv";
import "./style.css";

export function Started() {
  return (
    <div className="section started">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="container-title-cv">
            <h1 className="h-title">
              Fabien <br /> JÉGO
            </h1>
            <div className="buttonCv">
              <ButtonCv />
            </div>
          </div>
          <h2 className="h2-title">Développeur front-end</h2>
          <article>
            Je m&apos;appelle Fabien Jego et je suis un développeur web
            front-end passionné par la technologie et le développement. Diplômé
            d&apos;une formation intensive de 9 mois chez OpenClassrooms en tant
            qu&apos;intégrateur web, j&apos;ai acquis des compétences solides et
            un niveau de connaissances équivalent à un Bac+2, me permettant de
            mener à bien des projets ambitieux et soignés.
          </article>
          <div className="buton-started">
            <ButtonContact />
          </div>
        </div>
      </div>
    </div>
  );
}
