const bubbleSort = require("./11");

describe("bubbleSort", () => {
    test("1", () => {
        expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    });
    test("2", () => {
        expect(bubbleSort([1, 1, 1])).toEqual([1, 1, 1]);
    });
    test("3", () => {
        expect(bubbleSort([1, -1, 12, 12, 432])).toEqual([-1, 1, 12, 12, 432]);
    });
    test("4", () => {
        expect(bubbleSort([])).toEqual([]);
    });
    test("5", () => {
        expect(bubbleSort([2, 1, 1, 2, 1, 2])).toEqual([1, 1, 1, 2, 2, 2]);
    });
});