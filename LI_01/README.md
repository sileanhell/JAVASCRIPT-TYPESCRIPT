<div align="center">
<h1>Отчет по лабораторной работе №1</h1>
</div>

**Тема:** Анализ транзакций JavaScript

**Цель:** Ознакомление с основными функциями и синтаксисом JavaScript на основе консольного приложения для анализа транзакций.

## Инструкция по запуску проекта

**1. Установить [Node.js](https://nodejs.org/en/download)** <sub>(Использовалась версия 20.11.1)</sub>

**2. Скачать файлы проекта любым удобным способом.**

**3. Перейти в каталог проекта и установить зависимости командой:**
```js
npm i
// или
yarn
```

**4. Запустите проект в командной строке:**
```js
npm start
// или
yarn start
```

## Описание лабораторной работы

В рамках лабораторной работы было создано консольное приложение для анализа транзакций. Приложение позволяет:
* Загружать транзакции из JSON-файла.
* Добавлять новые транзакции.
* Получать список всех транзакций.
* Анализировать транзакции по различным критериям.

## Краткая документация к проекту

**Файлы:**
* `files/transactions.json`: JSON-файл, содержащий список транзакций.
* `src/index.ts`: TypeScript-код приложения.
* `src/log.ts`: TypeScript-код содержащий вспомогательный метод для отображения в консоль.
* `src/types.ts`: TypeScript-типы приложения.
* `src/transactionAnalyzer.ts`: TypeScript-код содержащий класс для обработки транзакций.

**Классы:**
* `TransactionAnalyzer`: Класс для обработки транзакций.

**Методы:**
* `addTransaction(transaction)`: Добавляет новую транзакцию.
* `getAllTransaction()`: Возвращает список всех транзакций.
* `getUniqueTransactionTypes()`: Возвращает массив уникальных типов транзакций.
* `calculateTotalAmount()`: Рассчитывает общую сумму всех транзакций.
* `...`: мне правда лень дописывать(

## Примеры использования проекта с приложением скриншотов или фрагментов кода

Примеры использования описаны в файле `src/index.ts`, запустив проект можно сразу посмотреть на результат.

## Ответы на контрольные вопросы

**1. Какие примитивные типы данных существуют в JavaScript?**
>* String
>* Number
>* Boolean
>* Null
>* Undefined
>* Symbol
>* BigInt (добавлен в ES 2020)


**2. Какие методы массивов вы использовали для обработки и анализа данных в вашем приложении, и как они помогли в выполнении задачи?**

>* `forEach`: Для перебора массива транзакций.
>* `filter`: Для фильтрации транзакций по заданным критериям.
>* `reduce`: Для вычисления агрегатных значений (например, общая сумма).
>* `map`: Для преобразования массива транзакций в другой массив (например, массив описаний транзакций).

**3. В чем состоит роль конструктора класса?**

>Конструктор класса используется для инициализации экземпляра класса. Он может принимать параметры, которые будут использоваться для установки значений свойств экземпляра.

**4. Каким образом вы можете создать новый экземпляр класса в JavaScript?**

> Новый экземпляр класса можно создать с помощью оператора `new`.


## Список использованных источников

* JavaScript Docs: https://developer.mozilla.org/ru/docs/Web/JavaScript
* Node.js Docs: https://nodejs.org/docs/latest/api/
* TypeScript Docs: https://www.typescriptlang.org/docs/
* GitHub Markdown Docs: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## Дополнительные важные аспекты, если применимо

