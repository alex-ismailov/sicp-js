const isEven = (n) => n % 2 === 0;

/* linear iterative process - Θ(n) */
const expt = (base, pow) => {
  const iter = (b, count, acc) => (
    count === 0
      ? acc
      : iter(b, count - 1, b * acc)
  );
  return iter(base, pow, 1);
};

/* simple expt using while */
const expt2 = (b, n) => {
  let acc = 1;
  for (let i = n; i > 0; i -= 1) {
    acc *= b;
    // console.log(`b = ${b}, acc = ${acc},  n = ${i}`);
  }
  return acc;
};

/* fast expt using while */
const expt3 = (base, pow) => {
  let b = base;
  let n = pow;
  let acc = 1;
  while (n > 0) {
    if (isEven(n)) {
      b *= b;
      n /= 2;
    } else {
      acc *= b;
      n -= 1;
    }
    // console.log(`b = ${b}, acc = ${acc}, n = ${n}`);
  }
  return acc;
};

/* testing */
console.log('*** linear iterative process - Θ(n) ***');
console.log(expt(3, 1)); // 3
console.log(expt(2, 2)); // 4
console.log(expt(2, 5)); // 32
console.log(expt(2, 11)); // 2048
console.log(expt(2, 20)); // 1048576

console.log('*** simple expt using while - Θ(n) ***');
console.log(expt2(3, 1)); // 3
console.log(expt2(2, 2)); // 4
console.log(expt2(2, 5)); // 32
console.log(expt2(2, 11)); // 2048
console.log(expt2(2, 20)); // 1048576

console.log('*** fast expt using while - Θ(log(n)) ***');
console.log(expt3(3, 1)); // 3
console.log(expt3(2, 2)); // 4
console.log(expt3(2, 5)); // 32
console.log(expt3(2, 11)); // 2048
console.log(expt3(2, 20)); // 1048576
