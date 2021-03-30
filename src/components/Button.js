import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';

function renderButton({ name = 'btn', color = 'light' }) {
  return (
    <Button className={`btn btn-${color} rounded-0 calc-btn`}>{name}</Button>
  );
}

renderButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default renderButton;
