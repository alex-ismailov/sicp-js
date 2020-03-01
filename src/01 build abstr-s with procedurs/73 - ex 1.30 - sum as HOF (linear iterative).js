/* Упражнение 1.30.
Процедура sum порождает линейную рекурсию. Ее можно переписать так,
чтобы суммирование выполнялось итеративно. Покажите, как сделать это,
заполнив пропущенные выражения в следующем определении:

(define (sum term a next b)
  (define (iter a result)
    (if <??>
        <??>
        (iter <??> <??>)))
  (iter <??> <??>))
*/

const inc = (n) => n + 1;
const square = (n) => n * n;
const cube = (x) => x * x * x;

const sum = (term, from, next, b) => {
  const iter = (a, result) => (
    a > b
      ? result
      : iter(next(a), term(a) + result)
  );
  return iter(from, 0);
};

/* testing */
console.log(sum(square, 1, inc, 3)); // 14
console.log(sum(cube, 1, inc, 10)); // 3025
