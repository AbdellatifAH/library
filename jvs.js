const myLibrary = [];
const form = document.querySelector("form");
const showButton = document.querySelector("#addBook");
const favDialog = document.querySelector("#favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const title = favDialog.querySelector("#title");
const author = favDialog.querySelector("#author");
const pages = favDialog.querySelector("#pages");
const read = favDialog.querySelector("#read");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return `<span class="bold">Book Title:</span> ${this.title}<br><span class="bold">Author:</span> ${this.author}<br><span class="bold">Number of Pages:</span> ${this.pages}<br><span class="bold">Read:</span> ${this.read}`
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

myLibrary.push(new Book("The Hobbit", "J.R.R", "255", "No"));
myLibrary.push(new Book("The Lord Of The Rings", "J.R.R", "655", "No"));
myLibrary.push(new Book("A Game Of Thrones", "George R.R. Martin", "698", "Yes"));
myLibrary.push(new Book("A Clash OF Kings", "George R.R. Martin", "698", "Yes"));
myLibrary.push(new Book("A Song Of Ice And Fire", "George R.R. Martin", "698", "Yes"));

function displayBooks() {

    const container = document.querySelector(".container");
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        card.classList.add('card');
        card.innerHTML = myLibrary[i].info();
        container.append(card);
    }
}

function displayBook() {

    const container = document.querySelector(".container");
    const card = document.createElement("div");
    card.classList.add('card');
    card.innerHTML = myLibrary[myLibrary.length - 1].info();
    container.append(card);
}

showButton.addEventListener("click", () => {
    favDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    displayBook();
    event.preventDefault();
    favDialog.close();
    form.reset();
});

displayBooks();
