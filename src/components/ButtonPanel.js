import { PropTypes } from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const { handleClick } = props;

  return (
    <div className="button-panel">
      <div className="group-1">
        <Button name="AC" clickHandler={handleClick} color="white" />
        <Button name="+/-" clickHandler={handleClick} color="white" />
        <Button name="%" clickHandler={handleClick} color="white" />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="group-2">
        <Button name="7" clickHandler={handleClick} color="white" />
        <Button name="8" clickHandler={handleClick} color="white" />
        <Button name="9" clickHandler={handleClick} color="white" />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div className="group-3">
        <Button name="4" clickHandler={handleClick} color="white" />
        <Button name="5" clickHandler={handleClick} color="white" />
        <Button name="6" clickHandler={handleClick} color="white" />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="group-4">
        <Button name="1" clickHandler={handleClick} color="white" />
        <Button name="2" clickHandler={handleClick} color="white" />
        <Button name="3" clickHandler={handleClick} color="white" />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="group-5">
        <Button
          name="0"
          clickHandler={handleClick}
          className="btn-0"
          color="white"
          wide
        />
        <Button name="." clickHandler={handleClick} color="white" />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
