import { v4 } from "uuid";

export class ArrayUtils {
  public toUpperCaseAgain(arg: string, cb: Function) {
    cb("Hello World");
    return arg.toUpperCase();
  }

  public GenerateUniqueId(arg: string) {
    return arg + v4;
  }
}
