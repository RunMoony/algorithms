const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString().split("");

const num1 = Number(data[0]);
const num2 = Number(data[1]);

if (num1 > num2) console.log(">");
if (num1 < num2) console.log("<");
if (num1 == num2) console.log("==");
