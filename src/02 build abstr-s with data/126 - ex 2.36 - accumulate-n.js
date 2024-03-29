import {
  l, isEmpty, head, tail, cons,
} from '@hexlet/pairs-data';
import {
  lMap, show, foldRight,
} from '../../libs/seqlib';

/* Упражнение 2.36.
Процедура accumulate-n подобна accumulate, только свой третий аргумент она воспринимает
как последовательность последовательностей, причем предполагается, что все они содержат
одинаковое количество элементов. Она применяет указанную процедуру накопления ко всем
первым элементам последовательностей, вторым элементам последовательностей и так далее, и
возвращает последовательность результатов. Например, если s есть последовательность, состоящая
из четырех последовательностей, ((1 2 3) (4 5 6) (7 8 9) (10 11 12)), то значением
(accumulate-n + 0 s) будет последовательность (22 26 30). Заполните пробелы в следующем определении accumulate-n:

(define (accumulate-n op init seqs)
  (if (null? (car seqs))
    nil
    (cons (accumulate op init <??>)
          (accumulate-n op init <??>)))) */

const accumulateN = (cb, acc, seq) => (
  isEmpty(head(seq))
    ? l()
    : cons(
      foldRight(cb, acc, lMap(head, seq)),
      accumulateN(cb, acc, lMap(tail, seq)),
    )
);

// const accumulateN = (cb, acc, seqs) => {
//   if (isEmpty(head(seqs))) {
//     return l();
//   }
//   return cons(lReduce(cb, acc, lMap(head, seqs)), accumulateN(cb, acc, lMap(tail, seqs)));
// };

/* testing */
const setOfsets = l(l(1, 2, 3), l(4, 5, 6), l(7, 8, 9), l(10, 11, 12));
show(accumulateN((curr, acc) => curr + acc, 0, setOfsets));

/* *********************** */
const makeGroups = (set) => (
  isEmpty(head(set))
    ? l()
    : cons(lMap(head, set), makeGroups(lMap(tail, set)))
);

show(makeGroups(setOfsets));
