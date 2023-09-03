//Type one to test the nodejs

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('--dirname\"temp.txt"', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World im in indian');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <style>
      h1{
          border: 2px solid black;
          text-align: center;
          font-size: 3em;
          background-color: aquamarine;
          color: black;
          font-family: cursive;
      }
      p{
          font-size: 5em;
          font-family: 'Courier New', Courier, monospace;
          text-align: center;
          
      }
  </style>
  <body>
      <h1>Thid is the first tuterial of NodeJs</h1>
      <p>Here the start NodeJs tute1. This tute i will create a server </p>
  </body>
  </html>
  `)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
