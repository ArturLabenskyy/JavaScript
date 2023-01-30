// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?
// const myObj = {
// name: "Timmy",
// greet: () => {
// console.log(`Hello ${this.name}`);
// },
// };
// myObj.greet();

//Fixed
const myObj = {
    name: "Timmy",
    greet() {
        // changed arrow function to regular
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();

// Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
// console.log(this);
// };

// Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
// console.log(this);
// };
// myFuncArrow();

// Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?
// document.querySelector(".element").addEventListener(() => {
// console.log(this);
// });
