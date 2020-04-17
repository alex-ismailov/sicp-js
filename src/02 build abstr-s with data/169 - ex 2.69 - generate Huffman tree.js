/* Упражнение 2.69.
Следующая процедура берет в качестве аргумента список пар вида символ-частота (где ни один
символ не встречается более, чем в одной паре) и порождает дерево кодирования по Хаффману в
соответствии с алгоритмом Хаффмана.

(define (generate-huffman-tree pairs)
  (successive-merge (make-leaf-set pairs)))

Приведенная выше процедура make-leaf-set преобразует список пар в упорядоченное множество пар.
Вам нужно написать процедуру successive-merge, которая при помощи make-codetree сливает
наиболее легкие элементы множества, пока не останется только один элемент, который и представляет собой
требуемое дерево Хаффмана. (Эта процедура устроена немного хитро, но она не такая уж сложная.
Если Вы видите, что строите сложную процедуру, значит, почти наверняка Вы делаете что-то не то.
Можно извлечь немалое преимущество из того, что мы используем
упорядоченное представление для множеств.) */

import {
  l, head, tail, concat, isEmpty, cons,
} from '@hexlet/pairs-data';
import { show } from '../../libs/utils';

const makeLeaf = (symbol, weight) => l('leaf', symbol, weight);
const isLeaf = (node) => head(node) === 'leaf';
const getSymbolLeaf = (leaf) => head(tail(leaf));
const getWeightLeaf = (leaf) => head(tail(tail(leaf)));

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

const makeCodeTree = (left, right) => l(
  left,
  right,
  concat(getSymbols(left), getSymbols(right)),
  getWeight(left) + getWeight(right),
);

const getLeftBranch = (tree) => head(tree);
const getRightBranch = (tree) => head(tail(tree));

const adjoinSet = (x, set) => {
  if (isEmpty(set)) {
    return l(x);
  }
  return getWeight(x) < getWeight(head(set))
    ? cons(x, set)
    : cons(head(set), adjoinSet(x, tail(set)));
};

const makeLeafSet = (pairs) => {
  if (isEmpty(pairs)) {
    return l();
  }
  const pair = head(pairs);

  return adjoinSet(
    makeLeaf(head(pair), head(tail(pair))),
    makeLeafSet(tail(pairs)),
  );
};

/* ************* ex ************** */
const successiveMerge = (trees) => {
  if (isEmpty(tail(trees))) {
    return head(trees);
  }
  return successiveMerge(
    adjoinSet(
      makeCodeTree(head(trees), head(tail(trees))),
      tail(tail(trees)),
    ),
  );
};

const generateHuffmanTree = (pairs) => {

  return successiveMerge(makeLeafSet(pairs));
};

/* testing */
// const data = l(l('A', 4), l('B', 2), l('C', 1), l('D', 1));
// show(generateHuffmanTree(data));

export {
  generateHuffmanTree, makeLeaf, makeLeafSet, isLeaf, makeCodeTree, getSymbols,
  getLeftBranch, getRightBranch,
};
