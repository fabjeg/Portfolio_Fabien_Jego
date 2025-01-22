import './style.css';
import PropTypes from 'prop-types';

export function ButtonBurguer({ onClick }) {
  return (
    <label className="burger" htmlFor="burger">
      <input type="checkbox" id="burger" onClick={onClick} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

ButtonBurguer.propTypes = {
  onClick: PropTypes.func.isRequired,
};
