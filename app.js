const myLibrary = [];

const newBookButton = document.querySelector('body > input');

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

const bookContainer = document.querySelector("#book-container");

bookContainer.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.value) {
        case "Remove":
            removeBookFromLibrary();
            break;
        case "Read Status":
            console.log("You clicked the read status button");
            break;
        default:
            console.log("Unfamiliar button pressed");
    }
    
});

function addBookToLibrary() {
    const title = prompt("What's the name of the book?");
    const author = prompt("Who wrote it?");
    const pages = prompt("How many pages is it?");
    const hasRead = prompt("Have you read it?");

    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    bookContainer.appendChild(createCard(title, author, pages, hasRead));
}

function removeBookFromLibrary() {
    console.log("removeBookFromLibrary");
}

function createCard(title, author, pages, hasRead) {    
    const card = document.createElement('div');
    card.classList.add('card');

    //title
    const cardTitle = document.createElement('p');
    const cardTitleHead = document.createElement('span');
    cardTitleHead.textContent = "Title: ";
    cardTitle.appendChild(cardTitleHead);
    cardTitle.appendChild(document.createTextNode(title));

    //author
    const cardAuthor = document.createElement('p');
    const cardAuthorHead = document.createElement('span');
    cardAuthorHead.textContent = "Author: ";
    cardAuthor.appendChild(cardAuthorHead);
    cardAuthor.appendChild(document.createTextNode(author));

    //pages
    const cardPages = document.createElement('p');
    const cardPagesHead = document.createElement('span');
    cardPagesHead.textContent = "Pages: ";
    cardPages.appendChild(cardPagesHead);
    cardPages.appendChild(document.createTextNode(pages));

    //hasRead
    const cardHasRead = document.createElement('p');
    const cardHasReadTitle = document.createElement('span');
    cardHasReadTitle.textContent = "Has been read: ";
    cardHasRead.appendChild(cardHasReadTitle);
    cardHasRead.appendChild(document.createTextNode(hasRead));

    //delete button
    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Remove";

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardHasRead);
    card.appendChild(deleteButton);

    card.dataset.indexNumber = myLibrary.length;
    console.log(card.dataset.indexNumber);

    return card;
}

newBookButton.addEventListener("click", () => {
    addBookToLibrary();
});
