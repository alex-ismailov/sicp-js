/* Упражнение 2.66.
Реализуйте процедуру lookup для случая, когда множество записей организовано в виде бинарного дерева,
отсортированного по числовым значениям ключей. */

import { l, isEmpty } from '@hexlet/pairs-data';
import {
  makeTree, leftBranch, rightBranch, entry,
} from '../../libs/binTreeLib';
import { show } from '../../libs/seqlib';

const lookup = (key, binTree) => {
  if (isEmpty(binTree)) {
    return false;
  }

  const currentKey = entry(binTree);

  if (key === currentKey) {
    return currentKey;
  }

  return key < currentKey
    ? lookup(key, leftBranch(binTree))
    : lookup(key, rightBranch(binTree));
};

/* testing */
const binTree1 = makeTree(5, makeTree(2, makeTree(1, l(), l()), makeTree(3, l(), l())), makeTree(7, makeTree(6, l(), l()), makeTree(9, l(), l())));
const binTree2 = makeTree(7, makeTree(5, makeTree(4, l(), l()), makeTree(6, l(), l())), makeTree(10, makeTree(9, l(), l()), makeTree(13, l(), l())));

console.log('************ lookup in binTree1 *************');
show(binTree1);
show(`lookup(6, binTree1): ${lookup(6, binTree1)}`);
show(`lookup(123, binTree1): ${lookup(123, binTree1)}`);

console.log('\n************ lookup in binTree1 *************');
show(binTree2);
show(`lookup(3, binTree2): ${lookup(3, binTree2)}`);
show(`lookup(13, binTree2): ${lookup(13, binTree2)}`);
