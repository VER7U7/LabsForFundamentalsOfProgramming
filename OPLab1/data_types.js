
function counter1(arr) {
    let res = { number: 0, string: 0, boolean: 0};

    for (elem of arr) {
        let type = typeof elem;
        res[type] += 1;
    }
    return res;
}

function counter2(arr) {
    let res = {};

    for (elem of arr) {
        let type = typeof elem;
        if (!res[type])
            res[type] = 1;
        else
            res[type] += 1;
    }
    return res;
}

module.exports = { counter1, counter2 };
