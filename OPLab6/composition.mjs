
export function pipeLeft(...args) {
    let result = x => x;
    for (let f of args) {
        if (typeof f === "number") {
            throw new Error("IllegalArgiment");
        }
        const prev = result;
        result = x => f(prev(x));
    }
    return result;
}

export function pipeRight(...args) {
    for (let f of args) {
        if (typeof f === "number") {
            throw new Error("IllegalArgument");
        }
    }

    const errorListeners = [];

    const composedFn = (initialValue) => {
        let acc = initialValue;

        for (let i = args.length - 1; i >= 0; i--) {
            const f = args[i];

            try {
                if (typeof f !== "function") {
                    throw new TypeError("Composed element is not a function");
                }
                acc = f(acc);
            } catch (error) {
                for (const listener of errorListeners) {
                    listener(error);
                }
                return undefined;
            }
        }
        return acc;
    }

    composedFn.on = function (eventName, callback) {
        if (eventName === "error" && typeof callback === "function") {
            errorListeners.push(callback);
        }
        return composedFn;
    };

    return composedFn;
}
