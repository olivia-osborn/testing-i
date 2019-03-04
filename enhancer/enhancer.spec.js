const { success, fail, repair } = require("./enhancer");

test(`sets durability to 100 correctly`, () => {
  expect(repair({ durability: 50 }).durability).toBe(100);
  expect(repair({ durability: 0 }).durability).toBe(100);
});
