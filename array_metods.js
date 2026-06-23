// 1
const nums = [1, 2, 3, 4, 5];
const duble = nums.map((num) => num * 2);
console.log(duble);

// 2
const strings = ["hello", "world"];
strings.forEach((string, index) => {
  strings[index] = string.toUpperCase();
});

// 8
const prices = [100, 120, 50, 87, 180];
const result = prices
  .filter((price) => price > 100)
  .map((price) => price * 1.1);

// 10
const multipliedNums = nums.reduce((acc, current) => acc * current);
console.log(multipliedNums);

// 12
const users = [
  { name: "Avi", age: 17 },
  { name: "Dana", age: 22 },
];

const average = users.reduce((acc, user) => acc + user.age, 0) / users.length;
console.log(average);
