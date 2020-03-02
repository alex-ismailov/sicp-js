/* Упражнение 1.33.
Можно получить еще более общую версию accumulate (упражнение 1.32), если ввести понятие
фильтра (filter) на комбинируемые термы. То есть комбинировать только те термы, порожденные
из значений диапазона, которые удовлетворяют указанному условию. Получающаяся абстракция
filtered-accumulate получает те же аргументы, что и accumulate, плюс дополнительный
одноаргументный предикат, который определяет фильтр. Запишите filtered-accumulate в
виде процедуры. Покажите, как с помощью filtered-accumulate выразить следующее:
а. сумму квадратов простых чисел в интервале от a до b (в предположении, что процедура
prime? уже написана);
б. произведение всех положительных целых чисел меньше n, которые просты по отношению к
n (то есть всех таких положительных целых чисел i < n, что НОД(i, n) = 1). */
const isDivides = (n, testDiv) => n % testDiv === 0;
const smallestDivisor = (num) => {
  const iter = (n, testDiv) => {
    if (testDiv ** 2 > n) {
      return n;
    }
    return isDivides(n, testDiv)
      ? testDiv
      : iter(num, testDiv + 1);
  };
  return iter(num, 2);
};

const isPrime = (n) => n === smallestDivisor(n);
const s = (a, b) => a + b;
const m = (a, b) => a * b;
const inc = (n) => n + 1;
const id = (x) => x;
const isOdd = (n) => n % 2 !== 0;
const square = (x) => x * x;
/* a <-- b
b <-- a % b */
const gcd = (a, b) => (
  b === 0
    ? a
    : gcd(b, a % b)
);

/* ****************************************************************** */
/* linear iterative */
const filteredAcc = (filter, combiner, nullValue, term, a, next, b) => {
  const iter = (curr, acc) => {
    if (curr > b) {
      return acc;
    }
    return filter(curr)
      ? iter(next(curr), combiner(acc, term(curr)))
      : iter(next(curr), acc);
  };
  return iter(a, nullValue);
};

/* linear recursive */
const filteredAcc2 = (filter, combiner, nullValue, term, a, next, b) => {
  if (a > b) {
    return nullValue;
  }
  return filter(a)
    ? combiner(term(a), filteredAcc2(filter, combiner, nullValue, term, inc(a), next, b))
    : filteredAcc2(filter, combiner, nullValue, term, inc(a), next, b);
};

/* ******************************************************************** */
const sumOfOddNums = (a, b) => filteredAcc(isOdd, s, 0, id, a, inc, b);
const sumOfOddNums2 = (a, b) => filteredAcc(isOdd, s, 0, id, a, inc, b);

const sumOfPrimeSquares = (a, b) => filteredAcc(isPrime, s, 0, square, a, inc, b);
const sumOfPrimeSquares2 = (a, b) => filteredAcc2(isPrime, s, 0, square, a, inc, b);

const productPrimeFor = (n) => {
  const primeForN = (k) => gcd(n, k) === 1;
  return filteredAcc(primeForN, m, 1, id, 1, inc, n);
};

const productPrimeFor2 = (n) => {
  const primeForN2 = (k) => gcd(n, k) === 1;
  return filteredAcc2(primeForN2, m, 1, id, 1, inc, n);
};

/* testing */
console.log('*** сумма нечетных чисел в интервале от a до b ***');
console.log(sumOfOddNums(1, 5));
console.log(sumOfOddNums2(1, 5));

console.log('*** а. сумма квадратов простых чисел в интервале от a до b ***');
console.log(sumOfPrimeSquares(2, 11));
console.log(sumOfPrimeSquares2(2, 11));

/* б. произведение всех положительных целых чисел меньше n, которые просты по отношению к
n (то есть всех таких положительных целых чисел i < n, что НОД(i, n) = 1). */
console.log('*** произведение всех положительных целых чисел i < n, что НОД(i, n) = 1). ***');
console.log(productPrimeFor(5));
console.log(productPrimeFor2(5));
