const { objectToArray, arrayToObject} = require("./7")

describe("objectToArray", () => {
    test("1", () => {
        expect(objectToArray({ a: 1, b: 2, c: 3 })).toEqual([["a", 1], ["b", 2], ["c", 3]])
    })

    test("2", () => {
        expect(objectToArray({})).toEqual([])
    })

    test("3", () => {
        expect(objectToArray({a: 1})).toEqual([["a", 1]])
    })

    test("4", () => {
        expect(objectToArray({ "": "", "42": "number" })).toEqual([["42", "number"], ["", ""]])
    })

    test("5", () => {
        expect(() => objectToArray(null)).toThrow()
    })
})

describe("arrayToObject", () => {
    test("1", () => {
        expect(arrayToObject([["a", 1], ["b", 2], ["c", 3]])).toEqual({ a: 1, b: 2, c: 3 })
    })

    test("2", () => {
        expect(arrayToObject([])).toEqual({})
    })

    test("3", () => {
        expect(arrayToObject([["a", 1]])).toEqual({a: 1})
    })

    test("4", () => {
        expect(arrayToObject([["", ""], [42, "number"]])).toEqual({ "": "", 42: "number" })
    })

    test("5", () => {
        expect(() => arrayToObject(null)).toThrow()
    })
})