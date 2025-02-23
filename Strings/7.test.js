const compressWord = require("./7")

describe("reverseString", () => {
    test("1", () => {
        expect(compressWord("hello   ")).toBe("h1e1l2o1 3")
    })
    test("2", () => {
        expect(compressWord("aha")).toBe("a1h1a1")
    })
    test("3", () => {
        expect(compressWord("Привииет")).toBe("П1р1и1в1и2е1т1")
    })
    test("4", () => {
        expect(compressWord("")).toBe("")
    })
    test("5", () => {
        expect(compressWord("1")).toBe("11")
    })
})