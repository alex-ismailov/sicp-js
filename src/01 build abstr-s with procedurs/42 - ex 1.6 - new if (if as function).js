/* Упражнение 1.6.
Лиза П. Хакер не понимает, почему if должна быть особой формой. «Почему нельзя просто
определить ее как обычную процедуру с помощью cond?» — спрашивает она. Лизина подруга Ева
Лу Атор утверждает, что, разумеется, можно, и определяет новую версию if:
const newIf = (pred, thenClause, elseClause) => (
  pred ? thenClause : elseClause
);
Что получится, когда Лиза попытается использовать эту процедуру для вычисления квадратных
корней? Объясните.
*/

const isGoodEnough = (guess, x) => Math.abs((guess ** 2) - x) < 0.0001;
const average = (x, y) => (x + y) / 2;
const improve = (guess, x) => average((x / guess), guess);

const iter = (guess, x) => (
  isGoodEnough(guess, x)
    ? guess
    : iter(improve(guess, x), x)
);
const sqrt = (x) => iter(1.0, x);

/* *********************************************** */
/* вызов sqrt2 приведет к бесконечному циклу, так js имеет аппликативный порядок вычисления аргументов,
первые два аргумента получится вычислить, но вот 3й арг. приведет нас к бесконечному циклу.
т.е. newIf должен сначала вычислить все свои аргументы и только потом выполнить свое тело, но
3й арг. не даст нам этого сделать никогда */

const newIf = (pred, thenClause, elseClause) => (
  pred ? thenClause : elseClause
);
const iter2 = (guess, x) => (
  newIf(isGoodEnough(guess, x), 
    guess,
    iter2(improve(guess, x), x))
);
const sqrt2 = (x) => iter2(1.0, x);

/* testing */
console.log(sqrt(2));
console.log(sqrt(4));
console.log(sqrt(7));
console.log(sqrt(9));

console.log(sqrt(0.00004));
console.log(sqrt(0.00001));

// console.log(sqrt2(2));
// console.log(sqrt2(4));
// console.log(sqrt2(7));
// console.log(sqrt2(9));
