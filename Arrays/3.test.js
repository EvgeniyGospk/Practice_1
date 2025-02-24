const sumArray = require("./3")

describe("findMinMax", () => {
    test(1, () => {
        expect(sumArray([1, 2, 3, 4, 5])).toEqual(15)
    })
    test(2, () => {
        expect(sumArray([-1, -2, -3, -4, -5])).toEqual(-15)
    })
    test(3, () => {
        expect(sumArray([])).toEqual(0)
    })
    test(4, () => {
        expect(sumArray([1])).toEqual(1)
    })
    test(5, () => {
        expect(sumArray([1, 4, -20, 200])).toEqual(185)
    })
})