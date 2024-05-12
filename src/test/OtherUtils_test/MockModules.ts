jest.mock("../../app/doubles/OtherUtils", () => ({
  //factory
  ...jest.requireActual("../../app/doubles/OtherUtils"),
  calculatComplexity: () => {
    return 10;
  },
}));

jest.mock("uuid", () => ({
  v4: "123",
}));

import * as OtherUtils from "../../app/doubles/OtherUtils";

describe("Mock Module testing", () => {
  it("should return 10 in calculateComplexity", () => {
    const actual = OtherUtils.calculatComplexity({} as any);
    expect(actual).toBe(10);
  });

  it("keeping other function", () => {
    const actual = OtherUtils.toUppercase("abc");
    expect(actual).toBe("ABC");
  });

  it("should return the accurate uuid v4", () => {
    const actual = OtherUtils.toLowerCaseWithId("abc");
    expect(actual).toBe("abc123");
  });
});
