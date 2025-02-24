const countOccurrences = require("./8");

describe("countOccurrences", () => {
    test("1", () => {
        expect(countOccurrences([1, 2, 3], 1)).toEqual(1);
    });
    test("2", () => {
        expect(countOccurrences([1, 1, 1], 1)).toEqual(3);
    });
    test("3", () => {
        expect(countOccurrences([], 0)).toEqual(0);
    });
    test("4", () => {
        expect(countOccurrences([1, 2, 3], 4)).toEqual(0);
    });
    test("5", () => {
        expect(countOccurrences(["a", "b", "c", "d"], "a")).toEqual(1);
    });
});