// const user = { name: "Moshe", age: 22, city: "JLM" };
// // 1
// function returnKeys(obj) {
//   return Object.keys(obj);
// }

// // 2
// function returnValues(obj) {
//   return Object.values(obj);
// }
// // 3
// function keysValues(obj) {
//   let key;
//   let value;
//   for ([key, value] of Object.entries(obj)) {
//     console.log(key, ": ", value);
//   }
// }

// // 4
// const grades = { math: 80, english: 90, science: 70 };
// function average(obg) {
//   const allValues = Object.values(grades);
//   return allValues.reduce((acc, grade) => acc + grade) / allValues.length;
// }

// // 5
// function merge(obj1, obj2) {
//   return Object.assign(obj1, obj2);
// }

// // 6
// const defaultConfig = { theme: "light", lang: "en" };
// const userConfig = { lang: "he" };
// function config(obj1, obj2) {
//   return Object.assign(obj1, obj2);
// }

// // 7

// function checkHasKey(obj, key) {
//   return Object.hasOwn(obj, key);
// }
// // 8
// const _config = Object.freeze({ name: "yaakov" });

// console.log(_config);

// 9
const arr = [
  ["name", "Alice"],
  ["age", 25],
];

function toArr(arr) {
  return Object.fromEntries(arr);
}
// 10
const prices = { apple: 10, banana: 5, mango: 20 };
function discount(obj) {
  const entr = Object.entries(obj).map(([k, v]) => [k, v * 0.9]);
  return Object.fromEntries(entr);
}
// 11
