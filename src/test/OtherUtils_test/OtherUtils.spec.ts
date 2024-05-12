import {
  OtherStringUtil,
  calculatComplexity,
} from "../../app/doubles/OtherUtils";
import { toUppercaseWithCb } from "../../app/doubles/OtherUtils";
//stubs
import { lengthOfTheString } from "../../app/doubles/OtherUtils";
describe("Other test utils", () => {
  describe("Other String Utils Class Test with Spies", () => {
    let sut: OtherStringUtil;
    beforeEach(() => {
      sut = new OtherStringUtil();
    });

    test("Use a spy track a method calls", () => {
      const toUpperCaseCSpy = jest.spyOn(sut, "toUpperCaseC");
      sut.toUpperCaseC("asa");
      expect(toUpperCaseCSpy).toBeCalledWith("asa");
      expect(toUpperCaseCSpy).toHaveBeenCalledTimes(1);
    });

    test("Use a spy track a logstring method", () => {
      const consoleLogSpy = jest.spyOn(console, "log");
      sut.logString("abc");
      expect(consoleLogSpy).toBeCalledWith("abc");
      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("Tracking the Length Of the String Function", () => {
    // let cbargs = [];
    // let timeCalled = 0;
    // function callBackMocks(str: string) {
    //   cbargs.push(str);
    //   timeCalled++;
    // }

    const callbackMocks = jest.fn();
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should return invalid string ", () => {
      const sut = lengthOfTheString;
      const actual = sut("", callbackMocks);
      expect(actual).toBeUndefined();
      expect(callbackMocks).toHaveBeenCalledWith("Invalid String!");
      expect(callbackMocks).toHaveBeenCalledTimes(1);
    });
  });

  describe("Tracking Callbacks", () => {
    let cbArgs = [];
    let timeCalled = 0;
    function callbackMock(arg: string) {
      cbArgs.push(arg);
      timeCalled++;
    }

    afterEach(() => {
      cbArgs = [];
      timeCalled = 0;
    });
    it("ToUpperCase Function Callback function for invalid arguments - tracks call", () => {
      const actual = toUppercaseWithCb("", callbackMock);
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain("Invalid argument!");
      expect(timeCalled).toBe(1);
    });

    it("ToUpperCase Function Callback function for valid arguments", () => {
      const actual = toUppercaseWithCb("abc", callbackMock);
      expect(actual).not.toBeUndefined();
      expect(actual).toBe("ABC");
      expect(cbArgs).not.toContain("Invalid argument!");
      expect(timeCalled).toBe(1);
    });
  });

  it("Calculate Complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        length: "Testing",
      },
    };

    const sut = calculatComplexity;
    const actual = sut(someInfo as any);
    expect(actual).toBe(5);
  });
});
