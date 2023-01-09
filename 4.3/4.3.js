let teamJohnScore = (game1, game2, game3) => {
    return (game1 + game2 + game3) / 3;
}

let teamMikeScore = (game1, game2, game3) => {
    return (game1 + game2 + game3) / 3;
}

let avgJohn = teamJohnScore(200, 200, 200);
let avgMike = teamMikeScore(200, 200, 200);

if (avgJohn > avgMike) {
    console.log(`John's team won with ${avgJohn} average score!!!`);
} else if (avgMike > avgJohn) {
    console.log(`Mike's team won with ${avgMike} average score!!!`);
} else if (avgJohn === avgMike) {
    console.log(`We don't have a winner - there are a draw!!!`)
}

