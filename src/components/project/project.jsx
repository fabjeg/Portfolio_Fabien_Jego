import "./style.css";
import portfolio from "../../assets/projets/data";
import { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal/modal";  
import { useTranslation } from 'react-i18next';

export function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedProject, setSelectedProject] = useState(null); 

  const handleCardClick = (port) => {
    setSelectedProject(port); 
    setIsModalOpen(true); 
  };
  const { t } = useTranslation();
  
  return (
    <div className="section projects">
      <h5 className="h5-title" id="projets">{t('projets')}</h5>
      <div className="cards">
        {portfolio.map((port, index) => (
          <Card3D
          key={index}
          image={Array.isArray(port.image) ? port.image[0] : port.image} 
          name={port.name}
          onClick={() => handleCardClick(port)} 
          />
        ))}
      </div>
      {isModalOpen && selectedProject && (
        <Modal project={selectedProject} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}

function Card3D({ image, onClick, name }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * 20;

    const shadowX = ((x - centerX) / centerX) * 20;
    const shadowY = ((y - centerY) / centerY) * 20;

    setStyle({
      transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      boxShadow: `${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.5)`,
      transition: 'transform 0.1s ease, box-shadow 0.1s ease',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)",
      transition: 'all 0.3s ease',
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className="card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Voir les détails du projet ${name}`}
    >
      <div className="card-content">
        <img src={image} alt={`Aperçu du projet ${name}`} className="card-image" />
        <div className='card-content2 '>{name}</div>
      </div>
    </div>
  );
}

Card3D.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
