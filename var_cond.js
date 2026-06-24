// 1
const age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Child");
}

// 2
const number = 7;
if (number % 2 == 0) {
  console.log("The number is even");
} else {
  console.log("The number us odd");
}

// 3
const isLoggedIn = false;
const message = isLoggedIn ? "Welcome" : "Please login";
console.log(message);

// 4
const num = 0;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 5
const a = 10;
const b = 10;
if (a > b) {
  console.log("A is bigger");
} else if (a < b) {
  console.log("B is bigger");
} else {
  console.log("Equal");
}

// 6
const password = "1234";
if (password === "1234") {
  console.log("Get access");
} else {
  console.log("Wrong password");
}

// 7
const x = 15;
if (x >= 10 && x <= 20) {
  console.log("Number is in range");
} else {
  console.log("Number is not in range");
}

// 8
const grade = 60;
if (grade >= 90) {
  console.log("Excellent");
} else if (grade >= 75) {
  console.log("Good");
} else if (grade >= 60) {
  console.log("Pass");
} else {
  console.log("Failed");
}

// 9
const temp = 28;
if (temp >= 30) {
  console.log("It's very hot, Drink water");
} else if (temp >= 20) {
  console.log("It's nice outside");
} else {
  console.log("It's cold, Take a coat");
}

// 10
const _age = 20;
const hasID = true;
if (_age >= 18 && hasID) {
  console.log("Authorized entry");
} else {
  console.log("Access denied");
}

// 11
const isAdmin = true;
const isManager = false;
if (isAdmin || isManager) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

// 12
const hasCard = false;
if (!hasCard) {
  console.log("Access denied");
} else {
  console.log("Access allowed");
}

// 13
const name = "";
if (!name) {
  console.log("Guest");
} else {
  console.log(name);
}

// 14
const arr = [];
if (arr.length === 0) {
  console.log("Empty");
} else {
  console.log("Not empty");
}

// 15
const z = "5";
const y = 5;
console.log(y == z); // not absloty
console.log(y === z); // absloty

// 16
const username = "admin";
const _password = "1234";
if (username === "admin" && _password === "1234") {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

// 17
const _age_ = 27;
if (_age_ >= 65) {
  console.log("Pensioner Discount");
} else if (_age_ < 18) {
  console.log("Youth Discount");
} else {
  console.log("No Discount");
}

// 18
const day = "Monday";
if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend");
} else {
  console.log("Regular day");
}

// 19
const total = 250;
if (total >= 300) {
  console.log("Free delivery");
} else if (total >= 150) {
  console.log("Delivery 20$");
} else {
  console.log("Delivery 40$");
}

// 20
const role = "editor";
switch (role) {
  case "admin":
    console.log("All access");
    break;
  case "editor":
    console.log("Edit only");
    break;
  case "viewer":
    console.log("Read only");
    break;
  default:
    console.log("No access");
}

// const { add, multi, divide } = require("./imports.js");
// console.log(add(4, 5));
// console.log(multi(4, 5));
// console.log(divide(4, 5));

// import { addAndDuble } from "./imports.js";

// console.log(addAndDuble(5, 5));
