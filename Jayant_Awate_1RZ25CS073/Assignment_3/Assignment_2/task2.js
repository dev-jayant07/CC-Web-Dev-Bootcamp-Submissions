let id=setInterval(()=>{
      console.log("Tick");
},1000);
setTimeout(()=>{
      console.log("Stopped!");
      clearInterval(id);
},6000)