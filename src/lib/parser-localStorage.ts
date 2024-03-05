"use strict";

class LocalStorage {
  set(key: string, value: boolean | string | number | object) {
    invariant("The key on the local storage must be a string.", key);
    const item = { value, type: typeof value };
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }

  get(key: string) {
    invariant("The key on the local storage must be a string.", key);
    if (typeof window !== "undefined") {
      const item = JSON.parse(localStorage.getItem(key) || "null");
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
  }

  remove(key: string) {
    invariant("The key on the local storage must be a string.", key);
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }

  removeAll() {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  }
}

function invariant(errorMsg?: string, key?: string) {
  if (key && typeof key !== "string") {
    throw new Error(errorMsg);
  }
}

export default new LocalStorage();
