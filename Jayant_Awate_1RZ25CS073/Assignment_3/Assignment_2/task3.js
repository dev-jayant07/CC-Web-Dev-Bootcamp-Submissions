let i=5;
let id=setInterval(()=>{
      console.log(i);
      i--;
},1000);
setTimeout(()=>{
      console.log("Times up!");
      clearTimeout(id);
},7000)