/* Упражнение 2.67.
Пусть нам даны дерево кодирования и пример сообщения:
(define sample-tree
  (make-code-tree (make-leaf ’A 4)
                  (make-code-tree
                    (make-leaf ’B 2)
                    (make-code-tree (make-leaf ’D 1)
                      (make-leaf ’C 1)))))

(define sample-message ’(0 1 1 0 0 1 0 1 0 1 1 1 0))

Раскодируйте сообщение при помощи процедуры decode. */

import { l } from '@hexlet/pairs-data';
import { makeCodeTree, makeLeaf } from './166 - Huffman trees interface';
import decode from './167 - Huffman tree decoding';
import { show } from '../../libs/utils';

const sampleTree = makeCodeTree(makeLeaf('A', 4),
                    makeCodeTree(
                      makeLeaf('B', 2),
                      makeCodeTree(
                        makeLeaf('D', 1),
                        makeLeaf('C', 1),
                      )));

const sampleMassage = l(0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0);

const res = decode(sampleMassage, sampleTree);

show(res); // => (A, D, A, B, B, C, A)
