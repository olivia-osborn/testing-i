const { enhancer } = require("./enhancer");

describe("enhancer", () => {
  describe("repair()", () => {
    test(`sets durability to 100 correctly`, () => {
      expect(enhancer.repair({ durability: 50 }).durability).toBe(100);
      expect(enhancer.repair({ durability: 0 }).durability).toBe(100);
    });

    describe("fail()", () => {
      it("durability decreases by 5 if enhancement is between 0 and 14", () => {
        expect(
          enhancer.fail({
            enhancement: 14,
            durability: 85
          }).durability
        ).toBe(80);
      });
      it("If enhancement in 14 or lower, the itme cannot be enhanced if the durability is below 25", () => {
        const item = {
          enhancement: 14,
          durability: 24
        };
        expect(enhancer.fail(item)).toEqual(item);
      });
    });

    describe("success()", () => {
      test(`sets durability to 100 correctly`, () => {
        expect(enhancer.success({ enhancement: "+8" })).toBe(8);
        expect(enhancer.success({ enhancement: "+10" })).toBe(10);
      });
    });
  });
});
