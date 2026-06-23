// // 1
// const numbers = [1, 2, 3];
// console.log(numbers);

// // 2
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// // 3
// fruits[1] = "mango";
// console.log(fruits);

// // 4
// console.log(fruits.push("orange"));
// console.log(fruits);

// // 5
// console.log(fruits.pop());
// console.log(fruits);

// // 6
// fruits.unshift("kiwi");
// console.log(fruits);

// // 7
// fruits.shift();
// console.log(fruits);

// 8
// const arr = ["a", "b", "c", "d"];
// arr.splice(1, 1);

// 9
// arr.splice(1, 0, "x");

// 10
// arr.splice(2, 1, "y");
// console.log(arr);

// 11
// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.length);
// console.log(nums[nums.length - 1]);

// 12
// const arr = [1, 2, 3, "yaakov", true];
// for (const item of arr) {
//   console.log(item);
// }

// 13
// const nums = [10, 20, 30];
// for (const num of nums) {
//   console.log(num);
// }

// 14
// const arr = [5, 10, 15];
// let count = 0;
// for (const num of arr) {
//   count += num;
// }
// console.log(count);

// 15
// const nums = [3, 8, 12, 1];
// for (const num of nums) {
//   if (num > 5) {
//     console.log(num);
//   }
// }

// // 16
// const person = { name: "yaakov", age: 23 };
// console.log(person);

// // 17
// console.log(person.name);
// console.log(person.age);
// console.log(person["name"]);
// console.log(person["age"]);

// // 18
// person.city = "Jeruselam";
// person.name = "david";
// console.log(person);

// // 19
// delete person.age;
// console.log("age" in person);

// 20
// const student = {
//   name: "Yael",
//   grades: [90, 80, 100],
// };
// console.log(student.grades[0]);
// student.grades.push(87);
// console.log(student.grades);
// student.grades.shift();
// console.log(student.grades);

// 21
// const product = {
//   name: "Laptop",
//   price: 3500,
//   inStock: true,
// };
// for (const key in product) {
//   console.log(key, product[key]);
// }

// 22
// const user = {
//   username: "admin",
//   role: "manager",
//   active: true,
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// for (const [key, value] of Object.entries(user)) {
//   console.log(key, "=", value);
// }

// // 23
// const order = {
//   id: 101,
//   customer: {
//     name: "Roi",
//     address: {
//       city: "Tel Aviv",
//       zip: "12345",
//     },
//   },
// };
// console.log(order.customer.address.city);
// order.customer.address.zip = "123456789";
// console.log(order.customer.address.zip);
// order.customer.phone = 290908745;
// console.log(order);
// delete order.customer.address.city;
// console.log(order);
