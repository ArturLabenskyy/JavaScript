const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function arrayCompare(arr1, arr2) {
    let sameItems = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                sameItems.push(arr2[j]);
            }
        }
    }
    if (sameItems.length > 0) {
        console.log(sameItems);
    } else {
        console.log(`All different!!!`);
        return false;
    }
}

arrayCompare(food, food1);
