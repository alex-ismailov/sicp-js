const isEven = (n) => n % 2 === 0;
const double = (n) => n + n;
const halve = (n) => n / 2;

/* ver 1 */
const iter = (a, b, c) => {
  if (b === 0) {
    return c;
  }
  return isEven(b)
    ? iter(double(a), halve(b), c)
    : iter(a, b - 1, c + a);
};
const expt = (a, b) => iter(a, b, 0);

/* ver 2 */
const iter2 = (acc, a, b) => {
  if (b === 1) {
    return acc + a;
  }
  if (a === 0 || b === 0) {
    return 0;
  }
  return isEven(b)
    ? iter2(acc, double(a), halve(b))
    : iter2(acc + a, a, b - 1);
};
const expt2 = (a, b) => iter2(0, a, b);

/* testing */
console.log('*** expt ***');
console.log(expt(2, 1)); // 2
console.log(expt(2, 3)); // 6
console.log(expt(2, 8)); // 16
console.log(expt(2, 11));// 22

console.log('*** expt2 ***');
console.log(expt2(2, 1)); // 2
console.log(expt2(2, 3)); // 6
console.log(expt2(2, 8)); // 16
console.log(expt2(2, 11));// 22
