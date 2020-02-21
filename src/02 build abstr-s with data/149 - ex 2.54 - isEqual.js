import {
  l, isEmpty, isList, head, tail,
} from '@hexlet/pairs-data';

/* Упражнение 2.54 JS Adapt - https://sicp.comp.nus.edu.sg/chapters/35
Мы хотели бы определить функцию, is_equal которая проверяет,
содержат ли два списка одинаковые элементы, расположенные в одном и том же порядке.
Например,
is_equal ( list ( "this" , "is" , "a" , "list" ),
         list ( "this" , "is" , "a" , "list" ));
верно, но
is_equal ( list ( "this" , "is" , "a" , "list" ),
         list ( "this" , list ( "is" , "a" ), "list" ));
ложно. Чтобы быть более точным, мы можем определить is_equal рекурсивно в
терминах основного === равенства строк, говоря , что a и b равны относительно ,
is_equal если они обе строки и строки равны по отношению к ===, или если они оба списка
таким образом, что head(a) равно в отношении is_equal к head(b) и tail(a) равно по
отношению к is_equalк tail(b). Используя эту идею, реализовать is_equal как функцию. */

// ************************
/* simple isEqual for linear list */
// const isEqual = (a, b) => {
//   if (isEmpty(a) && isEmpty(b)) {
//     return true;
//   }
//   if (head(a) !== head(b)) {
//     return false;
//   }
//   return isEqual(tail(a), tail(b));
// };

const isEqual = (a, b) => {
  if (isEmpty(a) && isEmpty(b)) {
    return true;
  }
  if (isEmpty(a) !== isEmpty(b)) {
    return false;
  }
  if (isList(head(a)) && isList(head(b))) {
    return isEqual(head(a), head(b));
  }
  if (head(a) === head(b)) {
    return isEqual(tail(a), tail(b));
  }
  return false;
};

/* testing */
const list1 = l('this', 'is', 'a', 'list');
const list2 = l('this', 'is', 'a', 'list');
const list3 = l('this', l('is', 'a'), 'list');
const list4 = l('this', l('is', 'a'), 'list');
const list5 = l('this', l('is', 'b'), 'list');
const list6 = l('this', l('is'), 'list');

console.log(isEqual(l(), l())); // true
console.log(isEqual(list1, list2)); // true
console.log(isEqual(list1, list3)); // false
console.log(isEqual(list3, list4)); // true
console.log(isEqual(list4, list5)); // false
console.log(isEqual(list1, list5)); // false
console.log(isEqual(list5, list6)); // false

// const nums1 = l(1, 2, 3);
// const nums2 = l(1, 2, 4);
// const nums3 = l(1, 2, l(4));
// console.log(isEqual(nums1, nums1));
// console.log(isEqual(nums1, nums2));
// console.log(isEqual(nums2, nums3));
