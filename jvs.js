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

Book.prototype.changeReadStatus = function () {
    if (this.read == "Yes")
        this.read = "No";
    else if (this.read == "No")
        this.read = "Yes"
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
    container.textContent = '';
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        const display = document.createElement("div");
        const deleteBtn = document.createElement("button");
        const readBtn = document.createElement("button");
        readBtn.innerText = "Read";
        readBtn.addEventListener('click', () => {
            book.changeReadStatus();
            display.innerHTML = book.info();
        });
        deleteBtn.innerText = "Delete Book";
        deleteBtn.dataset.title = book.title;
        deleteBtn.addEventListener('click', deleteBook);
        card.classList.add('card');
        display.innerHTML = book.info();
        container.append(card);
        card.append(display);
        card.append(deleteBtn);
        card.append(readBtn);
    })
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
    displayBooks();
    e.preventDefault();
    favDialog.close();
    form.reset();
});


displayBooks();