import { toUpperCaseString, getStringInfo } from "../app/Utils";

describe("Utils test suites", () => {
  it("should return an UpperCase String", () => {
    //arrange:
    const sut = toUpperCaseString;
    const result = toUpperCaseString("abc");
    const expected = "ABC";

    //act:
    const actual = sut("abc");

    //now you should make an assertion assert
    expect(actual).toBe(expected);
  });

  describe("getStringInfo for argument SUBham", () => {
    it("should return an appropritate length of the string", () => {
      const actual = getStringInfo("SUBham");
      expect(actual.length).toBe(6);
    });
    it("should return an UpperCase", () => {
      const actual = getStringInfo("SUBham");
      expect(actual.upperCase).toBe("SUBHAM");
    });
    it("should return an lowercase", () => {
      const actual = getStringInfo("SUBham");
      expect(actual.lowerCase).toBe("subham");
    });
    it("should return an approprite Array Of Characters", () => {
      const actual = getStringInfo("SUBham");
      expect(actual.characters).toEqual(["S", "U", "B", "h", "a", "m"]);
    });

    // describe("should return a UppserCase String", () => {
    //   it.each([
    //     { input: "abc", expected: "ABC" },
    //     { input: "subham", expect: "SUBHAM" },
    //   ])("$input to be expected $expected", ({ input, expect }) => {
    //     const actual = getStringInfo(input);
    //     expect("abc").toBe()
    //   });
    // });
  });
  it("should return info for valid string", () => {
    const sut = getStringInfo;
    const actual = sut("SUBham");
    expect(actual.lowerCase).toBe("subham");
    expect(actual.upperCase).toBe("SUBHAM");
    expect(actual.characters.length).toBe(6);
    expect(actual.characters).toEqual(["S", "U", "B", "h", "a", "m"]);
    expect(actual.characters).toContain<string>("S");
    expect(actual.extraInfo).toEqual({});
  });
});
