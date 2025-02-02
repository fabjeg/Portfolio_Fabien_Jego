import { ButtonScrollTop } from "../buttons/button-scrool-top";
import "./style.css";
import logoOpen from "../../assets/icons/OpenClassRoom-icon.webp";

export function Footer() {
  const logos = [
    { class: "fa fa-github", url: "https://github.com/fabjeg" },
    {
      class: "fa fa-linkedin-square",
      url: "https://www.linkedin.com/in/fabien-jego-2b286230a/",
    },
    { class: null, url: "https://openclassrooms.com/fr/profile/view-as/recruiter", image: logoOpen },
  ];

  return (
    <div className="container-footer">
      <div className="containerLogo">
        {logos.map((logo, index) => (
          <div key={index} className="logo_footer">
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              {logo.image ? (
                <img src={logo.image} alt="logo" className="logo_image" />
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
