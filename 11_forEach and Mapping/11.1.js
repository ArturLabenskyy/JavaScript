let movies = [
    { Id: 1, Name: `Avatar`, Rating: 9 },
    { Id: 2, Name: `Avengers`, Rating: 8 },
    { Id: 3, Name: `Scary Movie`, Rating: 5 },
];

let arr = [];
movies.forEach(function (movie) {
    arr.push(movie.Id, movie.Name);
});

console.log(arr);
