import makeAccount from '../217 - ex. 3.4 - make-account with password and cops';

let newAccount;

describe('3.1.1 Local State Variables', () => {
  describe('makeAccount with dispatch, password and cops guard', () => {
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
    test('withdraw with incorrect password, three unsuccessful attempts', () => {
      for (let i = 0; i < 3; i += 1) {
        newAccount('some other password', 'withdraw');
      }
      expect(newAccount('secret password', 'withdraw')(10)).toBe(40);
    });
    test('withdraw an amount exceeding the balance', () => {
      expect(newAccount('secret password', 'withdraw')(500)).toEqual('insufficient funds');
    });
    test('deposit with correct password', () => {
      expect(newAccount('secret password', 'deposit')(40)).toBe(80);
    });
    test('deposit with incorrect password, three unsuccessful attempts', () => {
      for (let i = 0; i < 3; i += 1) {
        newAccount('some other password', 'deposit');
      }
      expect(newAccount('secret password', 'deposit')(20)).toBe(100);
    });
    test('withdraw with incorrect password, seven(maximum) unsuccessful attempts', () => {
      for (let i = 0; i < 6; i += 1) {
        newAccount('some other password', 'withdraw');
      }
      expect(newAccount('some other password', 'withdraw')).toEqual('police called');
    });
  });
});
