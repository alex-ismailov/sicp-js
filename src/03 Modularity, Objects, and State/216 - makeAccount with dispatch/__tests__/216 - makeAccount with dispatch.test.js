import makeAccount from '../216 - makeAccount with dispatch';

let newAccount;

describe('3.1.1 Local State Variables', () => {
  describe('makeAccount with dispatch', () => {
    beforeAll(() => {
      newAccount = makeAccount(100);
      return newAccount;
    });
    test('makeAccount return value is function', () => {
      expect(typeof newAccount === 'function').toBeTruthy();
    });
    test('makeAccount return function dispatch', () => {
      expect(newAccount.name === 'dispatch').toBeTruthy();
    });
    test('withdraw', () => {
      expect(newAccount('withdraw')(50)).toBe(50);
    });
    test('withdraw an amount exceeding the balance', () => {
      expect(newAccount('withdraw')(500)).toEqual('insufficient funds');
    });
    test('deposit', () => {
      expect(newAccount('deposit')(40)).toBe(90);
    });
  });
});
