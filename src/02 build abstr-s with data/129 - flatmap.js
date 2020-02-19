import {
  l, concat, toString as listToString,
} from '@hexlet/pairs-data';
import { foldRight, lMap, enumerateInterval, show } from '../../libs/seqlib';

const flatMap = (cb, seq) => (
  foldRight(concat, l(), lMap(cb, seq))
);

// const flatMap = (fn, seq) => foldRight(concat, l(), lMap(fn, seq));

/* testing */
const pairs = (n) => flatMap((i) => lMap((j) => l(i, j),
    enumerateInterval(1, i - 1)),
  enumerateInterval(1, n - 1));

show(pairs(4));
