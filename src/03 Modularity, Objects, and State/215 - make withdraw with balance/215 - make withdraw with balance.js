const makeWithdrawWithBalance = (balance) => (amount) => {
  if (balance >= amount) {
    balance -= amount;
    return balance;
  }
  return 'insufficient funds';
};

/* testing */
const w1 = makeWithdrawWithBalance(100);
const w2 = makeWithdrawWithBalance(100);

console.log(w1(50)); // output: 50
console.log(w2(70)); // output: 30
console.log(w2(40)); // output: "Insufficient funds"
console.log(w1(40)); // output: 10
