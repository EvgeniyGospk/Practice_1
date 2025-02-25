const filterObject = require("./6")

describe("filterObject", () => {
    test("1", () => {
        expect(filterObject({a: 1, b: 2, c: 3}, ["a", "b"])).toEqual({"a": 1, "b": 2})
    })

    test("2", () => {
        expect(filterObject({a: 1, b: 2, c: 3}, [])).toEqual({})
    })

    test("3", () => {
        expect(filterObject({a: 1, b: 2, c: 3}, ["a", "x", "y"])).toEqual({a: 1})
    })

    test("4", () => {
        expect(filterObject({}, ["a", "b"])).toEqual({})
    })

    test("5", () => {
        expect(() => filterObject(null)).toThrow()
    })
})