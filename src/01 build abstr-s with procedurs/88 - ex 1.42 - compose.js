/* Упражнение 1.42.
Пусть f и g — две одноаргументные функции. По определению, композиция (composition) f и
g есть функция x 7→ f(g(x)). Определите процедуру compose которая реализует композицию.
Например, если inc — процедура, добавляющая к своему аргументу 1,
((compose square inc) 6) // 49 */

const inc = (x) => x + 1;
const square = (x) => x * x;

const compose = (f, g) => (x) => f(g(x));

/* testing */
const res = compose(square, inc)(6);
console.log(res); // 49
