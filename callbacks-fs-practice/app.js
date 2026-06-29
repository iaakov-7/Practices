import fs, { writeFile } from "fs";

// // 1
// const content = "Hello from Node fs!";
// fs.writeFile("data/message.txt", content, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File was created successfully");
//   }
// });

// // 2
// fs.readFile("data/message.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// // 3
// console.log("start");
// fs.readFile("data/message.txt", "utf8", (err, content) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(content);
// });
// console.log("end");

// // 4
// fs.readFile("data/not-exist.txt", "utf8", (err, content) => {
//   if (err) {
//     console.log("Could not read file");
//     console.log(err);
//     return;
//   }
//   console.log(content);
// });

// // 5
// function readTextFile(filePath, callback) {
//   fs.readFile(filePath, "utf-8", (err, content) => {
//     if (err) {
//       callback(err);
//       return;
//     }
//     callback(null, content);
//   });
// }
// readTextFile("data/message.txt", (err, content) => {
//   if (err) {
//     console.log("Error:", err);
//     return;
//   }

//   console.log(content);
// });

// // 6
// fs.appendFile(
//   "data/message.txt",
//   "\nThis line was added later.",
//   (err, content) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     fs.readFile("data/message.txt", "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(data);
//     });
//   },
// );

// // 7
// const content = "";
// fs.writeFile("data/log.txt", "Log started", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File was created successfully");
//   }
//   fs.appendFile(
//     "data/log.txt",
//     "\nFirst action completed\nSecond action completed",
//     (err) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       fs.readFile("data/log.txt", "utf-8", (err, content) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(content);
//       });
//     },
//   );
// });

// // 8
// fs.mkdir("data/users", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Users folder created");
// });

// // 9
// fs.mkdir("data/users", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   fs.writeFile("data/users/user1.txt", "Name: David\nAge: 25", (err) => {
//     if (err) {
//       console.log(err);
//       return
//     }
//     console.log("File was created and writes successfully");
//   });
// });

// // 10
// fs.readdir("data", (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(files);
// });

// // 11
// fs.writeFile("data/step1.txt", "Step 1 completed", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   fs.writeFile("data/step2.txt", "Step 2 completed", (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     fs.writeFile("data/step3.txt", "Step 3 completed", (err) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//     });
//   });
//   console.log("All steps completed");
// });

// // 12
// fs.readFile("data/step1.txt", "utf-8", (err, content1) => {
//   if (err) {
//     console.log(err);
//   }
//   fs.readFile("data/step2.txt", "utf-8", (err, content2) => {
//     if (err) {
//       console.log(err);
//     }
//     fs.readFile("data/step3.txt", "utf-8", (err, content3) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(content1);
//       console.log(content2);
//       console.log(content3);
//     });
//   });
// });

// 13
// fs.writeFile("data/report-title.txt", "Daily Report", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   fs.writeFile("data/report-body.txt", "\nEverything is working", (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     fs.readFile("data/report-title.txt", (err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       fs.readFile("data/report-body.txt", (err, data1) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         const final = data + " " + data1;
//         fs.writeFile("data/final-report.txt", final, (err, data2) => {
//           if (err) {
//             console.log(err);
//             return;
//           }
//           console.log("Process was successfully");
//         });
//       });
//     });
//   });
// });

// 14
fs.writeFile("data/original.txt", "Original file content", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.readFile("data/original.txt", "utf-8", (err, content) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.writeFile("data/copy.txt", content, (err) => {
      if (err) {
        console.log(err);
      }
      fs.readFile("data/copy.txt", "utf-8", (err, content) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(content);
      });
    });
  });
});
