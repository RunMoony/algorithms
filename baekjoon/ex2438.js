var fs = require("fs");
var num = Number(fs.readFileSync("/dev/stdin").toString());

var star = "";

for (var i = 0; i < num; i++) {
  star += "*";
  console.log(star);
}
