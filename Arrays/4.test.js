const findIndex = require("./4")

describe("findMinMax", () => {
    test(1, () => {
        expect(findIndex([1, 2, 3, 4, 5], 3)).toEqual(2)
    })
    test(2, () => {
        expect(findIndex([-1, -2, -3, -4, -5], 1)).toEqual(-1)
    })
    test(3, () => {
        expect(findIndex([], " ")).toEqual(-1)
    })
    test(4, () => {
        expect(findIndex([1], 1)).toEqual(0)
    })
    test(5, () => {
        expect(findIndex([1, 4, -20, 200], 200)).toEqual(3)
    })
})