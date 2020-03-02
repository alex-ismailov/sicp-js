/* Упражнение 1.31.
а. Процедура sum — всего лишь простейшая из обширного множества подобных абстракций,
которые можно выразить через процедуры высших порядков. Напишите аналогичную процедуру
под названием product, которая вычисляет произведение значений функции в точках на указанном интервале.
Покажите, как с помощью этой процедуры определить factorial. Кроме того, при помощи product вычислите
приближенное значение π по формуле (см.уч. стр. 73) */

const inc = (n) => n + 1;
const identity = (x) => x;

/* a */
/* linear recursive */
const product = (term, a, next, b) => (
  a > b
    ? 1
    : term(a) * product(term, next(a), next, b)
);

/* b */
/* linear iterative */
const product2 = (term, a, next, b) => {
  const iter = (curr, acc) => (
    curr > b
      ? acc
      : iter(next(curr), acc * term(curr))
  );
  return iter(a, 1);
};

/* testing */
/* factorial */
/* a */
console.log(product(identity, 1, inc, 3));
console.log(product(identity, 1, inc, 6));
/* b */
console.log(product2(identity, 1, inc, 3));
console.log(product2(identity, 1, inc, 6));
