/* Упражнение 3.4.
Модифицируйте процедуру make-account из упражнения 3.3, добавив еще одну локальную переменную, так,
чтобы, если происходит более семи попыток доступа подряд с неверным паролем,
вызывалась процедура call-the-cops (вызвать полицию). */

// BEGIN (write your solution here)
const callTheCops = () => 'police called';

const makeAccount = (accountBalance, accountPassword) => {
  let balance = accountBalance;
  const password = accountPassword;
  let failCounter = 0;
  const maxFail = 7;

  const withdraw = (amount) => {
    if (balance >= amount) {
      balance -= amount;
      return balance;
    }
    return 'insufficient funds';
  };
  const deposit = (amount) => {
    balance += amount;
    return balance;
  };
  const dispatch = (pass, msg) => {
    if (pass !== password) { // guard expression
      failCounter += 1;
      return failCounter === maxFail
        ? callTheCops()
        : dispatch;
    }
    failCounter = 0;

    switch (msg) {
      case 'withdraw':
        return withdraw;
      case 'deposit':
        return deposit;
      default:
        throw new Error(`unknown msg: ${msg}`);
    }
  };

  return dispatch;
};

export default makeAccount;
// END
