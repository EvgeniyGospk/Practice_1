const getKeys = require("./3")

describe("getKeys", () => {
    test("1", () => {
        expect(getKeys({a: 1, b: 2, c: 3})).toEqual(["a", "b", "c"])
    })

    test("2", () => {
        expect(getKeys({})).toEqual([])
    })

    test("3", () => {
        expect(getKeys({a: 1})).toEqual(["a"])
    })

    test("4", () => {
        expect(getKeys({"": ""})).toEqual([""])
    })

    test("5", () => {
        expect(() => {getKeys(undefined)}).toThrow()
    })
})