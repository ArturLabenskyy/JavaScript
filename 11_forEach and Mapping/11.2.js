const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const strings = [`aaa`, `bbbb`, `cccc`, `ddddd`, `eeeee`, `fff`, `gggggg`];
// 111111111111111111111111111111111111111111111
function doubles(arr) {
    const doublesArray = arr.map(function (num) {
        return num * 2;
    });
    console.log(doublesArray);
    return doublesArray;
}

// doubles(numbers);
// 22222222222222222222222222
function onlyEvenValues(arr) {
    const onlyEven = [];
    arr.forEach(function (num) {
        if (num % 2 === 0) {
            onlyEven.push(num);
        }
    });
    console.log(onlyEven);
    return onlyEven;
}
// onlyEvenValues(numbers);

//3333333333333333333333333333333333
function showFirstAndLast(arr) {
    const firstLast = arr.map(function (num) {
        if (arr.indexOf(num) === 0 || arr.indexOf(num) === arr.length - 1) {
            return num;
        } else {
            arr.splice(num, 1);
        }
    });
    console.log(firstLast);
    return firstLast;
}
showFirstAndLast(strings);

//4444444444444444444444444444444444
function vowelCount(str) {
    str = str.toLowerCase();
    str = Array.from(str);
    const vowels = { a: 0, e: 0, u: 0, o: 0, i: 0 };
    str.forEach(function (letter) {
        letter in vowels ? (vowels[letter] += 1) : ``;
    });
    console.log(vowels);
    return vowels;
}
vowelCount(`Hello world! How are you?`);

//555555555555555555555555555555555555555555555
function capitalize(str) {
    str = str.split(``);
    let capitalString = str.map(function (letter) {
        return letter.toUpperCase();
    });
    capitalString = capitalString.toString();
    capitalString = capitalString.replaceAll(`,`, ``);
    console.log(capitalString);
}
capitalize(`hello`);

//66666666666666666666666666666666
function shiftLetters(str) {
    str = str.split(``);
    let shiftStr = str.map(function (letter) {
        return String.fromCharCode(letter.charCodeAt(letter) - 1);
    });
    shiftStr = shiftStr.toString();
    shiftStr = shiftStr.replaceAll(`,`, ``);
    console.log(shiftStr);
    return shiftStr;
}
shiftLetters(`bcd`);

//77777777777777777777777777777777777777
