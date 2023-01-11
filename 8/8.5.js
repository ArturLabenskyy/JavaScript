function objectSwapValues(object) {
    const swappedObject = {};
    for (key in object) {
        let swappedKey = object[key];
        let swappedValue = key;
        swappedObject[swappedKey] = swappedValue;
    }
    return swappedObject;
}

const obj = {
    a: 1,
    b: 2,
    c: 3,
};

swappedObj = objectSwapValues(obj);
console.log(obj);
console.log(swappedObj);
