// old way to create class

// method that return a new range obj
function range(from, to) {
  let r = Object.create(range.methods);
  r.from = from;
  r.to = to;
  return r;
}

// This prototype object defines methods inherited by all range objects.
range.methods = {
  
  includes(x) { return this.from <= x && x <= this.to; },

  *[Symbol.iterator]() {
      for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },

  toString() { return "(" + this.from + "..." + this.to + ")"; }
};

const r1 = range(1,3)

// using constructor
function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  includes: function(x) { return this.from <= x && x <= this.to; },

  [Symbol.iterator]: function*() {
      for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },

  toString: function() { return "(" + this.from + "..." + this.to + ")"; }
};

const r2 = new Range(1,3)

// using class keyword
class Range {

  constructor(from, to) {
      this.from = from;
      this.to = to;
  }
  includes(x) { return this.from <= x && x <= this.to; }

  *[Symbol.iterator]() {
      for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString() { return `(${this.from}...${this.to})`; }
}