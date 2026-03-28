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

async function runAll(){
      let res1=await p1;
      console.log(res1);
      let res2=await p2;
      console.log(res2);
      let res3=await p3;
      console.log(res3);
      console.log("ALL DONE!");
}
runAll();