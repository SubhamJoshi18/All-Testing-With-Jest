import { ArrayUtils } from "../../app/array/ArrayTesting";

jest.mock("../../app/array/ArrayTesting");
jest.mock("uuid", () => {
  v4: "123";
});
describe("Array Testing", () => {
  describe("toUpperCase Method", () => {
    let sut: ArrayUtils;
    const callbackMock = jest.fn();
    beforeEach(() => {
      sut = new ArrayUtils();
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("should return an UpperString", () => {
      const toUpperCaseAgain = jest.spyOn(sut, "toUpperCaseAgain");
      sut.toUpperCaseAgain("abc", callbackMock);
      expect(toUpperCaseAgain).toHaveBeenCalledWith("abc", callbackMock);
      expect(toUpperCaseAgain).toHaveBeenCalledTimes(1);
    });
  });

  describe("generate unique id", () => {
    let sut: ArrayUtils;
    beforeEach(() => {
      sut = new ArrayUtils();
    });
    it("should return a unique id", () => {
      const actual = sut.GenerateUniqueId("abc");
      expect(actual).toBe("abc123");
    });
  });
});
