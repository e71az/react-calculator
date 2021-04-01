import operate from './operate';

const calculate = (dataObject, btnName) => {
  let { total, next, operation } = dataObject;

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
      operation = '=';
      break;
    case '+':
      total = operate(total, next, operation);
      next = '0';
      operation = '+';
      break;
    case '-':
      total = operate(total, next, operation);
      next = '0';
      operation = '-';
      break;
    case 'X':
      total = operate(total, next, operation);
      next = '0';
      operation = 'X';
      break;
    case '÷':
      total = operate(total, next, operation);
      next = '';
      operation = '÷';
      break;

    default:
      total = 'Operation not possible';
      next = null;
      operation = null;
      break;
  }

  return { total, next, operation };
};

export default calculate;
