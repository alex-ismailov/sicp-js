const f = (g) => g(2);

/* testing */
const square = (x) => x * x;
console.log(f(square));
console.log(f((z) => z * (z + 1)));

/* TypeError: g is not a function
будет попытка вычислить 2(2), а в этой комбинации
операнд (первая двойка) некорректен */
console.log(f(f));
