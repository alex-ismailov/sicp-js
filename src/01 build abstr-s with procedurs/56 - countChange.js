/* eslint-disable no-nested-ternary */
const firstDenomination = (kindsOfCoins) => (
  kindsOfCoins === 1 ? 1
    : kindsOfCoins === 2 ? 5
      : kindsOfCoins === 3 ? 10
        : kindsOfCoins === 4 ? 25
          : kindsOfCoins === 5 ? 50
            : 0
);

const cc = (amount, kindsOfCoins) => {
  if (amount === 0) {
    return 1;
  }
  return (amount < 0) || (kindsOfCoins === 0)
    ? 0
    : cc(amount, kindsOfCoins - 1)
      + cc(amount - firstDenomination(kindsOfCoins), kindsOfCoins);
};

const countChange = (amount) => cc(amount, 5);

/* testing */
console.log(countChange(4));
console.log(countChange(5));
console.log(countChange(7));
console.log(countChange(50));
console.log(countChange(100));
