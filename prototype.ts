import l from "./log"

// with object
interface Dog {
  bark: () => void
}

const dog: Dog = {
  bark() {
    l("Woof!")
  },
}

const pet1 = Object.create(dog)

pet1.bark()

// with class
// ...
