import "./style.css";
import PropTypes from "prop-types";

export function ConfirmationModal({ message, onClose }) {
    
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p>{message}</p>
        <button onClick={onClose} className="modal-button">
          Fermer
        </button>
      </div>
    </div>
  );
}

ConfirmationModal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
