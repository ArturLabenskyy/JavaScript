const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

function names(data) {
    const allNames = data.map(function (key) {
        return key.name;
    });
    console.log(allNames);
    return allNames;
}
names(data);

function before90(data) {
    const bornBefore90 = [];
    data.forEach(function (key) {
        let year = key.birthday.substr(-4);
        year = parseInt(year);
        if (year < 1990) {
            bornBefore90.push(year);
        }
    });
    console.log(bornBefore90);
    return bornBefore90;
}
before90(data);

function meals(data) {
    let meals = {};
    data.forEach(function (arr) {
        let foods = arr.favoriteFoods;
        for (key in foods) {
            for (let i of foods[key]) {
                i in meals ? (meals[i] += 1) : (meals[i] = 1);
            }
        }
    });
    console.log(meals);
}

meals(data);
