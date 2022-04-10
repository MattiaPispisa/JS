const myObject = {
  a: 1,
  b: 2,
  c: 3,
}

const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[]
}

Object.keys(myObject).forEach((key) => {
  console.log(myObject[key])
})

/* Key type!! */
objectKeys(myObject).forEach((key) => {
  console.log(key)
})
