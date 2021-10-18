const {test, expect} = require("@jest/globals");
const lib = require("./lib");

test("sum([1,2]) should be 3", () => {
    expect(lib.sum([1,2])).toBe(3);
});

test("avg([1,2, 4]) should be 3", () => {
    expect(lib.avg([1,2,4])).toBe(7/3);
});

test("max([4,7,2,5]) should be 3", () => {
    expect(lib.max([4,7,2,5])).toBe(7);
});

//assignment
/*
test("mean2([1,1,2,2,1,3]) -> [1.33, 2.00]", () => {
    expect(lib.mean2([1,1,2,2,1,3])).toContain(1.33)
    expect(lib.mean2([1,1,2,2,1,3])).toContain(2)
});

test("mean2([0,0,-1,3,-2,2]) -> [-1.00, 1.67]", () => {
    expect(lib.mean2([0,0,-1,3,-2,2])).toContain(-1)
    expect(lib.mean2([0,0,-1,3,-2,2])).toContain(1.67)
});
*/

test("med2([1,1,2,2,3,3,1,3]) -> [2,2]", () => {
    expect(lib.med2([1,1,2,2,3,3,1,3])).toEqual([2, 2]);
});

test("med2([1,1,2,2,3,3,4,4]) -> [2,2]", () => {
    expect(lib.med2([1,1,2,2,3,3,4,4])).toEqual([2, 2]);
});

test("pareto([1,4,2,3,3,2,4,1]) -> [1,4,2,3,3,2,4,1]", () => {
    expect(lib.pareto([1,4,2,3,3,2,4,1])).toEqual([[1,4],[2,3],[3,2],[4,1]]);
});

test("pareto([2,3,4,5,5,3]) -> [4,5,5,3]", () => {
    expect(lib.pareto([2,3,4,5,5,3])).toEqual([[4,5],[5,3]]);
});
