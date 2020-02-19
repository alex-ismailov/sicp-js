import {
  l, toString as listToString, isEmpty,
} from '@hexlet/pairs-data';
import {
  flatMap, lMap, enumerateInterval, lFilter, foldRight,
} from '../../libs/seqlib';

const makeTriples = (n) => (
  flatMap((i) => flatMap((j) => lMap((k) => l(i, j, k),
      enumerateInterval(1, j - 1)),
    enumerateInterval(1, i - 1)),
  enumerateInterval(1, n))
);

const tripleSum = (triple) => (
  foldRight((curr, acc) => acc + curr, 0, triple)
);

const triplesSum = (n) => (
  lFilter((triple) => tripleSum(triple) === n, 
    makeTriples(n))
);

// const uniqueTriples = (n) => (
//   flatMap((i) => flatMap(
//     (j) => lMap((k) => l(i, j, k),
//       enumerateInterval(1, j - 1)),
//     enumerateInterval(1, i - 1),
//   ),
//   enumerateInterval(1, n))
// );

// const triplesSum = (s) => (
//   lFilter((triple) => (s === foldRight((curr, acc) => acc + curr, 0, triple)),
//     uniqueTriples(s))
// );

/* testing */
for (let i = 0; i < 15; i += 1) {
  const res = triplesSum(i);
  if (!isEmpty(res)) {
    console.log(`i = ${i}, triples: ${listToString(res)}`);
  }
}

// const testing = (curr, end) => {
//   if (curr >= end) {
//     return ;
//   }
//   const res = triplesSum(curr);
//   if (!isEmpty(res)) {
//     console.log(`i = ${curr}, triples: ${listToString(res)}`);
//   }
//   return testing(curr + 1, end);
// };

// testing(1, 8000);
