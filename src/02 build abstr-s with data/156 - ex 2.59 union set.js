import { l, isEmpty, head, tail, cons } from "@hexlet/pairs-data";
import { show } from "../../libs/seqlib";
/* 
Упражнение 2.59.
Реализуйте операцию union-set для представления множеств в виде неупорядоченных списков.
*/

const isElementOfSet = (x, set) => {
  if (isEmpty(set)) {
    return false;
  }
  return x === head(set)
    ? true
    : isElementOfSet(x, tail(set))
};

const adjoinSet = (x, set) => (
  isElementOfSet(x, set)
    ? set
    : cons(x, set)
);

const unionSet = (set1, set2) => (
  isEmpty(set1)
    ? set2
    : adjoinSet(head(set1), unionSet(tail(set1), set2))
);

/* testing */
console.log('*** unionSet ***');
const set1 = l(3, 1, 3);
const set5 = l(12, 4, 2);
const setOfUnion = unionSet(set1, set5);
show(setOfUnion);
