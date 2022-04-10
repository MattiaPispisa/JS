const makeKeyRemover =
  <Key extends string>(keys: Key[]) =>
  <Obj>(obj: Obj): Omit<Obj, Key> => {
    return {} as any
  }

const keyRemover = makeKeyRemover(["a", "b"])

const newObject = keyRemover({ a: 1, b: 2, c: 3 })

/* only c !! */
newObject.c