// * WITH REGULAR OBJECT (PREFERRED)
let count = 0

const plainCounter = {
  increment() {
    return ++count
  },

  decrement() {
    return --count
  },
}

Object.freeze(plainCounter)
export { plainCounter }

// * WITH CLASS
let instance: Counter
let counter: number = 0

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!")
    }
    instance = this
  }

  get instance() {
    return this
  }

  get count() {
    return counter
  }

  increment() {
    return ++counter
  }

  decrement() {
    return --counter
  }
}

const singletonCounter = Object.freeze(new Counter()) // nessuno che utilizza counter potrà modificare il singleton
export default singletonCounter