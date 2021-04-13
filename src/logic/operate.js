import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (operation === null) {
    return 0;
  }
  const num1 = numberOne !== null ? Big(numberOne) : Big('0');
  const num2 = numberTwo !== null ? Big(numberTwo) : Big('0');
  let result;

  switch (operation) {
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case 'X':
      result = num1.times(num2);
      break;
    case '÷':
      // eslint-disable-next-line eqeqeq
      result = num2 == '0' ? 'Cannot divide by zero' : num1.div(num2);
      break;
    case '%':
      if (num1 == null) {
        result = num2.div(100);
      } else {
        result = num2.div(100).times(num1).plus(num1);
      }
      break;

    default:
      return 'Cannot solve the operation';
  }
  return result.toString();
};

export default operate;
