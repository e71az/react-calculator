import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';

function renderButton({ name = 'button2' }) {
  return <Button className="btn-danger">{name}</Button>;
}

renderButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default renderButton;
