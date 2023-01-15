function steps(n) {
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j <= i) {
                    console.log(`#`);
                } else {
                    console.log(` `);
                }
            }
        }
    } else {
        console.log(`There are positive integer needed as argument`);
    }
}

steps(5);
