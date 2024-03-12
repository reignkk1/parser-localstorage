"use strict";

class Storage {
  private _storage;

  constructor(storage: globalThis.Storage | null) {
    this._storage = storage;
  }

  set(key: string, value: boolean | string | number | object) {
    invariant(key);
    const item = { value, type: typeof value };
    this._storage?.setItem(key, JSON.stringify(item));
  }

  get(key: string) {
    invariant(key);
    const item = JSON.parse(this._storage?.getItem(key) || "null");
    if (!item) return null;
    const itemType = item?.type;
    const itemValue = item?.value;
    if (itemType === "number") {
      return Number(itemValue);
    } else if (itemType === "boolean") {
      return Boolean(itemValue);
    } else {
      return itemValue;
    }
  }

  remove(key: string) {
    invariant(key);
    this._storage?.removeItem(key);
  }

  removeAll() {
    this._storage?.clear();
  }
}

function invariant(key: string) {
  if (key && typeof key !== "string") {
    throw new Error("The key on the local storage must be a string.");
  }
}

let localStorage;
let sessionStorage;

if (typeof window !== "undefined") {
  localStorage = window.localStorage;
  sessionStorage = window.sessionStorage;
}

let parserLocalStorage = new Storage(localStorage || null);
let parserSessionStorage = new Storage(sessionStorage || null);

export { parserLocalStorage, parserSessionStorage, Storage };
