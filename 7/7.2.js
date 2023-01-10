const string = `The more you know, the more you know that you don't know`;
console.log(string.lastIndexOf(`you`));

const searchTerm = "you";
const indexOfFirst = string.indexOf(searchTerm);
const stringArr = string.split(` `);
let searchTermCounter = 0;
for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === `you`) {
        searchTermCounter++;
    }
}
console.log(searchTermCounter);
console.log(
    `Last index of 'you' is : ${string.indexOf(
        searchTerm,
        indexOfFirst + searchTermCounter
    )}`
);
