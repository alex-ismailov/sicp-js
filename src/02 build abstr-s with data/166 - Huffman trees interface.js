import {
  l, head, tail, concat,
} from '@hexlet/pairs-data';

/* Листья дерева представляются в виде списка, состоящего из символа leaf (лист),
символа, содержащегося в листе, и веса: */
const makeLeaf = (symbol, weight) => l('leaf', symbol, weight);
const isLeaf = (node) => head(node) === 'leaf';
const getSymbolLeaf = (leaf) => head(tail(leaf));
const getWeightLeaf = (leaf) => head(tail(tail(leaf)));

/* Дерево в общем случае будет списком из левой ветви, правой ветви, множества символов и веса. М */
const makeCodeTree = (left, right) => l(
  left, 
  right,
  concat(getSymbols(left), getSymbols(right)),
  getWeight(left) + getWeight(right),
);

/* Если мы порождаем дерево таким образом, то у нас будут следующие селекторы: */
const getLeftBranch = (tree) => head(tree);
const getRightBranch = (tree) => head(tail(tree));

/* Это простые примеры обобщенных процедур (generic procedures)
(процедур, которые способны работать более, чем с одним типом данных),
более подробно см. в разделах 2.4 и 2.5. */
const getSymbols = (tree) => (
  isLeaf(tree)
    ? l(getSymbolLeaf(tree))
    : head(tail(tail(tree)))
);
const getWeight = (tree) => (
  isLeaf(tree)
    ? getWeightLeaf(tree)
    : head(tail(tail(tail(tree))))
);

export {
  makeLeaf, isLeaf, getSymbolLeaf, getWeightLeaf,
  makeCodeTree, getLeftBranch, getRightBranch, 
  getSymbols, getWeight,
};
