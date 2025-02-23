const generateId = require("./10")

describe("reverseString", () => {
    for(let i = 0; i < 1000; i++)
    {test(i, () => {
        expect(generateId(i).length).toBe(i)
    })}
    // test("2", () => {
    //     expect(generateId("HELLO")).toBe("URYYB")
    // })
    // test("3", () => {
    //     expect(generateId("")).toBe("")
    // })
    // test("4", () => {
    //     expect(generateId("123")).toBe("123")
    // })
    // test("5", () => {
    //     expect(generateId("Привет")).toBe("Привет")
    // })
})