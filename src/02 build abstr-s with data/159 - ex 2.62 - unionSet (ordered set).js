/* Упражнение 2.62.
Дайте представление порядка Θ(n) для операции union-set с представлением в
виде упорядоченных списков. */

import {
  isEmpty, head, tail, cons, l,
} from '@hexlet/pairs-data';
import { show } from '../../libs/seqlib';

const unionSet = (set1, set2) => {
  if (isEmpty(set1)) {
    return set2;
  }
  if (isEmpty(set2)) {
    return set1;
  }
  const x1 = head(set1);
  const x2 = head(set2);
  if (x1 === x2) {
    return cons(x1, unionSet(tail(set1), tail(set2)));
  }
  return x1 < x2
    ? cons(x1, unionSet(tail(set1), set2))
    : cons(x2, unionSet(set1, tail(set2)));
};

/* testing */
const set1 = l(1, 3, 5);
const set2 = l(2, 3, 4, 6);
const newSet = unionSet(set1, set2);
show(newSet);
