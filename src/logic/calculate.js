import operate from './operate';

const calculate = (dataObject, btnName) => {
  let { total, next, operation } = dataObject;

  console.log(dataObject, btnName);

  const check = () => {
    if (next && operation) {
      total = operate(total, next, operation);
      next = null;
    }
  };

  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      if (next) {
        next *= -1;
      } else {
        total *= -1;
      }
      break;
    case '%':
      total = operate(total, next, operation);
      next = null;
      operation = '%';
      break;
    case '=':
      total = operate(total, next, operation);
      operation = null;
      next = null;
      break;
    case '+':
      check();
      console.log(`TOTAL: ${total}`);
      // next = '0';
      operation = '+';
      break;
    case '-':
      check();
      operation = '-';
      break;
    case 'X':
      check();
      total = operate(total, next, operation);
      next = '0';
      operation = 'X';
      break;
    case '÷':
      check();
      total = operate(total, next, operation);
      next = '';
      operation = '÷';
      break;

    default:
      if (operation === null && next === null) {
        total = total === null ? btnName : total + btnName;
      } else if (total && operation) {
        next = next === null ? btnName : next + btnName;
      }
      break;
  }

  return { total, next, operation };
};

export default calculate;
