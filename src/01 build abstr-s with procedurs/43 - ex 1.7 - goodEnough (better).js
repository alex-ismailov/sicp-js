/* Упражнение 1.7.
Проверка good-enough?, которую мы использовали для вычисления квадратных корней, будет
довольно неэффективна для поиска квадратных корней от очень маленьких чисел. Кроме того, в
настоящих компьютерах арифметические операции почти всегда вычисляются с ограниченной
точностью. Поэтому наш тест оказывается неадекватным и для очень больших чисел.
Альтернативный подход к реализации good-enough? состоит в том, чтобы следить, как от
одной итерации к другой изменяется guess, и остановиться, когда изменение оказывается
небольшой долей значения приближения. Разработайте процедуру вычисления квадратного корня,
которая использует такой вариант проверки на завершение. Верно ли, что на больших и
маленьких числах она работает лучше? */


const average = (x, y) => (x + y) / 2;
const improve = (guess, x) => average((x / guess), guess);

// const isGoodEnough = (guess, x) => Math.abs((guess ** 2) - x) < 0.001;
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

/* testing */
console.log(sqrt(0.00004));
console.log(sqrt(0.00001));
console.log(sqrt(2));
console.log(sqrt(4));
console.log(sqrt(7));
console.log(sqrt(9));
