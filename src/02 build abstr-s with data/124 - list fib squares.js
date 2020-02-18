import { lMap, enumerateInterval, show } from '../../libs/seqlib';

const fib = (n) => {
  const iter = (a, b, count) => (
    count === 0
      ? b
      : iter(a + b, a, count - 1)
  );
  return iter(1, 0, n);
};

const listFibSquares = (num) => (
  lMap((curr) => curr ** 2,
    lMap((n) => fib(n),
      enumerateInterval(1, num)))
);

// const listFibSquares = (num) => {
//   const interval = enumerateInterval(0, num);
//   const fibs = lMap(fib, interval);
//   return lMap((n) => n ** 2, fibs);
// };

/* testing */
show(listFibSquares(7));
