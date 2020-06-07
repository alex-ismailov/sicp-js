import makeMonitored from '../217 - ex. 3.2 - make-monitored';

let s;

describe('3.1.1 Local State Variables', () => {
  describe('217 - ex. 3.2 - make-monitored', () => {
    beforeAll(() => {
      s = makeMonitored(Math.sqrt);
      return s;
    });
    test('makeMonitored return value is function', () => {
      expect(typeof s === 'function').toBeTruthy();
    });
    test('mf get first number', () => {
      expect(s(100)).toBe(10);
    });
    test('first mf counter test, mf get howManyCalls msg', () => {
      expect(s('howManyCalls')).toBe(1);
    });
    test('mf get second number', () => {
      expect(s(9)).toBe(3);
    });
    test('second mf counter test, mf get howManyCalls msg', () => {
      expect(s('howManyCalls')).toBe(2);
    });
    test('mf counter test, mf get resetCount msg', () => {
      s('resetCount');
      expect(s('howManyCalls')).toBe(0);
    });
  });
});
