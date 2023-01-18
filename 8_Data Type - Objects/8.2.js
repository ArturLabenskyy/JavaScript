const myCountry = {
    country: `Israel`,
    capital: `Jerusalem`,
    language: `Hebrew`,
    population: `10 millions`,
    neighbors: [`Lebanon`, `Surya`, `Jordan`, `Egypt`],

    describe() {
        console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, 
        they have ${this.neighbors.length} neighbors countries and a capital called ${this.capital}`);
    },
    isIsland() {
        this.neighbors.length === 0
            ? (myCountry.isIsland = true)
            : (myCountry.isIsland = false);
        this.isIsland
            ? console.log(`it's island`)
            : console.log(`NOT a island`);
    },
};

myCountry.describe();
myCountry.isIsland();
