const a = [23, false, -7n, true, "Vladimir", {age: 11}];

a.sort((x, y) => {
    const typeX = typeof x;
    const typeY = typeof y;

    if (typeX !== typeY) {
        return typeX.localeCompare(typeY);
    }

    if (x === "object") {
        return x.age - y.age;
    }

    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    
    return 0;
});

console.log(a);