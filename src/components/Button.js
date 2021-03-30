import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';

const renderButton = ({ name = 'btn', color = 'light' }) => (
  <Button className={`btn btn-${color} rounded-0 calc-btn`}>{name}</Button>
);

renderButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default renderButton;
