/* Упражнение 1.12.
Приведенная ниже таблица называется треугольником Паскаля (Pascal’s triangle).
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
          . . .
Все числа по краям треугольника равны 1, а каждое число внутри треугольника равно сумме двух
чисел над ним. Напишите процедуру, вычисляющую элементы треугольника Паскаля с помощью
рекурсивного процесса. */

const pascalTriangle = (r, c) => (
  (c === 0) || (c === r)
    ? 1
    : pascalTriangle(r - 1, c - 1) + pascalTriangle(r - 1, c)
);

/* testing */
console.log(pascalTriangle(3, 2));
console.log(pascalTriangle(4, 2));


/* look pict: https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/57%20-%20ex%201.12%20-%20Pascal%E2%80%99s%20triangle.png */
