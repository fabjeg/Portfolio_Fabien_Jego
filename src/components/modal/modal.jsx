import "./style.css";
import PropTypes from "prop-types";
import picturesSlide from "../../assets/projets/dataSlide";
import { useState } from "react";
import { Slide } from "../slide/slide";
import { ButtonModal } from "../buttons/button-modal";

export function Modal({ project, setIsModalOpen }) {
  const projectData = picturesSlide.find((proj) => proj.name === project.name);
  const images = projectData?.img || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="containerButtonClose">
        <button className="fa-solid fa-xmark buttonClose" onClick={() => setIsModalOpen(false)}/>
        </div>
        <h3 className="modal-title">{project.name}</h3>
        
        {images.length > 0 && (
          <div className="modal-carousel">
            <Slide
              images={images}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        )}

        <div className="container-modal-description">
          <p className="modal-description">{project.text}</p>
          {project.identifier && (
            <p className="modal-description">identifiant: {project.identifier}</p>
          )}
          {project.Mp && (
            <p className="modal-description">Mot de passe: {project.Mp}</p>
          )}
        </div>

        <div className="container-comp">
          {project.competences.map((comp, idx) => (
            <span key={idx} className="span-competences">
              {comp}
            </span>
          ))}
        </div>
        
        <ButtonModal code={project.code} site={project.site} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  project: PropTypes.object.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
