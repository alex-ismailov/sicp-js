import { l, isEmpty, head, tail, cons } from "@hexlet/pairs-data";
import { show, concat } from "../../libs/seqlib";

/* Упражнение 2.60.
Мы указали, что множество представляется как список без повторяющихся элементов.
Допустим теперь, что мы разрешаем повторяющиеся элементы. Например,
множество {1, 2, 3} могло бы быть представлено как список (2 3 2 1 3 2 2).
Разработайте процедуры element-of-set?, adjoin-set, union-set и intersection-set,
которые бы работали с таким представлением. Как соотносится эффективность этих
операций с эффективностью соответствующих процедур для представления без
повторений? Существуют ли приложения, в которых Вы бы использовали скорее
это представление, чем представление без повторений? */

const isElementOfSet = (x, set) => {
  if (isEmpty(set)) {
    return false;
  }
  return head(set) === x
    ? true
    : isElementOfSet(x, tail(set));
};

const adjoinSet = (x, set) => (
  cons(x, set)
);

const intersectionSet = (set1, set2) => {
  if (isEmpty(set1)) {
    return set2;
  }
  return isElementOfSet(head(set1), set2)
    ? cons(head(set1), intersectionSet(tail(set1), set2))
    : intersectionSet(tail(set1), set2)
};

const unionSet = (set1, set2) => (
  isEmpty(set1)
    ? set2
    : cons(head(set1), unionSet(tail(set1), set2))
);

const unionSet2 = (set1, set2) => concat(set1, set2);

/* testing */
const set1 = l(2, 3, 2);
const set2 = l(5, 1, 6);

// O n
console.log('*** isElementOfSet ***');
console.log(isElementOfSet(3, set1));
console.log(isElementOfSet(5, set1));

// O 1
console.log('*** adjoinSet ***');
const adjoinedSet = adjoinSet(55, set1);
show(adjoinedSet);

// O n**2
console.log('*** intersectionSet ***');
show(intersectionSet(set1, set2));

// O n of set1
console.log('*** unionSet ***');
show(unionSet(set1, set2));
show(unionSet2(set1, set2));
