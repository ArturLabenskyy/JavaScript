function countryToLiveIn(language, isIsland, population, country) {
    if (language == `English` && isIsland && population < 50) {
        console.log(`You should leave in ${country}.`);
    } else {
        console.log(`${country} does not meet your criteria`);
    }
}

countryToLiveIn(`English`, true, 50, `Australia`);
