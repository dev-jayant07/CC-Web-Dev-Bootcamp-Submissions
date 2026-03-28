function checkage(y){
      if(y<=0) throw new Error("Age must be positive number!");
      else if(y<18) throw new Error("Too young! Must be 18 or above.");
      else return ("Access granted!");
}
try{
      console.log(checkage(25));
}catch(e){
      console.log("Erorr: ",e.message);
}
try{
      checkage(15);
}catch(e){
      console.log("Erorr: ",e.message);
}
try{
      checkage(-1);
}catch(e){
      console.log("Erorr: ",e.message);
}