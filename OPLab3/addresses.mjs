
export function addressToInteger(address) {
    if (typeof (address) !== "string") {
        console.log("Not supported argument");
        return -1;
    }
    address = address.replace(" ", "");
    const array = address.split(".");

    for (let ch in array)
        array[ch] = parseInt(array[ch]);

    let result = 0;

    for (let i = 0; i < 4; i++) {
        result += array[i] << 8 * (3 - i);
    }
    return result;
}
