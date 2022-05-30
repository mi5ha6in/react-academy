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
