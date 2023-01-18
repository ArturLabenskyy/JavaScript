const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const lettersCount = {};

for (i of array) {
    let word = i.replaceAll(` `, ``);
    for (j of word.toLowerCase()) {
        if (j in lettersCount) {
            lettersCount[j] += 1;
        } else {
            lettersCount[j] = 1;
        }
    }
}

console.log(lettersCount);
