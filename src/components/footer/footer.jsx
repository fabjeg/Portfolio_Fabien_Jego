import { ButtonScrollTop } from "../buttons/button-scrool-top";
import "./style.css";
import logoOpen from "../../assets/icons/OpenClassRoom-icon.webp";
import { LanguageSelector } from "../langueSelector/langueSelector";

export function Footer() {
  const logos = [
    { class: "fa fa-github", url: "https://github.com/fabjeg" },
    {
      class: "fa fa-linkedin-square",
      url: "https://www.linkedin.com/in/fabien-jégo-2b286230a",
    },
    {
      class: null,
      url: "https://openclassrooms.com/fr/profile/view-as/recruiter",
      image: logoOpen,
      imgClass: "unique-logo-img",
    },
  ];

  return (
    <div className="container-footer">
      <div className="languageButton">
      <LanguageSelector/>
      </div>
      <div className="containerLogo">
        {logos.map((logo, index) => (
          <div key={index} className="logo_footer">
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              {logo.image ? (
                <div className="logo_img">
                  <img src={logo.image} alt="logo" className={logo.imgClass} />
                </div>
              ) : (
                <span className={logo.class}></span>
              )}
            </a>
          </div>
        ))}
      </div>
      <ButtonScrollTop />
    </div>
  );
}
