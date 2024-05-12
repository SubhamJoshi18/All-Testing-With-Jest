import { StringUtils } from "../app/Class";

describe("Looping Testing in the StringUtils Class", () => {
  let sut: StringUtils;
  beforeEach(() => {
    sut = new StringUtils();
  });

  describe("Method LoopArray of the clas Looping Testing", () => {
    it("should return an array which is greater than 2 ", () => {
      const actual = sut.loopArray([0, 1, 2, 4, 5]);
      expect(actual).toEqual([4, 5]);
    });
  });
});
