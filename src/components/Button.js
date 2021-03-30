import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';

function renderButton({ name = '2', color = 'light' }) {
  return <Button className={`btn btn-${color}`}>{name}</Button>;
}

renderButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default renderButton;
