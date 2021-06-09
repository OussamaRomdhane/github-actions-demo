import toCn from "./to-cn";

const nonStrings = [null, undefined, {}, [], 2112, NaN];
const inputs = ["output", 'Out&puT"!', "O3u023tp23ut"];

describe("utils", () => {
  describe("#toCn", () => {
    it("should work on empty strings", () => {
      expect(toCn("")).toBe("");
    });

    it("should return an empty string for non strings", () => {
      nonStrings.forEach((input) => {
        expect(toCn(input)).toBe("");
      });
    });

    it("should return an empty string for strings containing no english alphabet letters", () => {
      expect(toCn("23232332éé^^^ô")).toBe("");
    });

    it("should return expected values", () => {
      inputs.forEach((input) => {
        expect(toCn(input)).toBe("output");
      });
    });
  });
});
