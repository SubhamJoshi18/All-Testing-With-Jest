export function toUpperCaseString(message: string): string {
  return message.toUpperCase();
}

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function getStringInfo(str: string): stringInfo {
  return {
    lowerCase: str.toLowerCase(),
    upperCase: str.toUpperCase(),
    characters: Array.from(str),
    length: str.length,
    extraInfo: {},
  };
}
