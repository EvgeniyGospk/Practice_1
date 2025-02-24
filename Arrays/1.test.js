const findMinMax = require("./1")

describe("findMinMax", () => {
    test(1, () => {
        expect(findMinMax([1, 2, 3, 4, 5])).toEqual({min: 1, max: 5})
    })
    test(2, () => {
        expect(findMinMax([-1, -2, -3, -4, -5])).toEqual({min: -5, max: -1})
    })
    test(3, () => {
        expect(findMinMax([])).toEqual({min: null, max: null})
    })
    test(4, () => {
        expect(findMinMax([1])).toEqual({min: 1, max: 1})
    })
    test(5, () => {
        expect(findMinMax([1, 4, -20, 200])).toEqual({min: -20, max: 200})
    })
})