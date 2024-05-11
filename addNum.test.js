const addNum = require("./addNum.js");

test("addition of 1 and 2 is 3", () => {
	expect(addNum(1, 2)).toBe(3);
});

test("addition of 1 and 0 is 1", () => {
	expect(addNum(1, 0)).toBe(1);
});

test("addition of 1 and -1 is 0", () => {
	expect(addNum(1, -1)).toBe(0);
});
