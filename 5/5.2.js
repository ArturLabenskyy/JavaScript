function languageTop(language) {
    switch (language) {
        case `mandarin`:
            console.log(`MOST number of native speakers!`);
            break;
        case `Spanish`:
            console.log(`2nd place in a number of native speakers`);
            break;
        case `English`:
            console.log(`3rd place`);
            break;
        case `Hindi`:
            console.log(`Number 4`);
            break;
        case `Arabic`:
            console.log(`5th most spoken language`);
            break;
        case `Hebrew`:
        case `Ukrainian`:
        case `French`:
        case `German`:
            console.log(`Not in the top 5`);
    }
}

languageTop(`Spanish`);
languageTop(`Hebrew`);
languageTop(`mandarin`);
languageTop(`Arabic`);
