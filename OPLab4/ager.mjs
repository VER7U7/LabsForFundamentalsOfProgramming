
export function get_age(dict) {
    let result = {};
    for (let i in dict) {
        result[i] = dict[i].died - dict[i].born;
    }
    return result;
}
