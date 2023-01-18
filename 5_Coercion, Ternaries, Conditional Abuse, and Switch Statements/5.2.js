function languageTop(language) {
    switch (language) {
        case `mandarin`:
            console.log(`${language}: MOST number of native speakers!`);
            break;
        case `Spanish`:
            console.log(
                `${language}: 2nd place in a number of native speakers`
            );
            break;
        case `English`:
            console.log(`${language}: 3rd place`);
            break;
        case `Hindi`:
            console.log(`${language}: Number 4`);
            break;
        case `Arabic`:
            console.log(`${language}: 5th most spoken language`);
            break;
        default:
            console.log(`${language}: Not in the top 5`);
    }
}

languageTop(`Spanish`);
languageTop(`Hebrew`);
languageTop(`mandarin`);
languageTop(`Arabic`);
