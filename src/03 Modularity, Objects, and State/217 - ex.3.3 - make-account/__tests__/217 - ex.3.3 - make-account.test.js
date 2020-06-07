import makeAccount from '../217 - ex.3.3 - make-account';

let newAccount;

describe('3.1.1 Local State Variables', () => {
  describe('makeAccount with dispatch and password ', () => {
    beforeAll(() => {
      newAccount = makeAccount(100, 'secret password');
      return newAccount;
    });
    test('makeAccount return value is function', () => {
      expect(typeof newAccount === 'function').toBeTruthy();
    });
    test('makeAccount return function dispatch', () => {
      expect(newAccount.name === 'dispatch').toBeTruthy();
    });
    test('withdraw with correct password', () => {
      expect(newAccount('secret password', 'withdraw')(50)).toBe(50);
    });
    test('withdraw with incorrect password', () => {
      expect(newAccount('some other password', 'withdraw')).toEqual('Incorrect password, try again');
    });
    test('withdraw an amount exceeding the balance', () => {
      expect(newAccount('secret password', 'withdraw')(500)).toEqual('insufficient funds');
    });
    test('deposit with correct password', () => {
      expect(newAccount('secret password', 'deposit')(40)).toBe(90);
    });
    test('deposit with incorrect password', () => {
      expect(newAccount('some other password', 'deposit')).toEqual('Incorrect password, try again');
    });
  });
});
