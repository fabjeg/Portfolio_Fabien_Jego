import "./style.css";
import SmoothScroll from 'smooth-scroll';
import { useEffect } from "react";
import { ButtonCv } from "../buttons/button-cv";

export function Header() {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 500, // Réduisez la vitesse pour une réaction plus rapide
      speedAsDuration: true,
      offset: 0, // Optionnel : ajustez si vous avez des barres de navigation fixes
      easing: 'easeInOutCubic', // Ajustez l'effet de transition
      clip: true // S'assure que le défilement s'arrête au bon endroit
    });
  }, []);

  return (
    <div className="header">
       <nav>
      <div>
        <ul className="menu_list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><ButtonCv/></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}
