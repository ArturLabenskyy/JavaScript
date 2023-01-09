function boom(n) {
    for(let i = 1; i <= n; i++) {
        let textNum = i.toString();
        if (i % 7 === 0 && textNum.indexOf(7) != -1) {
            console.log(`BOOM-BOOM`);
        } else if (i % 7 === 0) {
            console.log(`BOOM`);
        } else {
            console.log(i);
        }
    }
}
