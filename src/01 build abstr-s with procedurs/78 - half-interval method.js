/* Нахождение корней уравнений методом половинного деления
Метод половинного деления (half-interval method) — это простой, но мощный способ
нахождения корней уравнения f(x) = 0, где f — непрерывная функция. Идея состоит в
том, что если нам даны такие точки a и b, что f(a) < 0 < f(b), то функция f должна
иметь по крайней мере один ноль на отрезке между a и b. Чтобы найти его, возьмем x,
равное среднему между a и b, и вычислим f(x). Если f(x) > 0, то f должна иметь ноль
на отрезке между a и x. Если f(x) < 0, то f должна иметь ноль на отрезке между x и b.
Продолжая таким образом, мы сможем находить все более узкие интервалы, на которых
f должна иметь ноль. Когда мы дойдем до точки, где этот интервал достаточно мал,
процесс останавливается. */

const average = (a, b) => (a + b) / 2;
const closeEnough = (l, h) => Math.abs(l - h) < 0.001;
const isPositive = (n) => n >= 0;
const isNegative = (n) => n < 0;
const error = (msg) => {
  console.log(msg);
  return false;
};

const search = (f, negPoint, posPoint) => {
  const midpoint = average(negPoint, posPoint);
  if (closeEnough(negPoint, posPoint)) {
    return midpoint;
  }
  const testValue = f(midpoint);
  if (isPositive(testValue)) {
    return search(f, negPoint, midpoint);
  }
  if (isNegative(testValue)) {
    return search(f, midpoint, posPoint);
  }
  return midpoint;
};

const halfIntervalMethod = (f, a, b) => {
  const aValue = f(a);
  const bValue = f(b);
  if (isNegative(aValue) && isPositive(bValue)) {
    return search(f, a, b);
  }
  if (isNegative(bValue) && isPositive(aValue)) {
    return search(f, b, a);
  }
  return error(`values are not of opposite sign ${a}, ${b}`);
};

/* testing */
const res = halfIntervalMethod(
  (x) => (x * x * x) - (2 * x) - 3,
  1.0,
  2.0,
);
console.log(res);
