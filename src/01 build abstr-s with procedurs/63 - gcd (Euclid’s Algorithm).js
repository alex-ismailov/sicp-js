/* 
a <-- b
b <-- a % b

a -> 206 /40 /6 /4 /2 <-- return a = 2
b ->  40/  6/ 4/ 2/ 0 
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
