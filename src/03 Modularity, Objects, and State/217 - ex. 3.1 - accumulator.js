/* Накопитель (accumulator) — это процедура, которая вызывается с одним численным
аргументом и собирает свои аргументы в сумму. При каждом вызове накопитель
возвращает сумму, которую успел накопить. Напишите процедуру make-accumulator,
порождающую накопители, каждый из которых поддерживает свою отдельную сумму.
Входной параметр make-accumulator должен указывать начальное значение суммы;
например: 

(define A (make-accumulator 5))
(A 10) // => 15
(A 10) // => 25
*/

const makeAccumulator = (acc) => (num) => acc += num;

/* testing */
const A = makeAccumulator(5);
const res1 = A(10); // => 15
const res2 = A(20); // => 35
const res3 = A(15); // => 50

console.log(res1);
console.log(res2);
console.log(res3);
