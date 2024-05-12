import { game } from "../../app/game/game";
import { command } from "../../app/game/game";

describe("Rock Paper Scissor Games", () => {
  let sut: Function;

  beforeEach(() => {
    sut = game;
  });

  describe.only("For Arguments rock and paper", () => {
    it("should return an invalid arguements", () => {
      expect(() => sut(1, 2)).toThrow("Invalid Arguments");
    });

    it("should return if you send same command", () => {
      expect(() => sut(command.ROCK, command.ROCK)).toThrow(command.DRAW);
    });
    it("should return won string if it pass paper and rock", () => {
      const sut = game;
      const actual = sut(command.ROCK, command.PAPER);
      expect(actual).toBe(`${command.PAPER} Won!`);
      expect(actual.length).toBeGreaterThan(0);
    });
    it("should return won string if it pass paper and scissor", () => {
      const sut = game;
      const actual = sut(command.PAPER, command.SCISSOR);
      expect(actual).toBe(`${command.SCISSOR} Won!`);
      expect(actual.length).toBeGreaterThan(0);
    });
    it("should return won string if it pass Scissor and rock", () => {
      const sut = game;
      const actual = sut(command.SCISSOR, command.ROCK);
      expect(actual).toBe(`${command.ROCK} Won!`);
      expect(actual.length).toBeGreaterThan(0);
    });
  });
});
