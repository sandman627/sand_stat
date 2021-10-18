const {test, expect} = require("@jest/globals");
const lib = require("./lib");

test("1 -> 1", () => {
    expect(1).toBe(1);
})

test("sum([1, 2]) should be 3", () => {
    expect(lib.sum([1,2])).toBe(3);
})
