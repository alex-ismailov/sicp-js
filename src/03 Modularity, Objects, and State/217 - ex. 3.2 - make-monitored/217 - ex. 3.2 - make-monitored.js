/* Упражнение 3.2.
При тестировании программ удобно иметь возможность подсчитывать, сколько раз за время вычислений была вызвана
та или иная процедура. Напишите процедуру make-monitored, принимающую в качестве параметра процедуру f,
которая сама по себе принимает один входной параметр. Результат, возвращаемый make-monitored — третья процедура,
назовем ее mf, которая подсчитывает, сколько раз она была вызвана, при помощи внутреннего счетчика. Если на
входе mf получает специальный символ how-many-calls?, она возвращает значение счетчика.
Если же на вход подается специальный символ reset-count, mf обнуляет счетчик. Для любого
другого параметра mf возвращает результат вызова f с этим параметром и увеличивает счетчик.
Например, можно было бы сделать отслеживаемую версию процедуры sqrt:
(define s (make-monitored sqrt))
(s 100)
10
(s ’how-many-calls?)
1
*/

// BEGIN (write your solution here)
const makeMonitored = (fn) => {
  let counter = 0;
  const mf = (arg) => {
    switch (arg) {
      case 'howManyCalls':
        return counter;
      case 'resetCount':
        counter = 0;
        return counter;
      default:
        counter += 1;
        return fn(arg);
    }
  };

  return mf;
};

export default makeMonitored;
// END
