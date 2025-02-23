const countChars = require("./3")

describe("reverseString", () => {
    test("1", () => {
        expect(countChars("hello", "h")).toBe(1)
    })
    test("2", () => {
        expect(countChars("aha", "a")).toBe(2)
    })
    test("3", () => {
        expect(countChars("Привииет", "и")).toBe(3)
    })
    test("4", () => {
        expect(countChars("ПпППппПП", "п")).toBe(8)
    })
    test("5", () => {
        expect(countChars("12132", "e")).toBe(0)
    })
})