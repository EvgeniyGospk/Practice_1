const updateNestedProperty = require("./14")

describe("updateNestedProperty", () => {
    const obj = { a: { b: { c: 10 } } };
    updateNestedProperty(obj, "a.b.c", 20)

    test("1", () => {
        expect(obj.a.b.c).toBe(20)
    })

    updateNestedProperty(obj, "a.b.x", 20)

    test("2", () => {
        expect(obj.a.b.c).toBe(20)
    })

   
})