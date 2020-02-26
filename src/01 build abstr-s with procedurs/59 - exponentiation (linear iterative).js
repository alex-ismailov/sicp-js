/* linear iterative process */
const expt = (num, e) => {
  const iter = (n, acc, count) => (
    count === 0
      ? acc
      : iter(n, n * acc, count - 1)
  );
  return iter(num, 1, e);
};

/* testing */
console.log(expt(3, 1)); // 3
console.log(expt(2, 2)); // 4
console.log(expt(2, 5)); // 32
