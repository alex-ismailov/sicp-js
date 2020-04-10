/* Используя результаты упражнений 2.63 и 2.64, постройте реализации union-set и intersection-set порядка Θ(n)
для множеств, реализованных как (сбалансированные) бинарные деревья. */

import {
  isEmpty, l, cons, head, tail, length,
} from '@hexlet/pairs-data';
import {
  entry, leftBranch, rightBranch, makeTree,
} from '../../libs/binTreeLib';
import { show } from '../../libs/seqlib';

const flatten = (set) => {
  const iter = (tree, acc) => (
    isEmpty(tree)
      ? acc
      : iter(
        leftBranch(tree),
        cons(entry(tree),
          iter(rightBranch(tree), acc)),
      )
  );
  return iter(set, l());
};

const unionList = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }
  if (isEmpty(list2)) {
    return list1;
  }
  const x1 = head(list1);
  const x2 = head(list2);

  if (x1 === x2) {
    return cons(x1, unionList(tail(list1), tail(list2)));
  }
  return x1 < x2
    ? cons(x1, unionList(tail(list1), list2))
    : cons(x2, unionList(list1, tail(list2)));
};

const intersect = (set1, set2) => {
  if (isEmpty(set1) || isEmpty(set2)) {
    return l();
  }
  const x1 = head(set1);
  const x2 = head(set2);

  if (x1 === x2) {
    return cons(x1, intersect(tail(set1), tail(set2)));
  }
  return x1 < x2
    ? intersect(tail(set1), set2)
    : intersect(set1, tail(set2));
};


/* ********************** list to balanced tree *********************** */
const partialTree = (elts, n) => {
  if (n === 0) {
    return cons(l(), elts);
  }
  const leftSize = Math.floor((n - 1) / 2);
  const leftResult = partialTree(elts, leftSize);
  const leftTree = head(leftResult);
  const nonLeftElts = tail(leftResult);

  const rightSize = n - (leftSize + 1);
  const thisEntry = head(nonLeftElts);
  const rightResult = partialTree(tail(nonLeftElts), rightSize);
  const rightTree = head(rightResult);
  const remainingElts = tail(rightResult);

  return cons(makeTree(thisEntry, leftTree, rightTree), remainingElts);
};

const listToTree = (elements) => head(partialTree(elements, length(elements)));


/* ****************** union trees ************************ */
const unionSet = (tree1, tree2) => {
  const flatTree1 = flatten(tree1);
  const flatTree2 = flatten(tree2);
  const newList = unionList(flatTree1, flatTree2);
  const newTree = listToTree(newList);

  return newTree;
};

const unionTrees = (...trees) => {
  const flatTrees = trees.map((tree) => flatten(tree));
  const newFlatTree = flatTrees.reduce((acc, node) => unionList(acc, node), l());

  return listToTree(newFlatTree);
};

/* ****************** intersection trees ******************** */

const intersectionSet = (tree1, tree2) => {
  const flatTree1 = flatten(tree1);
  const flatTree2 = flatten(tree2);

  const intersectionList = intersect(flatTree1, flatTree2);

  return listToTree(intersectionList);
};


/* data */
show('**************** /* union testing */ ******************');
const binTree1 = makeTree(7, makeTree(3, makeTree(1, l(), l()), makeTree(5, l(), l())), makeTree(9, l(), makeTree(11, l(), l())));
const binTree2 = makeTree(4, makeTree(2, l(), l()), makeTree(8, makeTree(6, l(), l()), makeTree(10, l(), makeTree(12, l(), l()))));
const binTree3 = makeTree(13, makeTree(12, makeTree(11, l(), l()), l()), makeTree(16, makeTree(14, l(), l()), makeTree(17, l(), l())));
show('*********** binTrees *************');
show(binTree1);
show(binTree2);
show(binTree3);
show('******* unionSet(binTree1, binTree2) *******');
show(unionSet(binTree1, binTree2));
show('******* unionTrees(binTree1, binTree2) *******');
show(unionTrees(binTree1, binTree2));
show('******* unionTrees(binTree1, binTree2, binTree3) *******');
show(unionTrees(binTree1, binTree2, binTree3));
// =>
// *********** binTrees *************
// (7, (3, (1, (), ()), (5, (), ())), (9, (), (11, (), ())))
// (4, (2, (), ()), (8, (6, (), ()), (10, (), (12, (), ()))))
// (13, (12, (11, (), ()), ()), (16, (14, (), ()), (17, (), ())))
// ******* unionSet(binTree1, binTree2) *******
// (6, (3, (1, (), (2, (), ())), (4, (), (5, (), ()))), (9, (7, (), (8, (), ())), (11, (10, (), ()), (12, (), ()))))
// ******* unionTrees(binTree1, binTree2) *******
// (6, (3, (1, (), (2, (), ())), (4, (), (5, (), ()))), (9, (7, (), (8, (), ())), (11, (10, (), ()), (12, (), ()))))
// ******* unionTrees(binTree1, binTree2, binTree3) *******
// eslint-disable-next-line max-len
// (8, (4, (2, (1, (), ()), (3, (), ())), (6, (5, (), ()), (7, (), ()))), (12, (10, (9, (), ()), (11, (), ())), (14, (13, (), ()), (16, (), (17, (), ())))))

show('\n');
show('**************** /* intersection testing */ ******************');
const binTree4 = makeTree(5, makeTree(2, makeTree(1, l(), l()), makeTree(3, l(), l())), makeTree(7, makeTree(6, l(), l()), makeTree(9, l(), l())));
const binTree5 = makeTree(7, makeTree(5, makeTree(4, l(), l()), makeTree(6, l(), l())), makeTree(10, makeTree(9, l(), l()), makeTree(13, l(), l())));
show('*********** binTrees *************');
show(binTree4);
show(binTree5);
show('******* intersectionSet(binTree4, binTree5) *******');
show(intersectionSet(binTree4, binTree5));
// =>
// **************** /* intersection testing */ ******************
// *********** binTrees *************
// (5, (2, (1, (), ()), (3, (), ())), (7, (6, (), ()), (9, (), ())))
// (7, (5, (4, (), ()), (6, (), ())), (10, (9, (), ()), (13, (), ())))
// ******* intersectionSet(binTree4, binTree5) *******
// (6, (5, (), ()), (7, (), (9, (), ())))
