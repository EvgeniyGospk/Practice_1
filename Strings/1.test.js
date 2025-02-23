const reverseString = require("./1")

describe("reverseString", () => {
    test("1", () => {
        expect(reverseString("hello")).toBe("olleh")
    })
    test("2", () => {
        expect(reverseString("jwdejwd")).toBe("dwjedwj")
    })
    test("3", () => {
        expect(reverseString("Привет")).toBe("тевирП")
    })
    test("4", () => {
        expect(reverseString("123")).toBe("321")
    })
    test("5", () => {
        expect(reverseString("/dwe2")).toBe("2ewd/")
    })
})