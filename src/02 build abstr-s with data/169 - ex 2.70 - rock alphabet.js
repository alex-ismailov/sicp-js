/* Нижеприведенный алфавит из восьми символов с соответствующими им относительными частотами был разработан,
чтобы эффективно кодировать слова рок-песен 1950-х годов. (Обратите
внимание, что «символы» «алфавита» не обязаны быть отдельными буквами.)

A 2
NA 16
BOOM 1
SHA 3
GET 2
YIP 9
JOB 2
WAH 1

При помощи generate-huffman-tree (упр. 2.69) породите соответствующее дерево Хаффмана,
и с помощью encode закодируйте следующее сообщение:
-> Get a job
-> Sha na na na na na na na na
-> Get a job
-> Sha na na na na na na na na
-> Wah yip yip yip yip yip yip yip yip yip
-> Sha boom
Сколько битов потребовалось для кодирования? Каково наименьшее число битов,
которое потребовалось бы для кодирования этой песни, если использовать код с фиксированной длиной для
алфавита из восьми символов? */

import {
  l, isEmpty, concat, head, tail, cons,
} from '@hexlet/pairs-data';
import { show } from '../../libs/utils';
import {
  generateHuffmanTree, isLeaf, getSymbols,
  getLeftBranch, getRightBranch,
} from './169 - ex 2.69 - generate Huffman tree';

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
const encode = (message, tree) => (isEmpty(message)
  ? l()
  : concat(encodeSymbol(head(message).toUpperCase(), tree), encode(tail(message), tree)));

const rockAlphabet = l(
  l('A', 2),
  l('BOOM', 1),
  l('GET', 2),
  l('JOB', 2),
  l('NA', 16),
  l('SHA', 3),
  l('YIP', 9),
  l('WAH', 1),
);

const rockTree = generateHuffmanTree(rockAlphabet);
show(rockTree);
// =>
// ( (leaf, NA, 16),
//   ((leaf, YIP, 9),
//   (((leaf, A, 2),
//     ((leaf, WAH, 1),
//     (leaf, BOOM, 1),
//     (WAH, BOOM),
//     2),
//   (A, WAH, BOOM),
//   4),
// ((leaf, SHA, 3),
//   ((leaf, JOB, 2),
//     (leaf, GET, 2),
//     (JOB, GET),
//     4),
//   (SHA, JOB, GET),
//   7),
// (A, WAH, BOOM, SHA, JOB, GET),
// 11),
// (YIP, A, WAH, BOOM, SHA, JOB, GET),
// 20),
// (NA, YIP, A, WAH, BOOM, SHA, JOB, GET),
// 36)


const msg1 = l('Get', 'a', 'job');
const msg2 = l('Sha', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na');
const msg3 = l('Get', 'a', 'job');
const msg4 = l('Sha', 'na', 'na', 'na', 'na', 'na', 'na', 'na', 'na');
const msg5 = l('Wah', 'yip', 'yip', 'yip', 'yip', 'yip', 'yip', 'yip', 'yip', 'yip');
const msg6 = l('Sha', 'boom');

show(encode(msg1, rockTree)); // (1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0)
show(encode(msg2, rockTree)); // (1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0)
show(encode(msg3, rockTree)); // (1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0)
show(encode(msg4, rockTree)); // (1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0)
show(encode(msg5, rockTree)); // (1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0)
show(encode(msg6, rockTree)); // (1, 1, 1, 0, 1, 1, 0, 1, 1)
