import { l, isEmpty, head, tail, isEqual, isList } from "@hexlet/pairs-data";

/* 
unionSet (объединение) - вычисляет объединение двух множеств, то есть множество,
содержащее те элементы, которые присутствуют хотя бы в одном из аргументов.

intersectionSet (пересечение) -  вычисляет пересечение двух множеств, то есть множество,
которое содержит только те элементы, которые присутствуют в обоих аргументах.

elementOfSet? (проверка на принадлежность) —  это предикат, который определяет,
является ли данный объект элементом множества.

adjoinSet (добавление элемента) - принимает как аргументы объект и
множество, и возвращает множество, которое содержит все элементы исходного множества
плюс добавленный элемент. 
*/

// ***************
// const elementOfSet = (x, set) => (
//   ! isEmpty(set) &&
//     (x === head(set) || elementOfSet(x, tail(set))) 
// );

// ***************
// const elementOfSet = (x, set) => {
//   if (isEmpty(set)) {
//     return false;
//   }
//   return x === head(set)
//     ? true
//     : elementOfSet(x, tail(set))
// };

/* Может ли множество(список) в качестве отдельного элемента содержать другое множество(список)?
Или в данном разделе мы используем множества, которые содержать только примитивы в
виде чисел и строк? 

То есть если нам надо включить одно множество в другое, то это будет выглядеть вот так:
l(4, 5, 6) включить в l(1, 2, 3) = l(1, 2, 3, 5, 6), верно?
l(1, 2, l(3, 5, 6)) - не верно.

Не могу понять set может быть деревом? Или set это всегда линейный связный список?
*/

const elementOfSet = (x, set) => {
  if (isEmpty(set)) {
    return false;
  }
  if (isList(head(set))) {
    return elementOfSet(x, head(set)) || elementOfSet(x, tail(set))
  }
  return x === head(set)
    ? true
    : elementOfSet(x, tail(set))
};

const set1 = l(1, 2, 'three', 'four', 5);
const set2 = l(1, 2, l('three', l('four')), 5, l(7, l(9)), 10);

console.log(elementOfSet('four', set1));
console.log(elementOfSet(9, set1));

console.log(elementOfSet('four', set2));
console.log(elementOfSet(5, set2));
console.log(elementOfSet(9, set2));
console.log(elementOfSet(10, set2));
