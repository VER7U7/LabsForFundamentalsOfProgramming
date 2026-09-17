'use strict';

const scalar = require("./scalar.js");
const data_types = require("./data_types.js");

function main() {
    //Exercise: Scalar types and links.
    console.dir(scalar.inc1(10));
    let num = { n: 10 };
    scalar.inc2(num);
    console.dir(num);

    //Exercise: Data types
    let arr = [true, 'hello', 5, 12, -200, false, false, 'word'];
    console.dir(data_types.counter1(arr));
    console.dir(data_types.counter2(arr));
}

main();
//to run node js: docker compose run --rm app sh
//node app.js
