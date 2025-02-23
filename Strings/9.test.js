const rot13 = require("./9")

describe("reverseString", () => {
    test("1", () => {
        expect(rot13("hello")).toBe("uryyb")
    })
    test("2", () => {
        expect(rot13("HELLO")).toBe("URYYB")
    })
    test("3", () => {
        expect(rot13("")).toBe("")
    })
    test("4", () => {
        expect(rot13("123")).toBe("123")
    })
    test("5", () => {
        expect(rot13("Привет")).toBe("Привет")
    })
})