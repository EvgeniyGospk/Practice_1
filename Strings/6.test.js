const isAnagram = require("./6")

describe("reverseString", () => {
    test("1", () => {
        expect(isAnagram("hello   ", "elloh")).toBe(true)
    })
    test("2", () => {
        expect(isAnagram("aha 1212 12d2 !2sw", "dwsw")).toBe(false)
    })
    test("3", () => {
        expect(isAnagram("Привииет", "теиивирп")).toBe(true)
    })
    test("4", () => {
        expect(isAnagram("", "")).toBe(true)
    })
    test("5", () => {
        expect(isAnagram("-1", "-1")).toBe(true)
    })
})