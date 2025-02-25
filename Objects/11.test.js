const grooupBy = require("./11")

describe("grooupBy", () => {
    test("1", () => {
        expect(grooupBy([
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 25 },
          ], "age")).toEqual({
            '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
            '30': [ { name: 'Bob', age: 30 } ]
          })
    })

    test("2", () => {
        expect(grooupBy([
            { name: "Alice", age: 35 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 25 },
          ], "age")).toEqual({
            '25': [ { name: 'Charlie', age: 25 } ],
            '30': [ { name: 'Bob', age: 30 } ],
            "35": [{ name: 'Alice', age: 35 },]
          })
    })

})