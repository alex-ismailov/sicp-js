import {
  l, head, tail,
} from '@hexlet/pairs-data';

const entry = (tree) => head(tree);
const leftBranch = (tree) => head(tail(tree));
const rightBranch = (tree) => head(tail(tail(tree)));
const makeTree = (e, lb, rb) => l(e, lb, rb);

const adjoinSet = (x, set) => {
  if (isEmpty(set)) {
    return l(x, l(), l());
  }
  if (x === entry(set)) {
    return set;
  }
  return x < entry(set)
    ? makeTree(entry(set), adjoinSet(x, leftBranch(set)), rightBranch(set))
    : makeTree(entry(set), leftBranch(set), adjoinSet(x, rightBranch(set)))
};

export {
  entry, leftBranch, rightBranch, makeTree,
}; 
