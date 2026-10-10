import * as rand from "./random.mjs";
import * as address from "./addresses.mjs";
import * as intro from "./introspection.mjs";

console.log(`Test random: ${rand.random(10, 20)}, without min: ${rand.random(20)}`);
const characters = "qwertyuiopasdfghjklzxcvbnm1234567890";
console.log(`Generated key: ${rand.generateKey(16, characters)}`);

console.log(
    address.addressToInteger("127.0.0.1"),
    address.addressToInteger("10.0.0.1 "),
    address.addressToInteger("192.168.1.10"),
    address.addressToInteger("165.225.133.150"),
    address.addressToInteger("0.0.0.0"),
    address.addressToInteger("8.8.8.8"),
);

const input_value = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};
console.log(intro.check(input_value));
