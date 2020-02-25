/* 
(factorial 6)
(fact-iter 1 1 6)
(fact-iter 1 2 6)
(fact iter 2 3 6)
(fact-iter 6 4 6)
(fact-iter 24 5 6)
(fact-iter 120 6 6)
(fact-iter 720 7 6)
720

Линейно итеративный процесс для вычисления 6!
Но стоит иметь ввиду, что JS не поддерживает хвостовую рекурсию! */

const factorial = (num) => {
  const iter = (acc, counter, max) => (
    counter > max
      ? acc
      : iter(counter * acc, counter + 1, max)
  );
  return iter(1, 1, num);
};

const factorial2 = (num) => {
  const iter = (acc, num) => (
    num === 0
      ? acc
      : iter(acc * num, num - 1)
  );
  return iter(1, num)
};

/* testing */
console.log(factorial(6));
console.log(factorial2(6));
