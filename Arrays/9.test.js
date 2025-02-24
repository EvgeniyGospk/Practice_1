const secondLargest = require("./9");

describe("secondLargest", () => {
    test("1", () => {
        expect(secondLargest([1, 2, 3])).toEqual(2);
    });
    test("2", () => {
        expect(secondLargest([1, 1, 1])).toEqual(-Infinity);
    });
    test("3", () => {
        expect(secondLargest([])).toEqual(-Infinity);
    });
    test("4", () => {
        expect(secondLargest([1, 2, 2, 2, 2, 3, 3, 3, 3])).toEqual(2);
    });
    test("5", () => {
        expect(secondLargest([2, 1, 1, 2, 1, 2], "a")).toEqual(1);
    });
});