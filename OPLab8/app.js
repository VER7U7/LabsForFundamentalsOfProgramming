import * as high from "./higher.mjs";

const obj = { a: 1, b: 2, c: 3 };
high.iterate(obj, (key, value) => {
  console.log({ key, value });
});

const read = high.store(5);
const value = read();
console.log(value); // Output: 5


const add = (a, b) => a + b;
const addNumbers = high.contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = high.contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Output: Hello world!
const res3 = concatStrings('Hello ', 2);
