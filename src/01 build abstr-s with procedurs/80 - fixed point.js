/* Нахождение неподвижных точек функций
Число x называется неподвижной точкой (fixed point) функции f, если оно удовлетворяет уравнению
f(x) = x. Для некоторых функций f можно найти неподвижную точку, начав с какого-то значения и
применяя f многократно:
f(x), f(f(x)), f(f(f(x))), . . . — пока значение не перестанет сильно изменяться. */

const TOLLERANCE = 0.00001;

const fixedPoint = (f, firstGuess) => {
  const isCloseEnough = (v1, v2) => Math.abs(v1 - v2) < TOLLERANCE;
  const tryWith = (guess) => {
    const next = f(guess);
    if (isCloseEnough(guess, next)) {
      return next;
    }
    return tryWith(next);
  };
  return tryWith(firstGuess);
};

/* testing */
console.log(fixedPoint(Math.cos, 1.0)); // 0.7390822985224023
console.log(fixedPoint(
  (y) => Math.sin(y) + Math.cos(y),
  1.0,
)); // 1.2587315962971173
