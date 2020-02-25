const fib = (n) => {
  if (n === 0) {
    return 0;
  }
  return n === 1
    ? 1
    : fib(n - 1) + fib(n - 2);
};

/* testing */
const MAX = 10;
for (let num = 0; num < MAX; num += 1) {
  console.log(`fib(${num}) = ${fib(num)}`);
}
