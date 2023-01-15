function printString(str) {
    console.log(str);
}

function isString(str, callback) {
    if (typeof str === `string`) {
        callback(str);
    }
}

isString(`it a string`, printString);
