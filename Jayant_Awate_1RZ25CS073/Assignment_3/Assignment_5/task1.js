let p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
            resolve("User loaded");
      }, 1000);
});

let p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
            resolve("Orders loaded");
      }, 2000);
});

let p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
            resolve("Products loaded");
      }, 3000);
});

Promise.all([p1, p2, p3])
.then((results) => {
            results.forEach((res) => console.log(res));
}).catch((error) => {
            console.log(error);
});