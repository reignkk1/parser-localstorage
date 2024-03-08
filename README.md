# [parser-storages](https://www.npmjs.com/package/parser-storages) &middot; [![npm version](https://img.shields.io/badge/npm-v0.0.3-blue)](https://www.npmjs.com/package/parser-storages)

parser-storages is a library that automatically parses and stores data when it is stored on storage.

It parses data in JSON form and makes it easy to import data.

## install

```jsx
npm install parser-storages
```

## Usage

```jsx
import { parserLocalStorage, parserSessionStorage } from "parser-storages";

parserLocalStorage.set("test", [1, 2, 3, 4, 5]);
parserLocalStorage.get("test"); // [1,2,3,4,5]
parserLocalStorage.remove("test"); // Clear ID test from local storage
parserLocalStorage.removeAll(); // Clear all local storage

parserSessionStorage.set("test", [1, 2, 3, 4, 5]);
parserSessionStorage.get("test"); // [1,2,3,4,5]
parserSessionStorage.remove("test"); // Clear ID test from session storage
parserSessionStorage.removeAll(); // Clear all session storage
```

```js
// Code when using an existing localStorage objec
localStorage.setItem("test", JSON.stringify([1, 2, 3, 4, 5]));
JSON.parser(localStorage.getItem("test")); // [1,2,3,4,5]

// Code when using the parser-storage library
parserLocalStorage.set("test", [1, 2, 3, 4, 5]);
parserLocalStorage.get("test"); // [1,2,3,4,5]

// Code when using an existing localStorage objec
localStorage.setItem("test2", 123);
Number(localStorage.getItem("test2")); // 123

// Code when using the parser-storage library
parserLocalStorage.set("test2", 123);
parserLocalStorage.get("test2"); // 123
```
