const groupByFrequency = require("./12");

describe("groupByFrequency", () => {
    test("1", () => {
        expect(groupByFrequency([1, 2, 2, 2, 3, 4, 5, 4])).toEqual({ 
            '1': 1, '2': 3, '3': 1, '4': 2, '5': 1 
        });
    });

    test("2", () => {
        expect(groupByFrequency(["a", "b", "a", "c", "b", "b"])).toEqual({ 
            'a': 2, 'b': 3, 'c': 1 
        });
    });

    test("3", () => {
        expect(groupByFrequency([])).toEqual({});
    });

    test("4", () => {
        expect(groupByFrequency([1, 1, 1])).toEqual({ '1': 3 });
    });

    test("5", () => {
        expect(groupByFrequency(["x", "y", "x", "z"])).toEqual({ 
            'x': 2, 'y': 1, 'z': 1 
        });
    });
});