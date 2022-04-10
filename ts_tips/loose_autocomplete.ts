type LooseAutoComplete<T extends string> = T | Omit<string, T>

/* a or b or any string */
const x: LooseAutoComplete<"a" | "b"> = "hi"
