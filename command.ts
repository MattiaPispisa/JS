import l from "./log"

// * permette di disaccoppiare i metodi dall'oggetto che esegue l'operazione
// * si usa raramente e solitamente aggiunge boilerplate inutile

class Command {
  execute: (orders: string[], ...args: any[]) => void
  constructor(execute: (orders: string[], ...args: any[]) => void) {
    this.execute = execute
  }
}

class OrderManager {
  private orders: string[]
  constructor() {
    this.orders = []
  }

  execute(command: Command, ...args: any[]) {
    return command.execute(this.orders, ...args)
  }
}

function PlaceOrderCommand(order: any, id: string) {
  return new Command((orders) => {
    orders.push(id)
    l(`You have successfully ordered ${order} (${id})`)
  })
}

function CancelOrderCommand(id: string) {
  return new Command((orders) => {
    orders = orders.filter((order) => order !== id)
  })
}

const manager = new OrderManager()

manager.execute(PlaceOrderCommand("123", "Hi"))
manager.execute(CancelOrderCommand("123"))
