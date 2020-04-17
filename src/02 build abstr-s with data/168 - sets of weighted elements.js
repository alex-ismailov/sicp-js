/* Мы представим множество листьев и деревьев как список элементов, упорядоченный
по весу в возрастающем порядке. */

import { l, cons, head, tail, isEmpty } from "@hexlet/pairs-data";

import { getWeight, makeLeaf } from './166 - Huffman trees interface.js';
import { show } from '../../libs/utils.js';

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

/* testing */
// const data = l(l('A', 4), l('B', 2), l('C', 1), l('D', 1));
// show(data); // => ((A, 4), (B, 2), (C, 1), (D, 1))

export { adjoinSet, makeLeafSet };