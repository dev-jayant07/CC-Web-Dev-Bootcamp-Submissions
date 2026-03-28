try{
      JSON.parse("not a number");
}catch(e){
      console.log("It is Invalid JSON");
}finally{
      console.log("Parse attempt done.")
}