// // 5
// const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const data = await res.json();
// console.log(data);

// // 6
// async function task() {
//   return "Done";
// }

// console.log(task());

// // 7
// async function square(num) {
//   return num ** 2;
// }
// const res = await square(5);
// console.log(res);

// // 14
// async function fetchAPi() {
//   const res1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//   return Promise.all([res1, res2].map((res) => res.json()));
// }
// let [todo, post] = await fetchAPi();
// console.log(todo);
// console.log(post);

// 15
// async function Api() {
//   const prom1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const prom2 = fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const prom3 = fetch("https://jsonplaceholder.typicode.com/users/1");
//   const results = await Promise.all([prom1, prom2, prom3]);
//   const results1 = Promise.all(results.map((res) => res.json()));
//   return results1;
// }
// const results = await Api();
// console.log(results);

// 16
// async function api() {
//   try {
//     const prom1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const prom2 = fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const prom3 = fetch("https://jsonplaceholder.typicode.com/users/1");
//     const results = await Promise.all([prom1, prom2, prom3]);
//     for (const res of results) {
//       if (!res.ok) {
//         throw new Error("HTTP error: " + res.status);
//       }
//     }
//     return Promise.all(results.map((res) => res.json()));
//   } catch (err) {
//     return err.message;
//   }
// }
// const results = await api();
// console.log(results);

// // 18
// async function loop() {
//   const results = [];
//   const urls = [
//     "https://jsonplaceholder.typicode.com/todos/1",
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/users/1",
//   ];
//   try {
//     for (const url of urls) {
//       const res = await fetch(url);
//       if (!res.ok) {
//         throw new Error("HTTP error: " + res.status);
//       }
//       results.push(res);
//     }
//   } catch (err) {
//     return err.message;
//   }
//   return Promise.all(results.map((res) => res.json()));
// }
// const results = await loop();
// console.log(results);

// 19
async function loopParlalel() {
  try {
    const promises = [];
    const urls = [
      "https://jsonplaceholder.typicode.com/todos/1001",
      "https://jsonplaceholder.typicode.com/posts/1",
      "https://jsonplaceholder.typicode.com/users/1",
    ];
    for (const url of urls) {
      const prom = fetch(url);
      promises.push(prom);
    }
    const results = await Promise.all(promises);
    for (const res of results) {
      if (!res.ok) {
        throw new Error("HTTP error " + res.status);
      }
    }
    return Promise.all(results.map((res) => res.json()));
  } catch (err) {
    return err.message;
  }
}
const results = await loopParlalel();
console.log(results);
