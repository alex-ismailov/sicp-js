import { l } from '@hexlet/pairs-data';
import {
  lMap, lFilter, foldRight, enumerateInterval, enumerateTree, show,
} from '../../libs/seqlib';

/* число Фиббоначи по порядковому номеру */
const fib = (n) => {
  const iter = (a, b, count) => (
    count === 0
      ? b
      : iter(a + b, a, count - 1)
  );
  return iter(1, 0, n);
};

const isOdd = (n) => n % 2 !== 0;
const isEven = (n) => n % 2 === 0;

/* *** solution *** */
const sumOddSquares = (tree) => (
  foldRight((curr, acc) => curr + acc, 0,
    lMap((n) => n ** 2,
      lFilter(isOdd,
        enumerateTree(tree))))
);

const evenFibs = (num) => (
  lFilter(isEven,
    lMap((n) => fib(n),
      enumerateInterval(1, num)))
);

/* **************************** */
// const sumOddSquares = (tree) => {
//   const enumedTree = enumerateTree(tree);
//   const filtered = lFilter((n) => n % 2 !== 0, enumedTree);
//   const mapped = lMap((n) => n ** 2, filtered);
//   return lReduce((curr, acc) => curr + acc, 0, mapped);
// };

// const evenFibs = (n) => {
//   const interval = enumerateInterval(0, n);
//   const fibs = lMap(fib, interval);
//   return lFilter((n) => n % 2 === 0, fibs);
// };

/* testing */
const tree = l(1, l(2, l(3, l(4, 5))));
show(sumOddSquares(tree));
show(evenFibs(13));
