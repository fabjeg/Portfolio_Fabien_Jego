import "./style.css";
import PropTypes from "prop-types";

export function ConfirmationModal({ message, onClose }) {
    
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="confirmation-message">
      <div className="modal-box">
        <p id="confirmation-message">{message}</p>
        <button onClick={onClose} className="modal-button" aria-label="Fermer le message de confirmation">
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
