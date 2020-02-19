import {
  l, isEmpty, head, tail, cons, toString as listToString,
} from '@hexlet/pairs-data';
import { show, foldRight } from '../../libs/seqlib';

/* Упражнение 2.38.
Процедура accumulate известна также как fold-right (правая свертка), поскольку она
комбинирует первый элемент последовательности с результатом комбинирования всех
элементов справа от него. Существует также процедура fold-left (левая свертка),
которая подобна fold-right, но комбинирует элементы в противоположном направлении:

(define (fold-left op initial sequence)
  (define (iter result rest)
    (if (null? rest)
      result
      (iter (op result (car rest))
            (cdr rest))))
  (iter initial sequence))

Каковы значения следующих выражений?
(fold-right / 1 (list 1 2 3))
(fold-left / 1 (list 1 2 3))
(fold-right list nil (list 1 2 3))
(fold-left list nil (list 1 2 3)) */

const foldLeft = (cb, acc, seq) => (
  isEmpty(seq)
    ? acc
    : foldLeft(cb, cb(head(seq), acc), tail(seq))
);

// const foldLeft = (fn, initial, sequence) => {
//   const iter = (acc, rest) => {
//     if (isEmpty(rest)) {
//       return acc;
//     }
//     return iter(fn(head(rest), acc), tail(rest));
//   };
//   return iter(initial, sequence);
// };

/* testing */
const list = l(1, 2, 3, 4, 5);

show(foldLeft(cons, l(), list));
show(foldRight(cons, l(), list));

show(foldLeft(l, l(), list));
show(foldRight(l, l(), list));

show(foldLeft((acc, curr) => acc / curr, 1, list));
show(foldRight((acc, curr) => acc / curr, 1, list));
