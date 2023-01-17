const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a.1. Sort the array of strings from descending to ascending order.
const descendingSort = foods
    .slice()
    .sort((a, b) => b.charCodeAt(b) - a.charCodeAt(a));
console.log(descendingSort);

// a.2. Sort the array of strings from ascending to descending order.
const ascendingSort = foods
    .slice()
    .sort((a, b) => a.charCodeAt(a) - b.charCodeAt(b));
console.log(ascendingSort);
//
//
//
//
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "Hummus",
    "pizza with extra pineapple",
];

// b.1. Sort the array of strings from descending to ascending order.
const descendingSort1 = foodsWithUpperCase
    .slice()
    .sort(
        (a, b) => b.toLowerCase().charCodeAt(b) - a.toLowerCase().charCodeAt(a)
    );
console.log(descendingSort1);

// b.2. Sort the array of strings from ascending to descending order.
const ascendingSort1 = foodsWithUpperCase
    .slice()
    .sort(
        (a, b) => a.toLowerCase().charCodeAt(a) - b.toLowerCase().charCodeAt(b)
    );
console.log(ascendingSort1);
//
//
//
//
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

// c.1. Sort the array of strings from the longest word to the shortest word only using the sort function
const lengthSort = words.slice().sort((a, b) => b.length - a.length);
console.log(lengthSort);
