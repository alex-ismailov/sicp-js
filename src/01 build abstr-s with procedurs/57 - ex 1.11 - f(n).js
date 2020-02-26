/* Упражнение 1.11.
Функция f определяется правилом: f(n) = n, если n < 3, и f(n) = f(n − 1) + f(n − 2) + f(n − 3),
если n ≥ 3. Напишите процедуру, вычисляющую f с помощью рекурсивного процесса. Напишите
процедуру, вычисляющую f с помощью итеративного процесса. */

/* linear recursive */
const f = (n) => {
  if (n < 3) {
    return n;
  }
  return f(n - 1) + f(n - 2) + f(n - 3);
};

/* linear iterative */
// a <- a + b + c
// b <- a
// c <- b

const f2 = (n) => {
  const iter = (a, b, c, count) => {
    if (count === 0) {
      return c;
    }
    return iter((a + b + c), a, b, count - 1);
  };
  return iter(2, 1, 0, n);
};

/* testing */
console.log(f(4));
console.log(f2(4));
