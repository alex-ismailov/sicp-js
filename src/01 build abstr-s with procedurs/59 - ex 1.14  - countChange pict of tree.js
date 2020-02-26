import { l } from '@hexlet/pairs-data';
import { show } from '../../libs/seqlib';

const makeNode = (amount, kindOfCoins, left, right) => {
  show(l(amount, kindOfCoins, left, right));
  return l(amount, kindOfCoins, left, right);
};
const makeLeaf = (amount) => l(amount);

/* eslint-disable no-nested-ternary */
const firstDenomination = (kindsOfCoins) => (
  kindsOfCoins === 1 ? 1
    : kindsOfCoins === 2 ? 5
      : kindsOfCoins === 3 ? 10
        : kindsOfCoins === 4 ? 25
          : kindsOfCoins === 5 ? 50
            : 0
);

const cc = (amount, kindOfCoins) => {
  if (amount === 0) {
    return makeLeaf(1);
  }
  return (amount < 0) || (kindOfCoins === 0)
    ? makeLeaf(0)
    : makeNode(amount, kindOfCoins, cc(amount, kindOfCoins - 1), cc(amount - firstDenomination(kindOfCoins), kindOfCoins));
};

const countChange = (amount) => cc(amount, 5);

// show(countChange(11));
countChange(11);
