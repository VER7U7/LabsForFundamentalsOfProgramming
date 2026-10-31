import * as comp from "./composition.mjs";

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const errorF = x => { throw new Error("text") };
const f = comp.pipeLeft(inc, twice, cube);

console.log(f(5));

const d = comp.pipeRight(inc, errorF, cube);
d.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});


console.log(d(5));
