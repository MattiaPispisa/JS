import l from "./log"

type ObserverType<K> = (data: K) => any

class Observable<K> {
  private observers: ObserverType<K>[]

  constructor() {
    this.observers = []
  }

  subscribe(func: ObserverType<K>) {
    this.observers.push(func)
  }

  unsubscribe(func: ObserverType<K>) {
    this.observers = this.observers.filter((observer) => observer !== func)
  }

  notify(data: K) {
    this.observers.forEach((observer) => observer(data))
  }
}

export default Observable

// * TEST
const observable = new Observable<string>()

function handleClick() {
  observable.notify("User click")
}

function handleToggle() {
  observable.notify("User toggle")
}

function logger(data:string) {
  l(`${Date.now()} ${data}`)
}

observable.subscribe(logger)


