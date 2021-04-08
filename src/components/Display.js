import { PropTypes } from 'prop-types';

const Display = (props) => {
  const { total } = props;
  return <h1 className="result-box text-truncate text-right">{total}</h1>;
};

Display.defaultProps = {
  total: '0',
};

Display.propTypes = {
  total: PropTypes.string,
};

export default Display;
