import {
  isEmpty, head, tail, cons, l,
} from '@hexlet/pairs-data';
import { show } from '../../libs/seqlib';

/* Упражнение 2.61.
Напишите реализацию adjoin-set для упорядоченного представления. По аналогии с
elementof-set? покажите, как использовать упорядочение, чтобы получить процедуру,
которая в среднем требует только половину числа шагов, которое требуется при
неупорядоченном представлении. */

const adjoinSet = (x, set) => {
  if (isEmpty(set)) {
    return l(x);
  }
  if (head(set) === x) {
    return set;
  }
  return x < head(set)
    ? cons(x, set)
    : cons(head(set), adjoinSet(x, tail(set)));
};

/* testing */
const set = l(1, 3, 5, 7);
const newSet = adjoinSet(4, set);
show(set);
show(newSet);
const newSet2 = adjoinSet(5, set);
show(newSet2);
