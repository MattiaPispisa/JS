const assertInterface = (test?: number): asserts test is number & { test: number } => {
  if (!test) {
    throw new Error("test is undefined")
  }
}

const value: number | undefined = 3

const functionToCall = () => {
  const x = assertInterface(value)

  /* value is no more UNDEFINED !! */
  console.log(value)
}
