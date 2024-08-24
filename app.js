const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    const title = prompt("What's the name of the book?");
    const author = prompt("Who wrote it?");
    const pages = prompt("How many pages is it?");
    const hasRead = prompt("Have you read it?");

    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}

console.log(myLibrary);