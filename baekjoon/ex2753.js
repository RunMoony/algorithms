const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString();
const year = Number(data);

if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("1");
} else console.log("0");
