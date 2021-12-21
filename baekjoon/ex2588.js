const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().split("\n");
const num1 = Number(data[0]);
const num2 = Number(data[1]);

const a = Number(data[1].substr(2, 1));
const b = Number(data[1].substr(1, 1));
const c = Number(data[1].substr(0, 1));

console.log(num1 * a);
console.log(num1 * b);
console.log(num1 * c);
console.log(num1 * num2);
