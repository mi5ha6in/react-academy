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
ключевым словом any. Он единственные, который может представлять любое значение
JavaScript без ограничений.
