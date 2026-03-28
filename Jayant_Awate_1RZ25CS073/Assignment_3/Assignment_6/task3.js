function check(a,b){
      return new Promise((res,rej)=>{
            if(b==0) rej("Cannot divide by zero");
            else res(a/b);
      })
}
async function safeDivide(a, b){
      try{
            let res=await check(a,b);
            console.log(res);
      }catch(e){
            console.log("Error: ",e);
      }
}
safeDivide(7,0);
safeDivide(10,2);