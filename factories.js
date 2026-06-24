// // 1
// function creteObj(name) {
//   return { name };
// }

// const user1 = creteObj("Yaakov");
// const user2 = creteObj("Moshe");
// console.log(user1);
// console.log(user2);

// // 2
// function cretePerson(name) {
//   return {
//     name,
//     greet: function () {
//       return `Hey I'm ${this.name}`;
//     },
//   };
// }

// const user = cretePerson("Yaakov");
// console.log(user.greet());

// // 3
// const person1 = cretePerson("David");
// const person2 = cretePerson("Moshe");
// console.log(person1.name);
// console.log(person2.name);
// person1.name = "Avi";
// console.log(person1.name);
// console.log(person2.name);

// // 4
// function cretePerson(name, age) {
//   return {
//     name,
//     age,
//     greet: function () {
//       return `Hey I'm ${this.name}`;
//     },
//   };
// }

// const person1 = cretePerson("Dana", 23);
// console.log(person1.age);

// // 5
// function cretePerson(name, age) {
//   return {
//     name,
//     age,
//     greet: function () {
//       return `Hey I'm ${this.name}`;
//     },
//     isAdult: function () {
//       return this.age >= 18;
//     },
//   };
// }

// const person1 = cretePerson("Dana", 23);
// console.log(person1.isAdult());

// // 6
// function createCountFunction() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const count = createCountFunction();
// console.log(count());
// console.log(count());

// // 7
// function createCounter() {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// }
// const increment = createCounter();
// console.log(increment());
// console.log(increment());
// console.log(increment());

// // 8
// function createCounter(counter) {
//   return function () {
//     counter++;
//     return counter;
//   };
// }
// const increment = createCounter(10);
// console.log(increment());
// console.log(increment());
// console.log(increment());

// // 9
// function createCounter(counter) {
//   return {
//     increment: function () {
//       counter++;
//       return counter;
//     },
//     decrement: function () {
//       counter--;
//       return counter;
//     },
//   };
// }

// const manage = createCounter(10);
// console.log(manage.increment());
// console.log(manage.decrement());

// // 10
// function createCounter(counter) {
//   return {
//     increment: function () {
//       counter++;
//       return counter;
//     },
//     decrement: function () {
//       counter--;
//       return counter;
//     },
//     getCurrent: function () {
//       return counter;
//     },
//   };
// }

// const manage = createCounter(10);
// console.log(manage.increment());
// console.log(manage.decrement());
// console.log(manage.getCurrent());

// // 11 12 13 14
// function createCounter() {
//   let counter = 0;
//   return {
//     increment: function () {
//       counter++;
//       return counter;
//     },
//     decrement: function () {
//       counter--;
//       return counter;
//     },
//     getCurrent: function () {
//       return counter;
//     },
//     reset: function () {
//       counter = 0;
//     },
//   };
// }
// const manage = createCounter();
// console.log(manage.increment());
// console.log(manage.counter);
// manage.reset();
// console.log(manage.getCurrent());
// const manage1 = createCounter();
// console.log(manage.increment());
// console.log(manage1.increment());
// console.log(manage.increment());
// console.log(manage1.increment());
// console.log(manage.increment());
// console.log(manage.increment());
// console.log(manage.increment());
// console.log(manage1.increment());

// // 15 , 16, 17, 18
// function createProduct(name, price, stock = 0) {
//   if (price < 0) {
//     throw new Error("Price cannot be negative");
//   }
//   return {
//     name,
//     price,
//     stock,
//     hasStok: function () {
//       return this.stock > 0;
//     },
//   };
// }

// const product1 = createProduct("Table", 230);
// const product2 = createProduct("Chair", 105, 10);
// console.log(product1.hasStok());
// console.log(product2.hasStok());

// 19
