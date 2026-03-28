let myPromise=new Promise((resolve,reject)=>{
      let success=false;
      setTimeout(()=>{
            success=true;
            if(success==true) resolve("Operation Successful!");
            else reject("Operation Failed!");
      },2000);
})

async function runOperation(){
      try{
            let res =await myPromise;
            console.log(res);
      }catch(e){
            console.log(e.message);
      }
}
runOperation()