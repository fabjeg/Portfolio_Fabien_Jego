import { useState, useEffect } from "react";
import "./navbar.css";
import { ButtonCv } from "../buttons/button-cv";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../langueSelector/langueSelector";

export function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => setShowLinks(!showLinks);
  const handleLinkClick = () => setShowLinks(false);
  const { t } = useTranslation();

  useEffect(() => {
    const navbarLinks = document.querySelector(".navbar_links");
  
    if (navbarLinks && showLinks) {
      const preventScroll = (e) => e.preventDefault();
      navbarLinks.addEventListener("wheel", preventScroll, { passive: false });
  
      return () => {
        navbarLinks.removeEventListener("wheel", preventScroll);
      };
    }
  }, [showLinks]); // On écoute les changements de showLinks
  

  const navItems = [
    { name: t("accueil"), link: "#home" },
    { name: t("about"), link: "#about" },
    { name: t("compétences"), link: "#competences" },
    { name: t("projects"), link: "#projets" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="button_cv_navbar">
        <ButtonCv />
      </div>
      <div className="buttonLanguage">
        <LanguageSelector/>
      </div>
      <ul className="navbar_links">
        {navItems.map((item, index) => (
          <li key={index} className={`navbar_item slideInDown-${index + 1}`}>
            <a
              href={item.link}
              className="navbar_link"
              onClick={handleLinkClick}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="navbar__burguer" onClick={handleShowLinks}>
        <span className="burguer-bar"></span>
      </button>
    </nav>
  );
}
