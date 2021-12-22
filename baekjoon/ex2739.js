const fs = require("fs");
const data = fs.readFileSync("/dev/stdin").toString();
const num = Number(data);
var i = 1;
for (i = 0; i < 10; i++) {
  console.log(num + " * " + i + " = " + num * i);
}
