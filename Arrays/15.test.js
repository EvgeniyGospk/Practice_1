const mergeObjects = require("./15")

describe("mergeObjects", () => {
    test("should merge objects with matching keys", () => {
        const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
        const arr2 = [{ id: 1, name: "Alice", age: 25 }, { id: 2, name: "Bob", age: 30 }];
        const expected = [
            { id: 1, name: "Alice", age: 25 },
            { id: 2, name: "Bob", age: 30 }
        ];
        expect(mergeObjects(arr1, arr2, "id")).toEqual(expected);
    });

    test("should return empty array when both arrays are empty", () => {
        const arr1 = [];
        const arr2 = [];
        expect(mergeObjects(arr1, arr2, "id")).toEqual([]);
    });

    test("should throw error if key is missing in arr1", () => {
        const arr1 = [{ name: "Alice" }];
        const arr2 = [{ id: 1, age: 25 }];
        expect(() => mergeObjects(arr1, arr2, "id")).toThrow("Ошибка");
    });

    test("should throw error if key is missing in arr2", () => {
        const arr1 = [{ id: 1, name: "Alice" }];
        const arr2 = [{ age: 25 }];
        expect(() => mergeObjects(arr1, arr2, "id")).toThrow("Ошибка");
    });

    test("should overwrite properties from arr1 with arr2 values", () => {
        const arr1 = [{ id: 1, name: "Alice", age: 20 }];
        const arr2 = [{ id: 1, name: "Alicia", age: 25 }];
        const expected = [{ id: 1, name: "Alicia", age: 25 }];
        expect(mergeObjects(arr1, arr2, "id")).toEqual(expected);
    });
});