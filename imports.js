// const { add } = require("./export.js");

// console.log(add(8, 9));

// const { greet } = require("./export.js");

// console.log(greet("yaakov"));

// const { user } = require("./export.js");
// console.log(user);
// const { add, multi } = require("./export.js");
// console.log(add(5, 8));
// console.log(multi(5, 8));

// const { add, multi, divide } = require("./export.js");
// console.log(add(8, 8));

// const { isEven } = require("./export.js");
// const { nums } = require("./export.js");
// const sum = nums.reduce((acc, num) => acc + num);
// console.log(sum);
// const { add, multi } = require("./export.js");
// const divide = (a, b) => a / b;
// module.exports = { add, multi, divide };

const { printMsg } = require("./export.js");
function addLevel(level, msg) {
  const finalMsg = level + ":" + msg;
  printMsg(finalMsg);
}
addLevel("info", "I love you");
