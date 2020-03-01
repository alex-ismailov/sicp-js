/* Упражнение 1.27.
Покажите, что числа Кармайкла, перечисленные в сноске 47, действительно «обманывают» тест
Ферма: напишите процедуру, которая берет целое число n и проверяет, правда ли, что
a ** n равняется a по модулю n для всех a < n, ипроверьте эту процедуру на этих числах Кармайкла. */

const isEven = (n) => n % 2 === 0;
const square = (x) => x * x;
const random = (max) => Math.floor(Math.random() * (max - 1)) + 1;

const expmod = (base, exp, m) => {
  if (exp === 0) {
    return 1;
  }
  return isEven(exp)
    ? square(expmod(base, exp / 2, m)) % m
    : (base * expmod(base, exp - 1, m)) % m;
};

const fermatTest = (n) => {
  const tryIt = (a) => expmod(a, n, n) === a;
  return tryIt(random(n));
};

const isPrime = (n, times) => {
  if (times === 0) {
    return true;
  }
  return fermatTest(n)
    ? isPrime(n, times - 1)
    : false;
};

/* testing */
const carmichaelNums = [561, 1105, 1729, 2465, 2821, 6601, 8911, 41041, 825265];
carmichaelNums.forEach((n) => console.log(`isPrime(${n}): ${isPrime(n, 5)}`));
