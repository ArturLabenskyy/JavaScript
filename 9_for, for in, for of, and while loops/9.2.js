function lettersNumber(arr) {
    const arrOfNumbers = [];
    let i = 0;
    while (i < arr.length) {
        arrOfNumbers.push(arr[i].length);
        i++;
    }
    return arrOfNumbers;
}

let arr = [`11`, `12`, `1231`, `1234`];
let newArr = lettersNumber(arr);
console.log(newArr);
