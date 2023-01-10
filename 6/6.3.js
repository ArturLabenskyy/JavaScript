function lettersNumber(arr) {
    const arrOfNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        arrOfNumbers.push(arr[i].length);
    }
    return arrOfNumbers;
}

let arr = [`1`, `12`, `123`, `1234`];
let newArr = lettersNumber(arr);
console.log(newArr);
