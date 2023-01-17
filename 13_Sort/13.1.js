const numbers = [1, -5, 666, 2, 400, 11];

//1. Sort the array of numbers from descending to ascending order.
const descendingSort = numbers.slice().sort((a, b) => b - a);
console.log(descendingSort);

// 2. Sort the array of numbers from ascending to descending order.
const ascendingSort = numbers.slice().sort((a, b) => a - b);
console.log(ascendingSort);
