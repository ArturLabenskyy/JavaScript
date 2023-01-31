function Pokeman(pokemonName, pokemonType, pokemonAttackList) {
    this.pokemonName = pokemonName;
    this.pokemonType = pokemonType;
    this.pokemonAttackList = pokemonAttackList;
}

let pikachu = new Pokeman(`Pikachu`, `electricity`, [
    `shock`,
    `electric wave`,
    `sparks`,
]);
let squirtle = new Pokeman(`Squirtle`, `water`, [
    `water ball`,
    `aqua blast`,
    `bauble rush`,
]);
let psyduck = new Pokeman(`Psyduck`, `psycho`, [
    `psy scream`,
    `duck face`,
    `psychosocial`,
]);

Pokeman.prototype.callPokemon = function () {
    console.log(`I choose you, ${this.pokemonName}`);
};

Pokeman.prototype.attack = function (att) {
    console.log(this.pokemonAttackList[att]);
};

pikachu.callPokemon();
pikachu.attack(1);
