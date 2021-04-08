import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';

const renderButton = (props) => {
  const {
    name, clickHandler, color, className,
  } = props;

  return (
    <Button
      className={`btn-${color} ${className} rounded-0 calc-btn`}
      onClick={() => {
        clickHandler(name);
      }}
    >
      {name}
    </Button>
  );
};

renderButton.defaultProps = {
  // name: 'btn',
  color: 'light',
};

renderButton.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default renderButton;
