import {
  isEmpty, l, cons,
} from '@hexlet/pairs-data';
import {
  entry, leftBranch, rightBranch, makeTree,
} from '../../libs/binTreeLib.js';
import { show, concat } from '../../libs/seqlib.js';

const adjoinSet = (x, set) => {
  if (isEmpty(set)) {
    return makeTree(x, l(), l());
  }
  if (x === entry(set)) {
    return true;
  }
  return x < entry(set)
    ? makeTree(entry(set), adjoinSet(x, leftBranch(set)), rightBranch(set))
    : makeTree(entry(set), leftBranch(set), adjoinSet(x, rightBranch(set)))
};

const treeToList1 = (tree) => (
  isEmpty(tree)
    ? l()
    : concat(
      treeToList1(leftBranch(tree)),
      cons(entry(tree), treeToList1(rightBranch(tree))))
);

const treeToList2 = (set) => {
  const iter = (tree, acc) => (
    isEmpty(tree)
      ? acc
      : iter(
        leftBranch(tree),
        cons(entry(tree),
          iter(rightBranch(tree), acc)))
  );
  return iter(set, l());
};

/* testing */
const binTree1 = makeTree(7, makeTree(3, makeTree(1, l(), l()), makeTree(5, l(), l())), makeTree(9, l(), makeTree(11, l(), l())));
const binTree2 = makeTree(3, makeTree(1, l(), l()), makeTree(7, makeTree(5, l(), l()), makeTree(9, l(), makeTree(11, l(), l()))));
const binTree3 = makeTree(5, makeTree(3, makeTree(1, l(), l()), l()), makeTree(9, makeTree(7, l(), l()), makeTree(11, l(), l())));

console.log('****** bal trees *******');
show(binTree1);
show(binTree2);
show(binTree3);

console.log('****** flat tree *******');
const flatTree1 = treeToList1(binTree1);
show(flatTree1);
const flatTree2 = treeToList2(binTree1);
show(flatTree2);

const flatTree3 = treeToList1(binTree2);
show(flatTree3);
const flatTree4 = treeToList2(binTree2);
show(flatTree4);

const flatTree5 = treeToList1(binTree3);
show(flatTree5);
const flatTree6 = treeToList2(binTree3);
show(flatTree6);


console.log('****** not bal tree *******');
const notBalTree1 = makeTree(1, l(), l());
const notBalTree2 = adjoinSet(2, notBalTree1);
const notBalTree3 = adjoinSet(3, notBalTree2);
const notBalTree4 = adjoinSet(4, notBalTree3);
const notBalTree5 = adjoinSet(5, notBalTree4);
show(notBalTree5);

const flatNotBalTree1 = treeToList1(notBalTree5);
const flatNotBalTree2 = treeToList2(notBalTree5);
show(flatNotBalTree1);
show(flatNotBalTree2);
