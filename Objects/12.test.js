const sortByKey = require("./12")

describe("sortByKey", () => {
    test("1", () => {
        expect(sortByKey([
            { name: "Alice", age: 30 },
            { name: "Bob", age: 25 },
            { name: "Charlie", age: 35 },
          ], "age", "asc")).toEqual([
            { name: 'Bob', age: 25 },
            { name: 'Alice', age: 30 },
            { name: 'Charlie', age: 35 }
          ])
    })

    test("2", () => {
        expect(sortByKey([
            { name: "Alice", age: 30 },
            { name: "Bob", age: 25 },
            { name: "Charlie", age: 35 },
          ], "age", "desc")).toEqual([
            { name: 'Charlie', age: 35 },
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 25 },
          ])
    })

})