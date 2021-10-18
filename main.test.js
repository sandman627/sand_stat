const {test, expect} = require("@jest/globals");
const main = require("./main");

test("1 -> 1", () => {
    expect(1).toBe(1);
})

test("mean2 2 4 5 7 4 4, should be 3", () => {
    expect(main("mean2 2 4 5 7 4 4")).toBe(3.67, 5);
})
