const getValues = require("./4")

describe("getKeys", () => {
    test("1", () => {
        expect(getValues({a: 1, b: 2, c: 3})).toEqual([1, 2, 3])
    })

    test("2", () => {
        expect(getValues({})).toEqual([])
    })

    test("3", () => {
        expect(getValues({a: 1})).toEqual([1])
    })

    test("4", () => {
        expect(getValues({"": ""})).toEqual([""])
    })

    test("5", () => {
        expect(() => getValues(null)).toThrow()
    })
})