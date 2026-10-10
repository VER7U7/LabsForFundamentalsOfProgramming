
export function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateKey(length, characters) {
    let result = "";
    for (let i = 0; i <= length; i++) {
        let char = characters[random(0, characters.length)];
        result += char;
    }
    return result;
}
