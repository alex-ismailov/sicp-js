/* Упражнение 1.22.
Большая часть реализаций Лиспа содержат элементарную процедуру runtime, которая возвращает целое число,
показывающее, как долго работала система (например, в миллисекундах).
Следующая процедура timed-prime-test, будучи вызвана с целым числом n, печатает n и проверяет, простое ли оно.
Если n простое, процедура печатает три звездочки и количество времени, затраченное на проверку. */

/* Используя процедуру timedPrimeTest (см. ниже), напишите процедуру search-for-primes, которая проверяет на
простоту все нечетные числа в заданном диапазоне. С помощью этой процедуры найдите наименьшие три простых числа
после 1000; после 10 000; после 100 000; после 1 000 000. Посмотрите, сколько времени затрачивается на каждое
простое число. Поскольку алгоритм проверки имеет порядок роста Θ(√n), Вам следовало бы ожидать, что проверка на
простоту чисел, близких к 10 000, занимает в √10 раз больше времени, чем для чисел, близких к 1000.
Подтверждают ли это Ваши замеры времени? Хорошо ли поддерживают предсказание √n данные для 100 000 и 1 000 000 ?
Совместим ли Ваш результат с предположением, что программы на Вашей машине затрачивают на выполнение задач время,
пропорциональное числу шагов? */

const isOdd = (n) => n % 2 !== 0;
const isDivides = (n, div) => n % div === 0;

/* On big numbers examples it will catch RangeError: Maximum call stack size exceeded -> return isDivides(n, testDiv) ? ...  */
const smallestDivisor = (n, testDiv) => {
  if (testDiv ** 2 > n) {
    return n;
  }
  return isDivides(n, testDiv)
    ? testDiv
    : smallestDivisor(n, testDiv + 1);
};

/* version for big numbers */
// const smallestDivisor = (n, testDiv) => {
//   let div = testDiv;
//   while(div ** 2 < n) {
//     if (isDivides(n, div)) {
//       return div;
//     }
//     div += 1;
//   }
//   return n;
// };

const isPrime = (n) => n === smallestDivisor(n, 2);

/* ************** timedPrimeTest ***************** */
const runtime = () => Date.now();

const reportPrime = (n, elapsedTime) => {
  console.log(`n = ${n}, *** ${elapsedTime}`);
  return true;
};

const startPrimeTest = (n, startTime) => (
  isPrime(n)
    ? reportPrime(n, runtime() - startTime)
    : false
);

const timedPrimeTest = (n) => startPrimeTest(n, runtime());

/* **************************************** */
const searchForPrimes = (numFrom, count) => {
  if (count > 0) {
    if (isOdd(numFrom)) {
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

/* big numbers examples will only work when used smallestDivisor using while cicle */
// console.log('\n*** big numbers ***');
// console.log('searchForPrimes(101 000 000, 3)');
// searchForPrimes(101000000, 3);

// console.log('searchForPrimes(1 000 000 000 000, 3)');
// searchForPrimes(1000000000000, 3);

// console.log('searchForPrimes(100 000 000 000 000, 3)');
// searchForPrimes(100000000000000, 3);

// console.log('searchForPrimes(1 000 000 000 000 000, 3)');
// searchForPrimes(1000000000000000, 3);
