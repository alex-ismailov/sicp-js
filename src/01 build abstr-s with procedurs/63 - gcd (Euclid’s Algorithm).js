/* 
a <-- b
b <-- a % b
*/

/* O(log(n)) */
const gcd = (a, b) => (
  b === 0
    ? a
    : gcd(b, (a % b))
);

/* testing */
console.log(gcd(16, 28)); // 4
console.log(gcd(206, 40));// 2
