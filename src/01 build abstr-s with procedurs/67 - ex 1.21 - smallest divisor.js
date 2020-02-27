/* Упражнение 1.21.
С помощью процедуры smallest-divisor найдите наименьший делитель следующих чисел:
199, 1999, 19999. */

const isDivides = (n, div) => n % div === 0;

const smallestDivisor = (num) => {
  const iter = (n, testDiv) => {
    if (testDiv ** 2 > n) {
      return n;
    }
    return isDivides(n, testDiv)
      ? testDiv
      : iter(n, testDiv + 1);
  };
  return iter(num, 2);
};

/* testing */
console.log(smallestDivisor(199)); // 199
console.log(smallestDivisor(1999)); // 1999
console.log(smallestDivisor(19999)); // 7
