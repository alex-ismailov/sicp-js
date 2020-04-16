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

import { isEmpty, concat, head, cons } from "@hexlet/pairs-data"
import { getSymbols, getLeftBranch } from "./166 - Huffman trees interface";



const isElementOfSet = (x, set) => {
  if (isEmpty(set)) {
    return false;
  }
  return x === head(set)
    ? true
    : isElementOfSet(x, tail(set))
};

const encodeSymbol = (symbol, tree) => {
  if (isLeaf(tree)) {
    return l();
  }
  if (isElementOfSet(symbol, getSymbols(getLeftBranch(tree)))) {
    return cons(0, encodeSymbol(symbol));
  }
};

/* ************************************* */
const encode = (message, tree) => (
  isEmpty(tree)
    ? l()
    : concat(encodeSymbol(head(message), tree), encode(tail(message, tree)))
);


/* testing */
const sampleTree = makeCodeTree(makeLeaf('A', 4),
                    makeCodeTree(
                      makeLeaf('B', 2),
                      makeCodeTree(
                        makeLeaf('D', 1),
                        makeLeaf('C', 1),
                      )));

const msg = l(A, D, A, B, B, C, A);


