const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().split("\n");

const num1 = Number(data[0]);
const num2 = Number(data[1]);

if (num1 > 0 && num2 > 0) console.log(1);
if (num1 < 0 && num2 > 0) console.log(2);
if (num1 > 0 && num2 < 0) console.log(3);
if (num1 < 0 && num2 < 0) console.log(4);
