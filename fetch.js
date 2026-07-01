// // 1
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => {
//     console.log("status:", res.status, res.statusText);
//     if (!res.ok) {
//       throw new Error("HTTP error " + res.status);
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data.title))
//   .catch((err) => console.log("Failed:", err.message));

// // 2
// fetch("https://jsonplaceholder.typicode.com/notfound")
//   .then((res) => {
//     console.log("status:", res.status, res.statusText);
//     if (!res.ok) {
//       throw new Error("HTTP error: ", res.status);
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data.title))
//   .catch((err) => console.log("Failed:", err.message));

// // 3
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     console.log("status:", res.status, res.statusText);
//     if (!res.ok) {
//       throw new Error("HTTP error: ", res.status);
//     }
//     return res.json();
//   })
//   .then((data) => {
//     for (const post of data) {
//       console.log(post.title);
//     }
//   })
//   .catch((err) => console.log(err));

// // 4
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: { "content-type": "application/json" },
//   body: JSON.stringify({
//     title: "new title",
//     body: "hello man",
//     userId: 1,
//   }),
// })
//   .then((res) => {
//     console.log("status:", res.status, res.statusText);
//     if (!res.ok) {
//       throw new Error("HTTP error: " + res.status);
//     }
//     return res.json();
//   })
//   .then((newPost) => console.log(newPost))
//   .catch((err) => console.log(err));

// // 5
// function getUserById(id) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((res) => {
//       console.log("status:", res.status, res.statusText);
//       if (!res.ok) {
//         throw new Error("HTTP error " + res.status);
//       }
//       return res.json();
//     })
//     .then((user) => console.log(user.name))
//     .catch((err) => console.log(err.message));
// }
// getUserById(1);
// getUserById(1012);

// // 6
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => {
//     console.log("status:", res.status, res.statusText);
//     if (!res.ok) {
//       throw new Error("HTTP error: " + "post not pound");
//     }
//     return res.json();
//   })
//   .then((post) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//       .then((user) => {
//         console.log("status:", user.status, user.statusText);
//         if (!user.ok) {
//           throw new Error("HTTP error: " + "user not found");
//         }
//         return user.json();
//       })
//       .then((user) =>
//         console.log(`name = ${user.name} title post = ${post.title}`),
//       )
//       .catch((err) => console.log(err.message));
//   })
//   .catch((err) => console.log(err.message));

// // 7
// const urls = [
//   "https://jsonplaceholder.typicode.com/users/10001",
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/todos/1",
// ];
const promieses = urls.map((url) =>
  fetch(url).then((res) => {
    console.log("status:", res.status, res.statusText);
    if (!res.ok) {
      throw new Error("HTTP error " + res.status);
    }
    console.log(res.json());
    return res.json();
  }),
);
Promise.all(promieses)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
