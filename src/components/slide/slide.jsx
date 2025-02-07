import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./style.css";

export function Slide({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = useCallback(
    (step) => {
      setCurrentIndex((prev) => (prev + step + images.length) % images.length);
    },
    [images.length]
  );

  return (
    <div className="carousel-overlay">
      <div className="carousel-container">
        <button onClick={() => changeImage(-1)} className="carousel-arrow left">
          ❮
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-img"
        />
        <button onClick={() => changeImage(1)} className="carousel-arrow right">
          ❯
        </button>
      </div>
    </div>
  );
}

Slide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
