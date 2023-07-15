//Syncronus or Blocking 
// -line by line execution

//Asuncronous or blocking
// -line by line execution not garuntade
// -callbucus wilire


const fs = require('fs');
fs.readFile("dele.txt","utf-8",(err,data)=>{
    console.log(data)
});
console.log("This is Blocking and Non-blocking");