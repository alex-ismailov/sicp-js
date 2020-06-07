/* Упражнение 3.3.
Измените процедуру make-account так, чтобы она создавала счета, защищенные паролем.
А именно, make-account должна в качестве дополнительного аргумента принимать символ,

например:

(define acc (make-account 100 ’secret-password))

Получившийся объект-счет должен обрабатывать запросы, только если они сопровождаются паролем,
с которым счет был создан, а в противном случае он должен жаловаться:

((acc ’secret-password ’withdraw) 40)
60

((acc ’some-other-password ’deposit) 50)
"Неверный пароль"
 */

// BEGIN (write your solution here)
const makeAccount = (accountBalance, accountPassword) => {
  let balance = accountBalance;
  const password = accountPassword;

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
      return 'Incorrect password, try again';
    }
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
