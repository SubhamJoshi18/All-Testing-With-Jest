export class StringUtils {
  public toUpperCaseString(str: string) {
    if (!str) {
      throw new Error("Invalid Arguments");
    }
    return str.toUpperCase();
  }

  public ArrayTesting(arr: Array<any>) {
    return {
      length: arr.length,
      ArrayAsString: arr.join(" "),
      ArrayFirstElementtoUpperCase: arr[0].toUpperCase(),
    };
  }

  public loopArray(arr: Array<any>) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 2) {
        array.push(arr[i]);
      }
    }
    return array;
  }
}
