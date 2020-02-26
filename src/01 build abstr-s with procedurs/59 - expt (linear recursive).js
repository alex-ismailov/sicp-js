/* linear recursive process - Θ(n) */
const expt = (n, e) => (
  e === 0
    ? 1
    : n * expt(n, e - 1)
);

/* testing */
console.log(expt(3, 1)); // 3
console.log(expt(2, 2)); // 4
console.log(expt(2, 5)); // 32
