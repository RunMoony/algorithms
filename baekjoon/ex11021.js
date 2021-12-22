var fs = require("fs");
var data = fs.readFileSync("/dev/stdin").toString().split("\n");

var T = Number(data[0]);

for (var i = 1; i <= T; i++) {
  var data1 = data[i].split("");
  console.log(`Case #${i}: ${Number(data1[0]) + Number(data1[1])}`);
}
