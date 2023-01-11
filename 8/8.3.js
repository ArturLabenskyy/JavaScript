const book1 = {
    name: `Hobbit`,
    author: `J. R. Tolkien`,
    year: 1937,
};

const book2 = {
    name: `it`,
    author: `Steven King`,
    year: 1986,
};

const bookUtils = {
    getFirstPublished(book1, book2) {
        return book1.year <= book2.year ? book1 : book2;
    },

    setNewEdition(book, editionYear) {
        book.latestEdition = editionYear;
    },

    setLanguage(book, language) {
        book.language = language;
    },

    setTranslation(book, language, translator) {
        book.translation = { translator: translator, language: language };
    },

    setPublisher(book, name, location) {
        book.publisher = { name: name, location: location };
    },

    isSamePublisher(book1, book2) {
        book1.publisher === book2.publisher
            ? console.log(`same publisher`)
            : console.log(`NOT the same publisher`);
    },
};

const book3 = bookUtils.getFirstPublished(book1, book2);
console.log(book3);
