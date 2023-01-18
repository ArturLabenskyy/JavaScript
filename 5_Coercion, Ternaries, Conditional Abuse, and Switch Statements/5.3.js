function passwordValidIfElse(password) {
    if (password.length >= 7) {
        console.log(`Strong password`);
    } else {
        console.log(`Weak password`);
    }
}

function passwordValidTernary(password) {
    password.length < 7
        ? console.log(`Weak password`)
        : console.log(`Strong password`);
}

function advancedPassword(password) {
    if (password.length > 7 && /[A-Z]/.test(password)) {
        console.log(`Very strong password`);
    } else if (password.length > 7) {
        console.log(`Strong password`);
    } else {
        console.log(`Weak password`);
    }
}
