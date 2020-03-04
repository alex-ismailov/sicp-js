/* Упражнение 1.41.
Определите процедуру double, которая принимает как аргумент процедуру с одним аргументом и
возвращает процедуру, которая применяет исходную процедуру дважды. Например, если
процедура inc добавляет к своему аргументу 1, то (double inc) должна быть процедурой,
которая добавляет 2. Скажите, какое значение возвращает */

const inc = (x) => x + 1;
const square = (x) => x * x;

const double = (fn) => (x) => fn(fn(x));

/* testing */
const doubleInc = double(inc);
console.log(doubleInc(1));
console.log(doubleInc(5));

const doubleSquare = double(square);
console.log(doubleSquare(2));

/* 2. Скажите, какое значение возвращает  */
const res = (double(double(double)))(inc)(5);
console.log(res); // 21
