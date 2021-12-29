// riutilizzo istanze di oggetti identici (tanto carino quanto inutile)
// Ho molti oggetti e molti di questi sono simili/uguali --> Flyweight!

// structures
class Book {
  title: string
  author: string
  isbn: string

  constructor(title: string, author: string, isbn: string) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class LibraryBook extends Book {
  availability: number
  sales: number

  constructor(title: string, author: string, isbn: string, availability: number, sales: number) {
    super(title, author, isbn)
    this.availability = availability
    this.sales = sales
  }
}

// * Flyweight

const books = new Map<string, Book>()
const createBook = (title: string, author: string, isbn: string) => {
  const bookInMemory = books.get(isbn)

  if (bookInMemory) {
    // non è necessario crearlo
    return bookInMemory
  }

  const newBook = new Book(title, author, isbn)
  books.set(isbn, newBook)
  return newBook
}

// * example of use

const bookList: LibraryBook[] = []

const addLibraryBook = (title: string, author: string, isbn: string, availability: number, sales: number) => {
  const book: LibraryBook = {
    ...createBook(title, author, isbn), // reuse of book
    availability,
    sales,
  }
  bookList.push(book)
  return book
}
