import type { Config } from "@jest/types";

const BaseDir = "<rootDir>/src/app/doubles";

const baseTestDir = "<rootDir>/src/test/OtherUtils_test";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${BaseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`],
};

export default config;
