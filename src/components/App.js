import '../style.css';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const App = () => {
  const [allValues, setAllValues] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const result = calculate(allValues, buttonName);

    setAllValues(result);
  };

  const { total, next } = allValues;

  return (
    <div className="calc">
      <div>
        <Display total={next || total || '0'} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
