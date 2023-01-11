const book = {
    name: `Dark Tower`,
    author: `Steven King`,
    publishingYear: `2000`,
    genre: `fantasy`,
    numberOfPages: 500,
};

const aboutBook = (book) => {
    console.log(
        `The book ${book.name} was written by ${book.author} in the year ${book.publishingYear}`
    );
};

aboutBook(book);
