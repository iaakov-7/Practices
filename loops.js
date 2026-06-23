import input from "analiza-sync";
// 1
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 2
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 3
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (const number of numbers) {
//   sum += number;
// }
// console.log(sum);

// 4
// const names = ["דנה", "יוסי", "מיכל", "רון"];
// for (const name of names) {
//   console.log(name);
// }

// 5
// const numbers = [2, 5, 8, 11, 14, 17, 20];
// for (const number of numbers) {
//   if (number % 2 == 0) {
//     console.log(number);
//   }
// }

// 6
// const numbers = [3, 99, 12, 45, 78];
// let biggest = numbers[0];
// for (const num of numbers) {
//   if (num > biggest) {
//     biggest = num;
//   }
// }
// console.log(biggest);

// 7
// const word = "javascript";
// for (const chr of word) {
//   console.log(chr);
// }

// 8
// const numbers = [1, 2, 3, 4];
// for (const num of numbers) {
//   console.log(num * 2);
// }

// 9
// let i = 1;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// 10
// let input_user = input(": ");
// while (input_user !== "stop") {
//   input_user = input(": ");
// }

// 11
// let count = 0;
// let number = Number(input("enter number: "));
// count += number;
// while (number !== 0) {
//   number = Number(input("enter number: "));
//   count += number;
// }
// console.log(count);
// 12
// const secret = 7;
// let number = input("enter number: ");
// while (number != secret) {
//   number = input("enter number: ");
// }

// 13
// let x = 1;
// while (x < 20) {
//   console.log(x);
//   x++;
// }

// 14
// let password = input("");
// while (password !== "1234") {
//   password = input("");
// }

// 15
// let count = 0;
// do {
//   console.log("Current count is: ", count);
//   count++;
// } while (count < 0);

// 16
// let choice = "";
// do {
//   choice = input("Choose: ");
//   console.log("Your chice is:", choice);
// } while (choice != "exit");

// 17
// const numbers = [1, 3, 7, 9, 15, 2];
// for (const number of numbers) {
//   if (number > 10) {
//     break;
//   }
//   console.log(number);
// }

// 18
// const numbers = [5, -1, 8, -3, 10];
// for (const number of numbers) {
//   if (number < 0) {
//     continue;
//   }
//   console.log(number);
// }

// // 19
// const ages = [12, 15, 18, 21, 25];
// for (const age of ages) {
//   console.log(age);
//   if (age >= 18) {
//     break;
//   }
// }

// // 20
// const arr = [10, 20, 30, 40, 50];
// for (const number of arr) {
//   console.log(number);
// }

// 21
// const numbers = [1, 2, 3, 4, 5, 6];
// let count = 0;
// for (const num of numbers) {
//   if (num % 2 == 0) {
//     count += num;
//   }
// }
// console.log(count);

// 22
// let flag = false;
// const target = 25;
// const numbers = [10, 15, 20, 25, 30];
// for (const num of numbers) {
//   if (num === target) {
//     console.log(`Target ${target} is found`);
//     flag = true;
//     break;
//   }
// }
// if (!flag) {
//   console.log(`Target ${target} is not found`);
// }

// 23
// const word = "hello world";
// for (const letter of word) {
//   console.log(letter.toUpperCase());
// }

// 24
// const numbers = [2, 4, 6, 8, 10, 12, 13];
// for (const num of numbers) {
//   if (num > 8 && num % 2 == 0) {
//     console.log(num);
//   }
// }

// 25
const students = [
  { name: "דנה", grade: 55 },
  { name: "יוסי", grade: 90 },
  { name: "מיכל", grade: 78 },
  { name: "רון", grade: 45 },
];
for (const student of students) {
  if (student.grade === 100) {
    break;
  } else if (student.grade > 60) {
    console.log(student.name);
  }
}
