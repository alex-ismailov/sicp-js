
const sum = (term, a, next, b) => (
  a > b
    ? 0
    : term(a) + sum(term, next(a), next, b)
);

const piSum = (a, b) => sum(
  (x) => 1.0 / (x * (x + 2)),
  a,
  (x) => x + 4,
  b);

console.log(`8 * piSum(1, 1000) = ${8 * piSum(1, 1000)}`);
