import "./style.css";
import openClassRoom from "../../assets/images/openclassroom.png";
import { ButtonDiploma } from "../buttons/button-diploma";

export function Trainning() {
  return (
    <div className="section">
      <h4 className="h5-title">Formation</h4>
      <div className="container_picture_ocr">
      <img src={openClassRoom} alt="OpenClassRoom" className="picture_ocr" />
      </div>
      <article>
        OpenClassrooms est une plateforme de formation en ligne spécialisée dans
        les métiers du numérique. Reconnue pour son approche pédagogique
        innovante, elle propose des parcours professionnalisants aboutissant à
        des diplômes reconnus par l’État. Grâce à une combinaison de cours
        interactifs, de projets pratiques et d’un mentorat personnalisé,
        OpenClassrooms permet aux apprenants d’acquérir des compétences
        concrètes et adaptées aux besoins du marché. C’est au sein de cet
        organisme que j’ai suivi ma formation en développement web, me
        permettant d’obtenir mon diplôme et de maîtriser les technologies
        essentielles à la création d’interfaces modernes et intuitives.
      </article>
      <div className="trainnin_button_diploma">
        <ButtonDiploma/>
      </div>
    </div>
  );
}
