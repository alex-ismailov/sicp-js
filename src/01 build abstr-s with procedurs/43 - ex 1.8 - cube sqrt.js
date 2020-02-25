/* Упражнение 1.8.
Метод Ньютона для кубических корней основан на том, что если y является приближением к
кубическому корню из x, то мы можем получить лучшее приближение по формуле
(x / (y ** 2) + 2 * y) / 3
С помощью этой формулы напишите процедуру вычисления кубического корня, подобную процедуре для квадратного корня. (В разделе 1.3.4 мы увидим, что можно реализовать общий метод
Ньютона как абстракцию этих процедур для квадратного и кубического корня.) */

const improve = (guess, x) => ((x / guess ** 2) + 2 * guess) / 3;

// const isGoodEnough = (prevGuess, currGuess) => Math.abs(prevGuess - currGuess) < 0.001;
const isGoodEnough = (prevGuess, currGuess) => (
  Math.abs((currGuess - prevGuess) / prevGuess) < 0.001
);

const iter = (prevGuess, guess, x) => (
  isGoodEnough(prevGuess, guess)
    ? guess
    : iter(guess, improve(guess, x), x)
);

const sqrt = (x) => iter(0.5, 1.0, x);

console.log(sqrt(0.00004));
console.log(sqrt(0.00001));
console.log(sqrt(2));
console.log(sqrt(4));
console.log(sqrt(7));
console.log(sqrt(9));
