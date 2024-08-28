const myLibrary = [];

const newBookButton = document.querySelector('body > input');

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}
Book.prototype.changeReadStatus = function(target) {
    if (this.hasRead === "no") {
        this.hasRead = "yes";
    } else {
        this.hasRead = "no";
    }
}

const bookContainer = document.querySelector("#book-container");

bookContainer.addEventListener("click", (e) => {
    let target = e.target;
    let card = target.parentElement;

    switch (target.value) {
        case "Remove":
            removeBookFromLibrary(target.parentElement);
            break;
        case "Change Read Status":
            console.log("You clicked the read status button");
            changeReadStatus(card);
            break;
        default:
            console.log("Unfamiliar button pressed");
            console.log(myLibrary);
    }
    
});

let count = 1;

function addBookToLibrary() {
    const title = prompt("What's the name of the book?");
    const author = prompt("Who wrote it?");
    const pages = prompt("How many pages is it?");
    const hasRead = prompt("Have you read it?");

    const newBook = new Book(title, author, pages, hasRead);
    newBook.id = count++;
    myLibrary.push(newBook);
    bookContainer.appendChild(createCard(title, author, pages, hasRead, newBook.id, newBook));
}

function removeBookFromLibrary(target) {
    let indexToRemove = -1, searchTerm = target.dataset.indexNumber;

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id == searchTerm) {
            indexToRemove = i;
            break;
        }
    }

    myLibrary.splice(indexToRemove, 1);
    target.remove();
}

function createCard(title, author, pages, hasRead, id, book) {    
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

    const changeReadStatusButton = document.createElement('input');
    changeReadStatusButton.type = "button";
    changeReadStatusButton.value = "Change Read Status";

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardHasRead);
    card.appendChild(deleteButton);
    card.appendChild(changeReadStatusButton);

    card.dataset.indexNumber = id;
    card.objectData = book;

    return card;
}

newBookButton.addEventListener("click", () => {
    addBookToLibrary();
});

function changeReadStatus(target) {
    let node = target.childNodes[3].childNodes[1];

    if (node.nodeValue == "no") {
        node.nodeValue = "yes";
    } else {
        node.nodeValue = "no";
    }

    target.objectData.changeReadStatus();
    
}
