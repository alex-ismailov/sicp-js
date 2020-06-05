const makeWithdraw = () => {
  let balance = 100;

  return (amount) => {
    if (balance >= amount) {
      balance -= amount;
      return balance;
    } else {
      return "insufficient funds";
    }
  };
};

/* testing */
const newWithdraw = makeWithdraw();

console.log(newWithdraw(35)); // 65
console.log(newWithdraw(25)); // 40
console.log(newWithdraw(50)); // "insufficient funds"
