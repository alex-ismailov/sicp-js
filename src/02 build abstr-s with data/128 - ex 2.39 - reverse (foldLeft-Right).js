import { l, cons, concat } from '@hexlet/pairs-data';
import { foldLeft, foldRight, show } from '../../libs/seqlib';

/* Упражнение 2.39.
Закончите следующие определения reverse (упражнение 2.18) в терминах процедур
foldright и fold-left из упражнения 2.38:

(define (reverse sequence)
  (fold-right (lambda (x y) <??>) nil sequence))

(define (reverse sequence)
  (fold-left (lambda (x y) <??>) nil sequence)) */

/* *** solution *** */
/* foldLeft reverse */
const reverse1 = (seq) => (
  foldLeft(cons, l(), seq)
);

/* foldRight reverse */
const reverse2 = (seq) => (
  foldRight((curr, acc) => concat(acc, l(curr)), l(), seq)
);

// /* fold-left */
// const reverse1 = (sequence) => {
//   return foldRight((curr, acc) => concat(acc, l(curr)), l(), sequence);
// };

// /* fold-left */
// const reverse2 = (sequence) => {
//   return foldLeft((curr, acc) => cons(curr, acc), l(), sequence);
// };

/* testing */
const list = l(1, 2, 3, 4, 5);
show(reverse1(list));
show(reverse2(list));
