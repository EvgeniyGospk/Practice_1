const deepClone = require("./9")

describe("deepClone", () => {
    const obj1 = {
        a: 1,
        b: 2,
        c: {
          a: 1,
          b: 2,
        },
      };
    test("1", () => {
        expect(deepClone(obj1)).toEqual(obj1)
    })

    test("2", () => {
        expect(deepClone(obj1)).not.toBe(obj1)
    })
})