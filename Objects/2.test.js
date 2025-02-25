const mergeObjects = require("./2")

describe("mergeObjects", () => {
    test("1", () => {
        expect(mergeObjects({a: 1}, {b: 2})).toEqual({a: 1, b: 2})
    })

    test("2", () => {
        expect(mergeObjects({a: 1}, {a: 2})).toEqual({a: 2})
    })

    test("3", () => {
        expect(mergeObjects({a: 1, c: 3}, {b: 2})).toEqual({a: 1, b: 2, c: 3})
    })
    
    test("4", () => {
        expect(mergeObjects({}, {})).toEqual({})
    })

    test("5", () => {
        expect(mergeObjects({a: 5})).toEqual({a: 5})
    })

})