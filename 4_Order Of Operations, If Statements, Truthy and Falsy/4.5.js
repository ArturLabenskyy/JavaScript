function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 400 === 0) {
            console.log(`It is indeed a leap year.`);
            return;
        } else if (year % 100 === 0) {
            console.log(`This is not a leap year.`);
            return;
        }
        console.log(`Ìt is indeed a leap year.`);
    } else {
        console.log(`This is not a leap year.`);
    }
}
