const filterEvenNumbers = require("./2")

describe("findMinMax", () => {
    test(1, () => {
        expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4])
    })
    test(2, () => {
        expect(filterEvenNumbers([-1, -2, -3, -4, -5])).toEqual([-2, -4])
    })
    test(3, () => {
        expect(filterEvenNumbers([])).toEqual([])
    })
    test(4, () => {
        expect(filterEvenNumbers([1])).toEqual([])
    })
    test(5, () => {
        expect(filterEvenNumbers([1, 4, -20, 200])).toEqual([4, -20, 200])
    })
})