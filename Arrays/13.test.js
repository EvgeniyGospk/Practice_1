const shuffleArray = require("./13");

describe("shuffleArray", () => {
    const testArray = [1, 2, 3, 4, 5]
    const resArray = shuffleArray(testArray)

    test("1", () => {
        expect(testArray.length).toBe(resArray.length)
    });

    test("2", () => {
        expect(testArray.sort()).toEqual(resArray.sort())
    });

    test("3", () => {
        expect(shuffleArray([])).toEqual([]);
    });

    test("4", () => {
        expect(shuffleArray([1])).toEqual([1]);
    });

});