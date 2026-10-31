import * as closure from "./closure.mjs";

let res = closure.seq(x => x + 1)
    (x => x * 2)
    (x => x / 3)
    (x => x - 4)(7);
console.log(res);
res = closure.seq(x => x * 2)
    (x => x + 7)(5);
console.log(res);
res = closure.seq(x => x + 7)
    (x => x * 2)(5);
console.log(res);



const arr = closure.array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); //  first
console.log(arr(1)); //  second
console.log(arr(2)); //  third

console.log(arr.pop()); //  third
console.log(arr.pop()); //  second
console.log(arr.pop()); //  first

console.log(arr.pop()); //  undefined
