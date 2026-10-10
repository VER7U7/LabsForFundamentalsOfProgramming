


export function check(input) {
    let result = [];
    for (const key of Object.keys(input)) {
        if (typeof input[key] === "function") {
            const count_of_arguments = input[key].length;
            result.push([ key, count_of_arguments ]);
        }
    }
    return result;
}
