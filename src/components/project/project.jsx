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
      onClick={onClick} 
    >
      <div className="card-content">
        <img src={image} alt="project-pictures" className="card-image" />
      </div>
    </div>
  );
}

Card3D.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
