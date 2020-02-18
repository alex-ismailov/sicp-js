import { l, cons } from '@hexlet/pairs-data';
import { show } from '../../libs/seqlib';

const enumerateInterval = (b, e) => (
  b > e
    ? l()
    : cons(b, enumerateInterval(b + 1, e))
);

/* testing */
show(enumerateInterval(7, 10));
show(enumerateInterval(1, 10));
