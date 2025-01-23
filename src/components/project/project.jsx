import "./style.css";
import portfolio from "../../assets/projets/data";
import { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal/modal";  // Assurez-vous d'importer le composant Modal

export function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Gère l'état du modal
  const [selectedProject, setSelectedProject] = useState(null); // Gère le projet sélectionné pour le modal

  const handleCardClick = (port) => {
    console.log('Proposition de projet:', port); // Débogue ici pour voir les données avant de les mettre à jour
    setSelectedProject(port); // Met à jour l'état du projet sélectionné
    setIsModalOpen(true); // Ouvre le modal
  };
  console.log('isModalOpen:', isModalOpen);

  return (
    <div className="section projects">
      <h5 className="h5-title">Projets</h5>
      <div className="cards">
        {portfolio.map((port, index) => (
          <Card3D
          key={index}
          image={Array.isArray(port.image) ? port.image[0] : port.image} 
          onClick={() => handleCardClick(port)} // Ouvre le modal au clic
          />
        ))}
      </div>
      {isModalOpen && selectedProject && (
        <Modal project={selectedProject} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}

function Card3D({ image, onClick }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 40;
    const rotateY = (x / rect.width - 0.5) * -40;

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
      onClick={onClick} // Ajoute l'événement de clic pour ouvrir le modal
    >
      <div className="card-content">
        <img src={image} alt="project-pictures" className="card-image" />
      </div>
    </div>
  );
}

Card3D.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Assure-toi de définir onClick comme une fonction
};
