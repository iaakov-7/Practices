// // 1
// function greeting(name) {
//   return `Hello ${name}`;
// }

// // 2
// const add = (a, b) => a + b;

// // 3
// function isEven(num) {
//   return num % 2 === 0;
// }

// // 4
// const firstItem = (array) => array[0];

// // 5
// const toUpp = (string) => string.toUpperCase();

// // 6
// 10;
// 5;

// // Because in the function is decelerated x
// // And the first console is in th function
// // And the second console is out the function
// // Therefore, it identifies the x out the function

// // 7
// function test() {
//   let y = 10;
//   console.log(y);
// }

// // 8
// 1;

// // 9
// function first() {
//   let x = 5;
// }

// function second() {
//   console.log(x);
// }

// 10

function add() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
let counter = add();
console.log(counter());

// 11
function sum(nums) {
  let count = 0;
  for (const num of nums) {
    count += num;
  }
  return count;
}

// 12
function square(num) {
  return num ** 2;
}

function calc(num, fun) {
  console.log(fun(num));
}

// 13
10;
// x in function is parm that get out x multiply

// 14
function returnEvens(nums) {
  const evens = [];
  for (const num of nums) {
    if (num % 2 === 0) evens.push(num);
  }
  return evens;
}

// 15

// כי זה גלובלי ונתון לשינויים מכל מיני מקומות
// יש פתרון בדרך של אובייקט עוד לא למדנו
