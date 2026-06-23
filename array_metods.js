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
const dubleNums = nums.reduce((acc, current) => acc * current);
console.log(dubleNums);
