/* Упражнение 1.23.
Процедура smallest-divisor в начале этого раздела проводит множество лишних проверок:
после того, как она проверяет, делится ли число на 2, нет никакого смысла проверять делимость
на другие четные числа. Таким образом, вместо последовательности 2, 3, 4, 5, 6 . . . ,
используемой для test-divisor, было бы лучше использовать 2, 3, 5, 7, 9 . . . . Чтобы реализовать такое
улучшение, напишите процедуру next, которая имеет результатом 3, если получает 2 как аргумент, а
иначе возвращает свой аргумент плюс 2. Используйте (next test-divisor) вместо (+ test-divisor 1) в smallest-divisor.
Используя процедуру timed-prime-test с модифицированной версией smallest-divisor, запустите тест для
каждого из 12 простых чисел, найденных в упражнении 1.22. Поскольку эта модификация снижает количество шагов проверки
вдвое, Вы должны ожидать двукратного ускорения проверки. Подтверждаются ли эти ожидания?
Если нет, то каково наблюдаемое соотношение скоростей двух алгоритмов, и как Вы объясните
то, что оно отличается от 2? */

const isDivides = (n, div) => n % div === 0;

const next = (div) => (
  div === 2
    ? 3
    : div + 2
);

/* faster smallestDivisor */
const smallestDivisor = (num) => {
  const iter = (n, testDiv) => {
    if (testDiv ** 2 > n) {
      return n;
    }
    return isDivides(n, testDiv)
      ? testDiv
      : iter(n, next(testDiv));
  };
  return iter(num, 2);
};

/* version for big numbers */
// const smallestDivisor = (n, testDiv) => {
//   let div = testDiv;
//   while(div ** 2 < n) {
//     if (isDivides(n, div)) {
//       return div;
//     }
//     div = next(div);
//   }
//   return n;
// };

/* testing */
const nums = [1, 2, 3, 1009, 1013, 1019, 10007, 10009, 10037, 100003, 100019, 100043];
nums.forEach((n) => console.log(`smallest divisor of ${n} is ${smallestDivisor(n)}`));

/* big numbers examples will only work when used smallestDivisor using while cicle */
// console.log('*** big numbers tests ***');
// const bigNums = [101000023, 1000000000039, 100000000000031, 1000000000000037];
// bigNums.forEach((n) => console.log(`smallest divisor of ${n} is ${smallestDivisor(n)}`));
