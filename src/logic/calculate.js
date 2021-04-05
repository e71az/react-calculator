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
        next = next.toString();
      } else {
        total *= -1;
        total = total.toString();
      }
      break;
    case '%':
      check();
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
      next = '';
      operation = '+';
      break;
    case '-':
      check();
      next = '';
      operation = '-';
      break;
    case 'X':
      check();
      next = '';
      operation = 'X';
      break;
    case '÷':
      check();
      next = '';
      operation = '÷';
      break;
    case '.':
      if (total.includes('.') && next.includes('.')) {
        break;
      } else if (total.includes('.')) {
        next += '.';
      } else {
        total += '.';
      }
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
