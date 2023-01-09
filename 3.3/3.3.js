function percentageOfWorld1(population) {
    let perOfWorld1 = population / 7900 * 100;
    return perOfWorld1;
}

let percentageOfWorld2 = population => {
    let perOfWorld2 = population / 7900 * 100;
    return perOfWorld2;
}

console.log(percentageOfWorld1(10));
console.log(percentageOfWorld1(100));
console.log(percentageOfWorld1(1000));

console.log(percentageOfWorld2(10));
console.log(percentageOfWorld2(100));
console.log(percentageOfWorld2(1000));