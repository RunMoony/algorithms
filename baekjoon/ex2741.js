var fs = require("fs");
var data = fs.readFileSync("/dev/stdin").toString();
var num = Number(data);
var answer = "";
for (var i = 0; i < num; i++) {
  answer += i + 1 + "\n";
}
console.log(answer);
