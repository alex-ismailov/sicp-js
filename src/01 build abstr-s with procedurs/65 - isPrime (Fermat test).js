/* Тест Ферма - Θ(log(n))

n - проверямое число 
a - любое N число < n

Если (a ** n) % n === a , то n с большой долей вероятности простое число */

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
console.log(isPrime(4, 3)); // false
console.log(isPrime(7, 3)); // true
console.log(isPrime(12, 3)); // false
console.log(isPrime(17, 3)); // true

console.log(isPrime(139, 3)); // true
console.log(isPrime(179, 3)); // true
