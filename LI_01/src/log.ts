const log = (...args: any) => {
  console.log(`${"=".repeat(100)}\n\n`, ...args, "\n");
};

export const customConsole = { log };
