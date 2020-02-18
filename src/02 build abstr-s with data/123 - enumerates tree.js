import {
  l, head, tail, isEmpty, isList, concat, cons,
} from '@hexlet/pairs-data';
import { show } from '../../libs/seqlib';

/* Чтобы перечислить листья дерева, можно использовать такую процедуру:
Это в точности процедура fringe из упражнения 2.28.  */
const enumerateTree = (tree) => {
  if (isEmpty(tree)) {
    return l();
  }
  return isList(head(tree))
    ? concat(enumerateTree(head(tree)), enumerateTree(tail(tree)))
    : cons(head(tree), enumerateTree(tail(tree)));
};

// const enumerateTree = (tree) => (
//   isEmpty(tree)
//     ? l()
//     : isList(head(tree))
//       ? concat(enumerateTree(head(tree)), enumerateTree(tail(tree)))
//       : cons(head(tree), enumerateTree(tail(tree)))
// );

/* testing */
const tree = l(1, l(2, l(3, l(4, 5), 6), 7), 8);
show(enumerateTree(tree));
