
const fib = (n) => {
  const iter = (a, b, count) => (
    count === 0
      ? b
      : iter(a + b, a, count - 1)
  );
  return iter(1, 0, n);
};

/* using cicle for */
const fib2 = (n) => {
  if (n <= 1) {
    return n;
  }
  let a = 1;
  let b = 0;
  for (let count = n, aa = 0, bb = 0; count > 0; count -= 1) {
    aa = a + b;
    bb = a;
    a = aa;
    b = bb;
  }
  return b;
};

/* testing */
const MAX = 10;
for (let fnum = 0; fnum < MAX; fnum += 1) {
  console.log(`fib(${fnum}) = ${fib(fnum)}`);
}

console.log('*** using cicle for ***');

for (let fnum = 0; fnum < MAX; fnum += 1) {
  console.log(`fib2(${fnum}) = ${fib2(fnum)}`);
}
