import PropTypes from "prop-types";
import "./style.css";
export function Slide({ images, currentIndex, setCurrentIndex }) {
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };
  return (
    <div className="carousel-overlay">
      <div className="carousel-container">
        <div className="carousel-image carousel-controls">
          <button onClick={prevImage} className="carousel-arrow">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <img
            src={images[currentIndex]}
            alt="carousel"
            className="carousel-img"
          />
          <button onClick={nextImage} className="carousel-arrow">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
Slide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};
