import { PropTypes } from 'prop-types';
import * as styles from '../style.module.css';

const renderButton = (props) => {
  const {
    name, clickHandler, color, className, wide,
  } = props;

  return (
    <button
      type="button"
      className={`${className} rounded-0 calc-btn ${
        color === 'white' ? styles.btnWhite : styles.btnOrange
      } ${wide === true ? styles.btnWide : styles.btnNotWide}`}
      onClick={() => {
        clickHandler(name);
      }}
    >
      {name}
    </button>
  );
};

renderButton.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default renderButton;
