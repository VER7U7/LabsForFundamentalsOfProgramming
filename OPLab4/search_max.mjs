
export function max(arr) {
    let result = 0;
    for (let m of arr) {
        for (let i of m) {
            if (i > result)
                result = i;
        }
    }
    return result;
}
