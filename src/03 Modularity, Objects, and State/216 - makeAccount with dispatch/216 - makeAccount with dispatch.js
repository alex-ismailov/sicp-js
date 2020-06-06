/* eslint-disable no-param-reassign */

export default (balance) => {
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
  const dispatch = (msg) => {
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
