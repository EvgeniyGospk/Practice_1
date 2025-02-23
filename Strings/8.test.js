const compressWord = require("./8")

describe("reverseString", () => {
    test("1", () => {
        expect(compressWord("hello wdssdds jwjw wewn")).toBe("wdssdds")
    })
    test("2", () => {
        expect(compressWord("aha")).toBe("aha")
    })
    test("3", () => {
        expect(compressWord("")).toBe("")
    })
    test("4", () => {
        expect(compressWord("123 123 123")).toBe("123")
    })
    test("5", () => {
        expect(compressWord("1")).toBe("1")
    })
})