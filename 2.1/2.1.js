function countryInfo(country, population, capital){
  return (`${country} has ${population} million people and it's capital city is ${capital}`);
}

let israel = countryInfo("Israel", 10, "Jerusalem");
let spain = countryInfo("Spain", 30, "Madrid");
let china = countryInfo("China", 1500, "Beijing");

console.log(israel);
console.log(spain);
console.log(china);
