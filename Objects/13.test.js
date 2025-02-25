const getNestedProperty = require("./13")

describe("getNestedProperty", () => {
    test("1", () => {
        expect(getNestedProperty({ a: { b: { c: 10 } } }, "a.b.c")).toEqual(10)
    })

    test("2", () => {
        expect(getNestedProperty({ a: { b: { c: 10 } } }, "a.b.x")).toEqual(undefined)
    })

    
})