

export function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

export function rangeOdd(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0)
            array.push(i);
    }
    return array;
}
