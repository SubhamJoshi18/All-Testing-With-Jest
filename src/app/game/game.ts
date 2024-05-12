export enum command {
  ROCK = "rock",
  PAPER = "paper",
  SCISSOR = "scissor",
  DRAW = "draw",
}

export const game = (arg1: string, arg2: string) => {
  const commandArray: Array<command> = [
    command.PAPER,
    command.ROCK,
    command.SCISSOR,
  ];
  // let empty: boolean = true;
  // for (let i = 0; i < commandArray.length; i++) {
  //   let emptyarray = [];
  //   console.log(commandArray[i]);
  //   if (arg1 || arg2 !== commandArray[i]) {
  //     emptyarray.push(i);
  //     continue;
  //   }

  //   empty = emptyarray.length > 0 ? false : true;
  // }

  if (typeof arg1 !== "string" || typeof arg2 !== "string") {
    throw new Error("Invalid Arguments");
  }
  console.log(arg1.length, arg2.length);
  if (arg1.length == arg2.length) {
    throw new Error(command.DRAW);
  }

  if (arg1.startsWith("ro") && arg2.startsWith("pa")) {
    return `${command.PAPER} Won!`;
  } else if (arg1.startsWith("pa") && arg2.startsWith("sc")) {
    return `${command.SCISSOR} Won!`;
  } else {
    return `${command.ROCK} Won!`;
  }
};
