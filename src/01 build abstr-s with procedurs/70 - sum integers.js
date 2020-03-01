/* sumIntegers вычисляет сумму целых чисел
от a до b: */
const sumIntegers = (a, b) => (
  a > b
    ? 0
    : a + sumIntegers(a + 1, b)
);

/* Вторая вычисляет сумму кубов целых чисел в заданном диапазоне: */
const cube = (x) => x * x * x;
const sumCubes = (a, b) => (
  a > b
    ? 0
    : cube(a) + sumCubes(a + 1, b)
);

/* Третья вычисляет сумму последовательности термов в ряде который (очень медленно) сходится к π/8 */
const piSum = (a, b) => (
  a > b
    ? 0
    : (1 / (a * (a + 2))) + piSum(a + 4, b) 
);

/* testing */
console.log(sumIntegers(1, 3)); // 6
console.log(sumIntegers(1, 10)); // 55

console.log(sumCubes(1, 3)); // 36
console.log(sumCubes(1, 10)); // 3025

console.log(piSum(1, 3)); // 0.3333333333333333
console.log(piSum(1, 3000)); // 0.3926157483746501
