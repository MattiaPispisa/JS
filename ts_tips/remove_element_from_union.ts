export type Letters = "a" | "b" | "c"

type RemoveC<TType> = TType extends "c" ? never : TType
type RemoveCAddD<TType> = TType extends "c" ? "d" : TType

type WithoutC = RemoveC<Letters>
type WithoutCWithD = RemoveCAddD<Letters>
