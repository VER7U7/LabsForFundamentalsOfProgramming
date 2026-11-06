

export function removeElement(array, elem) {
    const index = array.indexOf(elem);
    if (index > -1)
        array.splice(index, 1);
}

export function removeElements(array, ...elem) {
    for (let el of elem) {
        const index = array.indexOf(el);
        if (index > -1)
            array.splice(index, 1);
    }
}

export function unique(array) {
    let set = new Set(array);
    return [...set];
}

export function difference(arr1, arr2) {
    let result = [];
    for (let el of arr1) {
        if (!arr2.includes(el))
            result.push(el);
    }
    return result;
}
