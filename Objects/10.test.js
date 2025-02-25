const mergeObjectsByKey = require("./10")

describe("mergeObjectsByKey", () => {
    test("1", () => {
        expect(mergeObjectsByKey([
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 1, age: 25 },
            { id: 2, age: 30 }
          ], "id")).toEqual([{ id: 1, name: "Alice", age: 25 }, { id: 2, name: "Bob", age: 30 }])
    })

    test("2", () => {
        expect(mergeObjectsByKey([
            { id: 1, name: "Alice" },
            { id: 1, name: "Bob" },
            { id: 1, age: 25 },
            { id: 2, age: 30 }
          ], "id")).toEqual([{ id: 1, name: "Bob", age: 25 }, { id: 2, age: 30 }])
    })

    test("3", () => {
        expect(mergeObjectsByKey([
            { name: "Alice" },
            { name: "Bob" },
            { age: 25 },
            { age: 30 }
          ], "id")).toEqual([])
    })
})