const maxNum = require("./maxNum.js");

test("max of 1, 2, 3, 4 is 4", () => {
	expect(maxNum(1, 2, 3, 4)).toBe(4);
});

test("max of 1, 1, 1, 1 is 1", () => {
	expect(maxNum(1, 1, 1, 1)).toBe(1);
});

test("max of -4, -3, -2, -1, 0 is 0", () => {
	expect(maxNum(-4, -3, -2, -1, 0)).toBe(0);
});
