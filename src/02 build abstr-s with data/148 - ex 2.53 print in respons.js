import { l, isEmpty, head, tail } from "@hexlet/pairs-data";
import { show } from "../../libs/seqlib";

const member = (item, x) => {
  if (isEmpty(x)) {
    return false;
  }
  return item === head(x)
    ? x
    : member(item, tail(x))
};

show(l("a", "b", "c"));
show(l(l("george")));
show(tail(l(l("x1", "x2"), l("y1", "y2"))));
show(tail(head(l(l("x1", "x2"), l("y1", "y2")))));
show(member("red", l(l("red", "shoes"), l("blue", "socks"))));
show(member("red", l("red", "shoes", "blue", "socks")));

/* 
(a, b, c)
((george))
((y1, y2))
(x2)
false
(red, shoes, blue, socks) 
*/
