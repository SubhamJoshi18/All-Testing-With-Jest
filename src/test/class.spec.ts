import { StringUtils } from "../app/Class";

describe.only("Class Utils test suites", () => {
  describe("String Utils test", () => {
    let sut: StringUtils;
    beforeEach(() => {
      //setup and arrange
      sut = new StringUtils();
      console.log("Setup");
    });
    //only skip concurrent todo
    afterEach(() => {
      console.log("TearDown Mocks");
      //clearing mocks teardown
    });
    it.only("should return correct UpperCase", () => {
      const actual = sut.toUpperCaseString("abc");
      expect(actual).toBe("ABC");
      console.log("Actul Test");
    });

    it.todo("should return login validations");

    it.skip("should return testing true or false", () => {
      expect(true).toBe(true);
    });
    // it("should throw error an invalid argument", (done) => {
    //   // function expectError() {
    //   //   const actual = sut.toUpperCaseString(" ");
    //   // }
    //   try {
    //     sut.toUpperCaseString(" ");
    //     done("GetStringInfo ");
    //   } catch (error) {
    //     expect(error).toBeInstanceOf(Error);
    //     expect(error).toHaveProperty("message", "Invalid Arguments");
    //   }
    // });
  });
});
