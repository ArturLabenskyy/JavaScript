// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        sum += arr2[j];
    }
    return sum;
}

console.log(getSum([1, 2, 3], [5, 66, 23]));
