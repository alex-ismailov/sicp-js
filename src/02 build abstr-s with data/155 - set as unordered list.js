import { l, isEmpty, head, tail, cons } from "@hexlet/pairs-data";
import { show } from "../../libs/seqlib";
/* 
unionSet (объединение) - вычисляет объединение двух множеств, то есть множество,
содержащее те элементы, которые присутствуют хотя бы в одном из аргументов.
Т.е. это объединение множеств, как concat для списков.

intersectionSet (пересечение) -  вычисляет пересечение двух множеств, то есть множество,
которое содержит только те элементы, которые присутствуют в обоих аргументах.

isElementOfSet? (проверка на принадлежность) —  это предикат, который определяет,
является ли данный объект элементом множества.

adjoinSet (добавление элемента) - принимает как аргументы объект и
множество, и возвращает множество, которое содержит все элементы исходного множества
плюс добавленный элемент. 
*/

/* ************************************ */
/* Множества как неупорядоченные списки */
/* Ни один элемент не содержится более одного раза */

// ******** source academy ver *******
// const isElementOfSet = (x, set) => (
//   ! isEmpty(set) &&
//     (x === head(set) || isElementOfSet(x, tail(set))) 
// );

const isElementOfSet = (x, set) => {
  if (isEmpty(set)) {
    return false;
  }
  return x === head(set)
    ? true
    : isElementOfSet(x, tail(set))
};

const adjoinSet = (x, set) => (
  isElementOfSet(x, set)
    ? set
    : cons(x, set)
);

const intersectionSet = (set1, set2) => {
  if (isEmpty(set1) || isEmpty(set2)) {
    return l();
  }
  return isElementOfSet(head(set1), set2)
    ? cons(head(set1), intersectionSet(tail(set1), set2))
    : intersectionSet(tail(set1), set2);
};

const unionSet = (set1, set2) => (
  isEmpty(set1)
    ? set2
    : adjoinSet(head(set1), unionSet(tail(set1), set2))
);

/* testing */
const set1 = l(1, 2, 5, 4, 3);
console.log('*** isElementOfSet ***');
console.log(isElementOfSet(4, set1));
console.log(isElementOfSet(10, set1));

console.log('*** adjoinSet ***');
const set2 = adjoinSet(6, set1);
show(set2);
const set3 = adjoinSet(5, set2);
show(set3);

console.log('*** intersectionSet ***');
const set4 = l(8, 9, 5, 6, 1);
const setOfintersect = intersectionSet(set1, set4);
show(setOfintersect);

console.log('*** unionSet ***');
const set5 = l(1, 12, 6, 15, 11, 2);
const setOfUnion = unionSet(set1, set5);
show(setOfUnion);


// ******* ver 2 - set as tree ********
// const isElementOfSet = (x, set) => {
//   if (isEmpty(set)) {
//     return false;
//   }
//   if (isList(head(set))) {
//     return isElementOfSet(x, head(set)) || isElementOfSet(x, tail(set))
//   }
//   return x === head(set)
//     ? true
//     : isElementOfSet(x, tail(set))
// };
// const set2 = l(1, 2, l('three', l('four')), 5, l(7, l(9)), 10);
