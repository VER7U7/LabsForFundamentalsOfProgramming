import * as summator from "./summator.mjs";
import * as search_max from "./search_max.mjs"
import * as ager from "./ager.mjs"

console.log(summator.sum1(1, 2, 3, 4, 5));
console.log(summator.sum2(1, 2, 3, 4, 5));
console.log(summator.sum3(1, 2, 3, 4, 5));
console.log(summator.sum4(1, 2, 3, 4, 5));
console.log(summator.sum5(1, 2, 3, 4, 5));

console.log(search_max.max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log(ager.get_age(persons));
