import { StringUtils } from "./../app/Class";

describe("String utils suites Testing", () => {
  let sut: StringUtils;
  beforeEach(() => {
    sut = new StringUtils();
  });
  describe("ArrayContainting Testing", () => {
    it("should return an given array length", () => {
      const actual = sut.ArrayTesting(["subham"]);
      const expected = 1;
      expect(actual.length).toBe(expected);
    });

    it("should return an array elemnt as string", () => {
      const actual = sut.ArrayTesting(["subham"]);
      const expected = "subham";
      expect(actual.ArrayAsString).toBe(expected);
    });

    it("should return uppercase of first element string", () => {
      const actual = sut.ArrayTesting(["subham"]);
      const expected = "SUBHAM";
      expect(actual.ArrayFirstElementtoUpperCase).toBe(expected);
    });
  });
});
