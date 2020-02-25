import {
  isEmpty, head, tail, l,
} from '@hexlet/pairs-data';
import {
  entry, leftBranch, rightBranch, makeTree,
} from '../../libs/binTreeLib';
import { show } from '../../libs/seqlib';

const getEntry = (tree) => head(tree);
const getLeftBranch = (tree) => head(tail(tree));
const getRightBranch = (tree) => head(tail(tail(tree)));

const makeTree = (entry, leftBranch, rightBranch) => (
  l(entry, leftBranch, rightBranch)
);

const isElementOfSet = (x, set) => {
  if (isEmpty(set)) {
    return false;
  }
  if (x === getEntry(set)) {
    return true;
  }
  return x < getEntry(set)
    ? isElementOfSet(x, getLeftBranch(set))
    : isElementOfSet(x, getRightBranch(set));
};

const adjoinSet = (x, set) => {
  if (isEmpty(set)) {
    return makeTree(x, l(), l());
  }
  if (x === getEntry(set)) {
    return true;
  }
  return x < getEntry(set)
    ? makeTree(getEntry(set), adjoinSet(x, getLeftBranch(set)), getRightBranch(set))
    : makeTree(getEntry(set), getLeftBranch(set), adjoinSet(x, getRightBranch(set)))
};

/* testing */
const binTree1 = makeTree(5, makeTree(3, makeTree(1, l(), l()), l()), makeTree(9, makeTree(7, l(), l()), makeTree(11, l(), l())));
console.log('****** isElementOf Set *******');
console.log(`isElementOfSet(11, binTree1) = ${isElementOfSet(11, binTree1)}`); // true
console.log(`isElementOfSet(4, binTree1) = ${isElementOfSet(4, binTree1)}`); // false
console.log(`isElementOfSet(1, binTree1) = ${isElementOfSet(1, binTree1)}`); // true
console.log(`isElementOfSet(6, binTree1) = ${isElementOfSet(6, binTree1)}`); // false
console.log(`isElementOfSet(7, binTree1) = ${isElementOfSet(7, binTree1)}`); // true
console.log('****** adjoin *******');
console.log(`isElementOfSet(13, binTree1) = ${isElementOfSet(13, binTree1)}`);
const binTree2 = adjoinSet(13, binTree1);
console.log(`isElementOfSet(13, binTree2) = ${isElementOfSet(13, binTree2)}`);
const binTree3 = adjoinSet(4, binTree2);
console.log(`isElementOfSet(4, binTree3) = ${isElementOfSet(4, binTree3)}`);
show(binTree3);

console.log('****** not bal tree *******');
const notBalTree1 = makeTree(1, l(), l());
const notBalTree2 = adjoinSet(2, notBalTree1);
const notBalTree3 = adjoinSet(3, notBalTree2);
const notBalTree4 = adjoinSet(4, notBalTree3);
const notBalTree5 = adjoinSet(5, notBalTree4);
show(notBalTree5);