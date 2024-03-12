import { Storage } from "../src/lib/parser-storages";

test("parserLocalStorage", () => {
  const parserLocalStorage = new Storage(localStorage);

  parserLocalStorage.set("test", 123);
  parserLocalStorage.set("test2", "123");
  parserLocalStorage.set("test3", [1, 2, 3, 4, 5]);
  parserLocalStorage.set("test4", { test: 1, test2: 2 });
  parserLocalStorage.set("test5", true);

  expect(parserLocalStorage.get("test")).toBe(123);
  expect(parserLocalStorage.get("test2")).toBe("123");
  expect(parserLocalStorage.get("test3")).toStrictEqual([1, 2, 3, 4, 5]);
  expect(parserLocalStorage.get("test4")).toStrictEqual({ test: 1, test2: 2 });
  expect(parserLocalStorage.get("test5")).toBe(true);
});
