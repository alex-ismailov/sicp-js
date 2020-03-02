/* Упражнение 1.32.
а. Покажите, что sum и product (упражнение 1.31) являются частными случаями еще более
общего понятия, называемого накопление (accumulation), которое комбинирует множество термов с помощью
некоторой общей функции накопления
(accumulate combiner null-value term a next b)
Accumulate принимает в качестве аргументов те же описания термов и диапазона, что и sum с
product, а еще процедуру combiner (двух аргументов), которая указывает, как нужно присоединить текущий терм к
результату накопления предыдущих, и null-value, базовое значение,
которое нужно использовать, когда термы закончатся. Напишите accumulate и покажите, как и
sum, и product можно определить в виде простых вызовов accumulate.
б. Если Ваша процедура accumulate порождает рекурсивный процесс, перепишите ее так,
чтобы она порождала итеративный. Если она порождает итеративный процесс, перепишите ее так,
чтобы она порождала рекурсивный. */

const s = (a, b) => a + b;
const m = (a, b) => a * b;
const inc = (n) => n + 1;
const identity = (x) => x;

/* linear iterative */
const accumulate = (combiner, nullValue, term, a, next, b) => {
  const iter = (curr, acc) => (
    curr > b
      ? acc
      : iter(next(curr), combiner(term(curr), acc))
  );
  return iter(a, nullValue);
};

/* linear recursive */
const accumulate2 = (combiner, nullValue, term, a, next, b) => (
  a > b
    ? nullValue
    : combiner(term(a), accumulate2(combiner, nullValue, term, next(a), next, b))
);

/* linear iterative sum & product */
const sum = (term, a, next, b) => (
  accumulate(s, 0, term, a, next, b)
);

const product = (term, a, next, b) => (
  accumulate(m, 1, term, a, next, b)
);

/* linear recursive sum & product */
const sum2 = (term, a, next, b) => (
  accumulate2(s, 0, term, a, next, b)
);

const product2 = (term, a, next, b) => (
  accumulate2(m, 1, term, a, next, b)
);


/* *** accumulate testing 1 *** */
console.log(sum(identity, 1, inc, 5));
console.log(product(identity, 1, inc, 6));

/* *** accumulate testing 2 *** */
console.log(sum2(identity, 1, inc, 5));
console.log(product2(identity, 1, inc, 6));
