/* Θ(log(n)) */

const isEven = (n) => n % 2 === 0;

/*
b ** n = (b ** n/2) ** 2 -> если n четно
b ** n = b · b ** n−1 -> если n нечетно
*/

const expt = (b, n) => {
  if (n === 0) {
    return 1;
  }
  return isEven(n)
    ? expt(b, n / 2) ** 2
    : b * expt(b, n - 1);
};

/* testing */
console.log(expt(2, 5)); // 32
console.log(expt(2, 11)); // 2048
