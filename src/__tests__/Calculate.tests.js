import calculate from '../logic/calculate';

describe('Calculate', () => {
  let dataObject = {
    total: null,
    next: null,
    operation: null,
  };
  let buttonName = null;

  describe('Normal operations', () => {
    it('5 + 5 should return 10', () => {
      dataObject = { total: 5, next: 5, operation: '+' };
      buttonName = '=';
      const result = calculate(dataObject, buttonName);
      expect(result).toHaveProperty('total', '10');
    });

    it('5 + 3 should return 2', () => {
      dataObject = { total: 5, next: 3, operation: '-' };
      const result = calculate(dataObject, buttonName);
      expect(result).toHaveProperty('total', '2');
    });

    it('5 x 7 should return 35', () => {
      dataObject = { total: 5, next: 7, operation: 'X' };
      const result = calculate(dataObject, buttonName);
      expect(result).toHaveProperty('total', '35');
    });

    it('500 / 2 should return 250', () => {
      dataObject = { total: 500, next: 2, operation: '÷' };
      const result = calculate(dataObject, buttonName);
      expect(result).toHaveProperty('total', '250');
    });
  });

  describe('Special operations', () => {
    it('5 +/- should return -5', () => {
      dataObject = { total: 5, next: null, operation: null };
      buttonName = '+/-';
      const result = calculate(dataObject, buttonName);
      expect(result).toHaveProperty('total', '-5');
    });
  });
  describe('Special operations', () => {
    it('Clicking AC should reset everthing to null', () => {
      dataObject = { total: 5, next: 10, operation: '+' };
      buttonName = 'AC';
      const result = calculate(dataObject, buttonName);
      expect(result).toEqual({ next: null, operation: null, total: null });
    });

    it('5 % 8 should return 5.4', () => {
      dataObject = { total: 5, next: 8, operation: '%' };
      buttonName = '=';
      const result = calculate(dataObject, buttonName);
      expect(result).toHaveProperty('total', '5.4');
    });

    it('5.5 + 6.7 should return 12.2', () => {
      dataObject = { total: 5.5, next: 6.7, operation: '+' };
      buttonName = '=';
      const result = calculate(dataObject, buttonName);
      expect(result).toHaveProperty('total', '12.2');
    });

    it('Clicking on the "." button should return the number + "."', () => {
      dataObject = { total: '5', next: null, operation: null };
      buttonName = '.';
      const result = calculate(dataObject, buttonName);
      expect(result).toHaveProperty('total', '5.');
    });
  });
});
