// iterable object
class Range {
  constructor(from, to) {
    this.from = from
    this.to = to
  }

  has(x) {
    return typeof x === "number" && this.from <= x && x <= this.to
  }

  toString() {
    return `{ x | ${this.from} ≤ x ≤ ${this.to} }`
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from)
    let last = this.to
    return {
      next() {
        return next <= last ? { value: next++ } : { done: true }
      },

      // As a convenience, we make the iterator itself iterable.
      [Symbol.iterator]() {
        return this
      },
    }
  }
}

for (let x of new Range(1, 4)) console.log(x) // Logs numbers 1 to 10
;[...new Range(-2, 2)]

// generators

// infinite generator
function* fibonacciSequence() {
  let x = 0,
    y = 1
  for (;;) {
    yield y
    ;[x, y] = [y, x + y] // Note: destructuring assignment
  }
}

function fibonacci(n) {
  for (let f of fibonacciSequence()) {
    if (n-- <= 0) return f
  }
}
const x = fibonacci(20)
x

// async generator
function elapsedTimes(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function* clock(interval, max = Infinity) {
  for (let count = 1; count <= max; count++) {
    await elapsedTimes(interval)
    yield count
  }
}

async function test() {
  for await (let tick of clock(300, 10)) {
    console.log(tick)
  }
}

const xxx = test()
