/* Упражнение 1.44.
Идея сглаживания (smoothing a function) играет важную роль в обработке сигналов. Если f —
функция, а dx — некоторое малое число, то сглаженная версия f есть функция, значение которой в точке x есть среднее между f(x − dx), f(x) и f(x + dx). Напишите процедуру smooth,
которая в качестве ввода принимает процедуру, вычисляющую f, и возвращает процедуру, вычисляющую сглаженную версию f. Иногда бывает удобно проводить повторное сглаживание (то
есть сглаживать сглаженную функцию и т.д.), получая n-кратно сглаженную функцию (n-fold
smoothed function). Покажите, как породить n-кратно сглаженную функцию с помощью smooth и
repeated из упражнения 1.43. */

const square = (x) => x * x;

const compose = (f, g) => (x) => f(g(x));

const repeated = (fn, count) => (
  count > 1
    ? (x) => compose(repeated(fn, count - 1), fn)(x)
    : fn
);

const smooth = (f, dx) => {
  const average = (x, y, z) => (x + y + z) / 3;
  return (x) => average(f(x - dx), f(x), f(x + dx));
};

const smoothN = (f, dx, count) => (
  repeated(
    (g) => smooth(g, dx),
    count,
  )(f));

const res = smooth(square, 2)(2);
console.log(res);

const res2 = smooth(square, 1)(3);
console.log(res2);

const res3 = smoothN(square, 2, 2);
console.log(res3(2));
