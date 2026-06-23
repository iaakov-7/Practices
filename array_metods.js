// // 1
// const nums = [1, 2, 3, 4, 5];
// const duble = nums.map((num) => num * 2);
// console.log(duble);

// // 2
// const strings = ["hello", "world"];
// strings.forEach((string, index) => {
//   strings[index] = string.toUpperCase();
// });

// // 8
// const prices = [100, 120, 50, 87, 180];
// const result = prices
//   .filter((price) => price > 100)
//   .map((price) => price * 1.1);

// // 10
// const multipliedNums = nums.reduce((acc, current) => acc * current, nums[0]);
// console.log(multipliedNums);

// // 12
// const users = [
//   { name: "Avi", age: 17 },
//   { name: "Dana", age: 22 },
// ];

// const average = users.reduce((acc, user) => acc + user.age, 0) / users.length;

// // 25
// const numbers = [20, 50, 87, 25, 98, 120, 45, 82, 41];
// numbers.sort((a, b) => b - a);

// // 29
// numbers.splice(1, 2);
// console.log(numbers);

// // 32
// const arr = [1, [2, [3]]];
// const flatArr = arr.flat(Infinity);

// // 36
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers
//   .filter((num) => num % 2 == 0)
//   .map((num) => num * 2)
//   .reduce((acc, current) => acc + current);
// console.log(result);

// // 38
// const arr = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }];
// const groupBy = arr.reduce((acc, current) => {
//   const key = current.type;
//   if (!acc[key]) {
//     acc[key] = [];
//   }
//   acc[key].push(current);
//   return acc;
// }, {});
// console.log(groupBy);

// // 39
// const numbers = [1, 2, 3, 4, 9, 6, 6];
// const result = numbers.reduce((acc, current) => {
//   const key = current;
//   if (!acc[key]) {
//     acc[key] = 0;
//   }
//   acc[key]++;
//   return acc;
// }, {});
// const hasDuplicate = Object.values(result).some((num) => num > 1);
// console.log(hasDuplicate);

// //  41
// const products = [
//   { name: "Laptop", price: 800, inStock: true, category: "tech" },
//   { name: "Phone", price: 400, inStock: false, category: "tech" },
//   { name: "Shirt", price: 50, inStock: true, category: "fashion" },
//   { name: "Table", price: 258, inStock: true, category: "fashion" },
//   { name: "Banana", price: 128, inStock: true, category: "fashion" },
//   { name: "popay", price: 28, inStock: true, category: "fashion" },
// ];

// const result = products
//   .filter((product) => product.inStock && product.price > 100)
//   .sort((a, b) => a.price - b.price)
//   .map((product) => product.name)
//   .join(" ");
