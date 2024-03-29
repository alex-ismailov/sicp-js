/* Допустим, например, что нам надо вычислить функцию
f(x, y) = x(1 + xy)**2 + y(1 − y) + (1 + xy)(1 − y)
которую мы также могли бы выразить как
  a = 1 + xy
  b = 1 − y
  f(x, y) = xa**2 + yb + ab */

const square = (x) => x * x;

/* ************************ */
const fn = (x, y) => {
  const fnHelp = (a, b) => {
    return x * (a ** 2) + y * b + a * b;
  };
  return fnHelp(1 + (x * y), 1 - y);
};

const fn2 = (x, y) => {
  return ((a, b) => {
    return x * (a ** 2) + y * b + a * b;
  })(1 + (x * y), 1 - y);
};

const f = (x, y) => {
  const a = 1 + (x * y);
  const b = 1 - y;
  return x * square(a) + y * b + a * b;
};

/* testing */
console.log(fn(2, 2));
console.log(fn2(2, 2));
console.log(f(2, 2));
