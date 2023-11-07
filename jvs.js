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

addBookToLibrary("The Hobbit", "J.R.R", "255", "No");
addBookToLibrary("The Lord Of The Rings", "J.R.R", "655", "No");
addBookToLibrary("A Game Of Thrones", "George R.R. Martin", "698", "Yes");
addBookToLibrary("A Clash OF Kings", "George R.R. Martin", "698", "Yes");
addBookToLibrary("A Song Of Ice And Fire", "George R.R. Martin", "698", "Yes");

function displayBooks() {

    const container = document.querySelector(".container");
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete Book";
        deleteBtn.dataset.title = book.title;
        deleteBtn.addEventListener('click', deleteBook);
        card.classList.add('card');
        card.innerHTML = book.info();
        container.append(card);
        card.append(deleteBtn);
    })
}


function displayBook() {

    const container = document.querySelector(".container");
    const card = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const index = myLibrary.length - 1;
    deleteBtn.innerText = "Delete Book";
    deleteBtn.dataset.title = myLibrary[index].title;
    deleteBtn.addEventListener('click', deleteBook);
    card.classList.add('card');
    card.innerHTML = myLibrary[index].info();
    container.append(card);
    card.append(deleteBtn);
}

function deleteBook() {

    myLibrary.splice(this.dataset.title, 1);
    this.parentElement.remove();

}

showButton.addEventListener("click", () => {
    favDialog.showModal();
});

confirmBtn.addEventListener("click", (e) => {
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    displayBook();
    e.preventDefault();
    favDialog.close();
    form.reset();
});


displayBooks();