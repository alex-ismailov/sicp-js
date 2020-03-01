/* Упражнение 1.24.
Модифицируйте процедуру timed-prime-test из упражнения 1.22 так, чтобы она использовала
fast-prime? (метод Ферма) и проверьте каждое из 12 простых чисел, найденных в этом упражнении.
Исходя из того, что у теста Ферма порядок роста Θ(log n), то какого соотношения времени
Вы бы ожидали между проверкой на простоту поблизости от 1 000 000 и поблизости от 1000?
Подтверждают ли это Ваши данные? Можете ли Вы объяснить наблюдаемое несоответствие, если
оно есть? */

const isEven = (n) => n % 2 === 0;
const square = (x) => x * x;
const random = (max) => Math.floor(Math.random() * (max - 1)) + 1;

const expmod = (b, exp, m) => {
  if (exp === 0) {
    return 1;
  }
  return isEven(exp)
    ? square(expmod(b, exp / 2, m)) % m
    : (b * expmod(b, exp - 1, m)) % m;
};

const fermatTest = (n) => {
  const tryIt = (a) => expmod(a, n, n) === a;
  return tryIt(random(n));
};

const isPrime = (num, times) => {
  if (times === 0) {
    return true;
  }
  return fermatTest(num)
    ? isPrime(num, times - 1)
    : false;
};

/* ************************* */
const runtime = () => Date.now();

const reportPrime = (n, elapsedTime) => {
  console.log(`n = ${n}, *** ${elapsedTime}`);
  return true;
};

const startPrimeTest = (n, startTime) => (
  isPrime(n, 9000) // <-- замедляем за счет большого кол-ва проверок
    ? reportPrime(n, runtime() - startTime)
    : false
);

const timedPrimeTest = (n) => startPrimeTest(n, runtime());

/* testing */
const nums = [1, 2, 3, 1009, 1013, 1019, 10007, 10009, 10037, 100003, 100019, 100043];
nums.forEach((n) => timedPrimeTest(n));

/* it is not work with Fermat test */
// console.log('*** big numbers tests ***');
// const bigNums = [101000023, 1000000000039, 100000000000031, 1000000000000037];
// bigNums.forEach((n) => console.log(`smallest divisor of ${n} is ${smallestDivisor(n)}`));
