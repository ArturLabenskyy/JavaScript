function noDuplicates(arr) {
    const noDuplicatesArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (noDuplicatesArray.indexOf(arr[i]) === -1) {
            noDuplicatesArray.push(arr[i]);
        }
    }
    return noDuplicatesArray;
}

let arr = [1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 6, 1, 2, 4, 10, 11];
let noDuplicatesArr = noDuplicates(arr);
console.log(noDuplicatesArr);
