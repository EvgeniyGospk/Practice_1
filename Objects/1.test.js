const hasKey = require("./1")

describe("hasKey", () => {
    test("1", () => {
        expect(hasKey({age: 20}, "age")).toBe(true)
    })

    test("2", () => {
        expect(hasKey({age: 20}, "2wqqw")).toBe(false)
    })

    test("3", () => {
        expect(hasKey({}, "2wqqw")).toBe(false)
    })
    
    test("4", () => {
        expect(hasKey({}, "")).toBe(false)
    })

    test("5", () => {
        expect(hasKey({age: 20}, "")).toBe(false)
    })

})