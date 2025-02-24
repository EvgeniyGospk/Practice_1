const removeDuplicates = require("./5")

describe("findMinMax", () => {
    test(1, () => {
        expect(removeDuplicates([1, 2, 3, 4, 4, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })
    test(2, () => {
        expect(removeDuplicates([-1, -1, -1, -1, -1])).toEqual([-1])
    })
    test(3, () => {
        expect(removeDuplicates([])).toEqual([])
    })
    test(4, () => {
        expect(removeDuplicates([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    })
    test(5, () => {
        expect(removeDuplicates(["f", 1, 2, "f"])).toEqual(["f", 1, 2])
    })
})