import { PropTypes } from 'prop-types';

const Display = ({ result = '0' }) => <h1 className="result-box">{result}</h1>;

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
