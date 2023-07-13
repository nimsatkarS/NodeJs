const fs = require("fs");
const text = fs.readFileSync("dele.txt","utf-8");
console.log(text);

text = text.replace("browser","Rohan");

console.log("create a new file");
fs.writeFileSync("sanket.txt",text);