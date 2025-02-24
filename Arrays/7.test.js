const mergeArrays = require("./7");

describe("mergeArrays", () => {
    test("1", () => {
        expect(mergeArrays([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
    test("2", () => {
        expect(mergeArrays([1, 1, 1], [1, 1])).toEqual([1]);
    });
    test("3", () => {
        expect(mergeArrays([], [])).toEqual([]);
    });
    test("4", () => {
        expect(mergeArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("5", () => {
        expect(mergeArrays(["a", 1], ["b", "a", 2])).toEqual(["a", 1, "b", 2]);
    });
});