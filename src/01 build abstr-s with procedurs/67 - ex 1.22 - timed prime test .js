/* Упражнение 1.22.
Большая часть реализаций Лиспа содержат элементарную проце ´ дуру runtime, которая возвращает целое число,
показывающее, как долго работала система (например, в миллисекундах).
Следующая процедура timed-prime-test, будучи вызвана с целым числом n, печатает n и проверяет, простое ли оно.
Если n простое, процедура печатает три звездочки и количество времени, затраченное на проверку. */

// const expmod = (a, n) => (a ** n) % n; // have bug
const isEven = (n) => n % 2 === 0;

const expmod = (b, exp, m) => {
  if (exp === 0) {
    return 1;
  }
  return isEven(exp)
    ? (expmod(b, exp / 2, m) ** 2) % m
    : (b * expmod(b, exp - 1, m)) % m;
};
const random = (max) => Math.floor(Math.random() * (max - 1)) + 1;

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

/* ******************************* */

const runtime = () => Date.now();

const reportPrime = (n, elapsedTime) => {
  console.log(`n = ${n}, *** ${elapsedTime}`);
  return true;
};

const startPrimeTest = (n, startTime) => (
  isPrime(n, 3)
    ? reportPrime(n, runtime() - startTime)
    : false
);

const timedPrimeTest = (n) => startPrimeTest(n, runtime());

/* **************************************** */
const searchForPrimes = (numFrom, count) => {
  if (count > 0) {
    if (!isEven(numFrom)) {
      return timedPrimeTest(numFrom)
        ? searchForPrimes(numFrom + 1, count - 1)
        : searchForPrimes(numFrom + 1, count);
    }
    return searchForPrimes(numFrom + 1, count);
  }
  return false;
};

/* testing */
console.log('searchForPrimes(1, 3)');
searchForPrimes(1, 3);

console.log('searchForPrimes(1000, 3)');
searchForPrimes(1000, 3);

console.log('searchForPrimes(10 000, 3)');
searchForPrimes(10000, 3);

console.log('searchForPrimes(100 000, 3)');
searchForPrimes(100000, 3);

console.log('\n*** big numbers ***');
console.log('searchForPrimes(101 000 000, 3)');
searchForPrimes(101000000, 3);

// console.log('searchForPrimes(1 000 000 000 000, 3)');
// searchForPrimes(1000000000000, 3);

// console.log('searchForPrimes(100 000 000 000 000, 3)');
// searchForPrimes(100000000000000, 3);
