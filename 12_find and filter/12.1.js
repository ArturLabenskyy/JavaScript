const library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true,
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true,
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];

function bookYouCanRead(library) {
    const youCanRead = library.filter((book) => book.readingStatus);
    console.log(youCanRead);
    return youCanRead;
}

bookYouCanRead(library);
