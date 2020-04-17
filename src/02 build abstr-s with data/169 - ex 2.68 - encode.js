/* Упражнение 2.68.
Процедура encode получает в качестве аргументов сообщение и дерево, и порождает список битов,
который представляет закодированное сообщение. */

/* (define (encode message tree)
  (if (null? message)
    ’()
    (append (encode-symbol (car message) tree)
            (encode (cdr message) tree)))) */

/* Encode-symbol — процедура, которую Вы должны написать, возвращает список битов, который кодирует данный символ в
соответствии с заданным деревом. Вы должны спроектировать encode-symbol так, чтобы она сообщала об ошибке,
если символ вообще не содержится в дереве.

Проверьте свою процедуру, закодировав тот результат, который Вы получили в упражнении 2.67,
с деревом-примером и проверив, совпадает ли то, что получаете Вы, с исходным сообщением. */

/* eslint indent: 0 */
import {
 l, isEmpty, concat, head, tail, cons,
} from '@hexlet/pairs-data';
import { show } from '../../libs/utils';
import {
  makeCodeTree, makeLeaf, isLeaf, getSymbols, getLeftBranch, getRightBranch,
} from './166 - Huffman trees interface';

const isElementOfSet = (x, set) => {
  if (isEmpty(set)) {
    return false;
  }
  return x === head(set)
    ? true
    : isElementOfSet(x, tail(set));
};

const encodeSymbol = (symbol, tree) => {
  if (isLeaf(tree)) {
    return l();
  }
  if (isElementOfSet(symbol, getSymbols(getLeftBranch(tree)))) {
    return cons(0, encodeSymbol(symbol, getLeftBranch(tree)));
  }
  if (isElementOfSet(symbol, getSymbols(getRightBranch(tree)))) {
    return cons(1, encodeSymbol(symbol, getRightBranch(tree)));
  }
  throw new Error(`плохой бит -- CHOOSE-BRANCH: '${symbol}'!`);
};

/* ************************************* */
const encode = (message, tree) => (
  isEmpty(message)
    ? l()
    : concat(encodeSymbol(head(message), tree), encode(tail(message), tree))
);

/* testing */
// const sampleTree = makeCodeTree(makeLeaf('A', 4),
//                     makeCodeTree(
//                       makeLeaf('B', 2),
//                       makeCodeTree(
//                         makeLeaf('D', 1),
//                         makeLeaf('C', 1),
//                       ),
// ));

// const msgA = l('A');
// const msgB = l('B');
// const msgC = l('C');
// const msgD = l('D');
// const msg1 = l('A', 'D', 'A', 'B', 'B', 'C', 'A');
// const msg3 = l('A', 'C', '/', 'D', 'C');

// show(encode(msgA, sampleTree)); // => (0)
// show(encode(msgB, sampleTree)); // => (1, 0)
// show(encode(msgD, sampleTree)); // => (1, 1, 0)
// show(encode(msgC, sampleTree)); // => (1, 1, 1)

// show(encode(msg1, sampleTree)); // => l(0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0);
// (0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0)
// (0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0)

// show(encode(msg3, sampleTree)); // => throw Error: плохой бит -- CHOOSE-BRANCH: '/'!

export {
  encode,
};