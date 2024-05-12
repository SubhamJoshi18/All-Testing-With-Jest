import { v4 } from "uuid";

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export const calculatComplexity = (stringInfo: stringInfo) => {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
};

type LoggerServiceCallbacks = (arg: string) => void;
export function toUppercaseWithCb(arg: string, cb: LoggerServiceCallbacks) {
  if (!arg) {
    cb("Invalid argument!");
    return;
  }
  cb("Function With Arguments");
  return arg.toUpperCase();
}

export function toUppercase(arg: string) {
  return arg.toUpperCase();
}

export function toLowerCaseWithId(arg: string) {
  return arg.toLowerCase() + v4;
}
export function lengthOfTheString(str: string, callback: Function) {
  if (!str) {
    callback("Invalid String!");
    return;
  }

  callback("length of the string");
  return str.length;
}

export class OtherStringUtil {
  private externalSpyTesting() {}
  public toUpperCaseC(arg: string): string {
    return arg.toUpperCase();
  }

  public logString(arg: string): void {
    console.log(arg);
  }
}
