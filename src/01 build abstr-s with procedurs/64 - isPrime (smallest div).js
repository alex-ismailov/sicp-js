const isDivides = (n, testDiv) => n % testDiv === 0;

/* O(√n) */
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

/* testing */
console.log(isPrime(7)); // true
console.log(isPrime(12));// false
console.log(isPrime(13));// true

console.log(smallestDivisor(7)); // 7
console.log(smallestDivisor(12));// 2
console.log(smallestDivisor(13));// 13
