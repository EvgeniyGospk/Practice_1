const isPalindrome = require("./2")

describe("reverseString", () => {
    test("1", () => {
        expect(isPalindrome("hello")).toBe(false)
    })
    test("2", () => {
        expect(isPalindrome("aha")).toBe(true)
    })
    test("3", () => {
        expect(isPalindrome("Привет")).toBe(false)
    })
    test("4", () => {
        expect(isPalindrome("121")).toBe(true)
    })
    test("5", () => {
        expect(isPalindrome("Пип")).toBe(true)
    })
})