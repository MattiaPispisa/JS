import l from './log'

/// * FUNCTIONS
// * high order
function not(f) {
  return function(...args) {
    let result = f.apply(this,args)
    return !result
  }
}
const even = x => x%2 === 0
const odd = not(even)
const result = [1,1,3,5,5].every(odd)
l(result)

// * rest parameters
function text(...args) {
  l(args)
}

text(1,2,3)

// function that cache the results
function factorial(n) {
  if (Number.isInteger(n) && n > 0) {
    if (!(n in factorial)) {
      factorial[n] = n * factorial(n-1)
    }
    return factorial[n]
  } else {
    return NaN
  }
}
factorial[1] = 1
l(factorial(6))
l(factorial[5]) // cached

// memoization
function memoize(f) {
  const cache = new Map()
  return function(...args) {
    let key = Symbol.for(args.length + args.join("+"))
    if (cache.has(key)) {
      l("no calc computed")
      return cache.get(key)
    } else {
      let result = f.apply(this,args)
      cache.set(key,result)
      return result
    }
  }
}
const evenMemo = memoize(even)
l(evenMemo(2))
l(evenMemo(2))