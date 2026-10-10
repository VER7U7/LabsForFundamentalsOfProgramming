export function average(a, b) {
    return (a + b) / 2;
}

export function square(x) {
    return x * x;
}

export function cube(x) {
    return x * x * x;
}

export function calculate() {
    let result = [];
    for (let x = 0; x < 10; x++) {
        result.push(average(square(x), cube(x)));
    }
    return result;
}
