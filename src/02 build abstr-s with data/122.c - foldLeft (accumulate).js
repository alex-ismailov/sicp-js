import {
  l, head, tail, isEmpty, toString as listToString, cons,
} from '@hexlet/pairs-data';


const foldLeft = (fn, acc, sequence) => (
  isEmpty(sequence)
    ? acc
    : foldLeft(fn, fn(head(sequence), acc), tail(sequence))
);

// const foldLeft = (cb, acc, sequence) => {
//   if (isEmpty(sequence)) {
//     return acc;
//   }
//   return foldLeft(cb, cb(head(sequence), acc), tail(sequence));
// };

/* testing */
const list = l(1, 2, 3, 4, 5);
console.log(listToString(foldLeft(l, l(), list)));
console.log(foldLeft((curr, acc) => acc + curr, 0, list));
console.log(foldLeft((curr, acc) => acc + curr ** 2, 0, list));
console.log(foldLeft((curr, acc) => acc * curr, 1, list));
console.log(listToString(foldLeft((curr, acc) => cons(curr, acc), l(), list)));
