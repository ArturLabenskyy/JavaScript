const characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const sw = document.querySelector(`.star-wars`);
const tb = document.querySelector(`tbody`);
const swArr = [];

characters.forEach((el) => {
    getStarWarsCharacter(el);
});

async function getStarWarsCharacter(num) {
    let character = {};
    try {
        const res = await fetch(`https://swapi.dev/api/people/${num}`);
        const data = await res.json();
        character.name = data.name;
        character.hair = data.hair_color;
        character.height = data.height;
        getStarWarsPlanet(data.homeworld, character);
    } catch (error) {
        console.log(error);
    }
}

async function getStarWarsPlanet(link, character) {
    try {
        const res = await fetch(link);
        const data = await res.json();
        character.planet = data.name;
        character.population = data.population;
        swArr.push(character);
        addToTable(character);
    } catch (error) {
        console.log(error);
    }
}

function addToTable(obj) {
    const child = document.createElement(`tr`);
    for (key in obj) {
        const child1 = document.createElement(`td`);
        child1.textContent = obj[key];
        child.appendChild(child1);
        console.log(child);
        tb.appendChild(child);
    }
}
