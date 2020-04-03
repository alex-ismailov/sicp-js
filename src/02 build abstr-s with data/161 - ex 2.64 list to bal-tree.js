/* Следующая процедура list->tree преобразует упорядоченный список в сбалансированное бинарное дерево.
Вспомогательная процедура partial-tree принимает в качестве аргументов целое число n и
список по крайней мере из n элементов, и строит сбалансированное дерево из первых n элементов дерева.
Результат, который возвращает partial-tree, — это пара (построенная через cons),
car которой есть построенное дерево, а cdr — список элементов, не включенных в дерево */

import { l, head, tail, cons, length } from "@hexlet/pairs-data";
import { show } from "../../libs/seqlib";

const entry = (tree) => head(tree);
const leftBranch = (tree) => head(tail(tree));
const rightBranch = (tree) => head(tail(tail(tree)));

const makeTree = (entry, leftBranch, rightBranch) => (
  l(entry, leftBranch, rightBranch)
);

/* ********************************************* */
const listToTree = (elements) => {
  return head(partialTree(elements, length(elements)));
};

const partialTree = (elts, n) => {
  if (n === 0) {
    return cons(l(), elts);
  } else {
    const leftSize = Math.floor((n - 1) / 2);
    const leftResult = partialTree(elts, leftSize);
    const leftTree = head(leftResult);
    const nonLeftElts = tail(leftResult);

    const rightSize = n - (leftSize + 1);
    const thisEntry = head(nonLeftElts);
    const rightResult = partialTree(tail(nonLeftElts), rightSize);
    const rightTree = head(rightResult);
    const remainingElts = tail(rightResult);

    return cons(makeTree(thisEntry, leftTree, rightTree), remainingElts);
  }
};

/* testing */
const list = l(1, 2, 3);
show(listToTree(list));
// show(length(list));

// show(head(l()));
// show(cons(l(), l(1, 2, 3)))