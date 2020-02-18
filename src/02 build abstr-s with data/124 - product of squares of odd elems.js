import { l } from '@hexlet/pairs-data';
import { lMap, lFilter, enumerateTree, show } from '../../libs/seqlib';

const isOdd = (n) => n % 2 !== 0;

const productOfSquaresOfOddElems = (sequence) => (
  lMap((n) => n ** 2,
    lFilter(isOdd, 
      enumerateTree(sequence)))
);

// const productOfSquaresOfOddElems = (sequence) => {
//   const filtered = lFilter((n) => n % 2 !== 0, sequence);
//   return lReduce((curr, acc) => (curr ** 2) * acc, 1, filtered);
// };

// /* testing */
const tree = l(1, l(2, l(3, l(4, 5), 6), 7), 8);
show(productOfSquaresOfOddElems(tree));
