# [parser-localStoarage](https://www.npmjs.com/package/parser-localstorage) &middot; [![npm version](https://img.shields.io/badge/npm-v0.0.6-blue)](https://www.npmjs.com/package/parser-localstorage)

parser-localStorage is a library that automatically parses and stores data when it is stored on storage.

It parses data in JSON form and makes it easy to import data.

## install

```jsx
npm install parser-localStoarage
```

## Usage

```jsx
import parserLocalStorage from "parser-localstorage";

parserLocalStorage.set("test", [1, 2, 3, 4, 5]);
parserLocalStorage.get("test"); // [1,2,3,4,5]
parserLocalStorage.remove("test"); // Clear ID test from local storage
parserLocalStorage.removeAll(); // Clear all local storage
```
