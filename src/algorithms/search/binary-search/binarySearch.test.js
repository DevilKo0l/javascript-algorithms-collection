const binarySearch = require("./binarySearch");

test("properly search a number", () => {
  expect(binarySearch([], 1)).toBe(-1);
  expect(binarySearch([1], 1)).toBe(0);
  expect(binarySearch([1, 2], 1)).toBe(0);
  expect(binarySearch([1, 2], 2)).toBe(1);
  expect(binarySearch([1, 2, 3, 10, 20, 30, 50, 90], 20)).toBe(4);
  expect(binarySearch([1, 2, 3, 10, 20, 30, 50, 90], 1)).toBe(0);
});
