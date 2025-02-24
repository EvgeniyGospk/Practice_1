const chunkArray = require("./14");

describe("chunkArray", () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7];

    test("1", () => {
        expect(chunkArray(testArray, 1)).toEqual([[1], [2], [3], [4], [5], [6], [7]])
    });

    test("2", () => {
        expect(chunkArray(testArray, 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]])
    });

    test("3", () => {
        expect(chunkArray([], 3)).toEqual([]);
    });

    test("4", () => {
        expect(chunkArray([1, 2], 5)).toEqual([[1, 2]]);
    });

});