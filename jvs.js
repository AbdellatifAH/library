const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    if (this.read)
        return `${this.title} by ${this.author}, ${this.pages}, read`
    else
        return `${this.title} by ${this.author}, ${this.pages}, not read yet`

}

function addBookToLibrary() {
    title = prompt('Enter Book Title');
    author = prompt('Enter Book Author');
    pages = prompt('Enter Book Page Numbers');
    read = prompt('Have You Read The Book ?');
    myLibrary.push(new Book(title, author, pages, read))
}

myLibrary.push(new Book("The Hobbit", "J.R.R", "255", false));
myLibrary.push(new Book("The Lord Of The Rings", "J.R.R", "655", false));
myLibrary.push(new Book("A Game Of Thrones", "George R.R. Martin", "698", true));

