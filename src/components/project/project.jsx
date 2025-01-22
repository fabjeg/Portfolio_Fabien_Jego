import "./style.css";
import portfolio from "../../assets/projets/data";
import { useState } from "react";
import PropTypes from "prop-types";

export function Project() {
  return (
    <div className="section projects">
      <h5 className="h5-title">projets</h5>
      <div className="cards">
        {portfolio.map((port, index) => (
          <Card3D key={index} image={port.image} />
        ))}
      </div>
    </div>
  );
}

function Card3D({ image }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Position relative de la souris par rapport à la carte
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculer la rotation en fonction de la position de la souris
    const rotateX = ((y / rect.height) - 0.5) * 20; // Rotation sur l'axe X
    const rotateY = ((x / rect.width) - 0.5) * -20; // Rotation sur l'axe Y

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0) rotateY(0) scale(1)",
    });
  };

  return (
    <div
      className="card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        <img src={image} alt="project-pictures" className="card-image" />
      </div>
    </div>
  );
}
Card3D.propTypes = {
  image: PropTypes.string.isRequired,
};
