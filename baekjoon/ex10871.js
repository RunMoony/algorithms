var fs = require("fs");
var data = fs.readFileSync("/dev/stdin").toString().split("\n");
var data1 = data[0].split(" ");
var data2 = data[1].split(" ");
var N = Number(data1[0]);
var X = Number(data1[1]);
var output = "";
for (var i = 0; i < N; i++) {
  if (Number(data2[i]) < X) {
    output += data2[i] + " ";
  }
}
console.log(output);
