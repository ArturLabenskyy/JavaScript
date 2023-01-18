const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2,
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4,
        },
    ],
    cashRegister: 200,
};

//1111111111111111111111111111
function getCandy(candyStore, id) {
    const candy = candyStore.candies.filter((candies) => candies.id === id)[0];
    return candy;
}
// getCandy(candyStore, `as12f`);

//22222222222222222222222222222222222222222222
function getPrice(candyStore, id) {
    const candyId = candyStore.candies.filter(
        (candies) => candies.id === id
    )[0];
    return candyId.price;
}
// getPrice(candyStore, `as12f`);

//33333333333333333333333333333333333333333333
function addCandy(candyStore, id, name, price) {
    let newCandy = {
        name: name,
        id: id,
        price: price,
        amount: 1,
    };
    candyStore.candies.push(newCandy);
    // console.log(candyStore.candies);
}

// addCandy(candyStore, `1a1a`, `milkyway`, 5);

//444444444444444444444444444444444444444444444444444444444
function buy(candyStore, id) {
    const candy = getCandy(candyStore, id);
    const candyPrice = candy.price;
    candy.amount -= 1;
    candyStore.cashRegister += candyPrice;
}

console.log(candyStore);
buy(candyStore, `5hd7y`);
console.log(candyStore);
