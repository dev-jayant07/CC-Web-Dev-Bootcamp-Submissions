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
}).catch((rej)=>{
      console.log(rej);
})