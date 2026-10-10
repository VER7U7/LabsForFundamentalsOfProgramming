
import * as happy_birthday from "./happy_birthday.mjs";
import * as cycles from "./cycles.mjs";
import * as functions from "./functions.mjs";
import * as objects from "./objects.mjs";
import * as collections from "./collections.mjs";

happy_birthday.runIndetificatorsLab();

console.dir(cycles.range(15, 30));
console.dir(cycles.rangeOdd(15, 30));
console.dir(functions.calculate())
objects.fn();
console.dir(objects.createUser("Yarik Pivo", "Kyiv"));

console.dir(collections.findPhoneByName("Bodya"));
console.dir(collections.findPhoneByNameHashed("Bodya"));
