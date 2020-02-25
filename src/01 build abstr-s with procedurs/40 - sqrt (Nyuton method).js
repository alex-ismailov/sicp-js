/* √x = такое y, что y ≥ 0 и y**2 = x */

const isGoodEnough = (guess, x) => Math.abs((guess ** 2) - x) < 0.0001;
const average = (x, y) => (x + y) / 2;
const improve = (guess, x) => average((x / guess), guess);

const iter = (guess, x) => (
  isGoodEnough(guess, x)
    ? guess
    : iter(improve(guess, x), x)
);

const sqrt = (x) => iter(1.0, x);

/* ******************** */
/* using cicle - while */
const sqrtNyuton = (n) => {
  let guess = 1;
  while (!isGoodEnough(guess, n)) {
    guess = improve(guess, n);
  }
  return guess;
};

/* testing */
console.log(sqrt(2));
console.log(sqrt(4));
console.log(sqrt(7));
console.log(sqrt(9));
console.log('*** using cicle - while ***');
console.log(sqrtNyuton(2));
console.log(sqrtNyuton(4));
console.log(sqrtNyuton(7));
console.log(sqrtNyuton(9));
