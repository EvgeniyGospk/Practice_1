const invertObject = require("./5")

describe("getKeys", () => {
    test("1", () => {
        expect(invertObject({a: 1, b: 2, c: 3})).toEqual({"1": "a", "2": "b", "3": "c"})
    })

    test("2", () => {
        expect(invertObject({})).toEqual({})
    })

    test("3", () => {
        expect(invertObject({a: 1})).toEqual({"1": "a"})
    })

    test("4", () => {
        expect(invertObject({"": ""})).toEqual({"": ""})
    })

    test("5", () => {
        expect(() => invertObject(null)).toThrow()
    })
})