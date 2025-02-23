const removeVowels = require("./5")

describe("reverseString", () => {
    test("1", () => {
        expect(removeVowels("hello my name is kto to")).toBe("hll my nm s kt t")
    })
    test("2", () => {
        expect(removeVowels("aha 1212 12d2 !2sw")).toBe("h 1212 12d2 !2sw")
    })
    test("3", () => {
        expect(removeVowels("Привииет")).toBe("Првт")
    })
    test("4", () => {
        expect(removeVowels("")).toBe("")
    })
    test("5", () => {
        expect(removeVowels("-1")).toBe("-1")
    })
})