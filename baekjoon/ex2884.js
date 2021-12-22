const fs = require("fs");
const data = fs.readFileSync("dev/stdin").toString().split(" ");

const hour = Number(data[0]);
const minutes = Number(data[1]);

minutes = minutes - 45;
if (minutes < 0) {
  minutes = 60 + minutes;
  hour = hour - 1;
  if (hour < 0) {
    24 + hour;
  }
}

console.log(hour, minutes);
