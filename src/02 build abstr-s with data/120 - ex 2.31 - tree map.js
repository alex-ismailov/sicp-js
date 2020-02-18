import {
  l, isList, toString as listToString,
} from '@hexlet/pairs-data';
import { lMap } from '../../libs/seqlib';

/* Упражнение 2.31.
Абстрагируйте свой ответ на упражнение 2.30, получая процедуру tree-map, так,
чтобы squaretree можно было определить следующим образом:

(define (square-tree tree) (tree-map square tree)) */

const square = (x) => x ** 2;

const tMap = (fn, tree) => (
  lMap((curr) => (
    isList(curr)
      ? tMap(fn, curr)
      : fn(curr)
  ), tree)
);

// const tMap = (fn, tree) => lMap((elem) => {
//   if (isList(elem)) {
//     return tMap(fn, elem);
//   }
//   return fn(elem);
// }, tree);

/* solution */
/* (define (square-tree tree) (tree-map square tree)) */
const squareTree = (tree) => tMap(square, tree);

/* testing */
const data1 = l(1, 3, 4);
console.log(listToString(squareTree(data1)));

const data2 = l(1, l(2, 3), 4);
console.log(listToString(squareTree(data2)));

const data3 = l(1, l(2, l(3, l(4, 5), 6), 7), 8);
console.log(listToString(squareTree(data3)));
