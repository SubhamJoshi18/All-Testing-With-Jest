import { PasswordChecker } from "../../pass_checker/PasswordChecker";
import { passwordError } from "../../pass_checker/PasswordChecker";
describe("Password Checker suites", () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("Password with less than 8 character is invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual.valid).toBeFalsy();
    expect(actual.reasons).toContain(passwordError.SHORT);
  });

  it("Password with more than 8 character is valid", () => {
    const actual = sut.checkPassword("12345678Aa");
    expect(actual.valid).toBeTruthy();
    expect(actual.reasons).not.toContain(passwordError.SHORT);
  });
  it("shoud contain uppercase or it is false", () => {
    const actual = sut.checkPassword("1234abcd");
    expect(actual.valid).toBeFalsy();
    expect(actual.reasons).toContain(passwordError.NO_UPPERCASE);
  });

  it("should contain at least one uppercase", () => {
    const actual = sut.checkPassword("123456AbCd");
    expect(actual.valid).toBeTruthy();
    expect(actual.reasons).not.toContain(passwordError.NO_UPPERCASE);
  });

  it("should return false if there is no lower case", () => {
    const actual = sut.checkPassword("123455AVCD");
    expect(actual.valid).toBeFalsy();
    expect(actual.reasons).toContain(passwordError.NO_LOWERCASE);
  });
  it("should return true if there is an atlest one lowerCase", () => {
    const actual = sut.checkPassword("132441Avcd");
    expect(actual.valid).toBeTruthy();
    expect(actual.reasons).not.toContain(passwordError.NO_LOWERCASE);
  });

  it("Complex Password is Valid", () => {
    const actual = sut.checkPassword("1234AaCb");
    expect(actual.valid).toBeTruthy();
    expect(actual.reasons).toHaveLength(0);
  });

  it.skip("should do nothing for the moments", () => {
    const actual = sut.checkPassword("test");
    expect(actual).toBeTruthy();
  });
});
