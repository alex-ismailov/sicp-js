/* Следующая процедура реализует алгоритм декодирования. В качестве аргументов она
принимает список из единиц и нулей, а также дерево Хаффмана. */

import { l, cons, isEmpty, head, tail } from "@hexlet/pairs-data";
import { isLeaf, getSymbolLeaf, getLeftBranch, getRightBranch } from './166 - Huffman trees interface';

const chooseBranch = (bit, branch) => {
  switch (bit) {
    case 0:
      return getLeftBranch(branch);
    case 1: 
      return getRightBranch(branch);
    default:
      throw new Error(`плохой бит -- CHOOSE-BRANCH: '${bit}'!`);
  }
};

const decode = (bits, tree) => {
  const decode1 = (bits, currentBranch) => {
    if (isEmpty(bits)) {
      return l();
    }
    
    const nextBranch = chooseBranch(head(bits), currentBranch);
    
    return isLeaf(nextBranch)
      ? cons(getSymbolLeaf(nextBranch), decode1(tail(bits), tree))
      : decode1(tail(bits), nextBranch);
  };

  return decode1(bits, tree);
};

export default decode;
