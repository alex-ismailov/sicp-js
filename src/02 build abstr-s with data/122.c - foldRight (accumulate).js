import {
  l, head, tail, isEmpty, toString as listToString, cons,
} from '@hexlet/pairs-data';

const foldRight = (fn, acc, seq) => (
  isEmpty(seq)
    ? acc
    : fn(head(seq), foldRight(fn, acc, tail(seq)))
);

const list = l(1, 2, 3, 4, 5);
console.log(listToString(foldRight(l, l(), list)));
