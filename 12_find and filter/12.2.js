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
    const candy = candyStore.candies.filter((candies) => candies.id === id);
    console.log(candy);
    return candy;
}
// getCandy(candyStore, `as12f`);

//22222222222222222222222222222222222222222222
function getPrice(candyStore, id) {
    const price = candyStore.candies.filter((candies) => {
        if (candies.id === id) {
            return candies.includes(price, id);
        }
    });
    console.log(price);
    return price;
}
