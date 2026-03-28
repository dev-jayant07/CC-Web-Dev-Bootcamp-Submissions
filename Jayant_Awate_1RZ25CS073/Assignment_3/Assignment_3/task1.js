function divide(a,b){
      if(b==0){
            throw new Error("A number cannot be divided by zero");
      }else{
            return a/b;
      }
}
try{
      console.log(divide(10,2));
}catch(error){
      console.log(error.message);
}
try{
      console.log(divide(7,0));
}catch(error){
      console.log(error.message);
}