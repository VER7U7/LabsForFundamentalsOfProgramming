
export function seq(f) {
    return function step(n) {
        if (typeof n === "function") {
            return seq(x => f(n(x)));
        }
        return f(n);
    }
}

export function array() {
    let arr = [];

    function calc(value) {
        return arr[value];
    }

    calc.push = function (value) {
        arr.push(value);
    };
    calc.pop = function () {
        let res = arr[arr.length - 1];
        arr.splice(arr.length - 1, 1);
        return res;
    };
    return calc;
}
