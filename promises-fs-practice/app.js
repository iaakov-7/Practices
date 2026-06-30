import fs from "fs/promises";

// // 1
// function writeFileAsPromise(filePath, content) {
//   return new Promise((res, rej) => {
//     fs.writeFile(filePath, content, (err) => {
//       if (err) {
//         rej(err);
//         return;
//       }
//       res(content);
//     });
//   });
// }

// writeFileAsPromise("data/message.txt", "hello world").then((data) =>
//   console.log(data),
// );

// // 2
// function readFileAsPromise(filePath) {
//   return new Promise((res, rej) => {
//     fs.readFile(filePath, "utf-8", (err, content) => {
//       if (err) {
//         rej(err);
//         return;
//       }
//       res(content);
//     });
//   });
// }

// readFileAsPromise("data/mssage.txt")
//   .then((data) => console.log(data))
//   .catch((msg) => console.log(msg));

// //
// function readFileAndCount(filePath) {
//   return new Promise((res, rej) => {
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) {
//         rej(err);
//         return;
//       }
//       res(data.length);
//     });
//   });
// }
// readFileAndCount("data/message.txt")
//   .then((data) => console.log(data))
//   .catch((data) => console.log(data));

// // 4
// function appendFileAsPromise(filePath, content) {
//   return new Promise((res, rej) => {
//     fs.appendFile(filePath, content, (err) => {
//       if (err) {
//         rej(err);
//         return;
//       }
//       res();
//     });
//   });
// }

// appendFileAsPromise("data/step1.txt", "Welcome")
//   .then(() => {
//     console.log("Step 1 done");
//     return appendFileAsPromise("data/step2.txt", "welcone back");
//   })
//   .then(() => console.log("Step 2 done"));

// // 5
// function readFileAsPromise(filePath) {
//   return new Promise((res, rej) => {
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) {
//         rej(err);
//         return;
//       }
//       res(data);
//     });
//   });
// }
// readFileAsPromise("data/step1.txt")
//   .then((data1) => {
//     return readFileAsPromise("data/step2.txt").then((data2) => {
//       return { data1, data2 };
//     });
//   })
//   .then((results) => {
//     return readFileAsPromise("data/step3.txt").then((data3) => {
//       console.log(results.data1);
//       console.log(results.data2);
//       console.log(data3);
//     });
//   });

// // 6
// function writeFileAsPromise(filePath, content) {
//   return new Promise((res, rej) => {
//     fs.writeFile(filePath, content, (err, data) => {
//       if (err) {
//         rej(err);
//         return;
//       }
//       res("sucess");
//     });
//   });
// }

// function readFileAsPromise(filePath) {
//   return new Promise((res, rej) => {
//     fs.readFile(filePath, "utf-8", (err, content) => {
//       if (err) {
//         rej(err);
//         return;
//       }
//       res(content);
//     });
//   });
// }

// writeFileAsPromise("data/report-body.txt", "Daily report")
//   .then(() => {
//     return writeFileAsPromise("data/report-title.txt", "Everything");
//   })
//   .then(() =>
//     readFileAsPromise("data/report-body.txt").then((data1) => {
//       return readFileAsPromise("data/report-title.txt").then((data2) => {
//         return data1 + " " + data2;
//       });
//     }),
//   )
//   .then((result) => writeFileAsPromise("data/final-report.txt", result));

// // 7
// fs.readFile("data/final-report.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// 8

// Promise.all([
//   fs.readFile("data/step1.txt", "utf-8"),
//   fs.readFile("data/step2.txt", "utf-8"),
//   fs.readFile("data/step3.txt", "utf-8"),
// ]).then(([data1, data2, data3]) => {
//   console.log(data1, data2, data3);
// });

// 9
