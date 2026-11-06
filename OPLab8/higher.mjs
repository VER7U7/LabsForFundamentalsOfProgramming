

export function iterate(obj, callback) {
    if (typeof callback !== "function")
        return;
    if (callback.length < 2) {
        console.log("Callback have less then 2 arguments");
        return;
    }
    for (let elem in obj) {
        callback(elem, obj[elem]);
    }
}

export function store(arg) {
    return function () {
        return arg;
    }
}

export function contract(fn, ...types) {
    if (typeof fn !== "function")
        throw new Error("First argument must be a function.");

    const safeCallback = (...args) => {
        if (args.length < types.length - 1) {
            throw new TypeError("Arguments less then must be.");
        } else if (args.length > types.length - 1) {
            throw new TypeError("Arguments too more then must be.");
        }

        for (let i in args) {
            if (args[i].constructor !== types[i]) {
                throw new TypeError("One of the arguments does not match the expected type.");
            }
        }

        const result = fn(...args);
        if (result.constructor !== types[types.length - 1]) {
            throw new TypeError("The function returned a result of a type other than what was expected.");
        }
        return result;
    }
    return safeCallback;
}
