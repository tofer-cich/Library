const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

const bookContainer = document.querySelector("#book-container");

function addBookToLibrary() {
    const title = prompt("What's the name of the book?");
    const author = prompt("Who wrote it?");
    const pages = prompt("How many pages is it?");
    const hasRead = prompt("Have you read it?");

    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    bookContainer.appendChild(createCard(title, author, pages, hasRead));
}

function createCard(title, author, pages, hasRead) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardAuthor = document.createElement('p');
    const cardAuthorHead = document.createElement('span');
    cardAuthorHead.textContent = "Author: ";
    cardAuthor.appendChild(cardAuthorHead);
    cardAuthor.textContent += author;

    card.appendChild(cardAuthor);

    return card;
}

addBookToLibrary();

console.log(myLibrary);