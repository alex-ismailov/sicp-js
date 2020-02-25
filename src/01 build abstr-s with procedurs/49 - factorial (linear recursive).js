/* 
(* 6 (factorial 5))
(factorial 6)
(* 6 (* 5 (factorial 4)))
(* 6 (* 5 (* 4 (factorial 3))))
(* 6 (* 5 (* 4 (* 3 (factorial 2)))))
(* 6 (* 5 (* 4 (* 3 (* 2 (factorial 1))))))
(* 6 (* 5 (* 4 (* 3 2))))
(* 6 (* 5 (* 4 (* 3 (* 2 1)))))
(* 6 (* 5 (* 4 6)))
(* 6 (* 5 24))
(* 6 120)
720 
*/
/* Линейно рекурсивный процесс для вычисления 6!. */

const factorial = (num) => (
  num === 1
    ? 1
    : num * factorial(num - 1)
);

/* testing */
console.log(factorial(6));
