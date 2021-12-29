import l from "./log"

// * Manipolare/validare un oggetto senza parlare direttamente con lui
interface Person {
  name: string
  age: number
  nationality: string
}
const person: Person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
}

// * PROXY + REFLECT
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    l(`The value of ${String(prop)} is ${Reflect.get(obj, prop)}`)
  },
  set: (obj, prop, value) => {
    l(`Changed ${String(prop)} from ${Reflect.get(obj, prop)} to ${value}`)
    return Reflect.set(obj, prop, value) // obj[prop] = value
  },
})

personProxy.name
personProxy.age = 43
personProxy.name = "Jane Doe"
