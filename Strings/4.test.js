const capitalizeWords = require("./4")

describe("reverseString", () => {
    test("1", () => {
        expect(capitalizeWords("hello my name is kto to")).toBe("Hello My Name Is Kto To")
    })
    test("2", () => {
        expect(capitalizeWords("aha 1212 12d2 !2sw")).toBe("Aha 1212 12d2 !2sw")
    })
    test("3", () => {
        expect(capitalizeWords("Привииет")).toBe("Привииет")
    })
    test("4", () => {
        expect(capitalizeWords("")).toBe("")
    })
    test("5", () => {
        expect(capitalizeWords("-1")).toBe("-1")
    })
})