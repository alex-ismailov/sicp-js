const inc = (n) => n + 1;
const square = (n) => n * n;
const cube = (x) => x * x * x;


/* sum - higher order function */
const sum = (term, a, next, b) => (
  a > b
    ? 0
    : term(a) + sum(term, next(a), next, b)
);

/* piSum */
const piSum = (a, b) => {
  const piTerm = (x) => 1 / (x * (x + 2));
  const piNext = (x) => x + 4;
  return sum(piTerm, a, piNext, b);
};


/* testing */
console.log(`sum(square, 1, inc, 3) = ${sum(square, 1, inc, 3)}`);
console.log(`sum(cube, 1, inc, 10) = ${sum(cube, 1, inc, 10)}`);

console.log(`8 * piSum(1, 1000) = ${8 * piSum(1, 1000)}`);
