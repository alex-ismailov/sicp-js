<a name="contents"></a>

## SICP - JavaScript adaptation
![alt-текст](https://github.com/alex-ismailov/sicp-js/blob/master/imgs/sicp.png)

Примеры и решения упражнений из курса SICP

авт. Harold Abelson and Gerald Jay Sussman with Julie Sussman

src: [http://newstar.rinet.ru/~goga/sicp/sicp.pdf](http://newstar.rinet.ru/~goga/sicp/sicp.pdf)

### Главы
* [1. Построение абстракций с помощью процедур - 22 стр.](#BuildingAbstractionsWithProcedures)
* [2. Построение абстракций с помощью данных - 90 стр.](#BuildingAbstractionsWithData)
* [3. Модульность, Объекты и состояние - 211 стр.](#ModularityObjectsAndState)


### 1. Построение абстракций с помощью процедур. <a name="BuildingAbstractionsWithProcedures"></a>
( [вернуться к оглавлению](#contents) )
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
* [59 - ex 1.14 - countChange pict of tree.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/59%20-%20ex%201.14%20%20-%20countChange%20pict%20of%20tree.js): [pict 1](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/59%20-%20ex%201.14%20%20-%20countChange%20pict%20of%20tree.png), [pict 2](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/59%20-%20ex%201.14.2%20-%20countChange%20pict%20of%20tree.png)

##### 1.2.4. Возведение в степень
* [59 - expt (linear recursive).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/59%20-%20expt%20(linear%20recursive).js)
* [59 - expt (linear iterative).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/59%20-%20expt%20(linear%20iterative).js)
* [60 - fast expt (linear recursive).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/60%20-%20fast%20expt%20(linear%20recursive).js) ([pict](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/60%20-%20fast%20expt%20%26%20expt.png))
* [61 - ex 1.16 - fast expt (linear iterative).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/61%20-%20ex%201.16%20-%20fast%20expt%20(linear%20iterative).js)
* [61 - ex 1.17 - fastMult (recursive).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/61%20-%20ex%201.17%20-%20fastMult%20(recursive).js)
* [61 - ex 1.18 - fastMult (iterative).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/61%20-%20ex%201.18%20-%20fastMult%20(iterative).js)
* 61 - ex 1.19 fast fib

##### 1.2.5. Нахождение наибольшего общего делителя
* [63 - gcd (Euclid’s Algorithm).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/63%20-%20gcd%20(Euclid%E2%80%99s%20Algorithm).js)

##### 1.2.6. Пример: проверка на простоту
###### Поиск делителей
* [64 - isPrime (smallest div).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/64%20-%20isPrime%20(smallest%20div).js)
* [65 - isPrime (Fermat test).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/65%20-%20isPrime%20(Fermat%20test).js)
* [67 - ex 1.21 - smallest divisor.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/67%20-%20ex%201.21%20-%20smallest%20divisor.js)
* [67 - ex 1.22 - timed prime test .js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/67%20-%20ex%201.22%20-%20timed%20prime%20test%20.js)
* [68 - ex 1.23 - faster smallest divisor.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/68%20-%20ex%201.23%20-%20faster%20smallest%20divisor.js)
* [68 - ex 1.24 - timed prime test (Fermat test).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/68%20-%20ex%201.24%20-%20timed%20prime%20test%20(Fermat%20test).js)
* [69 - ex 1.27 - Carmichael numbers.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/69%20-%20ex%201.27%20-%20Carmichael%20numbers.js)
* [69 - ex 1.28 - isPrime (Miller-Rabin test).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/69%20-%20ex%201.28%20-%20isPrime%20(Miller-Rabin%20test).js)

#### 1.3. Формулирование абстракций с помощью процедур высших порядков
##### 1.3.1. Процедуры в качестве аргументов
* [70 - sum integers.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/70%20-%20sum%20integers.js)
* [71 - sum as HOF (linear recursive).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/71%20-%20sum%20as%20HOF%20(linear%20recursive).js)
* [73 - ex 1.30 - sum as HOF (linear iterative).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/73%20-%20ex%201.30%20-%20sum%20as%20HOF%20(linear%20iterative).js)
* [73 - ex 1.31 - product.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/73%20-%20ex%201.31%20-%20product.js)
* [74 - ex 1.32 - accumulate.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/74%20-%20ex%201.32%20-%20accumulate.js)
* [74 - ex 1.33 - filter.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/74%20-%20ex%201.33%20-%20filter.js)

##### 1.3.2. Построение процедур с помощью lambda
* [75 - pi sum (lambda).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/75%20-%20pi%20sum%20(lambda).js)

###### Создание локальных переменных с помощью const
* [76 - local vars (const).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/76%20-%20local%20vars%20(const).js)
* [78 - ex 1.34 - f(g).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/78%20-%20ex%201.34%20-%20f(g).js)

##### 1.3.3. Процедуры как обобщенные методы
###### Нахождение корней уравнений методом половинного деления
* [78 - half-interval method.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/78%20-%20half-interval%20method.js)

###### Нахождение неподвижных точек функций
* [80 - fixed point.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/80%20-%20fixed%20point.js)
* [81 - sqrt as fixed point.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/81%20-%20sqrt%20as%20fixed%20point.js)

##### 1.3.4. Процедуры как возвращаемые значения
###### Абстракции и процедуры как полноправные объекты
* [87 - ex 1.41 double (fn(fn(x))).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/87%20-%20ex%201.41%20double%20(fn(fn(x))).js)
* [88 - ex 1.42 - compose.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/88%20-%20ex%201.42%20-%20compose.js)
* [88 - ex 1.43 - repeated.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/88%20-%20ex%201.43%20-%20repeated.js)
* [88 - ex 1.44 - smooth.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/01%20build%20abstr-s%20with%20procedurs/88%20-%20ex%201.44%20-%20smooth.js)

### 2. Построение абстракций с помощью данных. <a name="BuildingAbstractionsWithData"></a>
( [вернуться к оглавлению](#contents) )
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

##### 2.3.3. Пример: представление множеств - 154 стр.
* [155 - set as unordered list.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/155%20-%20set%20as%20unordered%20list.js)
* [156 - ex 2.59 union set.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/156%20-%20ex%202.59%20union%20set.js)
* [156 - ex 2.60 - set api (set with repetitions)](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/156%20-%20ex%202.60%20-%20set%20api%20(set%20with%20repetitions).js).js
* [156 - sets as ordered list.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/156%20-%20sets%20as%20ordered%20list.js)
* [157 - ex 2.61 - adjoin (ordered set).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/157%20-%20ex%202.61%20-%20adjoin%20(ordered%20set).js)
* [159 - ex 2.62 - unionSet (ordered set).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/159%20-%20ex%202.62%20-%20unionSet%20(ordered%20set).js)
* [159 - sets as binary trees.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/159%20-%20sets%20as%20binary%20trees.js)
* [161 - ex 2.63 - treeToList (bin tree).js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/161%20-%20ex%202.63%20-%20treeToList%20(bin%20tree).js)
* [161 - ex 2.64 list to bal-tree.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/161%20-%20ex%202.64%20list%20to%20bal-tree.js)
* [162 - ex 2.65 union-set intersection-set.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/162%20-%20ex%202.65%20union-set%20intersection-set.js)
* [163 - ex 2.66 - lookup.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/163%20-%20ex%202.66%20-%20lookup.js)

##### 2.3.4. Пример: деревья кодирования по Хаффману - 163 стр.
###### Представление деревьев Хаффмана
* [166 - Huffman trees interface.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/166%20-%20Huffman%20trees%20interface.js)
###### Процедура декодирования
* [167 - Huffman tree decoding.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/167%20-%20Huffman%20tree%20decoding.js)
###### Множества взвешенных элементов
* [168 - sets of weighted elements.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/168%20-%20sets%20of%20weighted%20elements.js)
* [169 - ex 2.67 - decoding tree.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/169%20-%20ex%202.67%20-%20decoding%20tree.js)
* [169 - ex 2.68 - encode.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/169%20-%20ex%202.68%20-%20encode.js)
* [169 - ex 2.69 - generate Huffman tree.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/169%20-%20ex%202.69%20-%20generate%20Huffman%20tree.js)
* [169 - ex 2.70 - rock alphabet.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/02%20build%20abstr-s%20with%20data/169%20-%20ex%202.70%20-%20rock%20alphabet.js)

### 3. Модульность, Объекты и состояние. <a name="ModularityObjectsAndState"></a>
( [вернуться к оглавлению](#contents) )
#### 3.1. Присваивание и внутреннее состояние объектов
##### 3.1.1. Внутренние переменные состояния - 213 стр.
* [216 - make withdraw.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/03%20Modularity%2C%20Objects%2C%20and%20State/214%20-%20make%20withdraw/214%20-%20make%20withdraw.js)
* [215 - make withdraw with balance.js](https://github.com/alex-ismailov/sicp-js/blob/master/src/03%20Modularity%2C%20Objects%2C%20and%20State/215%20-%20make%20withdraw%20with%20balance/215%20-%20make%20withdraw%20with%20balance.js)
* [216 - makeAccount with dispatch](https://github.com/alex-ismailov/sicp-js/tree/master/src/03%20Modularity%2C%20Objects%2C%20and%20State/216%20-%20makeAccount%20with%20dispatch)
* [217 - ex. 3.1 - accumulator](https://github.com/alex-ismailov/sicp-js/tree/master/src/03%20Modularity%2C%20Objects%2C%20and%20State/217%20-%20ex.%203.1%20-%20accumulator)
* [217 - ex. 3.2 - make-monitored](https://github.com/alex-ismailov/sicp-js/tree/master/src/03%20Modularity%2C%20Objects%2C%20and%20State/217%20-%20ex.%203.2%20-%20make-monitored)
* [217 - ex. 3.3 - make-account with password](https://github.com/alex-ismailov/sicp-js/tree/master/src/03%20Modularity%2C%20Objects%2C%20and%20State/217%20-%20ex.%203.3%20-%20make-account%20with%20password)
* [217 - ex. 3.4 - make-account with password and cops](https://github.com/alex-ismailov/sicp-js/tree/master/src/03%20Modularity%2C%20Objects%2C%20and%20State/217%20-%20ex.%203.4%20-%20make-account%20with%20password%20and%20cops)
