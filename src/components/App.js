import '../style.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const result = calculate(this.state, buttonName);

    this.setState(result);
  };

  render() {
    const { total, next } = this.state;

    return (
      <div className="calc">
        <>
          <Display total={next || total || '0'} />
          <ButtonPanel handleClick={this.handleClick} />
        </>
      </div>
    );
  }
}

export default App;
