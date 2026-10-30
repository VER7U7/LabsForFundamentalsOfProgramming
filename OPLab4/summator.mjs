

export function sum1(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

export function sum2(...args) {
    let result = 0;
    for (let i of args) {
        result += i;
    }
    return result;
}

export function sum3(...args) {
    let data = { result: 0, pos: 0 };
    while (data.pos < args.length) {
        data.result += args[data.pos];
        data.pos++;
    }
    return data.result;
}

export function sum4(...args) {
    let data = { result: 0, pos: 0 };
    do {
        data.result += args[data.pos];
        data.pos++;
    } while (data.pos < args.length);
    return data.result;
}

export function sum5(...args) {
    return args.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
}
