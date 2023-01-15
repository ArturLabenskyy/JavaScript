function steps(n) {
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            let arr = [];
            for (let j = 0; j < n; j++) {
                if (j <= i) {
                    arr.push(`#`);
                } else {
                    arr.push(` `);
                }
            }
            let arr1 = arr.toString();
            console.log(arr1.replaceAll(`,`, ``));
        }
    } else {
        console.log(`There are positive integer needed as argument`);
    }
}

steps(10);
