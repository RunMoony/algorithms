var fs = require("fs");
var data = fs.readFileSync("/dev/stdin").toString().split(" ");
var num = Number(data);
for (var i = 0; i <= num; i++) {
  var sum = sum + i;
}
console.log(sum);
