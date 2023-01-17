// Write the following functions using the reduce built-in function.
const nums = [1, 2, 3, 4, 5];
// 1. max
const maxNumber = nums.reduce((maxNum, currentNum) => {
    return Math.max(maxNum, currentNum);
});
console.log(maxNumber);

// 2. the sum of even numbers
const evenSum = nums.reduce((sum, currentNum) => {
    if (sum % 2 === 0 && currentNum % 2 === 0) {
        return sum + currentNum;
    } else if (sum % 2 === 0) {
        return sum;
    } else if (currentNum % 2 === 0) {
        return currentNum;
    }
});
console.log(evenSum);

// 3. average
const average = nums.reduce((sum, currentNum) => {
    if (nums.indexOf(currentNum) === nums.length - 1) {
        return (sum + currentNum) / nums.length;
    } else {
        return sum + currentNum;
    }
});
console.log(average);
