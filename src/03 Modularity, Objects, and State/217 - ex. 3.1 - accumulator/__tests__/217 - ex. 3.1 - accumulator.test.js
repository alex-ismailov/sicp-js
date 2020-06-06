import makeAccumulator from '../217 - ex. 3.1 - accumulator';

let A;

describe('3.1.1 Local State Variables', () => {
  describe('217 - ex. 3.1 - accumulator', () => {
    beforeAll(() => {
      A = makeAccumulator(5);
      return A;
    });
    test('makeAccumulator return value is function', () => {
      expect(typeof A === 'function').toBeTruthy();
    });
    test('accumulator first sum', () => {
      expect(A(10)).toBe(15);
    });
    test('accumulator second sum', () => {
      expect(A(20)).toBe(35);
    });
  });
});