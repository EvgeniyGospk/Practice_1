const countOccurrences = require("./8")

describe("countOccurrences", () => {
    test("1", () => {
        expect(countOccurrences([{ age: 25 }, { age: 30 }, { age: 25 }], "age")).toEqual({"25": 2, "30": 1})
    })

    test("2", () => {
        expect(countOccurrences([{age: 25}, {col: 123}, {age: 20}, {min: 121}], "age")).toEqual({"25": 1, "20": 1})
    })


})