import l from "./log"

// * Un oggetto che gestisce la comunicazione tra molti componenti
class ChatRoom {
  logMessage(user:User, message:any) {
    const time = new Date()
    const sender = user.name

    l(`${time} [${sender}]: ${message}`)
  }
}

class User {
  _name: string
  chatroom: ChatRoom
  constructor(name: string, chatroom: ChatRoom) {
    this._name = name
    this.chatroom = chatroom
  }

  get name() {
    return this._name
  }

  send(message: any) {
    this.chatroom.logMessage(this, message)
  }
}

const chatroom = new ChatRoom()

const user1 = new User("John",chatroom)
const user2 = new User("Jane",chatroom)

user1.send("Hi there")
user2.send("Yo")