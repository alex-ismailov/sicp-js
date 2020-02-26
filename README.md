## SICP - JavaScript adaptation
![alt-текст](https://github.com/alex-ismailov/sicp-js/blob/master/imgs/sicp.png)

Примеры и решения упражнений из курса SICP

авт. Harold Abelson and Gerald Jay Sussman with Julie Sussman

src: [http://newstar.rinet.ru/~goga/sicp/sicp.pdf](http://newstar.rinet.ru/~goga/sicp/sicp.pdf)

### 1. Построение абстракций с помощью процедур
#### 1.1. Элементы программирования
* [40 - sqrt (Nyuton method).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/40%20-%20sqrt%20(Nyuton%20method).js)
* [42 - ex 1.6 - new if (if as function).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/42%20-%20ex%201.6%20-%20new%20if%20(if%20as%20function).js)
* [43 - ex 1.7 - goodEnough (better).js](https://github.com/alex-ismailov/sicp-js/tree/master/src/01%20build%20abstr-s%20with%20procedurs)
* [43 - ex 1.8 - cube sqrt.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/43%20-%20ex%201.8%20-%20cube%20sqrt.js)

##### 1.2.1. Линейные рекурсия и итерация
* [49 - factorial (linear recursive).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/49%20-%20factorial%20(linear%20recursive).js)
* [50 - factorial (linear iterative).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/50%20-%20factorial%20(linear%20iterative).js)
* [52 - ex 1.9 - sum(inc).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/52%20-%20ex%201.9%20-%20sum(inc).js)
* [52 - ex 1.10 - Ackermann function.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/52%20-%20ex%201.10%20-%20Ackermann%20function.js)

##### 1.2.2. Древовидная рекурсия
* [53 - fibonacci(tree recursive).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/53%20-%20fibonacci(tree%20recursive).js)
* [55 - fibonacci(linear iterative).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/55%20-%20fibonacci(linear%20iterative).js)
* [56 - countChange.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/56%20-%20countChange.js)
* [57 - ex 1.11 - f(n).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/57%20-%20ex%201.11%20-%20f(n).js)
* [57 - ex 1.12 - Pascal’s triangle.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/57%20-%20ex%201.12%20-%20Pascal%E2%80%99s%20triangle.js)

##### 1.2.3. Порядки роста
* 59 - ex 1.14 - countChange pict of tree.png [pict 1](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/59%20-%20ex%201.14%20%20-%20countChange%20pict%20of%20tree.png) [pict 2](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/59%20-%20ex%201.14.2%20-%20countChange%20pict%20of%20tree.png)

### 2. Построение абстракций с помощью данных.
#### 2.2. Иерархические данные и свойство замыкания
##### 2.2.1. Представление последовательностей
###### Операции со списками
* [109 - listRef.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/109%20-%20listRef.js)
* [110 - append (concat).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/110%20-%20append%20(concat).js)
* [110 - length (linear iterative).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/110%20-%20length%20(linear%20iterative).js)
* [110 - length (linear recursive).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/110%20-%20length%20(linear%20recursive).js)
* [111 - ex 2.17- last pair.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/111%20-%20ex%202.17-%20last%20pair.js)
* [111 - ex 2.18 - reverse.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/111%20-%20ex%202.18%20-%20reverse.js)
* [112 - ex 2.20 - carry (js sicp).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/112%20-%20ex%202.20%20-%20carry%20(js%20sicp).js)
* [112 - ex 2.20 - same parity.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/112%20-%20ex%202.20%20-%20same%20parity.js)

###### Отображение списков
* [112 - scale list.js	Init sicp-js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/112%20-%20scale%20list.js)
* [113 - map.js	Init sicp-js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/113%20-%20map.js)
* [114 - ex 2.21 - square list.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/114%20-%20ex%202.21%20-%20square%20list.js)
* [115 - ex 2.23 - for-each.js	Init sicp-js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/115%20-%20ex%202.23%20-%20for-each.js)

##### 2.2.2. Иерархические структуры
* [116 - count leaves (tree).js	Init sicp-js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/116%20-%20count%20leaves%20(tree).js)
* [117 - ex 2.24 - pict of tree.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/117%20-%20ex%202.24%20-%20pict%20of%20tree.js)
* [117 - ex 2.25 - cdr car.js	Init sicp-js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/117%20-%20ex%202.25%20-%20cdr%20car.js)
* [117 - ex 2.26 - explain the result.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/117%20-%20ex%202.26%20-%20explain%20the%20result.js)
* [117 - ex 2.27 - deep reverse.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/117%20-%20ex%202.27%20-%20deep%20reverse.js)
* [118 - ex 2.28 - fringe (flat).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/118%20-%20ex%202.28%20-%20fringe%20(flat).js)
* [118 - ex 2.28 - fringe (using fold right).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/118%20-%20ex%202.28%20-%20fringe%20(using%20fold%20right).js)

###### Отображение деревьев
* [119 - scale tree (trees).js	Init sicp-js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/119%20-%20scale%20tree%20(trees).js)
* [119 - scale tree using lMap (trees).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/119%20-%20scale%20tree%20using%20lMap%20(trees).js)
* [119 - tMap (trees).js	Init sicp-js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/119%20-%20tMap%20(trees).js)
* [120 - ex 2.30 - square tree.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/120%20-%20ex%202.30%20-%20square%20tree.js)
* [120 - ex 2.31 - tree map.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/120%20-%20ex%202.31%20-%20tree%20map.js)
* [120 - ex 2.32 - subsets.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/120%20-%20ex%202.32%20-%20subsets.js)

##### 2.2.3. Последовательности как стандартные интерфейсы
* [120 - sumOddSquares.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/120%20-%20sumOddSquares.js)
* [121 - even Fibs.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/121%20-%20even%20Fibs.js)

###### Операции над последовательностями
* [122 - map square.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/122%20-%20map%20square.js)
* [122.b - filter.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/122.b%20-%20filter.js)
* [122.c - foldLeft (accumulate).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/122.c%20-%20foldLeft%20(accumulate).js)
* [122.c - foldRight (accumulate).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/122.c%20-%20foldRight%20(accumulate).js)
* [123 - enumerates interval.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/123%20-%20enumerates%20interval.js)
* [123 - enumerates tree.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/123%20-%20enumerates%20tree.js)
* [123 - using lM-lF-lR.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/123%20-%20using%20lM-lF-lR.js)
* [124 - list fib squares.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/124%20-%20list%20fib%20squares.js)
* [124 - product of squares of odd elems.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/124%20-%20product%20of%20squares%20of%20odd%20elems.js)
* [125 - ex 2.33 - finish writing.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/125%20-%20ex%202.33%20-%20finish%20writing.js)
* [126 - ex 2.35 - countLeaves (lReduce).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/126%20-%20ex%202.35%20-%20countLeaves%20(lReduce).js)
* [126 - ex 2.36 - accumulate-n.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/126%20-%20ex%202.36%20-%20accumulate-n.js)
* [127 - ex 2.38 - fold left.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/127%20-%20ex%202.38%20-%20fold%20left.js)
* [128 - ex 2.39 - reverse (foldLeft-Right).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/128%20-%20ex%202.39%20-%20reverse%20(foldLeft-Right).js)

###### Вложенные отображения
* [128 - makeSeqOfOrderedPairs.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/128%20-%20makeSeqOfOrderedPairs.js)
* [129 - flatmap.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/129%20-%20flatmap.js)
* [129 - primeSumPair.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/129%20-%20primeSumPair.js)
* [130 - permutations.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/130%20-%201%20-%20permutations.js)
* [130 - ex 2.40 - unique pairs.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/130%20-%20ex%202.40%20-%20unique%20pairs.js)
* [130 - ex 2.41 - triples.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/130%20-%20ex%202.41%20-%20triples.js)
* [130 - ex 2.42 - 8 queens.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/130%20-%20ex%202.42%20-%208%20queens.js)

##### 2.2.4. Пример: язык описания изображений
* [136 - UDRL sides - painter (recursive).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/136%20-%20UDRL%20sides%20-%20painter%20(recursive).js)
* [136 - flippedPairs.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/136%20-%20flippedPairs.js)
* [137 - ex 2.44 - corner split.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/137%20-%20ex%202.44%20-%20corner%20split.js)
* [137 - square limit.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/137%20-%20square%20limit.js)
* [139 - square-of-four.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/139%20-%20square-of-four.js)

#### 2.3. Символьные данные
##### 2.3.1. Кавычки
* [148 - 1 - member.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/148%20-%201%20-%20member.js)
* [148 - ex 2.53 print in respons.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/148%20-%20ex%202.53%20print%20in%20respons.js)
* [149 - ex 2.54 - isEqual.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/149%20-%20ex%202.54%20-%20isEqual.js)

##### 2.3.3. Пример: представление множеств - 154
* [155 - set as unordered list.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/155%20-%20set%20as%20unordered%20list.js)
* [156 - ex 2.59 union set.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/156%20-%20ex%202.59%20union%20set.js)
* [156 - ex 2.60 - set api (set with repetitions)](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/156%20-%20ex%202.60%20-%20set%20api%20(set%20with%20repetitions).js).js
* [156 - sets as ordered list.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/156%20-%20sets%20as%20ordered%20list.js)
* [157 - ex 2.61 - adjoin (ordered set).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/157%20-%20ex%202.61%20-%20adjoin%20(ordered%20set).js)
* [159 - ex 2.62 - unionSet (ordered set).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/159%20-%20ex%202.62%20-%20unionSet%20(ordered%20set).js)
* [159 - sets as binary trees.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/159%20-%20sets%20as%20binary%20trees.js)
* [161 - ex 2.63 - treeToList (bin tree).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/161%20-%20ex%202.63%20-%20treeToList%20(bin%20tree).js)
* 

