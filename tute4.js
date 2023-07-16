//console.log("hii good morning!");

const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('tute1.html')

const server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-type': 'text/html'});
   res.end(fileContent) 
})

server.listen(80,'127.0.0.1',()=> {
    console.log("LIsting on port 80")
})

// const http = require('http');
// const hostname = '198.0.0.1';
// const port =8000;

// const fileContent = http.readFileSync('tute1.html');

// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
// res.setHeader('Content-Type', 'text/html');
// res.end(fileContent);
// })

// server.listen(port,hostname,() =>{
//     console.log(`server running at http://${hostname}:${port}/`);
// });
