// --------------1-------------------
// function printString(str) {
//     console.log(str);
// }

// function isString(str, callback) {
//     if (typeof str === `string`) {
//         callback(str);
//     }
// }

// isString(`it a string`, printString);
// ---------------------------------------------------

//----------------2 + 3--------------------------
function dashes(str) {
    let newStr = str.replaceAll(` `, `-`);
    console.log(newStr);
    return newStr;
}

function firstWordToUpperCase(str, callback) {
    // let arr = str.split(` `);
    str = str.split(` `);
    str[0] = str[0].toUpperCase();
    str = str.toString();
    str = str.replaceAll(`,`, ` `);
    callback(str.replaceAll(`,`, ` `));
}

let string1 = `hello world ! ! !`;
firstWordToUpperCase(string1, dashes);
//----------------2-------------
