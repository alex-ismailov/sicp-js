import { l, cons } from '@hexlet/pairs-data';
import { foldRight, show } from "../../libs/seqlib";

/* Упражнение 2.33.
Заполните пропущенные выражения, так, чтобы получились определения
некоторых базовых операций по работе со списками в виде накопления:
(define (map p sequence)
  (accumulate (lambda (x y) <??>) nil sequence))

(define (append seq1 seq2)
  (accumulate cons <??> <??>))

(define (length sequence)
  (accumulate <??> 0 sequence))
*/

const map = (fn, seq) => (
  foldRight((x, y) => cons(fn(x), y), l(), seq)
);

const append = (seq1, seq2) => (
  foldRight(cons, seq2, seq1)
);

const length = (seq) => (
  foldRight((curr, acc) => acc + 1, 0, seq)
);

/* testing */
const list1 = l(1, 2, 3, 4, 5);
const list2 = l(6, 7, 8);
show(map((n) => n ** 2, list1));
show(map(l, list1));
show(append(list1, list2));
show(length(append(list1, list2)));
