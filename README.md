# [parser-storages](https://www.npmjs.com/package/parser-storages) &middot; [![npm version](https://img.shields.io/badge/npm-v0.0.3-blue)](https://www.npmjs.com/package/parser-storages)

When you do a front-end development, you use localStorage, a browser repository, to store the client's data values.

One of the characteristics of localStorage is that it always needs to be stored in character form, and that it always returns in character form whenever it is imported.

Because of this, in the case of the Object type, the JSON.stringify method is used to convert the type and then save the value. In addition, if you save the value in the form of number and boolean, it returns to the form of the character type every time you import the value, causing inconvenience of having to check the type again, which eventually leads to the developer's mistake and increases the probability of error.

To solve these problems, we developed a library called parser-stories.

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
