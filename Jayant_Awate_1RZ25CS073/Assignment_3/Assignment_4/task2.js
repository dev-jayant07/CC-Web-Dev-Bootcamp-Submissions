let myPromise=new Promise((resolve,reject)=>{
      let success=false;
      setTimeout(()=>{
            success=true;
            if(success==true) resolve("Operation Successful!");
            else reject("Operation Failed!");
      },2000);
})
myPromise.then((res)=>{
      console.log(res);
      return res;
}).then((res)=>{
      console.log("Uppercase message: ",res.toUpperCase());
      return res;
}).then((res)=>{
      console.log("Final:",res.toUpperCase());
})
.catch((rej)=>{
      console.log(rej);
})