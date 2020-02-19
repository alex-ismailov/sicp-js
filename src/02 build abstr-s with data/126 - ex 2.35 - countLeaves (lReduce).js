import {
  l, isList,
} from '@hexlet/pairs-data';
import { lMap, foldRight, show } from '../../libs/seqlib';

/* Упражнение 2.35.
Переопределите count-leaves из раздела 2.2.2 в виде накопления:
(define (count-leaves t)
  (accumulate <??> <??> (map <??> <??>))) */

const countLeaves = (tree) => (
  foldRight((curr, acc) => (
    curr + acc
  ), 0, lMap((st) => (
      isList(st)
        ? countLeaves(st)
        : 1
    ), tree))
);

// const countLeaves = (tree) => lReduce((curr, acc) => {
//   if (isList(curr)) {
//     return acc + countLeaves(curr);
//   }
//   return acc + 1;
// }, 0, tree);

/* testing */
const tree = l(1, 2, l(3, l(4)), 5, l(6, 7, 8));
const list = l(1, 2, 3, 4, 5);
show(countLeaves(tree));
show(countLeaves(list));
