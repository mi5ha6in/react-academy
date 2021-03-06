# Введение в типизацию

Классифицировать языки программирования можно по разным критериям. Один из них –
типизация.

## Типизация

### Динамическая

В языках с динамической типизацией, типы определяются и проверяются во время
выполнения программы, в рантайме. За счет этого, например, возможно сохранить в
одну переменную значения разных типов:

``` JavaScript
let guitar = 'Fender';
guitar = 88;
```

При написании кода на языках с динамической типизацией разработчику не нужно
заранее думать о типах. Минус – вероятность совершить ошибку увеличивается.
Пример: некорректные операции над значениями разных типов, ошибки преобразований
и так далее. Такие ошибки возникнут только во время выполнения программы.

``` JavaScript
const title = 777; // число
title.toLoverCase(); // метод для работы со строками
>> title.toLoverCase is not a function
```

В примере выше произойдет ошибка во время выполнения программы. У чисел нет
метода toLoverCase.

К плюсам динамической типизации можно отнести более низкий порог входа.
Разработчику не нужно думать о многих вещах заранее. Скорость разработки
небольших приложений возрастает. Проще описывать массивы, коллекции, которые
содержат значения разных типов.

Примеры языков с динамической типизацией: JavaScript, PHP, Python, Perl.

### Статическая

При статической типизации вводится дополнительный этап (компиляция). Во время
этого этапа происходит проверка типов.

``` text
функция сложитьДваЧисла(a: число, б: число): число {
  возврат а + б;
}
```

В псевдокоде определена функция для сложения двух чисел. Два числовых параметра
– тип указан через двоеточие после имени. Результат выполнения – число, тип так
же определен при описании.

Главный плюс статической типизации – повышение надежности. Информация о
потенциальных проблемах появится при написании кода, а не во время его
выполнения. За счёт проверок компилятором появляется возможность встроить в IDE
дополнительную функциональность. Автодополнение кода, расширенная навигация по
коду, функции рефакторинга, подсказки и другое.

Главный минус – порог входа выше. Выразить некоторые задачи сложнее. Различные
алгоритмы, работающие с разными типами данных – один из таких примеров.

Примеры языков с статической типизацией: Go, C#, Java, TypeScript, C, C++,
Delphi.

### Сильная и слабая

Языки с сильной типизацией не выполняют автоматических преобразований типов. Они
запрещают применять в выражениях несовместимые типы значений. Например, чтобы
сложит строку с числом требуется явное выполнить преобразование. Без этого
возникнет ошибка.

Языки с слабой типизацией делают преобразование типов автоматически. Например,
при сложении числа с строкой, язык со слабой типизацией попытается
самостоятельно решить задачу преобразования. Преобразует или строку к число или
наоборот, в зависимости от языка и правил приведения типов в нём.

Автоматическое приведение типов увеличивает риск появление ошибки.

Языки с сильной типизацией: C#, java, C++, Ruby. Языки с слабой типизацией:
JavaScript, Visual Basic.

Сильная типизация повышает надежность кода. Разработчик не полагается на
автоматизацию при преобразованиях одного типа в другой.

Слабую типизацию путают или ошибочно приравнивают к динамической, а сильную с
статической. Это неверно. Например язык C со статической типизацией поддерживает
слабую типизацию.

### Явная и неявная

При явной типизации типы указываются в исходном коде – аннотация типов.

``` text
переменная планета: строка = 'Земля'
```

При неявной типизации типы указываются только в некоторых случаях. Выводом типов
занимается компилятор или интерпретатор на основании содержимого.

Языки с явной типизацией: C#, C++, Delphi, Java. И с неявной: PHP, JavaScript,
Lua, Groovy, Scratch.

### Статическая + динамическая

В некоторых языках со статической типизаций предусмотрена возможность применять
для отдельных случаев динамическую. Например, C# и Delphi.

## TypeScript

TypeScript – это строго типизированный язык программирования, представленный
компанией Microsoft. TypeScript обратно совместим с JavaScript.

Он расширяет возможности JavaScript. Добавляет новые операторы и привносит
статическую типизацию.

## JavaScript и TypeScript

Браузер и Node.js не поддерживают работу с TypeScript, поэтому код компилируется
в JavaScript.


## Зачем нужен TypeScript

Строгая типизация позволяет находить ошибки на этапе компиляции. Расширенные
возможности IDE за счет информации, полученной от компилятора.

## Альтернативы

Ближайший конкурент Flow от Meta (Facebook). Другая альтернатива – Dart от
Google.

## Резюме

TypeScript не решает всех проблем и не является идеальным решением, но приносит
пользу в виде повышения надежности кода. Вместе с этим увеличиваются требования
к компетенциям разработчика.
