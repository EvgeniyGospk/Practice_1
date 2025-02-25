const removeKey = require("./15")

describe("removeKey", () => {
    test("1", () => {
        expect(removeKey({ name: "Alice", age: 25 }, "age")).toEqual({name: "Alice"})
    })

    test("2", () => {
        expect(removeKey({ name: "Alice", age: 25 }, "name")).toEqual({age: 25})
    })

    test("3", () => {
        expect(removeKey({ name: "Alice", age: 25 }, "no")).toEqual({ name: "Alice", age: 25 })
    })
})