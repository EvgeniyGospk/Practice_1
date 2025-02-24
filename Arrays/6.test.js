const reverseArray = require("./6");

describe("reverseArray", () => {
    test("1", () => {
        expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });
    test("2", () => {
        expect(reverseArray([1, 2])).toEqual([2, 1]);
    });
    test("3", () => {
        expect(reverseArray([])).toEqual([]);
    });
    test("4", () => {
        expect(reverseArray([1, 2, 3, 4, 5, 6, 7])).toEqual([7, 6, 5, 4, 3, 2, 1]);
    });
    test("5", () => {
        expect(reverseArray(["a", "b", "c", "d", "e"])).toEqual(["e", "d", "c", "b", "a"]);
    });
});