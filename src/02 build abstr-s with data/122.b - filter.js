import {
  l, head, tail, isEmpty, toString as listToString, cons,
} from '@hexlet/pairs-data';

const lFilter = (fn, list) => {
  if (isEmpty(list)) {
    return l();
  }
  return fn(head(list))
    ? cons(head(list), lFilter(fn, tail(list)))
    : lFilter(fn, tail(list));
};

// const lFilter = (fn, list) => (
//   isEmpty(list)
//     ? l()
//     : fn(head(list))
//       ? cons(head(list), lFilter(fn, tail(list)))
//       : lFilter(fn, tail(list))
// );

// const lFilter = (predicate, sequence) => {
//   if (isEmpty(sequence)) {
//     return l();
//   }
//   if (predicate(head(sequence))) {
//     return cons(head(sequence), lFilter(predicate, tail(sequence)));
//   }
//   return lFilter(predicate, tail(sequence));
// };

/* testing */
const seq = l(1, 2, 3, 4, 5, 6);
console.log(listToString(lFilter((n) => n % 2 !== 0, seq)));
console.log(listToString(lFilter((n) => n % 2 === 0, seq)));
