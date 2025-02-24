const isSubset = require("./10");

describe("isSubset", () => {
    test("1", () => {
        expect(isSubset([1, 2, 3], [])).toEqual(true);
    });
    test("2", () => {
        expect(isSubset([1, 1, 1], [1, 1])).toEqual(true);
    });
    test("3", () => {
        expect(isSubset([1, 1, 2, 2, 3], [1, 1, 1])).toEqual(false);
    });
    test("4", () => {
        expect(isSubset([1, 2, 2, 2, 2, 3, 3, 3, 3], [1, 2, 3])).toEqual(true);
    });
    test("5", () => {
        expect(isSubset([2, 1, 1, 2, 1, 2], ["a"])).toEqual(false);
    });
});