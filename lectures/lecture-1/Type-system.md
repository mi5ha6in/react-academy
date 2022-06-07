# Система типов

Типы – это возможные значения данных в программе и возможные операции над ними.
JavaScript – язык со слабой типизацией. JavaScript определяет типы выполняя код.
Если тип не соответствует операции – JavaScript выдает ошибку TypeError.

``` JavaScript
const message = 'Hello'
message(); // TypeError: message is not a function
```

В JavaScript возможны некоторые некорректные операции. Например, можно
обратиться к несуществующему свойству объекта и получить значение
```undefined```

``` JavaScript
const user = {
  name: 'Dima',
  age: '27,
};

user.location; // undefined
```

## Типы в TypeScript

Все типы в TypeScript являются подтипами главного типа Any. Обозначается
ключевым словом ```any```. Он единственные, который может представлять любое
значение JavaScript без ограничений.

### Any

Тип Any используется тогда, когда не знаем какой тип должна иметь переменная.
Переменная может быть получена из динамического содержимого, например, стороння
библиотека.

``` TypeScript
let someVar: any = 5;
someVar = 'Может стать строкой';
someVar = false;
```

Если объявить переменную и не указать ее тип, то она считается ```any```

```TypeScript
let withoutTypeVr; // тип any
```

### Примитивные типы

#### Number

Все числа в TypeScript как и в JavaScript являются числами с плавающей точкой.
Для указания данного типа переменной используется ключевое слово ```number```.

``` TypeScript
let x: number = 5;
let y = 0; // автоматический вывод типа
let z = 1.2345;
let s = z.toFixed(2); // свойство интерфейса Number
```

Поддерживает разные системы счисления

``` TypeScript
let decimal: number = 5;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: = 0o744;
```

#### Boolean

Тип Boolean совпадает с одноименным типом в JavaScript и представляет собой
логическое значение: истина (true) или ложь (false).

Объявляется данный тип с помощью ключевого слова ```boolean```.

```TypeScript
let logical: boolean = true;
let checked: true;
```

#### String

Тип String соответствует аналогичному в JavaScript и представляет собой
последовательность символов в кодировке Unicode UTF-16.

```TypeScript
let str: string = 'Hello';
let str2 = "Hello";
let str3 = `Hello ${str2}`
```

#### Void

Тип Void противоположность типа Any. Этот тип означает отсутствие какого-либо
типа. Обычно используется для указания того, что функция не возвращает никакого
значения.

```TypeScript
function someFunction(): void {
  alert('Hello');
}
```

Тип Void подтипом типа Any, и супертипом для типов Null и Undefined. В тоже
время он не зависит от других типов. Объявить переменную с данным типом
возможно, но ей можно присвоить только ```nul``` или ```undefined```.

```TypeScript
let v1: void = null;
let v2: void = undefined;
```

#### Null and Undefined

Типы Null и Undefined соответствуют одноименным типам в JavaScript. Данные типы
являются подтипами для всех остальных типов по умолчанию.

```TypeScript
let n: number = null; // Примитивы могут быть null и undefined
let m: number = undefined;
```

Если объявить переменной тип ```nul``` или ```undefined``` то такой переменной
можно будет присвоить только значения null или undefined соответственно, что не
имеет практического применения.

```TypeScript
let n: null = null; // Только это значение;
n = 1; // Ошибка

let m: undefined = undefined; // Только это значение;
m = 'some string'; // ошибка.
```

Стоит отметить, что если использовать директиву компилятора --strictNullChecks,
null и undefined могут быть присвоены только переменной типа void и переменным с
типами null или undefined соответственно. Это помогает избежать множества
ошибок. В таком случае, если переменной нужно присвоить значение с типом string
или null или undefined, можно использовать тип объединение string | null |
undefined.

#### Array

Тип Array для работы с массивами. Для создание массива необходимо к указанному
типу переменно  добавить ```[]```. Другой способ ```Array<Type>```.

```TypeScript
let arr: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

#### Тип Tuple

Тип Tuple или кортеж представляет собой массив JavaScript, каждому из элементов
которого можно указать свой тип.

```TypeScript
[T1, T2, ... Tn]

{
  0: T1,
  1: T2,
  ...
  n: Tn
}
```

```TypeScript
let tuple: [string, number];
tuple = ['some', 10]; // Правильно
tuple = [10, 'some']; // Неверно

console.log(tuple[0]); // 'some'
console.log(tuple[1]); // 10
```

Кортежу можно присвоить значение, которое выходит за пределы определенных типов

```TypeScript
tuple[200] = 'some' // ok
tuple[300] = 1; // ok
tuple[400] = true; // ошибка
```

В этом случае тип должен быть ```string | number```.
Можно создавать именованные кортежи путем объявления интерфейса, унаследованного
от ```Array<T>``` и введя численно именованные свойства.

```TypeScript
interface KeyValuePair<K, V> extends Array<K | V> { 0: K; 1: V; } 
let x: KeyValuePair<number, string> = [10, “ten”];
```

#### Enum

Enum (перечисление) – способ указать более привычные имена набору числовых
значений.

```TypeScript
enum Color {Red, Green, Blue};
let c: Color = Color.Green
```

По умолчанию нумерация с нуля, но можно поменять

```TypeScript
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
```

```TypeScript
enum Color {Red = 1, Green = 2, Blue = 4}; 
let c: Color = Color.Green;
```