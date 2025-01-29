import { useState } from "react";
import "./navbar.css";
import { ButtonCv } from "../buttons/button-cv";

export function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => setShowLinks(!showLinks);

  const handleLinkClick = () => setShowLinks(false); // Ferme le menu après le clic

  const navItems = [
    { name: "Accueil", link: "#home" },
    { name: "À propos", link: "#about" },
    { name: "competences", link: "#competences" },
    { name: "projets", link: "#projets" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbarlogo"><ButtonCv/></div>
      <ul className="navbar_links">
        {navItems.map((item, index) => (
          <li key={index} className={`navbar_item slideInDown-${index + 1}`}>
            <a href={item.link} className="navbar_link" onClick={handleLinkClick}>{item.name}</a>
          </li>
        ))}
      </ul>
      <button className="navbar__burguer" onClick={handleShowLinks}>
        <span className="burguer-bar"></span>
      </button>
    </nav>
  );
}
