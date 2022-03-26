const fruitCounts = {
  banana: 12,
  apple: 1,
  pear: 3,
}

// we want to derive
/* --> */ type SingleFruitCount = { apple: number } | { banana: number } | { pear: number }

type FruitCounts = typeof fruitCounts
type UnionTypeSingleFruitCount = { [K in keyof FruitCounts]: { [K2 in K]: number } } /* to have an union --> */[keyof FruitCounts]

const apple: UnionTypeSingleFruitCount = {
  apple: 2,
}
const pear: UnionTypeSingleFruitCount = {
  banana: 3,
}
