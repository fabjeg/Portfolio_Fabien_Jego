import './style.css';
import PropTypes from 'prop-types';
import picturesSlide from "../../assets/projets/dataSlide";
import { useState } from "react";
import { Slide } from '../slide/slide';
import { ButtonModal } from '../buttons/button-modal';

export function Modal({ project, setIsModalOpen }) {
  const projectData = picturesSlide.find((proj) => proj.name === project.name);
  const images = projectData?.img || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">{project.name}</h3>
        <div className="modal-carousel">
          <Slide
            images={images}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <p className="modal-description">{project.text}</p>
        <ButtonModal code={project.code} site={project.site} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  project: PropTypes.object.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
