const TOLLERANCE = 0.00001;
const average = (a, b) => (a + b) / 2;

const fixedPoint = (f, firstGuess) => {
  const isCloseEnough = (v1, v2) => Math.abs(v1 - v2) < TOLLERANCE;
  const tryWith = (guess) => {
    const next = f(guess);
    if (isCloseEnough(guess, next)) {
      return next;
    }
    return tryWith(next);
  };
  return tryWith(firstGuess);
};

/* ******************* */
const sqrt = (x) => fixedPoint((y) => average(y, x / y), 1.0);

/* testing */
console.log(sqrt(1));
console.log(sqrt(2));
console.log(sqrt(9));
console.log(sqrt(16));
console.log(sqrt(25));

// console.log(average(1.0 ));
