import { l, isEmpty, head, tail } from "@hexlet/pairs-data";
import { show } from "../../libs/seqlib";

/* С помощью eq? можно реализовать полезную процедуру, называемую memq. Она
принимает два аргумента, символ и список. Если символ не содержится в списке (то
есть, не равен в смысле eq? ни одному из элементов списка), то memq возвращает ложь.
В противном случае она возвращает подсписок списка, начиная с первого вхождения
символа: */

/* вместо eq? используем стд.оператор === */

const member = (item, x) => {
  if (isEmpty(x)) {
    return false;
  }
  return item === head(x)
    ? x
    : member(item, tail(x))
};

/* testing */
const data = l('one', 'two', 3);
show(member('two', data));
show(member(3, data));
show(member('apple', data));
