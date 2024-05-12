export enum passwordError {
  SHORT = "Password is Short",
  NO_UPPERCASE = "Upper Case Letter Required",
  NO_LOWERCASE = "Lower Case Letter Rrequired",
}
export interface CheckResult {
  valid: boolean;
  reasons: passwordError[];
}
export class PasswordChecker {
  public checkPassword(password: string): CheckResult {
    let reasons: passwordError[] = [];
    this.checkLength(password, reasons);
    this.checkLowerCase(password, reasons);
    this.checkLength(password, reasons);
    console.log(reasons);
    return {
      valid: reasons.length > 0 ? false : true,
      reasons: reasons,
    };
  }

  private checkLength(password: string, reasons: passwordError[]) {
    if (password.length < 8) {
      reasons.push(passwordError.SHORT);
    }
  }

  private checkLowerCase(password: string, reasons: passwordError[]) {
    if (password === password.toLowerCase()) {
      reasons.push(passwordError.NO_UPPERCASE);
    }
  }

  private checkUpperCase(password: string, reasons: passwordError[]) {
    if (password === password.toUpperCase()) {
      reasons.push(passwordError.NO_LOWERCASE);
    }
  }
}
