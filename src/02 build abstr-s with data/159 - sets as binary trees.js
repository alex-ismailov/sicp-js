import {
  isEmpty, head, tail, cons, l,
} from '@hexlet/pairs-data';
import { show } from '../../libs/seqlib';

const entry = (tree) => head(tree);
const leftBranch = (tree) => head(tail(tree));
const rightBranch = (tree) => head(tail(tail(tree)));

const makeTree = (entry, leftBranch, rightBranch) => (
  l(entry, leftBranch, rightBranch)
);

const isElementOfSet = (x, set) => {
  if (isEmpty(set)) {
    return false;
  }
  if (x === entry(set)) {
    return true;
  }
  return x < entry(set)
    ? isElementOfSet(x, leftBranch(set))
    : isElementOfSet(x, rightBranch(set))
};

/* testing */
const one = makeTree(1, l(), l());
const three = makeTree(3, one, l());
const seven = makeTree(7, l(), l());
const eleven = makeTree(11, l(), l());
const nine = makeTree(9, seven, eleven);
const five = makeTree(5, three, nine);
const binTree = five;

console.log(isElementOfSet(5, binTree)); // true
console.log(isElementOfSet(0, binTree)); // false
console.log(isElementOfSet(7, binTree)); // true
console.log(isElementOfSet(9, binTree)); // true
console.log(isElementOfSet(10, binTree)); // false

// show(entry(binTree));
// const threel = leftBranch(binTree);
// show(threel);
// show(entry(three));
// show(leftBranch(three));
// show(rightBranch(three));
// const ninel = rightBranch(binTree);
// show(ninel);
