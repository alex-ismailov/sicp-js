import { l, isEmpty, head, tail, cons } from "@hexlet/pairs-data";
import { show, concat } from "../../libs/seqlib";

/* worst case O(n), the average number of steps required will be about n/2. */
const isElementOfSet = (x, set) => {
  if ( x < head(set) || isEmpty(set)) {
    return false;
  }
  return head(set) === x
    ? true
    : isElementOfSet(x, tail(set))
};

/* We obtain a more impressive speedup with intersection_set. */
/* O(n) */
const intersectionSet = (set1, set2) => {
  if (isEmpty(set1) || isEmpty(set2)) {
    return l();
  }
  const x1 = head(set1);
  const x2 = head(set2);
  if (x1 === x2) {
    return cons(x1, intersectionSet(tail(set1), tail(set2)));
  }
  return x1 < x2
    ? intersectionSet(tail(set1), set2)
    : intersectionSet(set1, tail(set2))
};

/* testing */
const set1 = l(1, 3, 6, 10);
const set2 = l(6, 7, 10, 15);
/* ************ isElementOfSet ************ */
console.log(isElementOfSet(4, set1));
console.log(isElementOfSet(3, set1));

/* ************ intersectionSet ************ */
show(intersectionSet(set1, set2));
